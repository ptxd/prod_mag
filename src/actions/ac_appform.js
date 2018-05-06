import axios from 'axios';

const ROOT_URL = 'http://localhost:5050/application';
export const APP_FORM = 'APP_FORM';

export function appForm(data){
    console.log('8cA', data);
    const request = axios.post(ROOT_URL,{
                name:data.name,
                email: data.email
            }).then(function (response) {
                console.log(response);
            })
              .catch(function (error) {
                console.log(error);
            });  
        return{
            type:APP_FORM,
            payload:request
        }

}