import React, { useState } from 'react';

export default function Form({ setUserInput }) {
    const onChangeHandler = (event) => {
      setUserInput(event.target.value); // Update state with new value
    };
  
    return (
      <div>
        <form>
          
          <input type="text" placeholder="Eg. Chair" onChange={onChangeHandler} />
        </form>
      </div>
    );
  }