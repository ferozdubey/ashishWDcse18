// App.jsx

import React, { useState } from "react";

function App() {

  // Food Items
  const foodItems = [
    {
      id: 1,
      name: "Burger",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
      id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
      id: 3,
      name: "French Fries",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    },

    {
      id: 4,
      name: "Cold Drink",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e"
    }
  ];

  // Cart State
  const [cart, setCart] = useState([]);

  // Add To Cart Function
  const addToCart = (item) => {

    setCart([...cart, item]);

  };

  // Remove From Cart Function
  const removeFromCart = (indexToRemove) => {

    const updatedCart = cart.filter(
      (item, index) => index !== indexToRemove
    );

    setCart(updatedCart);

  };

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (

    <div
      style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        backgroundColor: "#f2f2f2",
        minHeight: "100vh"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",

          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 20px",
          textAlign: "center",
          color: "white"
        }}
      >

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "inline-block",
            padding: "15px 25px",
            borderRadius: "15px",
            letterSpacing: "2px",
            fontFamily: "cursive"
          }}
        >
          Curbside Delights
        </h1>

        <br />

        <p
          style={{
            fontSize: "22px",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "10px"
          }}
        >
          Delicious Food Delivered To Your Doorstep
        </p>

      </div>

      {/* FOOD SECTION */}

      <div
        style={{
          width: "85%",
          margin: "30px auto"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginBottom: "30px"
          }}
        >
          Our Menu
        </h2>

        {

          foodItems.map((item) => (

            <div
              key={item.id}

              style={{
                backgroundColor: "white",
                padding: "20px",
                marginBottom: "25px",
                borderRadius: "15px",
                boxShadow: "0px 0px 10px gray",
                textAlign: "center"
              }}
            >

              {/* FOOD IMAGE */}

              <img
                src={item.image}
                alt={item.name}

                style={{
                  width: "280px",
                  height: "200px",
                  borderRadius: "15px"
                }}
              />

              {/* FOOD DETAILS */}

              <h2>{item.name}</h2>

              <p
                style={{
                  fontSize: "18px"
                }}
              >
                Price: ₹{item.price}
              </p>

              {/* ADD BUTTON */}

              <button

                onClick={() => addToCart(item)}

                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                Add To Cart
              </button>

            </div>

          ))

        }

        {/* CART SECTION */}

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px gray",
            marginTop: "40px"
          }}
        >

          <h2
            style={{
              textAlign: "center"
            }}
          >
            Your Cart
          </h2>

          {

            cart.length === 0 ? (

              <p
                style={{
                  textAlign: "center"
                }}
              >
                Cart is Empty
              </p>

            ) : (

              <ul
                style={{
                  listStyle: "none",
                  padding: 0
                }}
              >

                {

                  cart.map((item, index) => (

                    <li
                      key={index}

                      style={{
                        marginBottom: "15px",
                        padding: "10px",
                        borderBottom: "1px solid gray"
                      }}
                    >

                      {item.name} - ₹{item.price}

                      {/* REMOVE BUTTON */}

                      <button

                        onClick={() => removeFromCart(index)}

                        style={{
                          marginLeft: "15px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          padding: "6px 10px",
                          borderRadius: "5px",
                          cursor: "pointer"
                        }}
                      >
                        Remove
                      </button>

                    </li>

                  ))

                }

              </ul>

            )

          }

          {/* TOTAL PRICE */}

          <h3
            style={{
              textAlign: "center",
              marginTop: "20px"
            }}
          >
            Total Amount: ₹{totalPrice}
          </h3>

        </div>

      </div>

    </div>

  );
}

export default App;