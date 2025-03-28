import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/entrada.svg";
import outcomeImg from "../../assets/saida.svg";

import { FormEvent, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

Modal.setAppElement('#root');
interface NewTransacionalModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransacionalModal({isOpen, onRequestClose}: NewTransacionalModalProps) {
    const { createTransaction } = useTransactions()

    const[type, setType] = useState('deposit');
    const[titulo, setTitulo] = useState('');
    const[valor, setValor] = useState(0);
    const[categoria, setCategoria] = useState(``);

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title: titulo,
            amount: valor,
            category: categoria,
            type: type,
        })
        
        setType('');
        setTitulo('');
        setValor(0);
        setCategoria('');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                className="react-modal-close"
                onClick={onRequestClose} >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
            <h2>Cadastrar Transação</h2>
            <input placeholder="Titulo"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
            />

            <input type="number" placeholder="Valor"
            value={valor}
            onChange={(event) => setValor(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                    onClick={() => setType('deposit')}
                type="button"
                $isActive={type === 'deposit'}
                $activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                 onClick={() => setType('withdraw')}
                 type="button"
                 $isActive={type === 'withdraw'}
                 $activeColor="red"
                 >
                    <img src={outcomeImg} alt="Saida" />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input placeholder="Categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
            />
            <button type="submit" onClick={handleCreateNewTransaction}>
                Cadastrar
            </button>
            </Container>


        </Modal>
    )
}