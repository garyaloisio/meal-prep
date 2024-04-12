  import React, { useState } from 'react';
  import Layout from '../components/Layout';
  import RestaurantSearchForm from '../components/RestaurantSearchForm';
  import MealPlanForm from '../components/MealPlanForm';
  const HomePage: React.FC = () => {
    return (
      <Layout>
        <div>
          <h2>Welcome to Meal Prep</h2>
          <p>This is your personalized meal planning tool.</p>
          <MealPlanForm />
          <RestaurantSearchForm />
        </div>
      </Layout>
    );
  };
  
  export default HomePage;
  