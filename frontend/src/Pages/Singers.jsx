import { useEffect, useState } from "react";
import axios from "axios";
import SingersSection from "../components/SingersSection";

const Singers = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getSingers")
        .then((res) => setData(res.data.singers));
    };
    fetch();
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Singers Section</h4>
      </div>
      <div>
        {Data ? (
          <SingersSection data={Data}/>
        ) : (
          <div className="text-white">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Singers;
