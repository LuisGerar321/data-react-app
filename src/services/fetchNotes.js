const queryUsersRequest = "https://reqres.in/api/users";


const fetchUsers = async () => {
        return fetch(queryUsersRequest)
        .then( (response)=> response.json() )
        .then( (data) => data )
        .catch( (e)=> console.log("Error catched: ", e));
}

export default fetchUsers;

