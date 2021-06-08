import axios from 'axios';
const queryUsersRequest = "https://reqres.in/api/users";;

const postUser = async ( email_, first_name_, last_name_) => {
        return axios
        .post(queryUsersRequest, {
                email: email_,
                first_name: first_name_,
                last_name: last_name_,
        })
        .then(res => {
          console.log(`statusCode: ${res.statusCode}`)
          console.log(res)
        })
        .catch(error => {
          console.error(error)
        })
}



export default postUser;