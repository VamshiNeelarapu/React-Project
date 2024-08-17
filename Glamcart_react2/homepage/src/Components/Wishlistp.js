import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Wishlistp.css";
import WishlistEmpty from './WishlistEmpty';
import axios from 'axios';

function Wishlistp() {
    const [productarray, setproductarray] = useState([]);
    const [error, seterror] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:7000/wish`)
            .then((res) => {

                if (Array.isArray(res.data)) {
                    setproductarray(res.data);
                }
            })
            .catch((error) => seterror(error.message));
    }, [productarray]);

    const deleteFromWishlist = (id) => {
        axios.delete(`http://localhost:7000/wish/${id}`)
            .then(() => {
                setproductarray(productarray.filter((item => item.id !== id)));
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className='title'>
                {/* <p>My Wishlist</p> */}
                <img className="wishtitle" src="wish2 1.webp" alt="Wishlist Title" />
            </div>
            <div className='wishlist-container'>
                {
                    productarray.length === 0 ?
                        (<WishlistEmpty />) :
                        (
                            productarray.map((post) => {
                                const { title, MRP, image, Price,id,Company } = post;
                                return (
                                  <Card id='wishcard' style={{ width: '18rem', margin: "10px" }} key={post.id}>
                                  <Card.Img variant="top" src={image} />
                                  <Card.Body>
                                  <Card.Title className="wish-title">{title}</Card.Title>
                                  <Card.Text>
                                   {Company}<br></br>
                                  <sup>₹ </sup>
                                  {Price} <s className="MRP">₹{MRP}</s>
                              </Card.Text>
                              <Button id="wish-btn">Add To Cart</Button>
                               <Button  id="wish-btn" onClick={()=>deleteFromWishlist(id)}>Remove</Button>
                            </Card.Body>
                          </Card>

                                );
                            })
                        )
                }
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default Wishlistp;
