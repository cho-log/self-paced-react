## Things to do:

- Make directory for restaurant data
- Change component to receive data from props

## During the process:

- I've made util functions for getting getCategory and getFilteredRestaurant.

- Made a directory for restaurant data and category data.

- Decided to make RestaurantListItem as a seperate component since it's a repeating element.

- Sort of had a issue where I was wondering how to change filtered restaurants when category changes. I've realized that I don't need to make filteredRestaurants into a state. I just set it a const and use it through that.

- I've also decided not to change anything in the Modal for this step since it wasn't in the requirements. I plan to do it in the next step where we modify the modals.

## Things that made me confused:

- Im not sure if the naming for category and restaurant is correct. The name `data` seems too generic. Im wondering if using constants for category is a bit better.

- Another thing that I had in mind is whether to use category as a array or a json object. The first approach I did was making it into a json object array but realized that since it only has one value, it might just be simpler to use it as a string array. But then I didn't really like the fact that the key for the category was the samme as the value. So I reverted back to an object array and added keys into the object.
