const SERVER_URL = 'http://localhost:3000/restaurants';

export const getRestaurantInfoList = async () => {
  const response = await fetch(SERVER_URL);

  if (!response.ok) return null;
  const data = await response.json();

  return data;
};

export const addNewRestaurantInfo = async (restaurantInfo) => {
  const response = await fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurantInfo),
  });

  return response.ok;
};
