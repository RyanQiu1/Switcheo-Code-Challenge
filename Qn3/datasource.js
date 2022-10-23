import { fetch } from "vanillajs";

class Datasource {
  constructor(url) {
    /*
    Constructor for Datasource object with parsed url as url attribute
    */
    this.url = "https://static.ngnrs.io/test/prices";
  }
  /*
  Function to get json reponse data from the website parse and get the prices from json 
  */
 
  getPrices() {
    let prices = 0; 
    fetch(this.url)
      .then(function (r) {
        r.json().then(function (d) {
          prices = data.data.prices;
          console.log(data.data.prices, "Retrieved");
          return prices;
        });
      })
      .catch(function (error) {
        console.log("Unable to Retrive URL", error);
      });
  }
}

const ds = new Datasource(); //Constant defined as new Datasource object with link

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
