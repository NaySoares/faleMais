import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewModal } from './components/NewModal';
import { GlobalStyle } from "./styles/global";
import { RequestProvider } from './hooks/useRequest';

export function App() {
  Modal.setAppElement('#root');
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <RequestProvider>
     <Header openModal={handleOpenModal}/>
      
     <Dashboard />

     <NewModal 
      isOpen={modalOpen}
      onRequestClose={handleCloseModal}
     />

     <GlobalStyle />
    </RequestProvider>
  );
}