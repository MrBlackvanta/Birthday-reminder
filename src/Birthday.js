import "./Birthday.scss";

export default function Birthday(props) {
  return (
    <div className="birthday">
      <img src={props.image} alt="person" className="birthday-image" />
      <div className="birthday-details">
        <h2 className="birthday-details-name">{props.fullName}</h2>
        <p className="birthday-details-age">{props.age} years</p>
      </div>
    </div>
  );
}
