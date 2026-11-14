import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { quizSubjects } from "../data/quizData";

function Quiz() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [authModalSubject, setAuthModalSubject] = useState(null);

  // Sync user authentication state
  useEffect(() => {
    const syncUser = () => {
      try {
        const storedUser = localStorage.getItem("pickup_user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };

    syncUser();
    window.addEventListener("authChange", syncUser);
    window.addEventListener("storage", syncUser);
    return () => {
      window.removeEventListener("authChange", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  // Scroll to top of page whenever opening a quiz, changing questions, or finishing
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedSubject, currentQuestionIndex, quizFinished]);

  const handleStartQuiz = (subject) => {
    if (!user) {
      setAuthModalSubject(subject);
      return;
    }
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleSelectOption = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === selectedSubject.questions[currentQuestionIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < selectedSubject.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    handleResetQuiz();
  };

  // Active Subject Quiz View (When Logged In & Subject Selected)
  if (selectedSubject && user) {
    const currentQ = selectedSubject.questions[currentQuestionIndex];
    const totalQ = selectedSubject.questions.length;
    const progressPercent = ((currentQuestionIndex + (quizFinished ? 1 : 0)) / totalQ) * 100;

    return (
      <main>
        <section className="section page-intro" style={{ paddingBottom: "1.5rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBackToSubjects}
              style={{ marginBottom: "1.5rem", padding: "0.5rem 1.1rem", fontSize: "0.9rem" }}
            >
              ← Back to All Subjects
            </button>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span className="eyebrow">{selectedSubject.semester}</span>
                <h1 style={{ fontSize: "2rem", margin: "0.4rem 0 0" }}>
                  {selectedSubject.icon} {selectedSubject.title} Quiz
                </h1>
              </div>

              {!quizFinished && (
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>Question</span>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                    {currentQuestionIndex + 1} <span style={{ fontSize: "1rem", color: "var(--muted)" }}>/ {totalQ}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div style={{
              width: "100%",
              height: "8px",
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "999px",
              marginTop: "1.5rem",
              overflow: "hidden"
            }}>
              <div style={{
                height: "100%",
                width: `${progressPercent}%`,
                background: "var(--accent)",
                borderRadius: "999px",
                transition: "width 0.3s ease"
              }} />
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: "1rem" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            {quizFinished ? (
              /* Quiz Finished Result Card */
              <div className="reveal in-view" style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "24px",
                padding: "3rem 2rem",
                textAlign: "center",
                boxShadow: "var(--shadow)"
              }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                  {score === totalQ ? "🏆" : score >= totalQ / 2 ? "🎉" : "📚"}
                </div>

                <h2 style={{ fontSize: "2rem", margin: 0 }}>Quiz Complete!</h2>

                <div style={{ margin: "1.5rem 0", fontSize: "3rem", fontWeight: 800, color: "var(--accent)" }}>
                  {score} / {totalQ}
                </div>

                <p style={{ color: "var(--muted)", maxWidth: "450px", margin: "0 auto 2rem", fontSize: "1.05rem" }}>
                  {score === totalQ
                    ? "Perfect Score! You have mastered this subject."
                    : score >= totalQ / 2
                    ? "Great job! You have a solid grasp of key concepts."
                    : "Keep practicing! Review your notes and try again."}
                </p>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <button type="button" className="btn btn-primary" onClick={handleResetQuiz}>
                    🔄 Retake Quiz
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleBackToSubjects}>
                    📚 Choose Another Subject
                  </button>
                </div>
              </div>
            ) : (
              /* Active Question Card */
              <div className="reveal in-view" style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                borderRadius: "24px",
                padding: "2rem",
                boxShadow: "var(--shadow)"
              }}>
                <h2 style={{ fontSize: "1.35rem", lineHeight: 1.5, marginTop: 0, marginBottom: "1.75rem" }}>
                  {currentQ.question}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {currentQ.options.map((optionText, idx) => {
                    let optionStyle = {
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      borderRadius: "14px",
                      border: "1px solid var(--card-border)",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "var(--text)",
                      cursor: isSubmitted ? "default" : "pointer",
                      textAlign: "left",
                      fontSize: "1rem",
                      transition: "all 0.2s ease"
                    };

                    if (selectedOption === idx) {
                      optionStyle.border = "1px solid var(--accent)";
                      optionStyle.background = "rgba(79, 140, 255, 0.12)";
                    }

                    if (isSubmitted) {
                      if (idx === currentQ.correctAnswer) {
                        optionStyle.border = "1px solid #10b981";
                        optionStyle.background = "rgba(16, 185, 129, 0.15)";
                        optionStyle.color = "#10b981";
                      } else if (selectedOption === idx && idx !== currentQ.correctAnswer) {
                        optionStyle.border = "1px solid #ef4444";
                        optionStyle.background = "rgba(239, 68, 68, 0.15)";
                        optionStyle.color = "#ef4444";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        style={optionStyle}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isSubmitted}
                      >
                        <span style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.08)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          flexShrink: 0
                        }}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{optionText}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Submit / Next Button & Explanation */}
                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {!isSubmitted ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={selectedOption === null}
                      onClick={handleSubmitAnswer}
                      style={{
                        opacity: selectedOption === null ? 0.5 : 1,
                        cursor: selectedOption === null ? "not-allowed" : "pointer",
                        width: "100%"
                      }}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <>
                      <div style={{
                        padding: "1.25rem",
                        borderRadius: "14px",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderLeft: "4px solid var(--accent)",
                        color: "var(--muted)",
                        fontSize: "0.95rem",
                        lineHeight: 1.6
                      }}>
                        <strong style={{ color: "var(--text)", display: "block", marginBottom: "0.3rem" }}>
                          💡 Explanation:
                        </strong>
                        {currentQ.explanation}
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleNextQuestion}
                        style={{ width: "100%" }}
                      >
                        {currentQuestionIndex + 1 === totalQ ? "See Results 🎉" : "Next Question →"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    );
  }

  // Subject Selector Dashboard View (Accessible to All Users)
  const categories = ["all", "Web Dev", "Languages", "Systems", "Databases", "Algorithms", "Backend", "AI & ML"];

  const filteredSubjects = quizSubjects.filter((subj) => {
    const targetFilter = categoryFilter.toLowerCase();
    const subjCategory = (subj.category || "").toLowerCase();
    const matchesCategory = targetFilter === "all" || subjCategory === targetFilter;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      (subj.title || "").toLowerCase().includes(query) ||
      (subj.description || "").toLowerCase().includes(query) ||
      (subj.semester || "").toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section className="section page-intro">
        <div className="container reveal in-view">
          <span className="eyebrow">Subject Quiz Panel</span>

          <h1 style={{ marginTop: "0.5rem" }}>Test your knowledge across your degree subjects.</h1>

          <p style={{ maxWidth: "60ch" }}>
            Explore available subject quizzes below. Select any subject to start testing your understanding!
          </p>

          {!user && (
            <div style={{
              margin: "1.25rem 0 0",
              padding: "0.85rem 1.25rem",
              borderRadius: "16px",
              background: "rgba(79, 140, 255, 0.1)",
              border: "1px solid rgba(79, 140, 255, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              maxWidth: "680px"
            }}>
              <span style={{ fontSize: "0.92rem", color: "var(--text)" }}>
                💡 <strong>Notice:</strong> You can view all quiz topics below. Sign in to attempt quizzes and track your scores!
              </span>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/signin")}
                style={{ padding: "0.45rem 1rem", fontSize: "0.85rem", minHeight: "auto" }}
              >
                Sign In
              </button>
            </div>
          )}

          <div className="filter-bar-shell" style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="search-input-wrapper">
              <input
                type="text"
                className="resource-search-input"
                placeholder="🔍 Search quiz subjects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-bar" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${categoryFilter.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container resource-grid">
          {filteredSubjects.map((subject) => (
            <article
              key={subject.id}
              className="resource-card interactive-card reveal in-view"
              onClick={() => handleStartQuiz(subject)}
              style={{ cursor: "pointer" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="resource-tag">{subject.semester}</span>
                <span className="card-arrow-icon" style={{ fontSize: "1.5rem" }}>{subject.icon}</span>
              </div>

              <h3 style={{ marginTop: "0.8rem", marginBottom: "0.5rem" }}>{subject.title}</h3>

              <p style={{ fontSize: "0.92rem", lineHeight: 1.6 }}>{subject.description}</p>

              <div className="card-footer-action" style={{ marginTop: "1rem" }}>
                <span className="action-title">{subject.questions.length} Questions</span>
                <span className="action-hint">
                  {user ? "Start Quiz →" : "🔒 Sign In to Start"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Auth Modal when unauthenticated user clicks Start Quiz */}
      {authModalSubject && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "1rem"
        }}
        onClick={() => setAuthModalSubject(null)}
        >
          <div
            style={{
              background: "var(--card)",
              border: "1.5px solid var(--card-border)",
              borderRadius: "24px",
              padding: "2.5rem 2rem",
              maxWidth: "480px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
              animation: "slideDownFade 0.25s ease"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🔒</div>

            <h2 style={{ fontSize: "1.6rem", margin: "0 0 0.5rem" }}>Sign In Required</h2>

            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.75rem" }}>
              You need to be signed in to take the <strong>{authModalSubject.title}</strong> quiz and track your score.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link
                to="/signin"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={() => setAuthModalSubject(null)}
              >
                Sign In Now
              </Link>

              <Link
                to="/signup"
                className="btn btn-secondary"
                style={{ width: "100%" }}
                onClick={() => setAuthModalSubject(null)}
              >
                Create an Account
              </Link>

              <button
                type="button"
                onClick={() => setAuthModalSubject(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  fontFamily: "inherit"
                }}
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Quiz;
