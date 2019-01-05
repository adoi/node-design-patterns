## The Decorator Design Pattern

> Decorator is a structural pattern that consists of dynamically augmenting the
behavior of an existing object.

The Decorator is not added to all objects, but only to the instances that are explicitly decorated. That is the reason this pattern is different from inheritance. The Decorator is very similar to the Proxy pattern, but instead of modifying the behavior of the current subject, it adds new features to it.

You can easily see the example working following these steps: 
1. `cd structural/decorator/`
2. `node index`