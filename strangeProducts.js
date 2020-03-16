let jsonURL = "http://15.222.122.223/~Cameron_R1106175/StrangeProducts.json";
let request = new XMLHttpRequest();

request.open("GET", jsonURL);
request.responseType = "json";
request.send();

request.onload = function(){
  let pullJSON = request.response;
  organizeJSON(pullJSON);
};

function organizeJSON(jsonObj){
  let strangeProductsJSON = jsonObj.strangeProducts;
  for(let x=0; x<strangeProductsJSON.length; x++){
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    h1.textContent = strangeProductsJSON[x].name;
    img.setAttribute("src", "http://15.222.122.223/~Cameron_R1106175/" + strangeProductsJSON[x].image);
    h4.textContent = "Price: $" + strangeProductsJSON[x].price;
    p.textContent = "Details: " + strangeProductsJSON[x].details;
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
  }
}
