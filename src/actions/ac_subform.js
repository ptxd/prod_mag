import axios from 'axios';

const ROOT_URL = 'http://localhost:5050/subscribe';
export const SUB_FORM = 'SUB_FORM';

export function subscribe(data){
    console.log('8cA', data);
    const request = axios.post(ROOT_URL,{
                email: data
            }).then(function (response) {
                console.log(response);
            })
              .catch(function (error) {
                console.log(error);
            });  
        return{
            type:SUB_FORM,
            payload:request
        }

}