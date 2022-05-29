import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const Blogs = () => {
    return (
        <div className='container my-3 open contact'>
            <h4 className='my-5'>Some Question And Answer Bellow Here:</h4>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Difference between javascript and nodejs. </Accordion.Header>
    <Accordion.Body>
      1.Javascript is a programming language.Node JS is an interpreter and environment for Javascript with some specific useful libraries
      2.Javascript is mainly using for any client side activity for a web application ,like possible attribute validation . Node JS is mainly using for accessing or performing any non blocking operation  of any system,like crating or executing shell script.
      3.Javascript running any engine like Spider monkey(Fire Fox),JavaScript Core(Safari),V8(Google Chrome).Node JS only run in V8 engine which mainly using by Google Chrome.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
    <Accordion.Body>
   Node JS: Any project needs a programming environment and a runtime library that offers  basic programming tools and can compile and/or interpret  code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, etc.So, if anyone want to write some kind of stand-alone program or server in Javascript, then he/she can use nodejs for it.
MongoDB: If the  application needs the ability to persistently store data in a way that one  can efficiently query or update it later, then he  would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. Different databases have different strengths  and different ways of using them so it's a whole different question to choose the right/best database for what he is  doing.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
    <Accordion.Body>
    1.SQL databases are relational, NoSQL databases are non-relational.
2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
     <Accordion.Header>What is the purpose of jwt and how does it works?</Accordion.Header>
    <Accordion.Body>
    JWT or JSON Web Token, is an open standard which is use to share security information between two parties : a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

Once decoded, you will get two JSON strings:

1.The header and the payload.
2.The signature.

    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;