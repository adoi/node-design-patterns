## Singleton Design Pattern

The Singleton Design Pattern provides a way to share an instance (state) across the various modules of our application. In Node.js we can achieve this behaviour by simply exporting an instance using `module.exports`. 

In our example we create a module and make it reusable for our application. Node.js will cache the module ( in our case `Singleton.js` ) after the first invocation of require() so we know we are going to further use it in the application. 

We have to be careful when we say that we are implementing the Singleton Design Pattern this way because when the module caching happens the module is cached using its full path as a lookup key. The module is a Singleton only within the _current_ package.

The Singleton Pattern *does not exist* in Node.js if we have two or more different packages that each contain their node_modules folder. The specified packages load two different instances of our Singleton.

Note: there is a way of having a Singleton shared across the entire application by using a global variable to store it. We can do this by using `global.db = new Singleton('demo')`. Please note that this is a practice to avoid at all costs.

You can easily see the example working following these steps: 
1. `cd creational/singleton/`
2. `node index`