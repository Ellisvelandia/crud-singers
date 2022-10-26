import React from "react";

const SingersSection = ({ data }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
      {data &&
        data.map((item, index) => (
          <div
            className="my-2"
            key={index}
            style={{
              width: "280px",
              height: "460px",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                className="img-fluid"
                src={item.image}
                alt="name"
                style={{
                  width: "280px",
                  height: "270px",
                  borderRadius: "20px",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
            <h6
              className="text-white px-2 my-1"
              style={{ fontSize: "15px", textAlign: "center" }}
            >
              {item.name.slice(0, 10)}
            </h6>
            <p
              className="mb-3 px-2 text-white"
              style={{ fontSize: "15px", textAlign: "center" }}
            >
              Genre: {item.Genre}
            </p>
          </div>
        ))}
    </div>
  );
};

export default SingersSection;
