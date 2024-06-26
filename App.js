import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    const app_id = 'YOUR_APP_ID';
    const app_key = 'YOUR_APP_KEY';
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
    setRecipes(response.data.hits);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;