// import React from 'react';
// import styles from './Testimonial.module.css';
import { Heading, Image, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react';
import {
  Avatar,
  AvatarGroup,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

function Testimonial() {
  return (
      <section className='container'>
        <Grid templateRows='repeat(3, 0.5fr)' templateColumns='repeat(3, 1fr)' gap={4} hideFrom='md'>
          <GridItem colSpan={3}>
            <Heading textTransform='uppercase' fontSize='2xl'>story from owners</Heading>
          </GridItem>
          <GridItem colSpan={1}>
          <Image
  borderRadius='full'
  boxSize='80px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
          </GridItem>
            <GridItem colSpan={2} colStart={2}>
              <Heading as='h6' size='md'>doraemon, robot</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, nam.</Text>
            </GridItem>
            <GridItem colSpan={1}>
          <Image
  borderRadius='full'
  boxSize='80px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
          </GridItem>
            <GridItem colSpan={2} colStart={2}>
              <Heading as='h6' size='md'>nobita, student</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, nam.</Text>
            </GridItem>
        </Grid>

      </section>
  );
}

export { Testimonial };
