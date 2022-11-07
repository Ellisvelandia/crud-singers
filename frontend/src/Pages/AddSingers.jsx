import { useState } from "react";
import axios from "axios";

const AddSingers = () => {
  const [Data, setData] = useState({
    name: "",
    image: "",
    web: "",
    description: "",
    Genre: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/add", Data)
      .then((res) => alert(res.data.message));
    setData({
      name: "",
      image: "",
      description: "",
      Genre: "",
    });
  };
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
            name="name"
            value={Data.name}
            onChange={change}
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
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>

        <div className="mb-3 container">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Web
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The URL of web"
            name="web"
            value={Data.web}
            onChange={change}
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
            placeholder="Enter Description of the Banks"
            name="description"
            value={Data.description}
            onChange={change}
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
            name="Genre"
            value={Data.Genre}
            onChange={change}
          />
        </div>
        <button className="btn btn-success m-3" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddSingers;
