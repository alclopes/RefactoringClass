// 02=> basic conversion to function
// 01=> origin program

import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export default function Modal({ isOpen, setIsOpen, children }) {

    // Carregando o status inicial
    const  [modalStatus, setModalStatus] = useState(isOpen)

  // recarregando o componente baseado na mudança do estado isOpen
  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen])
    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  
};

