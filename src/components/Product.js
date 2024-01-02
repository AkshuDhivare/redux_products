import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../app/feature/cartSlice";
import { ShimmerPostItem } from "react-shimmer-effects";
import { ToastContainer, toast } from "react-toastify";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products/");
        setLoading(false);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const addTocartHandler = (item) => {
    dispatch(addTocart(item));
    toast.success("Product added sucessfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="col-lg-3 my-2">
                <ShimmerPostItem card title text cta />
              </div>
            ))
          : data.map((item) => {
              const { id, image, title, price } = item;
              return (
                <div key={id} className="col-lg-3 my-2">
                  <div className="card text-center" style={{ width: "20rem" }}>
                    <div className="text-center">
                      <img
                        src={image}
                        className="card-img-top"
                        alt="Product Image"
                        style={{ width: "50%", padding: "1.5rem" }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title py-2">Title: {title}</h5>
                      <h5 className="card-text py-2">Price: ${price}</h5>
                      <button
                        className="btn btn-primary py-2"
                        onClick={() => addTocartHandler(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Product;
