export async function getRestaurants() {
  const response = await fetch("http://localhost:3000/restaurants");
  return response.json();
}

export async function addRestaurant(newRestaurant) {
  await fetch("http://localhost:3000/restaurants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRestaurant),
  });
}
