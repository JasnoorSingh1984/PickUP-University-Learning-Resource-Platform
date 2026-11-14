import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Resources() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [remoteSemesters, setRemoteSemesters] = useState(null);

  useEffect(() => {
    let isMounted = true;
    api.getSemesters()
      .then((res) => {
        if (isMounted && res.success && res.semesters) {
          // Filter out any semester 7 or 8 that could come from old DB state
          const clean = res.semesters.filter(
            (s) =>
              s.slug !== "semester-7" &&
              s.slug !== "semester-8" &&
              s.id !== "7" &&
              s.id !== "8" &&
              s.id !== "semester-7" &&
              s.id !== "semester-8" &&
              s.number !== "Semester 7" &&
              s.number !== "Semester 8" &&
              !s.title?.toLowerCase().includes("semester 7") &&
              !s.title?.toLowerCase().includes("semester 8")
          );
          setRemoteSemesters(clean);
        }
      })
      .catch(() => {
        // Fallback to static list smoothly
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const semesters = [
    {
      id: "1",
      slug: "semester-1",
      category: "Semester 1",
      tag: "Beginner",
      title: "Semester 1",
      subjects: [
        "MODERN AND COMPUTATIONAL PHYSICS",
        "CALCULUS AND STATISTICAL ANALYSIS",
        "PROBLEM SOLVING USING PYTHON PROGRAMMING",
        "FRONT END ENGINEERING-I",
        "TECHNICAL COMMUNICATION - I",
        "DISASTER MANAGEMENT",
      ],
    },
    {
      id: "2",
      slug: "semester-2",
      category: "Semester 2",
      tag: "Foundation",
      title: "Semester 2",
      subjects: [
        "DIFFERENTIAL EQUATIONS AND TRANSFORMATIONS",
        "DIGITAL ELECTRONICS AND COMPUTER ARCHITECTURE",
        "OPERATING SYSTEM",
        "SOURCE CODE MANAGEMENT",
        "FUNDAMENTALS OF C PROGRAMMING",
        "INDIAN KNOWLEDGE SYSTEM",
        "TECHNICAL COMMUNICATION- II",
        "ENVIRONMENTAL STUDIES",
        "THE RUDIMENTS OF ARTIFICIAL INTELLIGENCE, CHATGPT, DEEPSEEK, GROK AND METAVERSE",
      ],
    },
    {
      id: "3",
      slug: "semester-3",
      category: "Semester 3",
      tag: "Intermediate",
      title: "Semester 3",
      subjects: [
        "DISCRETE STRUCTURES",
        "DATA STRUCTURES USING OBJECT ORIENTED PROGRAMMING-I",
        "DATABASE MANAGEMENT SYSTEM",
        "OBJECT ORIENTED SOFTWARE ENGINEERING",
        "FRONT-END ENGINEERING-II",
        "FINANCIAL ACCOUNTING - I",
        "HUMAN VALUES & PROFESSIONAL ETHICS",
      ],
    },
    {
      id: "4",
      slug: "semester-4",
      category: "Semester 4",
      tag: "Intermediate",
      title: "Semester 4",
      subjects: [
        "DATA STRUCTURES USING OBJECT ORIENTED PROGRAMMING-II",
        "LINUX ADMINISTRATION",
        "BACKEND ENGINEERING-I",
        "COMPUTER NETWORKS",
        "INDUSTRY IMMERSION SERIES-I",
        "AI STACK: ML, GENERATIVE AI & PROMPT ENGINEERING",
        "EMBEDDED SYSTEMS AND IOT",
        "CYBER SECURITY",
      ],
    },
    {
      id: "5",
      slug: "semester-5",
      category: "Semester 5",
      tag: "Advanced",
      title: "Semester 5",
      subjects: [
        "Machine Learning & Data Mining",
        "Cloud Computing & Distributed Systems",
        "Cyber Security & Cryptography",
        "Compiler Design & Automata Theory",
      ],
    },
    {
      id: "6",
      slug: "semester-6",
      category: "Semester 6",
      tag: "Advanced",
      title: "Semester 6",
      subjects: [
        "DevOps & CI/CD Pipelines",
        "Mobile Application Development",
        "Big Data Analytics & Hadoop",
        "Aptitude & Technical Interview Prep",
      ],
    },
  ];

  // Strictly exclude semester 7 and 8 from active list
  const activeSemesters = (remoteSemesters || semesters).filter(
    (s) =>
      s.slug !== "semester-7" &&
      s.slug !== "semester-8" &&
      s.id !== "7" &&
      s.id !== "8" &&
      s.id !== "semester-7" &&
      s.id !== "semester-8" &&
      s.number !== "Semester 7" &&
      s.number !== "Semester 8" &&
      !s.title?.toLowerCase().includes("semester 7") &&
      !s.title?.toLowerCase().includes("semester 8")
  );

  const filteredResources = activeSemesters.filter((item) => {
    const itemTag = (item.tag || "").toLowerCase();
    const itemCategory = (item.category || item.number || "").toLowerCase();
    const targetFilter = filter.toLowerCase();

    const matchesCategory =
      targetFilter === "all" ||
      itemTag === targetFilter ||
      itemCategory === targetFilter;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSubject = (item.subjects || []).some((sub) => {
      const name = typeof sub === "string" ? sub : sub?.name || "";
      const code = typeof sub === "object" ? sub?.code || "" : "";
      return name.toLowerCase().includes(query) || code.toLowerCase().includes(query);
    });

    const matchesSearch =
      (item.title || "").toLowerCase().includes(query) ||
      (item.description || "").toLowerCase().includes(query) ||
      matchesSubject ||
      itemTag.includes(query) ||
      itemCategory.includes(query);

    return matchesCategory && matchesSearch;
  });

  const categories = [
    "all",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  return (
    <main>
      <section className="section page-intro">
        <div className="container reveal">
          <span className="eyebrow">Resource Library</span>

          <h1>Find the study materials you need, faster.</h1>

          <p>
            Use the filters and search bar below to explore notes, papers, projects, and
            semester roadmaps for your degree batch.
          </p>

          <div
            className="filter-bar-shell"
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="search-input-wrapper">
              <input
                type="text"
                className="resource-search-input"
                placeholder="🔍 Search semesters, subjects, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div
              className="filter-bar"
              role="tablist"
              aria-label="Resource filters"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`filter-btn ${
                    filter.toLowerCase() === item.toLowerCase() ? "active" : ""
                  }`}
                  onClick={() => setFilter(item)}
                >
                  {item === "all" ? "All Semesters" : item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container resource-grid">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <Link
                key={resource.slug || resource.id}
                to={`/semester/${resource.slug || resource.id}`}
                className="resource-card-link"
              >
                <article
                  className="resource-card interactive-card reveal in-view"
                  style={{ display: "flex", flexDirection: "column", height: "100%" }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span className="resource-tag">{resource.tag || "Core"}</span>
                    <span
                      className="card-arrow-icon"
                      style={{ fontSize: "1.1rem", transition: "transform 200ms ease" }}
                    >
                      ➔
                    </span>
                  </div>

                  <h3 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
                    {resource.title || resource.number}
                  </h3>

                  {/* Just Subject Names */}
                  {resource.subjects && resource.subjects.length > 0 ? (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0.5rem 0 1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.55rem",
                        flex: 1,
                      }}
                    >
                      {resource.subjects.map((sub, sIdx) => {
                        const subjectName = typeof sub === "string" ? sub : sub?.name || "";
                        return (
                          <li
                            key={sIdx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.6rem",
                              fontSize: "0.86rem",
                              color: "var(--text)",
                              lineHeight: 1.35,
                              fontWeight: 500,
                            }}
                          >
                            <span
                              style={{
                                color: "var(--accent)",
                                fontSize: "0.95rem",
                                lineHeight: "1.1",
                                flexShrink: 0,
                              }}
                            >
                              •
                            </span>
                            <span>{subjectName}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p style={{ flex: 1, color: "var(--muted)" }}>{resource.description}</p>
                  )}

                  {/* Card Footer */}
                  <div className="card-footer-action">
                    <span className="action-title">View Modules & Notes</span>
                    <span className="action-hint">Explore →</span>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "3rem",
                color: "var(--muted)",
              }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                No resources match your search term &quot;{searchQuery}&quot;.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Resources;
