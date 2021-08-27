const apiKey = "Bearer 55b6a58c82701850820a543504778c5e";
const url = "https://favqs.com/api/quotes";
export default class Quotes {
  async randomQuotes() {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
          
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  async authorBasedQuotes(author) {
    const response = await fetch(url+"/?filter="+author+"&type=author", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
          
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}
