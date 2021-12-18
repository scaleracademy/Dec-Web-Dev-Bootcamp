// https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json
// http://postman-student.herokuapp.com

console.log("Hello!");

const itemAPI =
  "https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json";

// callback functions, Promises, async await

const requestBtn = document.getElementById("request-button");
const tableResponse = document.getElementById("response");

const beautifier = () => {
  const obj = {
    name: "Pen",
    id: 1,
    price: 10,
    rating: 5,
  };

  const HTML_MARKUP = `
    <tr>
      <td>${obj.name}</td>
      <td>${obj.id}</td>
      <td>${obj.price}</td>
      <td>${obj.rating}</td>
    </tr>
  `; // ES6

  return HTML_MARKUP;
};

const requestItems = async () => {
  // callback function
  const response = await fetch(itemAPI); // XMLHttpRequest
  const data = await response.json();

  tableResponse.innerHTML += beautifier();
};

requestBtn.addEventListener("click", requestItems);
