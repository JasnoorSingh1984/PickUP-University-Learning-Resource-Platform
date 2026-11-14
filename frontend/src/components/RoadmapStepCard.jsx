import { useState } from "react";

export const roadmapSteps = [
  {
    step: "01",
    title: "Semester Start",
    description:
      "Focus on building strong programming fundamentals and mastering core computer science concepts early on.",
    milestones: [
      "Build Programming Fundamentals",
      "Develop Problem-Solving Skills",
      "Strengthen Core Computer Science Concepts",
      "Gain Practical Experience",
    ],
    proTip: "Be consistent rather than studying for long hours occasionally.",
  },
  {
    step: "02",
    title: "Mid-semester",
    description:
      "Strengthen technical expertise through advanced learning, coding practice, and internships.",
    milestones: [
      "Master Data Structures & Algorithms",
      "Build Real-World Projects",
      "Learn Core CS Subjects",
      "Prepare for Internships",
    ],
    proTip: "Quality projects + strong DSA skills make a powerful combination.",
  },
  {
    step: "03",
    title: "Project Phase",
    description:
      "Apply theoretical knowledge by developing real-world projects and building a professional portfolio.",
    milestones: [
      "Develop an Industry-Level Project",
      "Implement Advanced Features",
      "Testing, Documentation & Deployment",
      "Project Presentation & Portfolio",
    ],
    proTip: "Treat your project like a real product.",
  },
  {
    step: "04",
    title: "Exam Preparation",
    description:
      "Revise key concepts, practice mock tests, and optimize exam performance through strategic preparation.",
    milestones: [
      "Revise Core Concepts",
      "Practice Previous Year Papers",
      "Take Mock Tests",
      "Strengthen Weak Topics",
    ],
    proTip: "Don't just reread your notes—test yourself.",
  },
];

export function RoadmapStepCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`roadmap-expandable-card reveal in-view ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <div className="roadmap-card-header">
        <span className="timeline-step">{item.step}</span>

        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>{item.title}</h3>
          </div>

          <p style={{ marginTop: "0.4rem", marginBottom: 0, color: "var(--muted)", lineHeight: 1.5, fontSize: "0.95rem" }}>
            {item.description}
          </p>
        </div>
      </div>

      {/* Hidden content that slides down into view on hover / expand */}
      <div className="roadmap-card-expandable-wrapper">
        <div className="roadmap-card-expandable-content">
          <div className="roadmap-divider" />

          <div className="roadmap-details-grid">
            <div>
              <strong className="roadmap-section-label">🎯 Action Plan & Key Milestones</strong>
              <ul className="roadmap-milestones-list">
                {item.milestones.map((milestone, idx) => (
                  <li key={idx}>
                    <span className="milestone-check">✓</span>
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            {item.proTip && (
              <div className="roadmap-protip-box">
                <span className="protip-badge">💡 Pro Tip</span>
                <p>&quot;{item.proTip}&quot;</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default RoadmapStepCard;
