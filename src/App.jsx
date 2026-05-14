import './App.css';
import { useState } from 'react';

import Header from './Header.jsx';
import CategoryFilter from './CategoryFilter.jsx';
import RestaurantList from './RestaurantList.jsx';
import RestaurantDetailModal from './RestaurantDetailModal.jsx';
import AddRestaurantModal from './AddRestaurantModal.jsx';
import useRestaurants from './hooks/useRestaurants.js';

function App() {
	const { restaurants, addRestaurant } = useRestaurants();
	const [category, setCategory] = useState('전체');
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const filteredRestaurants =
		category === '전체'
			? restaurants
			: restaurants.filter(
					restaurant => restaurant.category === category,
				);
	
	return (
		<>
			<Header setIsAddModalOpen={setIsAddModalOpen} />
			<main>
				<CategoryFilter category={category} setCategory={setCategory} />
				<RestaurantList
					restaurants={filteredRestaurants}
					setSelectedRestaurant={setSelectedRestaurant}
				/>
			</main>
			<aside>
				{selectedRestaurant && (
					<RestaurantDetailModal
						restaurant={selectedRestaurant}
						setSelectedRestaurant={setSelectedRestaurant}
					/>
				)}
				{isAddModalOpen && (
					<AddRestaurantModal
						onAddRestaurant={addRestaurant}
						setIsAddModalOpen={setIsAddModalOpen}
					/>
				)}
			</aside>
		</>
	);
}

export default App;
