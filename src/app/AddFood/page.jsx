"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const AddFoodPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    date: "",
    priority: "",
    email: "rimiruma12@.com",
    name: "Rimi Ruma",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: "Food added successfully to MongoDB",
        });
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          location: "",
          date: "",
          priority: "",
          email: "example@gmail.com",
          name: "John Doe",
          image: "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Add New Food
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter food title"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter food description"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          >
            <option value="">Select category</option>
            <option>Apple</option>
            <option>Drinks</option>
            <option>Dessert</option>
            <option>Orange</option>
            <option>Snacks</option>
          </select>
        </div>

        <div>
          <label className="text-gray-700 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          >
            <option>Normal</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="text-gray-700 font-medium">User Email</label>
          <input
            type="email"
            value={formData.email}
            readOnly
            className="w-full mt-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">User Name</label>
          <input
            type="text"
            value={formData.name}
            readOnly
            className="w-full mt-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed"
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFoodPage;
