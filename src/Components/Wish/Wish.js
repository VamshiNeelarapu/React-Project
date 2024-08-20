import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Wish.css";
import axios from "axios";
import AuthContext from "../../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

function Wish() {
  const [productarray, setproductarray] = useState([]);
  const [error, seterror] = useState("");

  const { isAuthenticated, user } = useContext(AuthContext);

  const [name, setname] = useState(user.name);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/users?name=${name}`);
        if (Array.isArray(res.data) && res.data.length > 0) {
          setproductarray(res.data[0].wishlist);
        }
      } catch (error) {
        seterror(error.message);
      }
    };

    fetchWishlist();
  }, [name]);

  const onDeleteWishlist = async (product) => {
    console.log("Name:", name);
    console.log("Product to delete:", product);

    if (name) {
      try {
        const response = await axios.get(
          `http://localhost:9000/users?name=${name}`
        );
        const user = response.data[0];
        console.log("User data:", user);

        const wishlist = user.wishlist;
        console.log("Wishlist:", wishlist);

        const index = wishlist.findIndex((item) => item.id === product.id);
        console.log("Index found:", index);

        if (index !== -1) {
          wishlist.splice(index, 1);
          console.log("Updated wishlist:", wishlist);

          await axios.put(`http://localhost:9000/users/${user.id}`, user);
          console.log("Wishlist after update:", user.wishlist);
          toast.success("Success!");
          setproductarray([...wishlist]); // Update state with new wishlist
        } else {
          toast.error("No item!");
        }
      } catch (error) {
        console.error("Error updating wishlist:", error);
        toast.error("Error updating wishlist");
      }
    }
  };
  const onAddCartlist = (product) => {
    // console.log(name);
    let flag = false;

    if (user.name != "") {
      console.log("VALID");

      axios
        .get(`http://localhost:9000/users?name=${user.name}`)
        .then((user) => {
          user.data[0].cart.forEach((item) => {
            if (item.id === product.id) {
              flag = true;
              return;
            }
          });

          if (flag === false) {
            user.data[0].cart.push(product);

            axios
              .put(
                `http://localhost:9000/users/${user.data[0].id}`,
                user.data[0]
              )
              .then(
                console.log(user.data[0].cart),
                toast.success("Added to Cart!")
              );
          } else {
            toast.error("Already Added");
          }
        });
    }
  };

  return (
    <div>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      <div className="title">
        <img className="wishtitle" src="wish2 2.webp" alt="Wishlist Title" />
      </div>
      <div className="wishlist-container">
        {productarray.length === 0 ? (
          <h1>List Empty</h1>
        ) : (
          productarray.map((post) => {
            const { title, MRP, image, Price, id, Company } = post;
            return (
              <Card
                id="wishcard"
                style={{ width: "18rem", margin: "10px" }}
                key={post.id}
              >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title className="wish-title">{title}</Card.Title>
                  <Card.Text>
                    {Company}
                    <br></br>
                    <sup>₹ </sup>
                    {Price} <s className="MRP">₹{MRP}</s>
                  </Card.Text>
                  <Button id="wish-btn" onClick={() => onAddCartlist(post)}>
                    Add To Cart
                  </Button>
                  <Button id="wish-btn" onClick={() => onDeleteWishlist(post)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Wish;
