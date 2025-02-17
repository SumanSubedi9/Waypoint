import styles from "./UserStat.module.css";
import User from "../components/User";
import { useUser } from "../authentication/useUser";
import ProgressBar from "@ramonak/react-progress-bar";
import { GrGlobe } from "react-icons/gr";
import { PiCity } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import BackButton from "../components/BackButton";

function UserStat() {
  const { cities } = useCities();

  const {
    user: {
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [countries, setCountries] = useState([]);
  const [validCities, setValidCities] = useState([]);
  const [countryPercentage, setCountryPercentage] = useState(0);
  const [title, setTitle] = useState("New Explorer");

  useEffect(() => {
    const filteredCities = cities.filter((city) => city !== null);
    setValidCities(filteredCities); // Filter out null values
    const uniqueCountries = filteredCities.reduce((arr, city) => {
      if (!city) return arr;
      if (!arr.map((el) => el.country).includes(city.country))
        return [...arr, { country: city.country }];
      else return arr;
    }, []);

    setCountries(uniqueCountries);
    setCountryPercentage(Math.floor((uniqueCountries.length / 195) * 100));

    let newTitle;
    if (uniqueCountries.length >= 50) {
      newTitle = "Ultimate WayPointer";
    } else if (uniqueCountries.length >= 6 && uniqueCountries.length < 15) {
      newTitle = "Navigator";
    } else if (uniqueCountries.length >= 16 && uniqueCountries.length < 30) {
      newTitle = "World Traveler";
    } else if (uniqueCountries.length >= 30 && uniqueCountries.length < 50) {
      newTitle = "Legendary Voyager";
    } else {
      newTitle = "New Explorer";
    }

    setTitle(newTitle);
  }, [cities]);

  return (
    <div className={styles.page}>
      <Link to="/app">
        <img src="/Logo.png" alt="Waypoint logo" className={styles.logo} />
      </Link>
      <User />
      <h1>
        Hey {currentFullName.split(" ")[0]}, let&apos;s take a look at your
        amazing journey so far!
      </h1>
      <ProgressBar
        completed={countryPercentage}
        animateOnRender="True"
        bgColor="#00c46a"
        className={styles.wrapper}
        barContainerClassName={styles.barContainer}
        labelClassName={styles.label}
      />
      <p>Your current status: {title}</p>
      <div className={styles.container}>
        <div className={styles.countryContainer}>
          <h2>
            <GrGlobe />
            Countries Visited: {countries.length} / 195{" "}
          </h2>
          <ul className={styles.countryList}></ul>
        </div>
        <div className={styles.cityContainer}>
          <h2>
            <PiCity />
            Cities Visited: {validCities.length}
          </h2>
        </div>
      </div>

      <BackButton />
    </div>
  );
}

export default UserStat;
