import { useState, useEffect } from "react";
import { getRestaurants, addRestaurant } from "../api/restaurants";

export default function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await getRestaurants();
    setRestaurants(data);
  };

  const postRestaurant = async (restaurant) => {
    await addRestaurant(restaurant);
    await fetchRestaurants();
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restaurants, fetchRestaurants, postRestaurant };
}
