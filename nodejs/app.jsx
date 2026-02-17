console.log("HII")
const parent=document.getElementById("container");
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{},"Welcome to React dev");
const li1=React.createElement("li1",{},"java programming");
const li2=React.createElement("li2",{},"java programming");
//const img=React.createElement("img",{src:"./img1.jpg",style:{height:})
const ul=React.createElement("ul",{},li1,li2);
const div=React.createElement("div",{},h2,ul,img);
//const h2=<h2>Hello World</h2>
root.render(div);

