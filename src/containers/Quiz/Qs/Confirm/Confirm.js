import { useEffect } from 'react';
import './Confirm.css';

const Confirm = (props) => {

     useEffect(() => {
          setTimeout(() => {
               const confirm = document.querySelector('#confirm');
               confirm.style.opacity = "1";
          }, []);
     }, [])

     return (
          <div id='confirm'>

          </div>
     )
}

export default Confirm;