import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
//import React from 'react';

const ExpenseItem=(props)=> {
    // return React.createElement(Card,{className :"expense-item"},
    //     React.createElement(ExpenseDate,{date:props.date}),
    //     React.createElement('div',{className:"expense-item__description"},
    //     React.createElement('h2',{},props.title),
    //     React.createElement('div',{className:"expense-item__price"},props.amount))
    // );
     return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
               <h2>{props.title}</h2>
               <div className='expense-item__price'>${props.amount}</div>
           </div>
       </Card>
    );
};

export default ExpenseItem;