import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Car insurance1',
        amount: 100,
        date: new Date(2021, 10, 11),
    },
    {
        id: 'e2',
        title: 'books',
        amount: 200,
        date: new Date(2020, 10, 11),
    },
    {
        id: 'e3',
        title: 'television',
        amount: 1000,
        date: new Date(2022, 10, 11),
    },
    {
        id: 'e4',
        title: 'wifi',
        amount: 120,
        date: new Date(2021, 10, 11),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseDataHandler = (expense) => {
        setExpenses((prevExpenses) => [expense, ...expenses]);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseDataHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
