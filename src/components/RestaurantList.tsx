import React from 'react';

interface Restaurants {
  id: string;
  name: string;
  location: {
    address1: string;
    city: string;
    state: string;
    zip_code: string;
  };
}

interface Props {
  restaurants: Restaurants[];
}

const RestaurantList: React.FC<Props> = ({ restaurants }) => {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
