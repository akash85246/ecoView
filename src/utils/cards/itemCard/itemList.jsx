import "./itemList.css";
export default function ItemList(props) {
  return (
    <div className="itemlist">
      <img src={props.image}></img>
      {/* <div className="details"> */}
        <h1>{props.name}</h1>
        <h2>{props.type}</h2>
        <h3>{props.cost}</h3>
        <span>{props.label}</span>
      {/* </div> */}
    </div>
  );
}
