## Prototype Design Pattern

The Prototype Design Pattern is a creational pattern used to instantiate (create) new objects by cloning (copying) the properties of an existing object.

The pattern might be used when having to perform database operations to create an object because we clone the object instead of creating a new one. The object in our case are created by reference. 

In our example we take advantage of Javascript's `Object.create()` method which provides us a way to clone the prototype and create the new instance with its properties.