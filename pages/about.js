import Layout from "../components/Layout";
import { ProductsConsumer } from "../context/Products";

const About = props => {
  console.log(props, "Props");
  return (
    <ProductsConsumer>
      {context => {
        console.log(context, "About context");

        return (
          <Layout>
            <div>Hello</div>
          </Layout>
        );
      }}
    </ProductsConsumer>
  );
};

export default About;
