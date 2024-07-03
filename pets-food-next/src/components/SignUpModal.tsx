'use client';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { type SubmitHandler, useForm } from 'react-hook-form';

function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        Sign Up
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  defaultValue=''
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
                <Input
                  defaultValue=''
                  {...register('password', { required: true })}
                />
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
                  type='submit'
                  colorScheme='blue'
                  mt={4}
                  mr={3}
                >
                  Submit
                </Button>
                <Button
                  mt={4}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { SignUpModal };
