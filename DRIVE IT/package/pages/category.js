// pages/category.js
import { useState } from 'react';

const CategoryPage = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Luxury', 'Sports', 'SUV']);
  const categories = [
    'Convertible', 'Electric', 'Muscle', 'Sedan', 'Super Cars',
    'Coupe', 'Buggy', 'Yatch', 'Car with Chauffeur', 'Budget Friendly',
    'Vans', 'Safari','Luxury','Sports','SUV'
  ];

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRemoveSelected = (category) => {
    setSelectedCategories(selectedCategories.filter(cat => cat !== category));
  };

  return (
    <div className="container2">
      <h3 style={{fontWeight:'700',fontSize:'20px'}}>Select Car category</h3>
      <div className="selectedCategories">
        {selectedCategories.map(category => (
          <div key={category} className="selectedCategory">
            {category}
            <span onClick={() => handleRemoveSelected(category)}>&times;</span>
          </div>
        ))}
      </div>
      <hr style={{color:'rgba(226, 226, 227, 1)'}}></hr>
      <div className="categories">
        {categories.map(category => (
          <div
            key={category}
            className={`category ${selectedCategories.includes(category) ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="backButton">Back</button>
        <button className="nextButton">Next</button>
      </div>
    </div>
  );
};

export default CategoryPage;
