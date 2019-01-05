## Proxy Design Pattern

> A proxy is an object that controls the access to another object called subject.

The proxy and the subject have the same interface. Each operation is forwarded to the subject after the interception from the proxy.

The Proxy pattern can be used in validating input, verifying if the client is authorized to perform an operation, logging, lazy initialization and so on.

In our example we make a proxy that will not let files with `.md` extension to be read.

You can easily see the example working following these steps: 
1. `cd structural/proxy/`
2. `node index`