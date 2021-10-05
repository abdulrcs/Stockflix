import React from 'react'
import { Image } from '@chakra-ui/image'
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'

export default function PosterModal({ poster, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Image src={poster} alt="poster" />
      </ModalContent>
    </Modal>
  )
}
