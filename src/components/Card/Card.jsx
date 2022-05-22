import React from 'react';
import './Card.css';

function Card(props) {
   return (
      <div className={`card ${props.className}`}>
         Card
         <form
            onSubmit={(e) => {
               e.preventDefault();
               console.log('Submited!');
            }}
         >
            <input type='text' placeholder='input' />
            <button className='btn' type='submit'>
               Send
            </button>
         </form>
      </div>
   );
}

export default Card;
