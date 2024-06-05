// import React from 'react';
// import styles from './Footer.module.css';
import { CircularProgress } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Footer() {
  return (
    <div>
      Footer
    <CircularProgress value={80} color='orange.400'/>
	  <CloseButton colorScheme='red' size='lg'/>
	  <Button colorScheme='red'>Button</Button>
    </div>
  );
}

export { Footer };
