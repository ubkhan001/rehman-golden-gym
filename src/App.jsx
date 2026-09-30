import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";

import gymimage from "./assets/gym.png";
import AyazImage from "./assets/Ayaz.png";
import samiImage from "./assets/sami.png";
import sajjadImage from "./assets/sajjad.png";

import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");

    if (plan) {
      setSelectedPlan(plan);

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, []);

  const goToContact = (plan = "") => {
    if (plan) {
      setSelectedPlan(plan);
    }

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      age: formData.get("age"),
      weight: formData.get("weight"),
      height: formData.get("height"),
      program: formData.get("program"),
      message: formData.get("message"),
    };

    console.log("Admission Data:", userData);

    const whatsappMessage = `
🏋️ NEW GYM ADMISSION

👤 Name: ${userData.name}
📞 Phone: ${userData.phone}
📧 Email: ${userData.email || "Not provided"}
🎂 Age: ${userData.age}
⚖️ Weight: ${userData.weight || "Not provided"} kg
📏 Height: ${userData.height || "Not provided"}
💪 Program: ${userData.program}
📝 Message: ${userData.message || "No message"}

━━━━━━━━━━━━━━━━
REHMAN GOLDEN GYM
━━━━━━━━━━━━━━━━
`;

    const trainerNumber = "+923122691794";

    const whatsappURL = `https://wa.me/${trainerNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
    e.target.reset();
    setSelectedPlan("");

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Navbar />

      <section
        className="hero"
        id="home"
        style={{ backgroundImage: `url(${gymimage})` }}
      >
        <div className="hero-content">
          <p className="section-title">
            WELCOME TO REHMAN GOLDEN GYM
          </p>

          <h1>
            BUILD YOUR <span>BODY</span>
          </h1>

          <p>DISCIPLINE &nbsp; STRENGTH &nbsp; RESULTS</p>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goToContact();
            }}
          >
            JOIN NOW
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <p className="section-title">ABOUT OUR GYM</p>

          <h2>
            Build a <span>Stronger You</span>
          </h2>

          <p>
            Welcome to Rehman Golden Gym, where your fitness journey
            begins. We provide a professional and motivating environment
            for everyone who wants to build strength, improve fitness,
            and achieve their goals.
          </p>

          <p>
            Our experienced trainers guide members with proper training,
            discipline, and dedication. Whether you are a beginner,
            athlete, or bodybuilding enthusiast, we have programs
            designed for your needs.
          </p>

          <button type="button" onClick={() => goToContact()}>
            JOIN OUR GYM
          </button>
        </div>
      </section>

      <section className="trainers" id="trainers">
        <div className="trainers-heading">
          <p>MEET OUR TEAM</p>

          <h2>
            Our <span>Trainers</span>
          </h2>
        </div>

        <div className="trainer-cards">
          <div className="trainer-card">
            <img src={sajjadImage} alt="Sajjad ur Rehman" />

            <h3>Sajjad ur Rehman</h3>
            <span>Personal Trainer</span>

            <p>
              Dedicated fitness trainer helping members improve
              strength, fitness, and body transformation.
            </p>

            <a
              href="https://wa.me/923122691794"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              Contact Trainer
            </a>
          </div>

          <div className="trainer-card">
            <img src={samiImage} alt="Sami Ustad" />

            <h3>Sami Ustad</h3>
            <span>Head Trainer</span>

            <p>
              Experienced gym trainer focused on proper workouts,
              strength development, and member guidance.
            </p>

            <a
              href="https://wa.me/923333194655"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              Contact Trainer
            </a>
          </div>

          <div className="trainer-card">
            <img src={AyazImage} alt="Ayaz Coach" />

            <h3>Ayaz Coach</h3>
            <span>Fitness Trainer</span>

            <p>
              Helping members stay consistent, build confidence,
              and reach their fitness goals.
            </p>

            <a
              href="https://wa.me/923142060975"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              Contact Trainer
            </a>
          </div>
        </div>
      </section>

      <section className="programs" id="programs">
        <div className="programs-heading">
          <p>WHAT WE OFFER</p>

          <h2>
            Training <span>Programs</span>
          </h2>
        </div>

        <div className="program-cards">
          <div
            className="program-card"
            onClick={() => goToContact("Strength Training")}
          >
            <h3>Strength Training</h3>
            <p>
              Build strength, power, and muscl
