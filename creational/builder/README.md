## Builder Design Pattern

The Builder Design Pattern allows us to seperate the construction of an object from its represantation. When there are too many arguments to pass to an object in order to create it we can use a more explicit solution that makes it easier for us to understand whats being created. 

The Builder Pattern _builds_ the object step by step by step. We provide a final method that will return the object when creating it (in our case `build()`).

In our example we have a User class that has the specified methods to create it. The User class will be instanciated many times with different data. We achieve the final result by adding `.build()` in the end of the instance.

You can easily see the example working following these steps: 
1. `cd creational/builder/`
2. `node index`