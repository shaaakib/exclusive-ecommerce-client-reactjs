import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function leftNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      'https://exclusive-ecommerce-reactjs-server-shakibhossainmuhammad.vercel.app/categories'
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="text-xl font-sans hidden lg:block sm:hidden space-y-5 ms-8">
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
}
