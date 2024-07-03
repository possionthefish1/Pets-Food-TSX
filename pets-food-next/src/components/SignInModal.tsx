'use client';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { useState } from 'react';

function SignInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [page, setPage] = useState<'login' | 'signup'>('login');

  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('Form Submit', data);
  };

  // console.log(watch('email'));
  // console.log(watch('password'));

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Button
        onClick={onOpen}
        _hover={{
          bg: 'none',
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
        }}
        bg={'none'}
        color={{ base: 'black', md: 'white' }}
        padding={0}
        fontWeight={'normal'}
        fontSize={{ base: '1.5rem', md: '1rem' }}
      >
        Sign In
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={'scale'}
        size={{ base: 'md', lg: 'xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {page === 'login'
              ? 'Login to your account'
              : 'Create your account'}{' '}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  defaultValue=''
                  placeholder='Enter email'
                  {...register('email', { required: true })}
                />
              </FormControl>

              <span
                style={
                  errors.email
                    ? { opacity: 1, color: 'rgb(244 63 94)' }
                    : { opacity: 0 }
                }
              >
                Email field is required
              </span>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    defaultValue=''
                    placeholder='Enter password'
                    {...register('password', { required: true })}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button
                      h='1.75rem'
                      size='sm'
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <span
                style={
                  errors.password
                    ? { opacity: 1, color: 'rgb(244 63 94)' }
                    : { opacity: 0 }
                }
              >
                Password field is required
              </span>
              <Flex>
                <Button
                  as={motion.button}
                  type='submit'
                  colorScheme='blue'
                  whileTap={{ scale: 0.9 }}
                  mt={4}
                  mr={3}
                >
                  Submit
                </Button>
                <Button
                  as={motion.button}
                  whileTap={{ scale: 0.9 }}
                  mt={4}
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  as={motion.button}
                  rightIcon={<FaArrowRight />}
                  colorScheme='pink'
                  color='rgb(244 63 94)'
                  variant='outline'
                  mt={4}
                  ml={'auto'}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5, scale: 0.9 }}
                  onClick={() => {
                    if (page === 'login') {
                      setPage('signup');
                    } else {
                      setPage('login');
                    }
                  }}
                >
                  {page === 'login' ? 'Sign Up' : 'Login'}
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { SignInModal };
