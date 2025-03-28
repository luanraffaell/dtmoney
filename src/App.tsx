import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionProvider } from "./components/hooks/useTransactions";
import { NewTransacionalModal } from "./components/NewTransacionalModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransationModal(){
      setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransationModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModal} />
      <Dashboard />
      <NewTransacionalModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}


//https://www.figma.com/community/file/1138814493269096792