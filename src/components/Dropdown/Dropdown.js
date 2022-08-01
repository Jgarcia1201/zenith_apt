
import { useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {

     const nums = [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000,
     3100, 3200, 3300, 3400, 3500]

     const [val, setVal] = useState(props.val);

     const handleValChange = (e) => {
          props.valueChange(e.target.value);
     }

     return (
          <select className="dropdown" onChange={(e) => handleValChange(e)}>
               {nums.map((num) => num == val ? <option className='dropdownItem' selected value={num}>{num}</option> : <option className='dropdownItem' value={num}>{num}</option>)}
          </select>
     )
}

export default Dropdown;