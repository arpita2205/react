import React from 'react';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props)=> {
  
    return(    
      
       <Card className = "expense-item">
        <ExpenseDate date = {props.date} /> 
         <div className ="expense-item_description">
           <h2>{props.title}</h2>  
            <div className="expense-item_price">${props.amount}</div>  
             
          console.log("ji");
         </div>
       </Card>
      
             
    );
}
export default ExpenseItem;

  //  const expenseItem = new Date(2020 ,20 ,2);
    // const expenseTitle = "car Insurance";
    //  const expenseAmount = 294.64 ;
// const month = props.date.toLocaleString('en-US',{ month: 'long' });
//  const day = props.date.toLocaleString('en-US',{ day: '2-digit' });
//  const year = props.date.getFullYear(); 


       