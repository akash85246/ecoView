import facebookIcon from "../../assets/facebookIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import "./footer.css";
export default function Footer(props) {
  return (
    <footer>
      <section>
        <h1>Get In Touch</h1>
        <ul>
          <li>
            <a title="facebook">
              <img src={facebookIcon}></img>
            </a>
          </li>
          <li>
            <a title="instagram">
              <img src={instagramIcon}></img>
            </a>
          </li>
          <li>
            <a title="twitter">
              <img src={twitterIcon}></img>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <form>
          <input
            type="email"
            placeholder="Your Email Address"
            className="subscribeEmail"
          />
          <input type="submit" value="Subscribe" className="subscribeButton" />
        </form>
      </section>
    </footer>
  );
}
