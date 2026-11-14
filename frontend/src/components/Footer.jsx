import { Link } from "react-router-dom";

import logoBlack from "../assets/logo(black).png";
import logoWhite from "../assets/logo(white).png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-top">
          <Link className="footer-brand" to="/">
            <img
              src={logoBlack}
              alt="PickUP Logo"
              className="logo-light"
            />

            <img
              src={logoWhite}
              alt="PickUP Logo"
              className="logo-dark"
            />

            <span>
              <strong>PickUP</strong>
              <small>Pick Your Grades UP</small>
            </span>
          </Link>

          <p className="footer-tagline">
            Designed to feel premium while keeping every academic resource
            simple and fast to access.
          </p>
        </div>

        <div className="footer-links-grid">
          <section>
            <h3>Navigate</h3>

            <Link to="/">Home</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/cgpa-calculator">CGPA Calculator</Link>
            <Link to="/quiz">Quiz Panel</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Register</Link>
          </section>

          <section>
            <h3>Highlights</h3>

            <Link to="/resources">Lecture Notes</Link>
            <Link to="/cgpa-calculator">CGPA & SGPA Calc</Link>
            <Link to="/resources">Exam Preparation</Link>
            <Link to="/resources">Project Ideas</Link>
            <Link to="/quiz">Subject Quizzes</Link>
          </section>

          <section>
            <h3>Connect</h3>

            <Link to="/contact">Request a Resource</Link>
            <Link to="/contact">Report a Broken Link</Link>
            <Link to="/contact">Share Batch Updates</Link>
          </section>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Degree Resource Hub</p>

          <p>Built with care for students who aim higher.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;