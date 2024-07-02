'use client';

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
      rowGap={8}
      columnGap={4}
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
          As a pet parent to two very picky eaters, I was constantly
          worried about finding food they'd actually enjoy. Luna's
          coat has gotten so much shinier, and Milo finally has the
          energy to keep up with his walks!
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
          Since using the Pet's Food app, mealtimes have become a
          breeze! I can easily find high-quality food options based
          on my pets' specific needs. It's a lifesaver. The app
          delivers high-quality food straight to my door.
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
          <span className='text-xl uppercase'>what are some</span>
          <br />
          words about <br /> our products
        </Heading>
        <Text mt='4'>
          Don't just take our words for it, see what our customer
          said about our products.
        </Text>
      </GridItem>
      <GridItem
        rowStart={2}
        rowEnd={4}
      >
        <div className='overflow-hidden rounded-lg'>
          <Image
            className='transition-all duration-300 hover:scale-105'
            objectFit='cover'
            // boxSize={'350px'}
            // w='100%'
            aspectRatio={1 / 1}
            borderRadius='lg'
            src='/images/cat_snack_7.avif'
            alt='Dan Abramov'
          />
        </div>
      </GridItem>
      <GridItem>
        <div className='overflow-hidden rounded-lg'>
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
          Our pet food is made from the finest ingredients that are
          sourced directly from our local farms and suppliers.
        </Text>
        <Text mb='5'>
          We take great care to ensure that every ingredient has
          been carefully selected and processed to provide our
          customers with the highest quality.
        </Text>
        <Text mb='5'>
          Our products have a positive impact on the health of our
          pets by improving mood, shiner fur, and overall
          well-being.
        </Text>
        <Text
          mt={6}
          fontSize={'2xl'}
          hideBelow={'2xl'}
          className='font-bold'
        >
          "Give your dog the shine they deserve with this nutritious
          food."
        </Text>
      </GridItem>

      <GridItem>
        <div className='overflow-hidden rounded-lg'>
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
          Our pet food is incredibly affordable and of high quality.
        </Text>
        <Text mb='5'>
          We have found that our pets love it so much we wanted to
          share this with you!
        </Text>
        <Text mb='5'>
          I recommend giving this product a try if you are looking
          for the best value for your money.
        </Text>
        <Text
          mt={6}
          fontSize={'2xl'}
          hideBelow={'2xl'}
          className='font-bold'
        >
          "I recommend this brand for all my owners friends."
        </Text>
      </GridItem>
    </Grid>
  );
}

function Testimonial() {
  return (
    <section className='py-8 md:p-16'>
      <div className='container mx-auto'>
        <SmallTestimonial />
        <BigTestimonial />
      </div>
    </section>
  );
}

export { Testimonial };
