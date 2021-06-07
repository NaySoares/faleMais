import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewModal({ isOpen, onRequestClose }: ModalProps) {
  
  return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button" 
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar Modal"/>
    </button>

    <Container>
      <h2>Telzir</h2>
      <p>Somos uma empresa fictícia, mas obrigado pelo interesse.</p>

      <button
        type="button"
        onClick={onRequestClose}
      >
        Fechar
      </button>
    </Container>
  </Modal>
  );
}