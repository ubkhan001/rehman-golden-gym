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
  const [errors, setErrors] = useState({});

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

  const validateField = (name, value) => {
    const cleanValue = value.trim();

    if (name === "name") {
      if (!cleanValue) {
        return "Please enter your name.";
      }

      if (!/^[A-Za-z\s]+$/.test(cleanValue)) {
        return "Name should contain letters only.";
      }
    }

    if (name === "phone") {
      if (!cleanValue) {
        return "Please enter your phone number.";
      }

      if (!/^[0-9+\-\s]{10,15}$/.test(cleanValue)) {
        return "Please enter a valid phone number.";
      }
    }

    if (name === "email") {
      if (
        cleanValue &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanValue)
      ) {
        return "Please enter a valid email address.";
      }
    }

    if (name === "age") {
      if (!cleanValue) {
        return "Please enter your age.";
      }

      const age = Number(cleanValue);

      if (age < 10 || age > 100) {
        return "Age must be between 10 and 100.";
      }
    }

    if (name === "weight") {
      if (cleanValue) {
        const weight = Number(cleanValue);

        if (weight < 20 || weight > 300) {
          return "Please enter a valid weight.";
        }
      }
    }

    if (name === "height") {
      if (cleanValue) {
        const feetHeight = cleanValue.match(
          /^(\d{1})['’]\s*(\d{1,2})["”]?$/
        );

        const cmHeight = Number(cleanValue);

        if (feetHeight) {
          const feet = Number(feetHeight[1]);
          const inches = Number(feetHeight[2]);

          if (feet < 3 || feet > 8 || inches < 0 || inches > 11) {
            return "Please enter a valid height.";
          }
        } else if (cmHeight < 100 || cmHeight > 250) {
          return "Please enter a valid height, for example 5'8 or 170.";
        }
      }
    }

    if (name === "program") {
      if (!cleanValue) {
        return "Please select a program.";
      }
    }

    return "";
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    if (name === "program") {
      setSelectedPlan(value);
    }

    const error = validateField(name, value);

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: error,
    }));
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

    const fieldsToValidate = [
      "name",
      "phone",
      "email",
      "age",
      "weight",
      "height",
      "program",
    ];

    const newErrors = {};

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, userData[field] || "");

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

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
REHMAN GOLD GYM
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
    setErrors({});

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
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

          e.currentTarget.style.setProperty("--mouse-x", x);
          e.currentTarget.style.setProperty("--mouse-y", y);
        }}
      >
        <div className="impact-area">
          <div className="dumbbell">
            <div className="plates-left">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="handle"></div>

            <div className="plates-right">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="impact"></div>
          <div className="dust dust1"></div>
          <div className="dust dust2"></div>
          <div className="dust dust3"></div>
          <div className="crack crack1"></div>
          <div className="crack crack2"></div>
          <div className="crack crack3"></div>
        </div>

        <div className="hero-content">
          <p className="section-title">WELCOME TO REHMAN GOLDEN GYM</p>

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
            Welcome to Rehman Golden Gym, where your fitness journey begins. We
            provide a professional and motivating environment for everyone who
            wants to build strength, improve fitness, and achieve their goals.
          </p>

          <p>
            Our experienced trainers guide members with proper training,
            discipline, and dedication. Whether you are a beginner, athlete, or
            bodybuilding enthusiast, we have programs designed for your needs.
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
              Dedicated fitness trainer helping members improve strength,
              fitness, and body transformation.
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
              Experienced gym trainer focused on proper workouts, strength
              development, and member guidance.
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
              Helping members stay consistent, build confidence, and reach
              their fitness goals.
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
              Build strength, power, and muscle with structured strength
              training.
            </p>
          </div>

          <div
            className="program-card"
            onClick={() => goToContact("Bodybuilding")}
          >
            <h3>Bodybuilding</h3>
            <p>
              Professional bodybuilding focused training for muscle growth and
              physique development.
            </p>
          </div>

          <div
            className="program-card"
            onClick={() => goToContact("Fat Loss")}
          >
            <h3>Fat Loss</h3>
            <p>
              Structured workouts designed to improve fitness and support
              healthy fat loss.
            </p>
          </div>

          <div
            className="program-card"
            onClick={() => goToContact("Personal Training")}
          >
            <h3>Personal Training</h3>
            <p>
              One-to-one guidance with customized workouts based on your goals.
            </p>
          </div>

          <div
            className="program-card"
            onClick={() => goToContact("Online Training")}
          >
            <h3>Online Training</h3>
            <p>
              Get training guidance and workout plans even when you cannot
              visit the gym.
            </p>
          </div>

          <div
            className="program-card"
            onClick={() => goToContact("Competition Preparation")}
          >
            <h3>Competition Preparation</h3>
            <p>
              Dedicated preparation for bodybuilding and physique competitions.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="section-title">GET IN TOUCH</p>

          <h2>
            Gym <span>Admission</span>
          </h2>

          <p>
            Fill out the admission form and our team will contact you for
            further details.
          </p>

          {!submitted ? (
            <form className="join-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                {errors.name && (
                  <p className="field-error">{errors.name}</p>
                )}

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleFieldChange}
                />
              </div>

              <div className="form-field">
                {errors.phone && (
                  <p className="field-error">{errors.phone}</p>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleFieldChange}
                />
              </div>

              <div className="form-field">
                {errors.email && (
                  <p className="field-error">{errors.email}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleFieldChange}
                />
              </div>

              <div className="form-field">
                {errors.age && (
                  <p className="field-error">{errors.age}</p>
                )}

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  min="10"
                  max="100"
                  onChange={handleFieldChange}
                />
              </div>

              <div className="form-field">
                {errors.weight && (
                  <p className="field-error">{errors.weight}</p>
                )}

                <input
                  type="number"
                  name="weight"
                  placeholder="Weight (kg)"
                  onChange={handleFieldChange}
                />
              </div>

              <div className="form-field">
                {errors.height && (
                  <p className="field-error">{errors.height}</p>
                )}

                <input
                  type="text"
                  name="height"
                  placeholder="Height (e.g. 5'8)"
                  onChange={handleFieldChange}
                />
              </div>

              <div className="form-field">
                {errors.program && (
                  <p className="field-error">{errors.program}</p>
                )}

                <select
                  name="program"
                  value={selectedPlan}
                  onChange={handleFieldChange}
                >
                  <option value="">Select Program</option>
                  <option value="Basic Membership">Basic Membership</option>
                  <option value="Standard Membership">
                    Standard Membership
                  </option>
                  <option value="Premium Membership">
                    Premium Membership
                  </option>
                  <option value="Online Training">Online Training</option>
                  <option value="Strength Training">
                    Strength Training
                  </option>
                  <option value="Bodybuilding">Bodybuilding</option>
                  <option value="Fat Loss">Fat Loss</option>
                  <option value="Personal Training">
                    Personal Training
                  </option>
                  <option value="Competition Preparation">
                    Competition Preparation
                  </option>
                </select>
              </div>

              <div className="form-field full-field">
                <textarea
                  name="message"
                  placeholder="Tell us about your fitness goals..."
                ></textarea>
              </div>

              <button type="submit">SUBMIT ADMISSION</button>
            </form>
          ) : (
            <div className="success-message">
              <h3>Registration Successful! ✅</h3>

              <p>
                Your admission request has been received. WhatsApp has been
                opened with your details.
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>
              REHMAN <span>GOLDEN GYM</span>
            </h2>

            <p>Train Hard. Stay Strong. Become Better.</p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#trainers">Trainers</a>
              <a href="#programs">Programs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>

            <p>📍 Rehman Golden Gym</p>
            <p>📞 Gym Management</p>
            <p>💪 Professional Training</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Rehman Golden Gym. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;