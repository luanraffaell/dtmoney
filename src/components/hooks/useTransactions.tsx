import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';



interface TransactionContextPops {
    children: ReactNode
}
interface Transaction {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData{
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

 const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

// interface TransactionInput {
//     title: string,
//     type: string,
//     category: string,
//     amount: number,
// }


export function TransactionProvider({ children }: TransactionContextPops) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput:TransactionInput) {
       const transaction = (await api.post(`/transactions`, {
        ...transactionInput,
        createdAt: new Date()
       })).data;

       setTransactions([
        ...transactions,
        transaction.transaction
       ])
    }


    return (
        <TransactionContext.Provider value={{ transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactions(){
    return useContext(TransactionContext);
}