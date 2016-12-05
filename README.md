# react-antdesign demo
### Demo of React Ant design components


* "Following Ant Design, a design language for creating user friendly and beautiful websites."
* "It is a set of high quality UI components and based on React Component."
* "Provides a work flow which is based on npm, webpack, and babel, supporting ES2015 and TypeScript."
* Tutorial source:  https://ant.design/docs/react/introduce

### Tutorial Steps - Practical Projects

* Install dva boilerplate: npm install dva-cli -g
* dva new dva-quickstart
* cd dva-quickstart
* npm start
* http://localhost:8989/
* npm install antd babel-plugin-import --save
* Edit webpack.config.js to integrate babel-plugin-import.

      webpackConfig.babel.plugins.push(['import', {  
       libraryName: 'antd',  
       style: 'css',  
      }]);  

* create routes/Products.js:
* Add routing information to router, edit router.js:

         import Products from './routes/Products';
         ... (in Router block)
         <Route path="/products" component={Products} />

* Create components/ProductList.js (insert code block)
* Create a model models/products.js (insert code block)
* require it in index.js
* Connect model and component "dva provides a connect method. If you are familiar with redux, this connect is from react-router."
* Edit routes/Products.js and replace with following code
      import React from 'react';
      import { connect } from 'dva';
      import ProductList from '../components/ProductList';

      const Products = ({ dispatch, products }) => {
      function handleDelete(id) {
      dispatch({
      type: 'products/delete',
      payload: id,
      });
      }
      return (
      <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
      </div>
      );
      };

      // export default Products;
      export default connect(({ products }) => ({
      products,
      }))(Products);

* Update index.js:

      // 1. Initialize
      const app = dva({
        initialState: {
          products: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 },
          ],
        },
      });
