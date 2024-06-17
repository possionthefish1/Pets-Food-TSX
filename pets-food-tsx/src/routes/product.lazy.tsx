import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Collapse, Heading, Image, Select,SlideFade, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { createLazyFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
export const Route = createLazyFileRoute('/product')({
  component: Product,
});

function Product() {
  const { isOpen, onToggle } = useDisclosure()
  const [amount, setAmount]  = useState(1)

  return (
    <section className='container mx-auto pt-20'>
      <Card variant='elevated' maxW='sm' onMouseEnter={onToggle} onMouseLeave={onToggle}>
        <CardBody>
        <Collapse  in={isOpen} >
        <Box
          bg='white'
          // className='bg-rose-400'
          pb={isOpen?'2':'0'}
          mt='2'
          rounded='md'
          shadow='md'
        >
            <Select display='inline-block' w={'20%'}  variant='outline={true}'
            borderRadius={'none'} 
            borderTopLeftRadius="10px"  borderBottomLeftRadius="10px"
            value={amount}>
              {Array.from({length: 10}, ((_x, i) => <option onChange={(e) => setAmount(e.target.value)} value={`option${i + 1}`}>{i + 1}</option>))}
            </Select>
            <Button color='white' fontSize="xl" bg='#fb7185'  display='inline-block'  borderRadius={'none'} w={'80%'} _hover={{ bg: '#fda4af' }}
              borderTopRightRadius="10px"  borderBottomRightRadius="10px" >Add to Cart</Button>
        </Box>
      </Collapse>
      <Image
        src='/dog/dog_food_1.jpeg'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading as='h3' fontSize='xl' className='text-amber-800'>
          $34
        </Heading>
        <Heading size='md' as='h2' fontSize='2xl' textTransform={'capitalize'} >dog food chicken flavor</Heading>
      </Stack>
        </CardBody>
      </Card>
    </section>
  );
}
