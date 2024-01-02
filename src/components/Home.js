import React from "react";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 text-center justify-content-center py-5"
            style={{ height: "80vh", alignItems: "center", display: "flex" }}
          >
            <div>
              <h1>ADD AND REMOVE PRODUCT </h1>
              <h1> USING REDUX / REDUX TOOLKIT</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
