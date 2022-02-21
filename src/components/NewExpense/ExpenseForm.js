import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = (props)=>{
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const expenseData ={
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
     const [EnteredTitle, setEnteredTitle] = useState('');
     const [EnteredAmount, setEnteredAmount] = useState('');
     const [EnteredDate, setEnteredDate] = useState('');
    // const [UserInput, SetUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler =(e)=>{
        setEnteredTitle(e.target.value);
        // SetUserInput((UserInput)=>{
        //     return{...UserInput, enteredTitle:e.target.value};

        // });
    };
    const amountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value);
        // SetUserInput((UserInput)=>{
        //     return{...UserInput, enteredAmount:e.target.value};
        // });
    };
    const dateChangeHandler= (e)=>{
        setEnteredDate(e.target.value);
        // SetUserInput((UserInput)=>{
        //     return{...UserInput, enteredDate:e.target.value};
        // });
    };

    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={EnteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min ="0.01" step="0.01" value={EnteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="expense-date__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;