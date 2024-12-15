/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Get Started by clicking on a city on the map" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        if (city && city.id) {
          return <CityItem city={city} key={city.id} />;
        } else {
          return null;
        }
      })}
    </ul>
  );
}

export default CityList;
