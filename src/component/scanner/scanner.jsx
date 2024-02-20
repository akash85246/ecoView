import Navbar from "../../utils/navbar/navbar";
import SearchBar from "../../utils/searchBar/articleSearch/searchBar";
import CameraIcon from "../../assets/cameraIcon.svg";
import UploadIcon from "../../assets/upload.svg";
import FastIcon from "../../assets/fastIcon.svg";
import securityIcon from "../../assets/securityIcon.svg";
import "./scanner.css";
import BarImgSearch from "../../utils/searchBar/barCode/searchBarCode";
import Footer from "../../utils/footer/footer";
export default function Scanner() {
  return (
    <>
      <div className="ScannerPage">
        <Navbar></Navbar>
        <section className="scannerContainer">
          <div className="info">
            <h1>EcoScan</h1>
            <p>Uncover Sustainability at a Scan</p>
          </div>
          <div className="scannerOptions">
            <SearchBar></SearchBar>
            <a href="/ImageScanner" className="scannerContainer">
              <button className="scannerIcon">
                <img src={CameraIcon} alt="Camera Icon" />
              </button>
            </a>
            <BarImgSearch></BarImgSearch>
          </div>
          <div className="services">
            <ul>
              <li>
                <img src={UploadIcon}></img>
                <p>10+ formats supported</p>
              </li>
              <li>
                <img src={FastIcon}></img>
                <p>Fast & Easy</p>
              </li>
              <li>
                <img src={securityIcon}></img>
                <p>Security Guaranteed</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
