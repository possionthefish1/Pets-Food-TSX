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

import type { ProductT } from '../types/type';

type ProductCardProps = {
  product: ProductT;
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

export { ProductCard };
