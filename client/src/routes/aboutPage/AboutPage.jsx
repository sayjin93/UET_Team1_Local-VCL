import "./aboutPage.scss";

import { CountUp } from "use-count-up";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const teamMembers = [
  {
    name: "Jurgen Kruja",
    role: "Project Manager & Full Stack Developer",
    image: "jurgen.jpg",
  },
  {
    name: "Dionis Debrova",
    role: "Public Relations & Mobile Developer",
    image: "noavatar.jpg",
  },
  {
    name: "Read Danjolli",
    role: "Project Reporter & Mobile Developer",
    image: "noavatar.jpg",
  },
  {
    name: "Erisa Haxhiu",
    role: "Project Reporter & Database",
    image: "noavatar.jpg",
  },
  {
    name: "Juri Allko",
    role: "Project Reporter & Database",
    image: "noavatar.jpg",
  },
  { name: "Agustin Agolli", role: "Mobile Developer", image: "noavatar.jpg" },
];

const AboutPage = () => {
  return (
    <SimpleBar style={{ height: "100%" }}>
      <div className="about-page">
        <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            Welcome to Team 1 VCL from the University of Tirana. Our team is
            dedicated to providing the best real estate solutions tailored to
            your needs. With over 12 years of experience and numerous awards, we
            pride ourselves on our commitment to excellence and customer
            satisfaction.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h2 className="stat-number">
                <CountUp isCounting end={12} duration={3.2} />+
              </h2>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat">
              <h2 className="stat-number">
                <CountUp isCounting end={21} duration={3.2} />
              </h2>
              <p className="stat-label">Awards Gained</p>
            </div>
            <div className="stat">
              <h2 className="stat-number">
                <CountUp isCounting end={54} duration={3.2} />
              </h2>
              <p className="stat-label">Projects Completed</p>
            </div>
          </div>
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-cards">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <img
                  src={`/team/${member.image}`}
                  alt={member.name}
                  className="team-image"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SimpleBar>
  );
};

export default AboutPage;
