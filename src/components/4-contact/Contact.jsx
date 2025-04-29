// @ts-nocheck
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
import Lottie from "react-lottie";
import animationData from "../../../public/Animation/msg.json";
import doneAnimation from "../../../public/Animation/done.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgrgkbz"); // Replace "mkgrgkbz" with your Formspree form ID
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const doneOptions = {
    loop: false,
    autoplay: true,
    animationData: doneAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (state.succeeded && !isSubmitted) {
    setIsSubmitted(true); // Set the submission state to true
  }

  if (isSubmitted) {
    return (
      <section className="contact-us">
        <div className="thank-you-container">
          <h1 className="title">Thank you!</h1>
          <p className="sub-title">
            Thank you for your email! I will get back to you as soon as possible.
          </p>
          <div className="animation-overlay">
            <Lottie options={doneOptions} height={400} width={400} />
          </div>
        </div>
      </section>
    );
  }


    return (
      <section className="contact-us">
        <h1 className="title">
          <span className="icon-envelope"> </span>
          Contact us
        </h1>
        <p className="sub-title">
          Contact us for more information and get notified when I publish
          something new.
        </p>
  
        <div className="flex">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
  
            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message">Your message:</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
  
            <button
              className="submit"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
  
          <div className="animation">
            <Lottie
              options={defaultOptions}
              height={300}
              width={340}
              isStopped={false}
              isPaused={false}
              className="animation-lottie" /* Added a new class for the animation itself */
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;