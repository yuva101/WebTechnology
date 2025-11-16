import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"

console.log(React);//It will contain all the information of react Functionalities.
console.log(ReactDOM)//It helps us push data into DOM


// !How to  create React Root
// ReactDom.createRoot(container);
let root=ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// !How to push code into React Root
// root.render(content);
root.render("Hello React JS!!!!!!!");
root.render(<h1>Hello World...</h1>);
root.render(
    <marquee>
        <h1>
           Helloooo React Js !!!!
        </h1>
    </marquee>
);


// Render method will accept stirng/JSX/Components as a  parameter.
// JSX---- Javascript XML allows us to  write HTML+JS code together.

root.render("I am a String");
root.render(<h1>Hello React JS ,Make a Code Easyy</h1>);//JSX
root.render(<App></App>);
root.render(<App />);