import "./about.css";
import Navbar from "../../utils/navbar/navbar";
import Footer from "../../utils/footer/footer";
import AboutCard from "../../utils/cards/AboutCards/aboutCard";
import devloper1 from "../../assets/devloper1.svg";
export default function AudioBufferOptions() {
  return (
    <div className="ScannerPage">
      <Navbar></Navbar>
      <section className="aboutSection">
        <div className="stories">
          <h1>Success Stories</h1>
          <h3>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h3>
          {/* <button>Share your Story</button> */}
        </div>
        <h1 className="teamHeading">Meet Our Team</h1>
        <div className="team">
          <AboutCard
            devloperPhoto={devloper1}
            heading="Aryan Jaiswal"
            content="Meet Aryan Jaiswal, the creative force behind our website designs. With a keen eye for aesthetics and a passion for crafting engaging digital experiences, Aryan brings your vision to life on the web. From sleek interfaces to seamless user experiences, trust Aryan to elevate your online presence."
          ></AboutCard>
          <AboutCard
            devloperPhoto={devloper1}
            heading="Akash Rajput"
            content="Introducing Akash Rajput, our meticulous web front-end developer. With a blend of technical expertise and creativity, Akash transforms designs into interactive and captivating web experiences. From pixel-perfect layouts to smooth animations, Akash crafts the digital interface that brings your vision to life."
          ></AboutCard>
          <AboutCard
            devloperPhoto={devloper1}
            heading="Ankur Debnath"
            content="Meet Ankur Debnath, the powerhouse behind our web back-end development. With a mastery of programming languages and a knack for problem-solving, Ankur builds the robust foundation that powers our digital solutions. From database management to server-side scripting, Ankur ensures your website runs smoothly and efficiently, delivering a seamless user experience."
          ></AboutCard>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
