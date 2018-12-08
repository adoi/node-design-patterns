# Factory Design Pattern

A factory provides a generic 'interface' to create objects. Providing a factory for creating objects instead of creating them with the _new_ keyword or with `Object.create()` is more convenient because
the factory allows us to seperate the object creation from its implementation. 

In this folder we have three different types of format names JPEG, GIF and PNG. In order to create them each in different ways from a single source of truth we create an `imageFactory` that serves as an image creator. This way we seperate the creation from the implementation because now the factory consumer does not know how it is being created.

Note: The regex /\.format$/ used in `imageFactory.js` file gets the file format. 
1. " \ " is the escape character that we use for the dot (.) 
2. We then specify the postfix (in our case jpeg, gif, or png)
3. And the "$" tells the matcher that the _end_ of the string should be matched 

You can easily see the example working following these steps: 
1. `cd creational/factory/`
2. `node index`