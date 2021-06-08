const queryNotesRequest = "https://reqres.in/api/users";
// const queryNotesRequest = "http://34.199.56.85/notes";


const fetchNotes = async () => {
        return fetch(queryNotesRequest)
        .then( (response)=> response.json() )
        .then( (data) => data )
        .catch( (e)=> console.log("Error catched: ", e));
}

export default fetchNotes;

