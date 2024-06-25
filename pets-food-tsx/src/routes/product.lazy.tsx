import { createLazyFileRoute } from '@tanstack/react-router';
import React from 'react';

import type {
  AllowedCategories,
  ProductT,
} from '../components/ProductPage/types/type';

import { ProductCard } from '../components/ProductPage/ProductCard';
import { Category } from '../components/ProductPage/Category';

export const Route = createLazyFileRoute('/product')({
  component: Product,
});

const products: ProductT[] = [
  {
    id: 1,
    src: 'dog_food_1.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food chicken flavor',
  },
  {
    id: 2,
    src: 'dog_food_2.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food beef flavor',
  },
  {
    id: 3,
    src: 'dog_food_3.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 7,
    src: 'cat_snack_7.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 8,
    src: 'cat_snack_1.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 9,
    src: 'cat_snack_4.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 10,
    src: 'cat_toy_1.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 11,
    src: 'cat_toy_2.avif',
    type: 'cat',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 12,
    src: 'dog_toy_1.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 13,
    src: 'dog_toy_3.avif',
    type: 'dog',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
];

function Product() {
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
    <>
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
    </>
  );
}
