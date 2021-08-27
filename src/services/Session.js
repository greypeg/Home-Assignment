const apiKey = 'Bearer 55b6a58c82701850820a543504778c5e';
const url = "https://favqs.com/api/session";
export default class SessionServices {
async login(user){
    console.log(user)
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({user}), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects

  }
}