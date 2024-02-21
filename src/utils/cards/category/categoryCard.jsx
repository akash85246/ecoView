import "./categoryCard.css";
export default function CategoryCard(props) {
  return (
    <div className="category" onClick={() => props.onClick(props.Details)}>
      <img src={props.Image}></img>
      <h1>{props.Details}</h1>
    </div>
  );
}
