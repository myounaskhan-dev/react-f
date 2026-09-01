import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [cart, setCart] = useState([]);

  const getFoods = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/foods"
      );

      setFoods(response.data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  const addToCart = (food) => {
  setCart([...cart, food]);
};

  return (
  
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-orange-500">
            🍔 Foodie
          </h1>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-orange-500">
              Home
            </a>

            <a href="#" className="text-gray-700 hover:text-orange-500">
              Foods
            </a>

            <a href="#" className="text-gray-700 hover:text-orange-500">
              About
            </a>

           <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
  🛒 Cart
</button>
          </div>

        </div>
      </nav>


      {/* Hero Section */}
      <section className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-5xl font-bold mb-5">
            Delicious Food
          </h2>

          <p className="text-xl mb-8">
            Your favorite food delivered fresh to your door.
          </p>

          <button className="bg-white text-orange-500 px-7 py-3 rounded-lg font-bold hover:bg-gray-100">
            Order Now
          </button>

        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-4 mb-8">

  <input
    type="text"
    placeholder="Search food..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
  />

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-3 outline-none"
  >
    <option value="All">All Categories</option>
    <option value="Burger">Burger</option>
    <option value="Pizza">Pizza</option>
    <option value="Biryani">Biryani</option>
    <option value="Drinks">Drinks</option>
  </select>

</div>

      {/* Foods */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Foods 🍔
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {foods.map((food) => (

            <div
              key={food._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={food.image}
                alt={food.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold text-gray-800">
                  {food.name}
                </h3>

                <p className="text-orange-500 font-semibold mt-2">
                  {food.category}
                </p>

                <p className="text-gray-500 text-sm mt-2 h-10">
                  {food.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-lg font-bold text-gray-800">
                    Rs. {food.price}
                  </span>

                  <button
  onClick={() => addToCart(food)}
  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 "
>
  Add to Cart
</button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default App;