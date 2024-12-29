import { FormData } from '../components/ContactForm';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email'; 
  console.log('data we are sending in the email: ', data)
  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(function (res) {
        console.log('RES IS: ', res)
        return res.json()
    })
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}