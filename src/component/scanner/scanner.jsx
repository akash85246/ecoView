import Navbar from "../../utils/navbar/navbar";
import SearchBar from "../../utils/searchBar/articleSearch/searchBar";
import CameraIcon from "../../assets/cameraIcon.svg";
import "./scanner.css";
import BarImgSearch from "../../utils/searchBar/barCode/searchBarCode";
export default function Scanner() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="scannerContainer">
        <div className="info">
          <h1>EcoScan</h1>
          <p>Uncover Sustainability at a Scan</p>
        </div>
        <div className="scannerOptions">
          <SearchBar></SearchBar>
          <button className="scannerIcon">
            <img src={CameraIcon}></img>
          </button>
          <BarImgSearch></BarImgSearch>
        </div>
        <div className="quality">
          <ul>
            <li>
              <img></img>
              <p></p>
            </li>
            <li>
              <img></img>
              <p></p>
            </li>
            <li>
              <img></img>
              <p></p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
