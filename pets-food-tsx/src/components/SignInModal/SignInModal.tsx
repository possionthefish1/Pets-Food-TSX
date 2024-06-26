import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { type SubmitHandler, useForm } from 'react-hook-form';

function SignInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log('Form Submit', data);

  console.log(watch('email'));
  console.log(watch('password'));

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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                defaultValue='test'
                {...register('email')}
              />

              {/* include validation with required or other standard HTML validation rules */}
              <input
                {...register('password', { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.password && (
                <span>This field is required</span>
              )}
              <Button
                colorScheme='blue'
                mr={3}
                type='submit'
              >
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { SignInModal };
