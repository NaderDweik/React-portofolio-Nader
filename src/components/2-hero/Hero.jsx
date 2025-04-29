import "./hero.css";
import Lottie from "react-lottie";
import animationData from "../../../public/Animation/Coder.json"; // Adjust the path if necessary

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="../../public/me.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Software Engineer who likes creativity.
        </h1>
        <p className="sub-title">
          I’m Nader Dweik, a software Engineer based in Amman
          Jordan.  I develop and find
          technologies that empower Companies to explore space on their own
          terms.
        </p><div>
</div>
        <div className="all-icons flex">
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">
        < 
// @ts-ignore
        Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </section>
  );
};

export default Hero;