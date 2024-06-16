// import React from 'react';
// import styles from './Testimonial.module.css';
import {
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';

function SmallTestimonial() {
  return (
    <Grid
      templateRows='repeat(3, 0.5fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
      hideFrom='xl'
      alignItems='center'
    >
      <GridItem colSpan={3}>
        <Heading
          textTransform='uppercase'
          fontSize='2xl'
          as='h2'
          ml='4'
        >
          story from owners
        </Heading>
      </GridItem>
      <GridItem colSpan={1}>
        <div className='overflow-hidden rounded-full'>
          <Image
            className='transition duration-300 hover:scale-105'
            borderRadius='full'
            aspectRatio='1/1'
            h='full'
            objectFit='cover'
            src='https://plus.unsplash.com/premium_photo-1707093169504-206eeb29e157?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Aysha'
          />
        </div>
      </GridItem>
      <GridItem
        colSpan={2}
        colStart={2}
      >
        <Heading
          as='h3'
          size={['md', 'lg']}
          mb='1'
          textTransform='capitalize'
        >
          aysha,{' '}
          <span className='font-medium text-slate-500'>
            developer
          </span>
        </Heading>
        <Text noOfLines={[2, 3, 4]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium, nam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit, ut. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Praesentium, nam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, ut.
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <div className='overflow-hidden rounded-full'>
          <Image
            className='transition duration-300 hover:scale-105'
            borderRadius='full'
            h='full'
            objectFit='cover'
            aspectRatio='1/1'
            src='https://images.unsplash.com/photo-1641521218916-6b404f676ea8?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Helen'
          />
        </div>
      </GridItem>
      <GridItem
        colSpan={2}
        colStart={2}
      >
        <Heading
          as='h3'
          size={['md', 'lg']}
          mb='1'
          textTransform='capitalize'
        >
          helen,{' '}
          <span className='font-medium text-slate-500'>
            student
          </span>
        </Heading>
        <Text noOfLines={[2, 3, 4]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium, nam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aperiam, magnam. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Praesentium, nam.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Aperiam, magnam.
        </Text>
      </GridItem>
    </Grid>
  );
}

function BigTestimonial() {
  return (
    <Grid
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(3, 1fr)'
      hideBelow='xl'
      gap={[8, 12]}
    >
      <GridItem rowSpan={1}>
        <Heading
          as='h2'
          textTransform={'uppercase'}
          fontSize={'4xl'}
          className='text-balance'
        >
          <span className='uppercase text-xl'>what are some</span>
          <br />
          words about <br /> our products
        </Heading>
        <Text mt='4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Maxime delectus ea repellendus.
        </Text>
      </GridItem>
      <GridItem
        rowStart={2}
        rowEnd={5}
      >
        <Image
          objectFit='cover'
          boxSize='350px'
          w='100%'
          borderRadius='lg'
          src='https://plus.unsplash.com/premium_photo-1707093169504-206eeb29e157?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Dan Abramov'
        />
      </GridItem>
      <GridItem>
        <div className='overflow-hidden'>
          <Image
            borderRadius='lg'
            aspectRatio={16 / 9}
            className='transition duration-300 hover:scale-105'
            objectFit='cover'
            src='https://plus.unsplash.com/premium_photo-1707093169504-206eeb29e157?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Aysha'
          />
        </div>
      </GridItem>
      <GridItem
        rowStart={2}
        rowEnd={4}
      >
        <Heading
          as='h3'
          size={'lg'}
          mb='4'
          textTransform='capitalize'
        >
          aysha,{' '}
          <span className='font-medium text-slate-500'>
            developer
          </span>
        </Heading>
        <Text mb='5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum dicta minus dolorem esse, enim exercitationem
          quisquam soluta rerum at?
        </Text>
        <Text mb='5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur laudantium blanditiis doloremque, est odio
          earum magni dignissimos quasi voluptate.
        </Text>
        <Text mb='5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Iste nostrum itaque impedit laboriosam inventore! Deleniti
          voluptatem ipsum delectus incidunt!
        </Text>
      </GridItem>

      <GridItem>
        <div className='overflow-hidden'>
          <Image
            aspectRatio={16 / 9}
            borderRadius='lg'
            className='transition duration-300 hover:scale-105'
            objectFit='cover'
            src='https://images.unsplash.com/photo-1641521218916-6b404f676ea8?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Helen'
          />
        </div>
      </GridItem>
      <GridItem
        rowStart={2}
        rowEnd={4}
      >
        <Heading
          as='h3'
          size={'lg'}
          mb='4'
          textTransform='capitalize'
        >
          helen,{' '}
          <span className='font-medium text-slate-500'>
            student
          </span>
        </Heading>
        <Text mb='5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum dicta minus dolorem esse, enim exercitationem
          quisquam soluta rerum at?
        </Text>
        <Text mb='5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur laudantium blanditiis doloremque, est odio
          earum magni dignissimos quasi voluptate.
        </Text>
        <Text mb='5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Iste nostrum itaque impedit laboriosam inventore! Deleniti
          voluptatem ipsum delectus incidunt!
        </Text>
      </GridItem>
    </Grid>
  );
}

function Testimonial() {
  return (
    <section className='container mx-auto'>
      <SmallTestimonial />
      <BigTestimonial />
    </section>
  );
}

export { Testimonial };
