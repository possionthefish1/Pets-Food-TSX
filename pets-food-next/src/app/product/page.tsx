<<<<<<< HEAD
'use client';

import type { AllowedCategories, ProductT } from '@/types/type';
import React from 'react';
import { Category } from './Category';
import { ProductCard } from './ProductCard';

const products: ProductT[] = [
  {
    id: 1,
    src: '/images/dog_food_1.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food chicken flavor',
  },
  {
    id: 2,
    src: '/images/dog_food_2.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food beef flavor',
  },
  {
    id: 3,
    src: '/images/dog_food_3.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 7,
    src: '/images/cat_snack_7.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 8,
    src: '/images/cat_snack_1.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 9,
    src: '/images/cat_snack_4.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 10,
    src: '/images/cat_toy_1.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 11,
    src: '/images/cat_toy_2.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 12,
    src: '/images/dog_toy_1.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 13,
    src: '/images/dog_toy_3.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState(products);
  /* @bm-g Derived State */

  const handleSelectCategory = (type: AllowedCategories) => {
    if (type === 'all') {
      const nextSelected = [...products];
      setSelectedCategory(nextSelected);
    } else {
      const nextSelected = products.filter(
        (product) => product.type === type,
      );
      setSelectedCategory(nextSelected);
    }
  };
  return (
    <div>
      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <p className='mt-8 text-center text-3xl capitalize'>
        {selectedCategory.length > 5
          ? 'All'
          : selectedCategory[0].type}{' '}
        Products
      </p>

      <section className='container mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center gap-4 pt-8 md:grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] lg:gap-8'>
        {selectedCategory.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
=======
'use client';

import type { AllowedCategories, ProductT } from '@/types/type';
import React from 'react';
import { Category } from './Category';
import { ProductCard } from './ProductCard';

const products: ProductT[] = [
  {
    id: 1,
    src: '/images/dog_food_1.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food chicken flavor',
  },
  {
    id: 2,
    src: '/images/dog_food_2.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food beef flavor',
  },
  {
    id: 3,
    src: '/images/dog_food_3.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 7,
    src: '/images/cat_snack_7.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 8,
    src: '/images/cat_snack_1.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 9,
    src: '/images/cat_snack_4.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 10,
    src: '/images/cat_toy_1.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 11,
    src: '/images/cat_toy_2.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 12,
    src: '/images/dog_toy_1.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 13,
    src: '/images/dog_toy_3.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState(products);

  /* @bm-g Derived State */
  const handleSelectCategory = (type: AllowedCategories) => {
    if (type === 'all') {
      const nextSelected = [...products];
      setSelectedCategory(nextSelected);
    } else {
      const nextSelected = products.filter(
        (product) => product.type === type,
      );
      setSelectedCategory(nextSelected);
    }
  };
  return (
    <div>
      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <p className='mt-8 text-center text-3xl capitalize'>
        {selectedCategory.length > 5
          ? 'All'
          : selectedCategory[0].type}{' '}
        Products
      </p>

      <section className='container mx-auto grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center gap-4 pt-8 md:grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] lg:gap-8'>
        {selectedCategory.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductPage;
>>>>>>> 0de903c654d8b9ca7900b9f2036753720581666a
