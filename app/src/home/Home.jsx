import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header username="Admin1234" department="Accounting Department" />

      <section className="banner-section">
        <div className="banner-text">COMPANY TAGLINE/ <br /> MOTTO GOES HERE</div>
      </section>

      <section className="mission-vision-values">
        <div className="mv-container">
          <div className="mv-row">
            <div className="mv-item">
              <img src="/mission.png" alt="Mission Icon" className="mv-icon" />
              <h3>MISSION</h3>
              <p>
                Our MISSION is to achieve the highest level of customer satisfaction;
                to ensure work completion within the stipulated time frame; and to deliver
                the highest quality of work in the most efficient and economical way.
              </p>
            </div>
            <div className="mv-item">
              <img src="/vision.png" alt="Vision Icon" className="mv-icon" />
              <h3>VISION</h3>
              <p>
                Our VISION is to be the leading automotive spare parts supplier in the
                market and automotive service provider to achieve the highest quality
                service for the maximum customer satisfaction and sustainable growth and
                profitability.
              </p>
            </div>
          </div>
          <div className="mv-item">
            <img src="/core.png" alt="Core Values Icon" className="mv-icon" />
            <h3>CORE VALUES</h3>
            <p>
              "Team Work and People Focused". We work together as a team with mutual
              respect, honesty, and hard work which is the foundation of our success.
              We adhere to high ethical standards with the aim in mind of doing the
              right thing at the right time and the right place.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
