import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { useState } from 'react';
import type React from 'react';
function SignInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setInput(e.target.value);
  const isError = input === '';

  // function validateName(value: string) {
  //   let error = '';
  //   if (!value) {
  //     error = 'Name is required';
  //   } else if (value.toLowerCase() !== 'naruto') {
  //     error = "Jeez! You're not a fan 😱";
  //   }
  //   return error;
  // }

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
        color={'white'}
        padding={0}
        fontWeight={'normal'}
      >
        Sign In
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl isInvalid={isError}> */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                value={input}
                onChange={handleInputChange}
              />
              {isError ? (
                <FormErrorMessage>
                  Email is required.
                </FormErrorMessage>
              ) : (
                <FormHelperText>
                  Enter the email you'd like to receive the
                  newsletter on.
                </FormHelperText>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { SignInModal };
