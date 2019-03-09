import App, { Container } from "next/app";
/* First we import our provider */
import ProductsProvider from "../context/Products";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Then we wrap our components with the provider */}
        <ProductsProvider>
          <Component {...pageProps} />
        </ProductsProvider>
      </Container>
    );
  }
}

export default MyApp;
