/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const SingersSection = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
      {data &&
        data.map((item, index) => (
          <div
            className="my-2"
            key={index}
            style={{
              width: "480px",
              height: "500px",
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
                  width: "480px",
                  height: "270px",
                  borderRadius: "20px",
                  display: "block",
                  margin: "auto",
                }}
              />
            </div>
            <div></div>
            <h6
              className="text-white px-2 my-1"
              style={{ fontSize: "16px", textAlign: "center" }}
            >
              {item.name.slice(0, 10)}
            </h6>
            <p
              className="mb-3 px-2 text-white"
              style={{ fontSize: "14px", textAlign: "center" }}
            >
              Genre: {item.Genre}
            </p>

            <p
              className="mb-3 px-2 text-white"
              style={{ fontSize: "14px", textAlign: "center" }}
            >
              <a
                target="_blank"
                style={{
                  display: "block",
                  margin: "auto",
                }}
                href={item.web}
              >
                web page
              </a>
            </p>

            <div className="d-flex justify-content-around align-items-center mt-4 text-white">
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  wordBreak: "break-all",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingersSection;
