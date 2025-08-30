import { useState } from "react";
import axios from "axios";

export function Recipe() {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMeals = async () => {
    if (!ingredient) return;
    setLoading(true);
    try {
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      setMeals(result.data.meals || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-orange-700">
         Recipe Ideas
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter an ingredient (e.g., chicken)"
          className="px-4 py-2 rounded-lg border shadow-sm w-72"
        />
        <button
          onClick={searchMeals}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading recipes...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>
            <a
              href={`https://www.themealdb.com/meal/${meal.idMeal}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View Recipe →
            </a>
          </div>
        ))}
      </div>

      {!loading && meals.length === 0 && (
        <p className="mt-6 text-gray-600">Try searching for an ingredient!</p>
      )}
    </div>
  );
}
