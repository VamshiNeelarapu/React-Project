import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Homeproducts.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Homeproducts = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish, setWishlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then((products) => {
        setProducts(products.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (item) => {
    let flag=false;
    wish.forEach((res)=>{
      if(res.id==item.id){
        flag=true;
      }
    })
    if(flag) return;
    setWishlist([...wish, item]);


      axios.post('http://localhost:7000/wish',item)





  };

  return (
    <div>
        <h1>Home Page Products</h1>
        {/* <Link to="Wishlistp.js">Wishlist</Link> */}


       {/*  <div class="card bg text white">
        <img src="https://wallpapercave.com/wp/9b9HB1l.jpg"/>
        </div> */}
        <div className='product-cards'>
        {
          products.map((data)=>{
            const {image,id,name,title,MRP,Price}=data;
            console.log(data)
            return <div>

              <Card  className='card' style={{ width: '18rem' }} >
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <p>MRP: {MRP}</p>
                <p>Price: {Price}</p>

                </Card.Text>

              <div classNamel="button" >

                <Button id="buttons" variant="primary" style={{width: '200px', margin: '10px'}}>Add to Cart</Button>
                <Button id="buttons" onClick={()=>addToWishlist(data)} variant="primary" style={{width: '200px'}}>Add to wishlist</Button>
                </div>
              </Card.Body>
            </Card>

            </div>
          })
        }
         </div>

    </div>

  );
};

export default Homeproducts;
