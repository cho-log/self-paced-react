const SERVER_URL = 'http://localhost:3000';

export const getRestaurantInfoList = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/restaurants`);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    return null;
  }
};

export const addNewRestaurantInfo = async (restaurantInfo) => {
  try {
    const response = await fetch(`${SERVER_URL}/restaurants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurantInfo),
    });
    if (!response.ok) {
      throw new Error();
    }
    return true;
  } catch (error) {
    return false;
  }
};
