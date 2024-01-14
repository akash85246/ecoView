import "./photo.css";
export default function Photo(props) {
  return (
    <div className="circular-photo">
      <img src={props.photo} alt="Profile" />
      <div className="photo-border"></div>
    </div>
  );
}
