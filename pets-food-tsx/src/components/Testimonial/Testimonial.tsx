// import React from 'react';
// import styles from './Testimonial.module.css';
import { Heading, Image, Text, Container, Grid, GridItem } from '@chakra-ui/react';

function Testimonial() {
  return (
    <section className='container mx-auto'>
      <Grid
        templateRows='repeat(3, 0.5fr)'
        templateColumns='repeat(3, 1fr)'
        gap={4}
        hideFrom='md'
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
          <Image
            borderRadius='full'
            aspectRatio='1/1'
            h='full'
            objectFit='cover'
            src='https://plus.unsplash.com/premium_photo-1707093169504-206eeb29e157?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Dan Abramov'
          />
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
            aysha, <span className='text-slate-500 font-medium'>developer</span>
          </Heading>
          <Text noOfLines={[2, 4]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Praesentium, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ut.
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            borderRadius='full'
            h='full'
            objectFit='cover'
            aspectRatio='1/1'
            src="https://images.unsplash.com/photo-1641521218916-6b404f676ea8?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='Dan Abramov'
          />
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
            helen, <span className='text-slate-500 font-medium'>student</span>
          </Heading>
          <Text noOfLines={[2, 4]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Praesentium, nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, magnam.
          </Text>
        </GridItem>
      </Grid>
    </section>
  );
}

export { Testimonial };
