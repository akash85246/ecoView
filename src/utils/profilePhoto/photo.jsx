import "./photo.css";
export default function Photo(props) {
  return (
    <a className="circular-photo" href="/profile">
      <img src={props.photo} alt="Profile" />
      <div className="photo-border"></div>
    </a>
  );
}
