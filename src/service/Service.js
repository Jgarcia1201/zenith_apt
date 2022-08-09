import axios from "axios";

class Service {

     sendClientToApi(client) {
          axios.post("http://127.0.0.1:5000/getApts/", JSON.stringify(client))
          .then((res) => {
               console.log(res);
          })
     }

     sendEmailToSelf(email) {
          axios.post("http://127.0.0.1:5000/email/", JSON.stringify(email))
          .then((res) => {
               console.log(res);
          });
     }
}

export default Service;