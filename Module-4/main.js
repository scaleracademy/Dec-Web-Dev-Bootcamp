// https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json
// http://postman-student.herokuapp.com

console.log("Hello!");

const itemAPI =
  "https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json";

// callback functions, Promises, async await

const requestBtn = document.getElementById("request-button");
const tableResponse = document.getElementById("response");

const beautifier = (obj) => {
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
  console.log(data);

  const productList = data.product;
  for (let i = 0; i < productList.length; i++) {
    tableResponse.innerHTML += beautifier(productList[i]);
  }
};

requestBtn.addEventListener("click", requestItems);
