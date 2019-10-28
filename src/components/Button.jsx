//Presentational component
import React from 'react';

//stateless component does not need to be a class
 const Button = ({buttonDisplayName, clickHandler}) => (
     <button onClick={clickHandler}>{buttonDisplayName}</button>
 );

 export default Button;