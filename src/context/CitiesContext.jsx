/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import supabase from "../services/supabase.js";
import { useUser } from "../authentication/useUser.js";
import { useRef } from "react";
import { deleteImage } from "../services/apiImage.js";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  const { userId, isAuthenticated } = useUser();

  const channelRef = useRef(null);

  useEffect(() => {
    // Real time Subscription
    channelRef.current = supabase
      .channel("cities")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cities" },
        (payload) => {
          // Handle different types of changes
          switch (payload.eventType) {
            case "INSERT":
              if (payload.new) {
                setCities((prevCities) => [...prevCities, payload.new]);
              }
              break;
            case "UPDATE":
              if (payload.new?.id) {
                setCities((prevCities) =>
                  prevCities.map((city) =>
                    city?.id === payload.new.id ? payload.new : city
                  )
                );
              }
              break;
            case "DELETE":
              if (payload.old?.id) {
                setCities((prevCities) =>
                  prevCities.filter((city) => city?.id !== payload.old.id)
                );
              }
              break;
            default:
              break;
          }
        }
      )
      .subscribe();

    // cleanup subscription

    return () => {
      if (channelRef.current) supabase.removeChannel(channelRef.current);
    };
  }, []);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("cities")
          .select("*")
          .eq("userId", userId);
        if (error) throw new Error("Cities could not be retrieved");

        // console.log(data);

        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, [userId, isAuthenticated]);

  // Update cities in supabase database

  const updateCity = async (cityId, updates) => {
    try {
      // Update local state
      setCities(
        cities.map((city) =>
          city.id === cityId ? { ...city, ...updates } : city
        )
      );

      // Update Supabase database
      const { error } = await supabase
        .from("cities")
        .update(updates)
        .eq("id", cityId);

      if (error) throw error;
    } catch (error) {
      console.error("Failed to update city:", error);
      throw error;
    }
  };

  const getCity = useCallback(async function getCity(id) {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("cities")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw new Error("City could not be retrieved");

      setCurrentCity(data);
      // console.log(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function createCity(newCity) {
    if (!isAuthenticated) {
      alert("You need to be logged in to create cities.");
      return;
    }
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("cities").insert({
        cityName: newCity.cityName,
        country: newCity.country,
        emoji: newCity.emoji,
        date: newCity.date,
        notes: newCity.notes,
        position: {
          lat: newCity.position.lat,
          lng: newCity.position.lng,
        },
        userId: userId,
      });

      if (error) console.error("Error inserting data:", error);
      if (data) console.log("Successfully inserted:", data);

      setCities((cities) => [...cities, data]);
    } catch {
      alert("There was an error while creating the city.");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);

      // 1. Get city data including image URL
      const { data: cityData, error: fetchError } = await supabase
        .from("cities")
        .select("imageUrl")
        .eq("id", id)
        .single();

      if (fetchError) throw fetchError;

      // 2. Delete associated image
      if (cityData?.imageUrl) {
        await deleteImage(cityData.imageUrl); // Use updated deleteImage
      }

      const { error } = await supabase.from("cities").delete().eq("id", id);

      if (error) console.error("Error deleting data:", error);

      setCities((cities) =>
        cities.filter((city) => city !== null && city.id !== id)
      );
    } catch {
      alert("There was an error while deleting the city.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        updateCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
