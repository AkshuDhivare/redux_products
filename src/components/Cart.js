import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../app/feature/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const image =
  "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?size=626&ext=jpg&ga=GA1.1.143926117.1683477334&semt=sph";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((price, item) => price + item.price, 0);
    setTotal(totalPrice);
  }, [products]);

  const REMOVETocartHandler = (item) => {
    dispatch(removefromcart(item.id));
    toast.success("Product remove sucessfully!", {
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
    <>
      {products.length === 0 ? (
        <div className="container">
          <div className="row text-center justify-content-center  py-5">
            <h1>Cart is Empty</h1>
            <br />
            <img src={image} alt="Cart is Empty" className="w-50" />
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 my-2">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">picture</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => {
                    const { id, image, title, description, price } = item;
                    return (
                      <tr key={id}>
                        <td className="py-4">
                          <h3> {index + 1}</h3>
                        </td>
                        <td className="py-4" style={{ width: "15%" }}>
                          <img
                            src={image}
                            className="card-img-top w-25"
                            alt="Product Image"
                          />
                        </td>
                        <td className="py-4"> {title}</td>
                        <td className="py-4"> {description}</td>
                        <td className="py-4">${price}</td>
                        <td className="py-4">
                          <a
                            className="btn btn-danger"
                            onClick={() => REMOVETocartHandler(item)}
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-lg-12 text-end ">
              <h1> Total : ${total}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
