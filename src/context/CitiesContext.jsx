/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import supabase from "../services/supabase.js";

const CitiesContext = createContext();

// const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from("cities").select("*");
        if (error) throw new Error("Cities could not be retrieved");
        // const res = await fetch(`${BASE_URL}/cities`);
        // const data = await res.json();

        console.log(data);

        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(async function getCity(id) {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("cities").select("id", id);

      if (error) throw new Error("City could not be retrieved");
      // const res = await fetch(`${BASE_URL}/cities/${id}`);
      // const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function createCity(newCity) {
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
      });

      if (error) console.error("Error inserting data:", error);
      if (data) console.log("Successfully inserted:", data);
      // const res = await fetch(`${BASE_URL}/cities`, {
      //   method: "POST",
      //   body: JSON.stringify(newCity),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // const data = await res.json();
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
      const { error } = await supabase.from("cities").delete().eq("id", id);

      if (error) console.error("Error deleting data:", error);
      // await fetch(`${BASE_URL}/cities/${id}`, {
      //   method: "DELETE",
      // });

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
