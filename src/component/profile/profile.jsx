import Navbar from "../../utils/navbar/navbar";
import ProfileImage from "../../assets/profilePhoto.svg"
import "./profile.css";
export default function Profile() {
  return (
    <div className="ScannerPage">
      <Navbar></Navbar>
      <section className="profileContainer">
        <img src={ProfileImage}></img>
      </section>
      <section className="additionalInfo">

      </section>
    </div>
  );
}
