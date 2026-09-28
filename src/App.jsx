import AyazImage from "./assets/Ayaz.png";
import { useEffect, useState } from "react";
import samiImage from "./assets/sami.png";
import sajjadImage from "./assets/sajjad.png";
import Navbar from "./component/Navbar";
import gymimage from "./assets/gym.png";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // =========================
  // MEMBERSHIP / PROGRAM SE PLAN RECEIVE KARNA
  // =========================

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");

    if (plan) {
      setSelectedPlan(plan);

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  }, []);

  // =========================
  // CONTACT FORM PAR LE JANA
  // =========================

  const goToContact = (plan = "") => {
    setSelectedPlan(plan);

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // =========================
  // FORM SUBMIT
  // =========================

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

    console.log(userData);

    const whatsappNumber = "923122691794";

    const whatsappMessage = `
NEW GYM ADMISSION

Name: ${userData.name}
Phone: ${userData.phone}
Email: ${userData.email}
Age: ${userData.age}
Weight: ${userData.weight} kg
Height: ${userData.height} cm
Membership / Program: ${userData.program}

Message:
${userData.message || "No message"}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);
  };

  return (
    <div>
      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="hero" style={{ backgroundImage: `url(${gymimage})` }}>
        <div className="hero-content">
          <h1>
            <span>Build Your Body</span>
          </h1>

          <p>DISCIPLINE STRENGTH RESULTS </p>

          <a href="#contact">JOIN NOW</a>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="about" id="about">
        <div className="about-content">
          <p className="section-title">ABOUT OUR GYM</p>

          <h2>
            Build a Stronger <span>You</span>
          </h2>

          <p>
            Rehman Golden Gym is built on strength, discipline, and excellence.
            Our mission is to create a focused training environment where every
            member can develop their physique, improve performance, and reach
            their full potential.
          </p>

          <p>
            Whether you are a beginner or an experienced athlete, we provide the
            right environment to help you achieve your fitness goals.
          </p>

          <button onClick={() => goToContact()}>JOIN NOW</button>
        </div>
      </section>

      {/* ================= TRAINERS SECTION ================= */}

      <section className="trainers" id="trainers">
        <div className="trainers-heading">
          <p>OUR TRAINERS</p>

          <h2>
            Meet Our <span>Experts</span>
          </h2>
        </div>

        <div className="trainer-cards">
          {/* SAJJAD */}

          <div className="trainer-card">
            <img src={sajjadImage} alt="Sajjad ur Rehman" />

            <h3>Sajjad ur Rehman</h3>

            <span>Personal Trainer</span>

            <p>
              Expert in strength development, physique enhancement, and
              performance-driven training.
            </p>

            <a
              href="https://wa.me/923122691794"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contact Trainer
            </a>
          </div>

          {/* SAMI */}

          <div className="trainer-card">
            <img src={samiImage} alt="Sami Ustad" />

            <h3>Sami Ustad</h3>

            <span>Head Trainer</span>

            <p>
              Gym owner and head trainer specializing in strength and
              performance training.
            </p>

            <a
              href="https://wa.me/92333194655"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contact Trainer
            </a>
          </div>

          {/* AYAZ */}

          <div className="trainer-card">
            <img src={AyazImage} alt="Ayaz Coach" />

            <h3>Ayaz Coach</h3>

            <span>Personal Coach</span>

            <p>
              Specializes in personalized training, fitness development, and
              goal-oriented coaching.
            </p>

            <a
              href="https://wa.me/92XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contact Trainer
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}

      <section className="programs" id="programs">
        <div className="programs-heading">
          <p>OUR PROGRAMS</p>

          <h2>
            Choose Your <span>Program</span>
          </h2>
        </div>

        <div className="program-cards">
          {/* STRENGTH TRAINING */}

          <div
            className="program-card"
            onClick={() => goToContact("Strength Training")}
          >
            <h3>Strength Training</h3>

            <p>Build strength and improve your overall fitness.</p>

            <span className="program-click">SELECT PROGRAM →</span>
          </div>

          {/* BODYBUILDING */}

          <div
            className="program-card"
            onClick={() => goToContact("Bodybuilding")}
          >
            <h3>Bodybuilding</h3>

            <p>Focused training for muscle growth and physique development.</p>

            <span className="program-click">SELECT PROGRAM →</span>
          </div>

          {/* FAT LOSS */}

          <div className="program-card" onClick={() => goToContact("Fat Loss")}>
            <h3>Fat Loss</h3>

            <p>Structured workouts designed for effective fat loss.</p>

            <span className="program-click">SELECT PROGRAM →</span>
          </div>

          {/* PERSONAL TRAINING */}

          <div
            className="program-card"
            onClick={() => goToContact("Personal Training")}
          >
            <h3>Personal Training</h3>

            <p>One-to-one coaching designed around your fitness goals.</p>

            <span className="program-click">SELECT PROGRAM →</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="section-title">JOIN OUR GYM</p>

          <h2>
            Start Your <span>Fitness Journey</span>
          </h2>

          <p>Fill out the form below and our team will contact you.</p>

          {/* ================= FORM ================= */}

          {!submitted ? (
            <form className="join-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" required />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <input type="number" name="age" placeholder="Age" required />

              <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                required
              />

              <input
                type="number"
                name="height"
                placeholder="Height (cm)"
                required
              />

              {/* =================
                  PROGRAM SELECT
              ================= */}

              <select
                name="program"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              >
                <option value="">Select Membership / Program</option>

                {/* MEMBERSHIP */}
                <option value="Monthly">Monthly Membership - Rs. 7,000</option>
                <option value="Online">Online Training - Rs. 30,000</option>
                <option value="Basic Fee">Basic Fee - Rs. 5,000</option>

                {/* PROGRAMS */}
                <option value="Strength Training">Strength Training</option>
                <option value="Bodybuilding">Bodybuilding</option>
                <option value="Fat Loss">Fat Loss</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Competition Preparation">
                  Competition Preparation
                </option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
              ></textarea>

              <button type="submit">JOIN NOW</button>
            </form>
          ) : (
            <div className="success-message">
              <h3>Registration Successful! ✅</h3>

              <p>
                Thank you for joining Rehman Golden Gym. Our team will contact
                you soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>
              REHMAN <span>GOLDEN GYM</span>
            </h2>

            <p>Build Your Body. Build Your Confidence.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="/home">Home</a>

            <a href="/home#about">About</a>

            <a href="/home#trainers">Trainers</a>

            <a href="/home#programs">Programs</a>

            <a href="/home#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>

            <p>📞 +92 300 1234567</p>

            <p>📍 Rehman Golden Gym</p>

            <p>💪 Train Hard. Stay Strong.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Rehman Golden Gym. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
