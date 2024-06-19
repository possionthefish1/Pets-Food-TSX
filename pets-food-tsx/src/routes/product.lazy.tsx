import {
  Box,
  Button,
  Card,
  CardBody,
  Collapse,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/product')({
  component: Product,
});

type Product = {
  id: number;
  src: string;
  price: number;
  title: string;
  content?: string;
};

const products: Product[] = [
  {
    id: 1,
    src: 'dog_food_1.avif',
    price: 34.99,
    title: 'dog food chicken flavor',
  },
  {
    id: 2,
    src: 'dog_food_2.avif',
    price: 34.99,
    title: 'dog food beef flavor',
  },
  {
    id: 3,
    src: 'dog_food_3.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 7,
    src: 'cat_snack_7.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 8,
    src: 'cat_snack_1.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 9,
    src: 'cat_snack_4.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 10,
    src: 'cat_toy_1.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 11,
    src: 'cat_toy_2.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 12,
    src: 'dog_toy_1.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
  {
    id: 13,
    src: 'dog_toy_3.avif',
    price: 34.99,
    title: 'dog food pork liver flavor',
  },
];

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card
      variant='elevated'
      maxW='sm'
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
    >
      <CardBody>
        <Collapse in={isOpen}>
          <Box
            bg='white'
            // className='bg-rose-400'
            pb={isOpen ? '2' : '0'}
            mt='2'
            rounded='md'
            shadow='md'
          >
            <Select
              display='inline-block'
              w={'20%'}
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
              w={'80%'}
              _hover={{ bg: '#fda4af' }}
              borderTopRightRadius='10px'
              borderBottomRightRadius='10px'
            >
              Add to Cart
            </Button>
          </Box>
        </Collapse>
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
        </Stack>
      </CardBody>
    </Card>
  );
}

function Product() {
  return (
    // @bm-g todo: Fix later...
    <>
      <Category />
      <section className='container mx-auto grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] justify-items-center gap-4 pt-8 md:pt-20'>
        {/* <Stack
        wrap={'wrap'}
        justify={'space-between'}
        spacing={4}
        direction='row'
      > */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
        {/* </Stack> */}
      </section>
    </>
  );
}

const categories = ['dog food', 'cat food', 'toys'];

function Category() {
  return (
    <article className='container mx-auto flex flex-nowrap justify-center mt-20 gap-4'>
      {categories.map((cate) => (
        <Card
          key={cate}
          direction='column'
          overflow='hidden'
          variant='outline'
          width={{base:'100%', sm:'75%', md:'15%'}}
        >
          <Image
            objectFit='cover'
            maxW='100%'
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size={{md: 'md', sm:'sm'}}>{cate}</Heading>

            </CardBody>
          </Stack>
        </Card>
      ))}
    </article>
  );
}
