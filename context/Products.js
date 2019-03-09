import React, { Component } from "react";

const ProductsContext = React.createContext([]);

class ProductsProvider extends Component {
  state = {
    count: 0
  };

  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const json = await res.json();
    console.log(json, "Hello>");
    return { stars: json.stargazers_count };
  }

  async componentDidMount() {
    console.log("I am rendered");
    console.log(this.state, "State is: at the moment");
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();
    this.setState({ data });
  }

  render() {
    console.log("ProductPriver", "state:", this.state);
    return (
      <ProductsContext.Provider value={this.state}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export const ProductsConsumer = ProductsContext.Consumer;

export default ProductsProvider;
