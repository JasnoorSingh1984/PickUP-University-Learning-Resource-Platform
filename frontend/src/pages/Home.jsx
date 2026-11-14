import { Link } from "react-router-dom";
import RoadmapStepCard, { roadmapSteps } from "../components/RoadmapStepCard";

function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Built for students, by students</span>

            <h1>
              One place for notes, guides, links, and academic support.
            </h1>

            <p>
              Find the resources you need for your degree batch in a clean,
              organized space. Discover notes, reference links, project help,
              and semester planning tools.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/resources">
                Browse Resources
              </Link>

              <Link className="btn btn-secondary" to="/quiz">
                Take Subject Quiz
              </Link>
            </div>

            <div className="hero-stats">
              <article>
                <strong>24/7</strong>
                <span>resource access</span>
              </article>

              <article>
                <strong>4</strong>
                <span>core study sections</span>
              </article>

              <article>
                <strong>100%</strong>
                <span>mobile friendly</span>
              </article>
            </div>
          </div>

          <div className="hero-panel reveal">
            <div className="panel-card panel-card-main">
              <span className="panel-label">Today's Focus</span>

              <h2>Organize, revise, and submit with confidence</h2>

              <p>
                Everything is grouped by subject, semester, and purpose so you
                can find what matters fast.
              </p>
            </div>

            <div className="panel-card panel-card-accent">
              <span className="panel-label">Popular Downloads</span>

              <ul>
                <li>Lecture Notes</li>
                <li>Previous Question Papers</li>
                <li>Project Templates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="section-heading reveal"
            style={{
              textAlign: "center",
              margin: "0 auto 2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className="eyebrow">4-Step Track Plan</span>

            <h2 style={{ textAlign: "center" }}>
              Your step-by-step roadmap for semester success
            </h2>
          </div>

          <div className="timeline" style={{ maxWidth: "800px", margin: "0 auto" }}>
            {roadmapSteps.map((item) => (
              <RoadmapStepCard key={item.step} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;