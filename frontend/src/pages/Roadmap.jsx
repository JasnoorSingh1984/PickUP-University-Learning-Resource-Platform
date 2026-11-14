import RoadmapStepCard, { roadmapSteps } from "../components/RoadmapStepCard";

function Roadmap() {
  return (
    <main>
      <section className="section page-intro">
        <div className="container reveal in-view">
          <span className="eyebrow">Semester Plan</span>

          <h1 style={{ marginTop: "0.5rem" }}>Stay on track through the full degree journey.</h1>

          <p style={{ maxWidth: "60ch" }}>
            This roadmap breaks the work into easy phases so you can revise,
            build projects, and prepare for exams on time. Hover or tap any card below to reveal detailed action plans!
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container timeline" style={{ maxWidth: "800px" }}>
          {roadmapSteps.map((item) => (
            <RoadmapStepCard key={item.step} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Roadmap;