import React from "react";

const AddSingers = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "92.4vh" }}
    >
      <div className="container p-4">
        <div className="mb-3 container">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Singer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Singer Name"
          />
        </div>

        <div className="mb-3 container">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The URL of Image"
          />
        </div>

        <div className="mb-3 container">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description of the Bans"
          />
        </div>

        <div className="mb-3 container">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the Genre"
          />
        </div>
        <button className="btn btn-success m-3">Submit</button>
      </div>
    </div>
  );
};

export default AddSingers;
