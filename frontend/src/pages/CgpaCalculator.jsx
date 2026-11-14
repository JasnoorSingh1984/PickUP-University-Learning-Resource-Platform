import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

/* ─── Standard Grading Scale ─────────────────────────────────────────── */
const GRADE_POINTS = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  P: 4,
  F: 0,
};

const GRADE_OPTIONS = [
  { grade: "O", points: 10, label: "Outstanding (10)" },
  { grade: "A+", points: 9, label: "Excellent (9)" },
  { grade: "A", points: 8, label: "Very Good (8)" },
  { grade: "B+", points: 7, label: "Good (7)" },
  { grade: "B", points: 6, label: "Above Average (6)" },
  { grade: "C", points: 5, label: "Average (5)" },
  { grade: "P", points: 4, label: "Pass (4)" },
  { grade: "F", points: 0, label: "Fail / Reappear (0)" },
];

/* ─── Degree Curriculum Semesters 1 to 6 (Semesters 7 & 8 removed) ──── */
const SEMESTER_CURRICULUM = {
  "semester-1": {
    name: "Semester 1",
    defaultSgpa: 9.15,
    subjects: [
      { code: "24APS0102", name: "Modern and Computational Physics", credits: 4, defaultGrade: "A+" },
      { code: "24APS1101", name: "Calculus and Statistical Analysis", credits: 4, defaultGrade: "A" },
      { code: "24CSE0101", name: "Problem Solving using Python Programming", credits: 5, defaultGrade: "A+" },
      { code: "24CSE0102", name: "Front End Engineering-I", credits: 5, defaultGrade: "O" },
      { code: "24MOC0118", name: "Technical Communication - I", credits: 2, defaultGrade: "O" },
      { code: "24UNI0125", name: "Disaster Management", credits: 0, defaultGrade: "O" },
    ],
  },
  "semester-2": {
    name: "Semester 2",
    defaultSgpa: 9.59,
    subjects: [
      { code: "24APS2101", name: "Differential Equations and Transformations", credits: 4, defaultGrade: "O" },
      { code: "24CSE0103", name: "Digital Electronics and Computer Architecture", credits: 4, defaultGrade: "A" },
      { code: "24CSE0105", name: "Operating System", credits: 3, defaultGrade: "O" },
      { code: "24CSE0106", name: "Source Code Management", credits: 2, defaultGrade: "O" },
      { code: "24CSE0107", name: "Fundamentals of C Programming", credits: 4, defaultGrade: "O" },
      { code: "24MOC0111", name: "Indian Knowledge System", credits: 2, defaultGrade: "O" },
      { code: "24MOC0129", name: "Technical Communication- II", credits: 2, defaultGrade: "O" },
      { code: "24UNI0106", name: "Environmental Studies", credits: 2, defaultGrade: "A+" },
      { code: "25AI001", name: "The Rudiments of Artificial Intelligence", credits: 1, defaultGrade: "O" },
    ],
  },
  "semester-3": {
    name: "Semester 3",
    defaultSgpa: 9.73,
    subjects: [
      { code: "24APS0105", name: "Discrete Structures", credits: 3, defaultGrade: "A+" },
      { code: "24CSE0208", name: "Data Structures using OOP - I", credits: 6, defaultGrade: "O" },
      { code: "24CSE0209", name: "Database Management System", credits: 3, defaultGrade: "O" },
      { code: "24CSE0210", name: "Object Oriented Software Engineering", credits: 3, defaultGrade: "A+" },
      { code: "24CSE0211", name: "Front-End Engineering-II", credits: 3, defaultGrade: "O" },
      { code: "24MOC0113", name: "Financial Accounting - I", credits: 2, defaultGrade: "O" },
      { code: "24UNI0105", name: "Human Values & Professional Ethics", credits: 2, defaultGrade: "O" },
    ],
  },
  "semester-4": {
    name: "Semester 4",
    defaultSgpa: 10.0,
    subjects: [
      { code: "24CSE0212", name: "Data Structures using OOP - II", credits: 5, defaultGrade: "O" },
      { code: "24CSE0213", name: "Linux Administration", credits: 3, defaultGrade: "O" },
      { code: "24CSE0214", name: "Backend Engineering-I", credits: 3, defaultGrade: "O" },
      { code: "24CSE0215", name: "Computer Networks", credits: 3, defaultGrade: "O" },
      { code: "24CSE0216", name: "Industry Immersion Series-I", credits: 1, defaultGrade: "O" },
      { code: "24CSE0222", name: "AI Stack: ML, Generative AI & Prompt Engineering", credits: 2, defaultGrade: "O" },
      { code: "24ECE0202", name: "Embedded Systems and IoT", credits: 4, defaultGrade: "O" },
      { code: "24UNI0124", name: "Cyber Security", credits: 3, defaultGrade: "O" },
    ],
  },
  "semester-5": {
    name: "Semester 5",
    defaultSgpa: 9.0,
    subjects: [
      { code: "CS501", name: "Machine Learning & Data Mining", credits: 4, defaultGrade: "A+" },
      { code: "CS502", name: "Cloud Computing & Distributed Systems", credits: 4, defaultGrade: "A" },
      { code: "CS503", name: "Cyber Security & Cryptography", credits: 3, defaultGrade: "A+" },
      { code: "CS504", name: "Compiler Design & Automata Theory", credits: 3, defaultGrade: "A" },
    ],
  },
  "semester-6": {
    name: "Semester 6",
    defaultSgpa: 9.0,
    subjects: [
      { code: "CS601", name: "DevOps & CI/CD Pipelines", credits: 4, defaultGrade: "A+" },
      { code: "CS602", name: "Mobile Application Development", credits: 3, defaultGrade: "A" },
      { code: "CS603", name: "Big Data Analytics & Hadoop", credits: 3, defaultGrade: "A+" },
      { code: "CS604", name: "Aptitude & Technical Interview Prep", credits: 2, defaultGrade: "O" },
    ],
  },
};

function CgpaCalculator() {
  const [activeTab, setActiveTab] = useState("sgpa"); // "sgpa" | "cgpa" | "target"
  const [selectedSemesterKey, setSelectedSemesterKey] = useState("semester-1");
  const [copied, setCopied] = useState(false);
  const [formula, setFormula] = useState("standard"); // "standard" ((x-0.75)*10) | "cbse" (x*9.5) | "direct" (x*10)

  /* ─── 1. SGPA Tab State ────────────────────────────────────────────── */
  const [sgpaSubjects, setSgpaSubjects] = useState(() => {
    const sem = SEMESTER_CURRICULUM["semester-1"];
    return sem.subjects.map((sub, idx) => ({
      id: `sub_${idx}_${Date.now()}`,
      code: sub.code,
      name: sub.name,
      credits: sub.credits,
      grade: sub.defaultGrade,
    }));
  });

  const handleSemesterChange = (e) => {
    const key = e.target.value;
    setSelectedSemesterKey(key);
    if (key !== "custom" && SEMESTER_CURRICULUM[key]) {
      const sem = SEMESTER_CURRICULUM[key];
      setSgpaSubjects(
        sem.subjects.map((sub, idx) => ({
          id: `sub_${idx}_${Date.now()}`,
          code: sub.code,
          name: sub.name,
          credits: sub.credits,
          grade: sub.defaultGrade,
        }))
      );
    }
  };

  const handleUpdateSubject = (id, field, value) => {
    setSgpaSubjects((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, [field]: value } : sub))
    );
  };

  const handleAddSubject = () => {
    setSgpaSubjects((prev) => [
      ...prev,
      {
        id: `custom_${Date.now()}`,
        code: `SUB${prev.length + 1}`,
        name: `New Subject ${prev.length + 1}`,
        credits: 3,
        grade: "A",
      },
    ]);
  };

  const handleRemoveSubject = (id) => {
    if (sgpaSubjects.length <= 1) return;
    setSgpaSubjects((prev) => prev.filter((sub) => sub.id !== id));
  };

  const handleSetAllGrades = (targetGrade) => {
    setSgpaSubjects((prev) =>
      prev.map((sub) => ({ ...sub, grade: targetGrade }))
    );
  };

  /* SGPA Calculation */
  const sgpaResult = useMemo(() => {
    let totalPoints = 0;
    let totalCredits = 0;

    sgpaSubjects.forEach((sub) => {
      const cr = parseFloat(sub.credits) || 0;
      const pts = GRADE_POINTS[sub.grade] ?? 0;
      if (cr > 0) {
        totalPoints += cr * pts;
        totalCredits += cr;
      }
    });

    const sgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return {
      sgpa: Math.round(sgpa * 100) / 100,
      totalCredits,
      totalPoints,
    };
  }, [sgpaSubjects]);

  /* ─── 2. CGPA Tab State (Semesters 1 to 6) ─────────────────────────── */
  const [cgpaSemesters, setCgpaSemesters] = useState([
    { id: "sem-1", name: "Semester 1", enabled: true, sgpa: "9.15", credits: 20 },
    { id: "sem-2", name: "Semester 2", enabled: true, sgpa: "9.59", credits: 24 },
    { id: "sem-3", name: "Semester 3", enabled: true, sgpa: "9.73", credits: 22 },
    { id: "sem-4", name: "Semester 4", enabled: true, sgpa: "10.00", credits: 24 },
    { id: "sem-5", name: "Semester 5", enabled: false, sgpa: "", credits: 14 },
    { id: "sem-6", name: "Semester 6", enabled: false, sgpa: "", credits: 12 },
  ]);

  const handleUpdateCgpaSemester = (id, field, value) => {
    setCgpaSemesters((prev) =>
      prev.map((sem) => (sem.id === id ? { ...sem, [field]: value } : sem))
    );
  };

  const handleApplySgpaToCgpa = () => {
    if (selectedSemesterKey === "custom") return;
    const semIndex = parseInt(selectedSemesterKey.replace("semester-", "")) - 1;
    if (semIndex >= 0 && semIndex < cgpaSemesters.length) {
      setCgpaSemesters((prev) =>
        prev.map((sem, idx) =>
          idx === semIndex
            ? { ...sem, enabled: true, sgpa: sgpaResult.sgpa.toFixed(2), credits: sgpaResult.totalCredits }
            : sem
        )
      );
      setActiveTab("cgpa");
    }
  };

  /* CGPA Calculation */
  const cgpaResult = useMemo(() => {
    let totalPoints = 0;
    let totalCredits = 0;
    let activeCount = 0;

    cgpaSemesters.forEach((sem) => {
      if (sem.enabled) {
        const sgpaVal = parseFloat(sem.sgpa);
        const crVal = parseFloat(sem.credits) || 0;
        if (!isNaN(sgpaVal) && sgpaVal > 0 && crVal > 0) {
          totalPoints += sgpaVal * crVal;
          totalCredits += crVal;
          activeCount += 1;
        }
      }
    });

    const cgpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    return {
      cgpa: Math.round(cgpa * 100) / 100,
      totalCredits,
      totalPoints,
      activeCount,
    };
  }, [cgpaSemesters]);

  /* ─── 3. Target CGPA Planner State ─────────────────────────────────── */
  const [planner, setPlanner] = useState({
    currentCgpa: "9.64",
    completedCredits: "90",
    targetCgpa: "9.75",
    remainingCredits: "26",
  });

  const handlePlannerChange = (field, value) => {
    setPlanner((prev) => ({ ...prev, [field]: value }));
  };

  const targetResult = useMemo(() => {
    const curr = parseFloat(planner.currentCgpa) || 0;
    const compCr = parseFloat(planner.completedCredits) || 0;
    const tgt = parseFloat(planner.targetCgpa) || 0;
    const remCr = parseFloat(planner.remainingCredits) || 0;

    if (compCr <= 0 || remCr <= 0 || tgt <= 0) {
      return { requiredSgpa: null, status: "enter_values", msg: "Please fill in all credit and CGPA values." };
    }

    const currentPoints = curr * compCr;
    const targetPoints = tgt * (compCr + remCr);
    const requiredPoints = targetPoints - currentPoints;
    const requiredSgpa = requiredPoints / remCr;
    const rounded = Math.round(requiredSgpa * 100) / 100;

    if (requiredSgpa > 10.0) {
      return {
        requiredSgpa: rounded,
        status: "impossible",
        msg: `Requires ${rounded.toFixed(2)} SGPA, which exceeds maximum possible (10.00). Try a slightly lower target.`,
      };
    } else if (requiredSgpa <= 0) {
      return {
        requiredSgpa: 0,
        status: "already_achieved",
        msg: "Your current CGPA already guarantees your target!",
      };
    } else if (requiredSgpa >= 9.5) {
      return {
        requiredSgpa: rounded,
        status: "challenging",
        msg: `Requires ${rounded.toFixed(2)} SGPA — nearly all 'O' grades needed in remaining subjects.`,
      };
    } else {
      return {
        requiredSgpa: rounded,
        status: "achievable",
        msg: `Achievable! Aim for an average of ${rounded.toFixed(2)} SGPA in upcoming semesters.`,
      };
    }
  }, [planner]);

  /* ─── Helpers: Percentage & Performance Tier ───────────────────────── */
  const calculatePercentage = (gpa) => {
    if (!gpa || gpa <= 0) return "0.0%";
    if (formula === "standard") {
      // AICTE formula: (GPA - 0.75) * 10
      const pct = Math.max(0, (gpa - 0.75) * 10);
      return `${pct.toFixed(1)}%`;
    } else if (formula === "cbse") {
      return `${(gpa * 9.5).toFixed(1)}%`;
    } else {
      return `${(gpa * 10).toFixed(1)}%`;
    }
  };

  const getTier = (gpa) => {
    if (gpa >= 9.0) return { label: "Outstanding / Distinction", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)" };
    if (gpa >= 8.0) return { label: "First Class with Distinction", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.15)" };
    if (gpa >= 7.0) return { label: "First Class", color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.15)" };
    if (gpa >= 6.0) return { label: "Second Class", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" };
    return { label: "Pass / Needs Improvement", color: "#ef4444", bg: "rgba(239, 68, 68, 0.15)" };
  };

  const handleCopyScore = (score, label) => {
    navigator.clipboard.writeText(`${label}: ${score.toFixed(2)} / 10.00 (${calculatePercentage(score)})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{ paddingBottom: "5rem" }}>
      {/* ── Page Header ────────────────────────────────────────────── */}
      <section className="section page-intro">
        <div className="container reveal in-view">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link
              to="/resources"
              className="btn btn-secondary"
              style={{
                padding: "0.55rem 1.15rem",
                fontSize: "0.88rem",
                fontWeight: 700,
                minHeight: "unset",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                borderRadius: "999px",
              }}
            >
              ← Academic Resources
            </Link>
            <span className="eyebrow">Academic Utility</span>
          </div>

          <h1>CGPA & SGPA Calculator</h1>
          <p style={{ maxWidth: "65ch" }}>
            Calculate your semester SGPA, overall degree CGPA across Semesters 1 to 6, and estimate targets with precision grade-weighting.
          </p>

          {/* Mode Switcher Tabs */}
          <div
            className="filter-bar"
            style={{
              marginTop: "2rem",
              display: "inline-flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <button
              type="button"
              className={`filter-btn ${activeTab === "sgpa" ? "active" : ""}`}
              onClick={() => setActiveTab("sgpa")}
            >
              🎯 Semester SGPA Calculator
            </button>
            <button
              type="button"
              className={`filter-btn ${activeTab === "cgpa" ? "active" : ""}`}
              onClick={() => setActiveTab("cgpa")}
            >
              📊 Cumulative CGPA Calculator
            </button>
            <button
              type="button"
              className={`filter-btn ${activeTab === "target" ? "active" : ""}`}
              onClick={() => setActiveTab("target")}
            >
              🚀 Target CGPA Planner
            </button>
          </div>
        </div>
      </section>

      {/* ── Main Calculator Grid ───────────────────────────────────── */}
      <section className="section" style={{ paddingTop: "0.5rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.8fr) minmax(300px, 1fr)", gap: "2rem", alignItems: "start" }}>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* TAB 1: SEMESTER SGPA CALCULATOR                             */}
          {/* ═══════════════════════════════════════════════════════════ */}
          {activeTab === "sgpa" && (
            <div className="calc-card" style={{ background: "var(--card)", border: "1.5px solid var(--card-border)", borderRadius: "20px", padding: "1.75rem" }}>
              {/* Semester picker header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 800 }}>Semester Subject Grades</h2>
                  <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                    Select a semester to auto-load syllabus subjects & credit weights:
                  </span>
                </div>

                <select
                  value={selectedSemesterKey}
                  onChange={handleSemesterChange}
                  style={{
                    padding: "0.6rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-soft)",
                    color: "var(--text)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                  }}
                >
                  <option value="semester-1">Semester 1 (6 Subjects)</option>
                  <option value="semester-2">Semester 2 (9 Subjects)</option>
                  <option value="semester-3">Semester 3 (7 Subjects)</option>
                  <option value="semester-4">Semester 4 (8 Subjects)</option>
                  <option value="semester-5">Semester 5 (4 Subjects)</option>
                  <option value="semester-6">Semester 6 (4 Subjects)</option>
                  <option value="custom">Custom Semester (Manual)</option>
                </select>
              </div>

              {/* Quick Preset Grade Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem", padding: "0.75rem 1rem", background: "rgba(255, 255, 255, 0.03)", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase" }}>Quick Preset:</span>
                {["O", "A+", "A", "B+", "B"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleSetAllGrades(g)}
                    style={{
                      background: "rgba(var(--accent-rgb, 100, 160, 255), 0.12)",
                      border: "1px solid var(--card-border)",
                      color: "var(--accent)",
                      borderRadius: "6px",
                      padding: "0.25rem 0.65rem",
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                  >
                    All {g}
                  </button>
                ))}
              </div>

              {/* Subjects Table */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1.5px solid var(--card-border)", color: "var(--muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      <th style={{ padding: "0.6rem 0.5rem", width: "40%" }}>Subject Name & Code</th>
                      <th style={{ padding: "0.6rem 0.5rem", textAlign: "center", width: "20%" }}>Credits</th>
                      <th style={{ padding: "0.6rem 0.5rem", textAlign: "center", width: "30%" }}>Grade</th>
                      <th style={{ padding: "0.6rem 0.5rem", textAlign: "right", width: "10%" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sgpaSubjects.map((sub, idx) => (
                      <tr
                        key={sub.id}
                        style={{ borderBottom: "1px solid rgba(120, 120, 120, 0.12)" }}
                      >
                        {/* Subject Title */}
                        <td style={{ padding: "0.75rem 0.5rem" }}>
                          <input
                            type="text"
                            value={sub.name}
                            onChange={(e) => handleUpdateSubject(sub.id, "name", e.target.value)}
                            style={{
                              width: "100%",
                              background: "transparent",
                              border: "none",
                              color: "var(--text)",
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              padding: "0.2rem 0",
                            }}
                          />
                          <div style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "monospace" }}>
                            {sub.code || `SUB-${idx + 1}`}
                          </div>
                        </td>

                        {/* Credits Input */}
                        <td style={{ padding: "0.75rem 0.5rem", textAlign: "center" }}>
                          <input
                            type="number"
                            min="0"
                            max="10"
                            step="0.5"
                            value={sub.credits}
                            onChange={(e) => handleUpdateSubject(sub.id, "credits", parseFloat(e.target.value) || 0)}
                            style={{
                              width: "60px",
                              padding: "0.4rem 0.5rem",
                              textAlign: "center",
                              borderRadius: "8px",
                              border: "1px solid var(--card-border)",
                              background: "var(--bg-soft)",
                              color: "var(--text)",
                              fontWeight: 700,
                            }}
                          />
                        </td>

                        {/* Grade Dropdown */}
                        <td style={{ padding: "0.75rem 0.5rem", textAlign: "center" }}>
                          <select
                            value={sub.grade}
                            onChange={(e) => handleUpdateSubject(sub.id, "grade", e.target.value)}
                            style={{
                              width: "100%",
                              maxWidth: "140px",
                              padding: "0.45rem 0.65rem",
                              borderRadius: "8px",
                              border: "1px solid var(--card-border)",
                              background: "var(--bg-soft)",
                              color: "var(--text)",
                              fontWeight: 700,
                              fontSize: "0.88rem",
                              cursor: "pointer",
                            }}
                          >
                            {GRADE_OPTIONS.map((g) => (
                              <option key={g.grade} value={g.grade}>
                                {g.grade} ({g.points} pts)
                              </option>
                            ))}
                          </select>
                        </td>

                        {/* Remove Action */}
                        <td style={{ padding: "0.75rem 0.5rem", textAlign: "right" }}>
                          <button
                            type="button"
                            onClick={() => handleRemoveSubject(sub.id)}
                            title="Remove subject"
                            disabled={sgpaSubjects.length <= 1}
                            style={{
                              background: "transparent",
                              border: "none",
                              color: sgpaSubjects.length <= 1 ? "var(--muted)" : "#ef4444",
                              cursor: sgpaSubjects.length <= 1 ? "not-allowed" : "pointer",
                              fontSize: "1.1rem",
                              padding: "0.2rem 0.5rem",
                              opacity: sgpaSubjects.length <= 1 ? 0.3 : 0.8,
                            }}
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add Subject & Quick Controls */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
                <button
                  type="button"
                  onClick={handleAddSubject}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1.5px dashed var(--card-border)",
                    color: "var(--text)",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  + Add Another Subject
                </button>

                {selectedSemesterKey !== "custom" && (
                  <button
                    type="button"
                    onClick={handleApplySgpaToCgpa}
                    className="btn btn-secondary"
                    style={{
                      padding: "0.6rem 1.25rem",
                      fontSize: "0.85rem",
                      minHeight: "unset",
                      borderRadius: "12px",
                    }}
                  >
                    Apply to Cumulative CGPA →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* TAB 2: CUMULATIVE CGPA CALCULATOR                           */}
          {/* ═══════════════════════════════════════════════════════════ */}
          {activeTab === "cgpa" && (
            <div className="calc-card" style={{ background: "var(--card)", border: "1.5px solid var(--card-border)", borderRadius: "20px", padding: "1.75rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 800 }}>Degree Semesters (1 to 6)</h2>
                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                  Toggle the semesters you have completed and enter their SGPA and credit load:
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {cgpaSemesters.map((sem) => (
                  <div
                    key={sem.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "0.9rem 1.25rem",
                      background: sem.enabled ? "var(--bg-soft)" : "rgba(255, 255, 255, 0.02)",
                      border: `1.5px solid ${sem.enabled ? "var(--accent)" : "var(--card-border)"}`,
                      borderRadius: "14px",
                      opacity: sem.enabled ? 1 : 0.6,
                      transition: "all 180ms ease",
                    }}
                  >
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", flex: 1 }}>
                      <input
                        type="checkbox"
                        checked={sem.enabled}
                        onChange={(e) => handleUpdateCgpaSemester(sem.id, "enabled", e.target.checked)}
                        style={{ width: "18px", height: "18px", accentColor: "var(--accent)", cursor: "pointer" }}
                      />
                      <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>
                        {sem.name}
                      </span>
                    </label>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <span style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase" }}>SGPA (0–10)</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          max="10"
                          placeholder="0.00"
                          disabled={!sem.enabled}
                          value={sem.sgpa}
                          onChange={(e) => handleUpdateCgpaSemester(sem.id, "sgpa", e.target.value)}
                          style={{
                            width: "85px",
                            padding: "0.4rem 0.6rem",
                            textAlign: "center",
                            borderRadius: "8px",
                            border: "1px solid var(--card-border)",
                            background: "var(--card)",
                            color: "var(--text)",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                          }}
                        />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <span style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase" }}>Credits</span>
                        <input
                          type="number"
                          step="0.5"
                          min="0"
                          max="40"
                          placeholder="Credits"
                          disabled={!sem.enabled}
                          value={sem.credits}
                          onChange={(e) => handleUpdateCgpaSemester(sem.id, "credits", parseFloat(e.target.value) || 0)}
                          style={{
                            width: "70px",
                            padding: "0.4rem 0.6rem",
                            textAlign: "center",
                            borderRadius: "8px",
                            border: "1px solid var(--card-border)",
                            background: "var(--card)",
                            color: "var(--text)",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* TAB 3: TARGET CGPA PLANNER                                  */}
          {/* ═══════════════════════════════════════════════════════════ */}
          {activeTab === "target" && (
            <div className="calc-card" style={{ background: "var(--card)", border: "1.5px solid var(--card-border)", borderRadius: "20px", padding: "1.75rem" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.35rem", fontWeight: 800 }}>Target CGPA Strategy</h2>
                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                  Find out the exact SGPA required in your remaining semesters to graduate with your dream score:
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--muted)", marginBottom: "0.4rem" }}>
                    Current Cumulative CGPA
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={planner.currentCgpa}
                    onChange={(e) => handlePlannerChange("currentCgpa", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "12px",
                      border: "1px solid var(--card-border)",
                      background: "var(--bg-soft)",
                      color: "var(--text)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--muted)", marginBottom: "0.4rem" }}>
                    Completed Credits So Far
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={planner.completedCredits}
                    onChange={(e) => handlePlannerChange("completedCredits", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "12px",
                      border: "1px solid var(--card-border)",
                      background: "var(--bg-soft)",
                      color: "var(--text)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--muted)", marginBottom: "0.4rem" }}>
                    Desired Target CGPA
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={planner.targetCgpa}
                    onChange={(e) => handlePlannerChange("targetCgpa", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "12px",
                      border: "1px solid var(--accent)",
                      background: "var(--bg-soft)",
                      color: "var(--text)",
                      fontWeight: 800,
                      fontSize: "1rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "var(--muted)", marginBottom: "0.4rem" }}>
                    Remaining Total Credits
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={planner.remainingCredits}
                    onChange={(e) => handlePlannerChange("remainingCredits", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "12px",
                      border: "1px solid var(--card-border)",
                      background: "var(--bg-soft)",
                      color: "var(--text)",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  />
                </div>
              </div>

              {/* Goal Feasibility Card */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "16px",
                  background:
                    targetResult.status === "impossible"
                      ? "rgba(239, 68, 68, 0.12)"
                      : targetResult.status === "challenging"
                      ? "rgba(245, 158, 11, 0.12)"
                      : "rgba(16, 185, 129, 0.12)",
                  border: `1.5px solid ${
                    targetResult.status === "impossible"
                      ? "#ef4444"
                      : targetResult.status === "challenging"
                      ? "#f59e0b"
                      : "#10b981"
                  }`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Required Average SGPA
                  </span>
                  {targetResult.requiredSgpa !== null && (
                    <span style={{ fontSize: "1.6rem", fontWeight: 900 }}>
                      {targetResult.requiredSgpa.toFixed(2)}
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.5 }}>
                  {targetResult.msg}
                </p>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* RIGHT SIDE: LIVE RESULTS CARD & GRADING SYSTEM            */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "100px" }}>

            {/* Live Score Display Card */}
            <div
              style={{
                background: "var(--card)",
                border: "1.5px solid var(--card-border)",
                borderRadius: "20px",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <span className="eyebrow" style={{ marginBottom: "0.5rem" }}>
                {activeTab === "sgpa" ? "Calculated SGPA" : activeTab === "cgpa" ? "Cumulative CGPA" : "Goal Target"}
              </span>

              {/* Big Score Number */}
              <div style={{ margin: "1rem 0" }}>
                <span
                  style={{
                    fontSize: "3.75rem",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {activeTab === "sgpa"
                    ? sgpaResult.sgpa.toFixed(2)
                    : activeTab === "cgpa"
                    ? cgpaResult.cgpa.toFixed(2)
                    : planner.targetCgpa}
                </span>
                <span style={{ fontSize: "1.25rem", color: "var(--muted)", fontWeight: 700 }}>
                  {" "}/ 10.00
                </span>
              </div>

              {/* Tier Badge */}
              {(() => {
                const score = activeTab === "sgpa" ? sgpaResult.sgpa : activeTab === "cgpa" ? cgpaResult.cgpa : parseFloat(planner.targetCgpa) || 0;
                const tier = getTier(score);
                return (
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "999px",
                      background: tier.bg,
                      color: tier.color,
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {tier.label}
                  </div>
                );
              })()}

              {/* Metrics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  padding: "1rem 0",
                  borderTop: "1px solid var(--card-border)",
                  borderBottom: "1px solid var(--card-border)",
                  marginBottom: "1.25rem",
                  fontSize: "0.85rem",
                }}
              >
                <div>
                  <span style={{ color: "var(--muted)", display: "block" }}>Percentage</span>
                  <strong style={{ fontSize: "1.1rem", color: "var(--accent)" }}>
                    {calculatePercentage(
                      activeTab === "sgpa" ? sgpaResult.sgpa : activeTab === "cgpa" ? cgpaResult.cgpa : parseFloat(planner.targetCgpa) || 0
                    )}
                  </strong>
                </div>

                <div>
                  <span style={{ color: "var(--muted)", display: "block" }}>Total Credits</span>
                  <strong style={{ fontSize: "1.1rem" }}>
                    {activeTab === "sgpa"
                      ? `${sgpaResult.totalCredits} Cr`
                      : activeTab === "cgpa"
                      ? `${cgpaResult.totalCredits} Cr`
                      : `${parseFloat(planner.completedCredits || 0) + parseFloat(planner.remainingCredits || 0)} Cr`}
                  </strong>
                </div>
              </div>

              {/* Percentage Formula Selection Toggle */}
              <div style={{ marginBottom: "1.25rem", textAlign: "left" }}>
                <label style={{ fontSize: "0.75rem", color: "var(--muted)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "0.35rem" }}>
                  Percentage Formula:
                </label>
                <select
                  value={formula}
                  onChange={(e) => setFormula(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.45rem 0.75rem",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "var(--bg-soft)",
                    color: "var(--text)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                  }}
                >
                  <option value="standard">AICTE / UGC: (GPA - 0.75) × 10</option>
                  <option value="cbse">CBSE Multiplier: GPA × 9.5</option>
                  <option value="direct">Direct Multiplier: GPA × 10</option>
                </select>
              </div>

              {/* Copy Score Button */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  handleCopyScore(
                    activeTab === "sgpa" ? sgpaResult.sgpa : activeTab === "cgpa" ? cgpaResult.cgpa : parseFloat(planner.targetCgpa) || 0,
                    activeTab === "sgpa" ? "SGPA" : "CGPA"
                  )
                }
                style={{ width: "100%", minHeight: "unset", padding: "0.75rem" }}
              >
                {copied ? "✓ Copied to Clipboard!" : "Copy Result Summary"}
              </button>
            </div>

            {/* Grading Scale Reference Card */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
                padding: "1.25rem",
              }}
            >
              <h3 style={{ margin: "0 0 0.75rem", fontSize: "0.95rem", fontWeight: 800 }}>
                10-Point Grade Scale Reference
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", fontSize: "0.8rem", textAlign: "center" }}>
                {GRADE_OPTIONS.map((g) => (
                  <div
                    key={g.grade}
                    style={{
                      padding: "0.4rem 0.2rem",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <strong style={{ color: "var(--accent)" }}>{g.grade}</strong>
                    <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{g.points} pts</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default CgpaCalculator;

