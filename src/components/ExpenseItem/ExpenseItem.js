import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
// import { useState } from 'react';

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title); // needs a default state value, returns a special variable and a function that we can call to assign a new value to that variable, if we have data and that data might be changed and also the change is also reflected on the UI, then we have to use useState Hook 

    // const changeExpenseItemTitleHandler = () => {
    //     setTitle('Updated');
    // };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                </div>
                {/* <button onClick={changeExpenseItemTitleHandler}>
                Change Title
            </button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;
