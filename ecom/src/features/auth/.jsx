import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,

} from './counterSlice';
// import styles from './Counter.module.css';

function Counter() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <div>
   <div>
hola miyamo jennie
   </div>
    </div>
  );
}

export default Counter
