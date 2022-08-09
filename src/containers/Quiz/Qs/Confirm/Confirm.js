import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Confirm.css';
import Service from '../../../../service/Service';

const Confirm = (props) => {

     const API = new Service();
     const navigate = useNavigate();

     useEffect(() => {
          setTimeout(() => {
               const confirm = document.querySelector('#confirm');
               confirm.style.opacity = "1";
          }, []);
     }, [])

     const getWashDisplay = useCallback((str) => {
          if (str === "conn")
               return "Connection Only";
          else if (str === "inUnit") {
               return "In Unit";
          }
          else {
               return "No Preference";
          }
     }, []);

     const submitClient = () => {
          let client = {
               name: props.userName,
               email: props.email,
               hoods: props.hoods,
               lux_score: props.luxScore,
               liv_score: props.livScore,
               washerDry: props.washerDry,
               rent_min: props.minRent,
               rent_max: props.maxRent,
               pets: props.pets,
               desiredBr: props.bedrooms
          }
          API.sendClientToApi(client);
          navigate('/thankyou')
     }

     const redirect = useCallback((num) => {
          props.redirect(num);
     },[])

     return (
          <div id='confirm'>
               <h2>Everything Looks Good?</h2>
               <h5>Click on A Question to Edit the Value</h5>
               <div id='confirmBox'>
                    <div className='valBox' onClick={() => {redirect(1)}}>
                         <h4 className="confirmText attribute">Name: </h4>
                         <h4 className="confirmText value">{props.userName}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(8)}}>
                         <h4 className="confirmText attribute">Email: </h4>
                         <h4 className="confirmText value">{props.email}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(2)}}>
                         <h4 className="confirmText attribute">Neighborhoods: </h4>
                         <h4 className="confirmText value">{props.hoods.join(" ")}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(5)}}>
                         <h4 className="confirmText attribute">Bedrooms: </h4>
                         <h4 className="confirmText value">{props.bedrooms}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(5)}}>
                         <h4 className="confirmText attribute">Washer/Dryer: </h4>
                         <h4 className="confirmText value">{getWashDisplay(props.washerDry)}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(4)}}>
                         <h4 className="confirmText attribute">Nightlife Proximity: </h4>
                         <h4 className="confirmText value">{props.livScore}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(3)}}>
                         <h4 className="confirmText attribute">Luxury Importance: </h4>
                         <h4 className="confirmText value">{props.luxScore}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(6)}}>
                         <h4 className="confirmText attribute">Rent Range: </h4>
                         <h4 className="confirmText value">{props.minRent} - {props.maxRent}</h4>
                    </div>
                    <div className='valBox' onClick={() => {redirect(7)}}>
                         <h4 className="confirmText attribute">Pets: </h4>
                         <h4 className="confirmText value">{props.pets ? "Yes" : "No"}</h4>
                    </div>
               </div>
               <div id="submitBox">
                         <button onClick={submitClient} id="submit" className="qButton controlButton">Submit</button>
               </div>
          </div>
     )
}

export default Confirm;