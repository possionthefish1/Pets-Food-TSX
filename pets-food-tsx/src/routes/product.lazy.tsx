import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Select,
  Stack,
} from '@chakra-ui/react';

import { createLazyFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createLazyFileRoute('/product')({
  component: Product,
});

type Product = {
  id: number;
  src: string;
  type: 'dog' | 'cat';
  price: number;
  title: string;
  content?: string;
};

const products: Product[] = [
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

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      variant='elevated'
      maxW='sm'
    >
      <CardBody>
        <Image
          src={product.src}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack
          mt='6'
          spacing='3'
        >
          <Heading
            as='h3'
            fontSize='xl'
            className='text-amber-800'
          >
            ${product.price}
          </Heading>
          <Heading
            size='md'
            as='h2'
            fontSize='2xl'
            textTransform={'capitalize'}
          >
            {product.title}
          </Heading>
          <Flex
            bg='white'
            // className='bg-rose-400'
            mt='2'
            rounded='md'
            shadow='md'
          >
            <Select
              display='inline-block'
              w={'fit-content'}
              variant='outline'
              borderRadius={'none'}
              borderTopLeftRadius='10px'
              borderBottomLeftRadius='10px'
            >
              {Array.from({ length: 10 }, (_x, i) => (
                <option
                  key={`option${i + 1}`}
                  value={i + 1}
                >
                  {i + 1}
                </option>
              ))}
            </Select>

            <Button
              color='white'
              fontSize='xl'
              bg='#fb7185'
              display='inline-block'
              borderRadius={'none'}
              // w={'fit-content'}
              flexGrow={'1'}
              _hover={{ bg: '#fda4af' }}
              borderTopRightRadius='10px'
              borderBottomRightRadius='10px'
            >
              Add to Cart
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

enum AllowedCategories {
  All = 'all',
  Dog = 'dog',
  Cat = 'cat',
}

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

type categoryT = {
  title: string;
  type: AllowedCategories;
  src: string;
};

const categories: categoryT[] = [
  {
    title: 'All Products',
    type: AllowedCategories.All,
    src: 'https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Dog Products',
    type: AllowedCategories.Dog,
    src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Cat Products',
    type: AllowedCategories.Cat,
    src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

type CategoryProp = {
  selectedCategory: Product[];
  onSelectCategory: (type: AllowedCategories) => void;
};

function Category({ onSelectCategory }: CategoryProp) {
  return (
    <article className='container mx-auto mt-20 flex flex-nowrap justify-center gap-4'>
      {categories.map(({ title, type, src }) => (
        <Card
          key={title}
          direction='column'
          overflow='hidden'
          variant='outline'
          // md: selected 40% , 20%
          width={{ base: '100%', sm: '80%', md: '20%' }}
          _hover={{
            background: 'black',
            color: 'white',
            // filter: 'grayscale(40%)',
          }}
          filter='grayscale(40%)'
        >
          {/* @bm-b Set State */}
          <button
            type='button'
            key={title}
            onClick={() => {
              onSelectCategory(type);
            }}
          >
            <Image
              objectFit='cover'
              maxW='100%'
              src={src}
              alt={title}
              aspectRatio={'1/1'}
            />
            <Stack>
              <CardBody>
                <Heading size={{ md: 'md', sm: 'sm' }}>
                  {title}
                </Heading>
              </CardBody>
            </Stack>
          </button>
        </Card>
      ))}
    </article>
  );
}
