class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  makeFetch(url, method = "GET", body = {}) {
    let request;
    if (method === "GET" || method === "PUT" || method === "DELETE") {
      request = fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      request = fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    return request
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  productCardList(productType) {
    return this.makeFetch(
      `${this.baseUrl}/products?productType=${productType}`
    );
  }

  selectedProduct(productCode) {
    return this.makeFetch(
      `${this.baseUrl}/products/buy?productCode=${productCode}`
    );
  }
}

const api = new Api({
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
