import Card from '../Card/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart/Expenseschart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearSelect = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent;

    // filteredExpenses.length > 0
    //     ? (expensesContent = filteredExpenses.map((expense) => {
    //           return (
    //               <ExpenseItem
    //                   key={expense.id}
    //                   title={expense.title}
    //                   amount={expense.amount}
    //                   date={expense.date}
    //               />
    //           );
    //       }))
    //     : (expensesContent = <p>No Expenses Found!</p>);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    currentSelectedYear={filteredYear}
                    onYearSelect={yearSelect}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
                {/* {expensesContent} */}
                {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => {
                        return (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        );
                    })} */}
            </Card>
        </div>
    );
};

export default Expenses;
