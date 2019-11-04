import React from "react";
import Button from './Button'

const Text = (props) => {
<>
    {props.chosenQuote ? props.chosenQuote : ''}
        <Button buttonDisplayName={"Hit Me"} clickHandler={props.getQuote} />
//   return (
//     <div id="text">
//       <p>{quote}</p>
//     </div>
//   );
// };
</>
}
export default Text;
