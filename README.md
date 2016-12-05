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

*
