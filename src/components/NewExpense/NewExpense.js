import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => setIsEditing(true);

    const stopEditing = () => setIsEditing(false);

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onCancel={stopEditing}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
