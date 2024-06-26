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

function SignInModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

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
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Asperiores doloremque dignissimos dicta ea maxime
            deleniti, mollitia at repellat aliquid debitis enim
            exercitationem pariatur in ipsa nam laudantium
            voluptatibus labore! Provident. Distinctio illum quis,
            nostrum voluptatem sapiente, maxime earum saepe
            explicabo amet similique tempora labore consectetur
            itaque sequi dolorum blanditiis aperiam animi, deleniti
            repellendus? Voluptatibus, assumenda incidunt ratione
            quibusdam quod doloremque.
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
