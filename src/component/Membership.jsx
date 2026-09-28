import React from "react";

function Membership() {
  const joinPlan = (plan) => {
    window.location.href = `/home?plan=${encodeURIComponent(plan)}#contact`;
  };

  return (
    <div className="membership-page">
      {/* HERO */}
      <section className="membership-hero">
        <span className="membership-small-title">REHMAN GOLDEN GYM</span>

        <h1>
          CHOOSE YOUR <span>MEMBERSHIP</span>
        </h1>

        <p>
          Train harder. Get stronger. Become the best version of yourself.
          Choose the plan that fits your fitness journey.
        </p>
      </section>

      {/* MEMBERSHIP CARDS */}
      <section className="membership-plans">
        {/* MONTHLY */}
        <div className="membership-card">
          <div className="plan-top">
            <span className="plan-number">01</span>
            <span className="plan-duration">1 MONTH</span>
          </div>

          <h2>Monthly</h2>

          <div className="price">
            <span>Rs.</span> 7,000
          </div>

          <p className="plan-description">
            Perfect for beginners who want to start their fitness journey.
          </p>

          <div className="plan-line"></div>

          <ul>
            <li>✓ Full Gym Access</li>
            <li>✓ Modern Equipment</li>
            <li>✓ Basic Trainer Guidance</li>
            <li>✓ Flexible Training Hours</li>
            <li>✓ Personal Trainer Available</li>
          </ul>

          <button
            className="membership-btn"
            onClick={() => joinPlan("Monthly")}
          >
            JOIN NOW <span>→</span>
          </button>
        </div>

        {/* ONLINE */}
        <div className="membership-card popular">
          <div className="popular-badge">MOST POPULAR</div>

          <div className="plan-top">
            <span className="plan-number">02</span>
            <span className="plan-duration">1 MONTH</span>
          </div>

          <h2>Online</h2>

          <div className="price">
            <span>Rs.</span> 30,000
          </div>

          <p className="plan-description">
            The ideal choice for serious members focused on real results.
          </p>

          <div className="plan-line"></div>

          <ul>
            <li>✓ Personalized Workout Plan</li>
            <li>✓ Online Trainer Guidance</li>
            <li>✓ Video Guidance Exercise</li>
            <li>✓ Diet & Nutrition Guidance</li>
            <li>✓ Weekly Progress Tracking</li>
            <li>✓ WhatsApp Support</li>
            <li>✓ Competition Preparation</li>
          </ul>

          <button className="membership-btn" onClick={() => joinPlan("Online")}>
            JOIN NOW <span>→</span>
          </button>
        </div>

        {/* basic fee */}
        <div className="membership-card">
          <div className="plan-top">
            <span className="plan-number">03</span>
            <span className="plan-duration">1 MONTH</span>
          </div>

          <h2>Basic Fee</h2>

          <div className="price">
            <span>Rs.</span> 5,000
          </div>

          <p className="plan-description">
            Go all in and commit to a complete year of transformation.
          </p>

          <div className="plan-line"></div>

          <ul>
            <li>✓ Premium Equipment</li>
            <li>✓ Trainer Guidance</li>
            <li>✓ Progress Tracking</li>
          </ul>

          <button className="membership-btn" onClick={() => joinPlan("Basic Fee")}>
            JOIN NOW <span>→</span>
          </button>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="membership-bottom">
        <div className="membership-cta-content">
          <span>READY TO START?</span>

          <h2>
            YOUR FITNESS
            <strong> JOURNEY STARTS HERE.</strong>
          </h2>

          <p>
            Choose your membership plan and take the first step toward becoming
            stronger, healthier and better.
          </p>

          <div className="membership-cta-buttons">
            <button
              className="membership-btn"
              onClick={() => joinPlan("Monthly")}
            >
              JOIN NOW <span>→</span>
            </button>

            <a href="/home#trainers" className="membership-contact-btn">
              CONTACT TRAINER
            </a>

          </div>
        </div>

        <div className="membership-stats">
          <div>
            <strong>100%</strong>
            <span>DEDICATION</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>FITNESS MINDSET</span>
          </div>

          <div>
            <strong>1</strong>
            <span>GOAL — RESULTS</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Membership;
