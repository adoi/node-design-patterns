## The Strategy Design Pattern

> The strategy pattern is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use

When using the Strategy Pattern an algorithm is swapped with another algorithm at runtime without the client realizing it. 

There are two actors in the Strategy pattern: The Context and the Strategy. The Context maintains a reference to the Strategy and the Strategy takes care of the algorithm implementation.

You can easily see the example working following these steps: 
1. `cd behavioral/strategy/`
2. `node index`