import { useState } from "react";
import Birthday from "./Birthday.js";
import "./List.scss";

export default function List(props) {
  const [data, setData] = useState(props.data);

  const birthday = data.map((el) => (
    <Birthday key={el.id} image={el.image} fullName={el.name} age={el.age} />
  ));

  function hideData() {
    setData([]);
  }

  return (
    <div className="list">
      <h1 className="list-heading">{data.length} birthdays today</h1>
      {birthday}
      <button className="list-button" onClick={hideData}>
        Clear All
      </button>
    </div>
  );
}
