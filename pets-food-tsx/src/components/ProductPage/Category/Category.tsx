import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';

import type { ProductT } from '../types/type';
// import { AllowedCategories } from '../types/type';

//todo: convert this to import later.
enum AllowedCategories {
  All = 'all',
  Dog = 'dog',
  Cat = 'cat',
}

type CategoryProp = {
  selectedCategory: ProductT[];
  onSelectCategory: (type: AllowedCategories) => void;
};

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

export { Category };
