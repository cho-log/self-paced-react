export const getRestaurants = async () => {
  const response = await fetch('http://localhost:3000/restaurants');
  const data = await response.json();
  return data;
};

export const addNewRestaurant = async (newRestaurant) => {
  await fetch('http://localhost:3000/restaurants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestaurant),
  });
};
