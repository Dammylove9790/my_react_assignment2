// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const style = {
 display:'flex',
} 

const divImg= {
 width:'30%',
 backgroundColor: 'white'
}

const products =[
  {
    productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/626048/1.jpg?1723",
    content: "Costa Sardine In Vegetable Oil 125g x 1",
     price: 455,
     productname: 'Costa Sardine'
  }, 
  {
    productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/626048/1.jpg?1723",
    content: "Costa Sardine In Vegetable Oil 125g x 1",
     price: 455,
     productname: 'Costa Sardine'
  }, 
  {
    productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/626048/1.jpg?1723",
    content: "Costa Sardine In Vegetable Oil 125g x 1",
     price: 455,
     productname: 'Costa Sardine'
  }, 
  {
    productImage: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/626048/1.jpg?1723",
    content: "Costa Sardine In Vegetable Oil 125g x 1",
     price: 455,
     productname: 'Costa Sardine'
  }, 

]

const newProducts = products.map((value, index)=>{
 const {productname, productImage, content, price} =value;
 return (
   <div key={index} style={divImg}>
   {productname}
   <br />
   <img src= {productImage} alt={productname} />
   <div>{content} </div>
   <br />
  ${price}
   </div>
 )
})
// console.log(newProducts)

 function App(){
     return (
       <div style={style}>
        {newProducts}   
       </div>
      )
 }


// const Product = ({imgsrc, content, price, productname})=>{
// console.log(props)
//  const {imgsrc, content, price, productname} = props;

// const Product = (props)=>{
//   const {productImage, content, price, productname} = props;
// return ( 
// <div style={divImg}>
//    {productname}
//    <br />
//    <img src= {productImage} alt={productname} />
//    <div>{content} </div>
//    <br />
//   ${price}
//  </div>
//  )
// }

// function App2(){
//   return (
//     <div style={style}>
//      {Product}   
//     </div>
//    )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
