import Layout from "../components/Layout";
import { ProductsConsumer } from "../context/Products";

export default props => {
  console.log(props, "props");
  return (
    <Layout>
      <div>Index page</div>
      <ProductsConsumer>
        {context => {
          console.log(context);
          return (
            <div>
              This is countext: {context.count} after
              {context.data && context.data[0].score}
            </div>
          );
        }}
      </ProductsConsumer>
    </Layout>
  );
};
