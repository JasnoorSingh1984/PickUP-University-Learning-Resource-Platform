import { useState, useEffect } from "react";
import api from "../services/api";
import jasnoorProfile from "../assets/jasnoor_profile.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "General Feedback",
    message: "",
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default

  const topics = [
    "General Feedback",
    "Resource Request",
    "Quiz Suggestion",
    "Bug Report",
  ];

  const faqs = [
    {
      q: "How quickly will I receive a response?",
      a: "Jasnoor checks messages regularly and typically responds within 12 to 24 hours. Urgent resource requests are prioritized!",
    },
    {
      q: "How can I request notes or question banks for my subject?",
      a: "Select 'Resource Request' in the form topic, enter your subject name, semester, and specific topics needed. We'll add them to the Resources tab.",
    },
    {
      q: "Is PickUP completely free to use?",
      a: "Yes, 100% free! PickUP was created by a student for students to provide seamless, open access to academic resources, roadmaps, and quizzes.",
    },
    {
      q: "Can I contribute questions or notes to PickUP?",
      a: "Absolutely! We welcome contributions. Select 'Quiz Suggestion' or 'General Feedback' and let us know what material you'd like to share.",
    },
  ];

  // Auto-fill username & email for logged in user
  useEffect(() => {
    const storedUserStr = localStorage.getItem("pickup_user");
    if (storedUserStr) {
      try {
        const user = JSON.parse(storedUserStr);
        setCurrentUser(user);
        setFormData((prev) => ({
          ...prev,
          name: user.fullName || user.name || prev.name,
          email: user.email || prev.email,
        }));
      } catch (err) {
        console.error("Error reading logged-in user details:", err);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (statusMsg.text) setStatusMsg({ type: "", text: "" });
  };

  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMsg({ type: "error", text: "Please fill in all required fields." });
      return;
    }
    // Open confirmation modal
    setShowConfirmModal(true);
  };

  const handleConfirmSend = async () => {
    setShowConfirmModal(false);
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `[Topic: ${formData.topic}] ${formData.message}`,
        userId: currentUser?.id || currentUser?._id || null,
      };

      const res = await api.submitContact(payload);
      setStatusMsg({
        type: "success",
        text: res.message || "Your message has been stored in MongoDB successfully!",
      });
      setFormData({
        name: currentUser ? (currentUser.fullName || currentUser.name || "") : "",
        email: currentUser ? (currentUser.email || "") : "",
        topic: "General Feedback",
        message: "",
      });
    } catch (err) {
      setStatusMsg({ type: "error", text: err.message || "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Header Section */}
      <section className="section page-intro">
        <div className="container reveal">
          <span className="eyebrow">Get in Touch</span>

          <h1>
            Suggest a resource, ask a question, or connect with the creator.
          </h1>

          <p>
            Have feedback, resource requests, or subject quiz suggestions? Send a message directly to Jasnoor Singh, creator of PickUP!
          </p>
        </div>
      </section>

      {/* Contact Main Grid Layout */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          {/* Send a Message Form */}
          <form className="contact-form reveal" onSubmit={handleFormSubmit}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 800 }}>Send a Message</h2>
              {currentUser && (
                <span
                  style={{
                    fontSize: "0.78rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    background: "rgba(16, 185, 129, 0.12)",
                    color: "#10b981",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    fontWeight: 600,
                  }}
                >
                  ✓ Auto-filled as {currentUser.fullName || currentUser.name || "Logged User"}
                </span>
              )}
            </div>

            {/* Topic Selector */}
            <div style={{ marginBottom: "0.5rem" }}>
              <span style={{ display: "block", fontSize: "0.85rem", color: "var(--muted)", marginBottom: "0.4rem" }}>
                Select Topic:
              </span>
              <div className="contact-topic-selector">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`contact-topic-chip ${formData.topic === t ? "active" : ""}`}
                    onClick={() => handleTopicSelect(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder={`Write your ${formData.topic.toLowerCase()} here...`}
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            {statusMsg.text && (
              <div
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                  backgroundColor: statusMsg.type === "error" ? "rgba(239,68,68,0.15)" : "rgba(16,185,129,0.15)",
                  color: statusMsg.type === "error" ? "#ef4444" : "#10b981",
                  border: `1px solid ${statusMsg.type === "error" ? "rgba(239,68,68,0.3)" : "rgba(16,185,129,0.3)"}`,
                  fontSize: "0.9rem",
                }}
              >
                {statusMsg.text}
              </div>
            )}

            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>

          {/* Creator Profile Card */}
          <aside
            className="faq-card reveal"
            style={{
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ position: "relative", display: "inline-block", marginBottom: "0.5rem" }}>
                <img
                  src={jasnoorProfile}
                  alt="Jasnoor Singh"
                  style={{
                    width: "95px",
                    height: "95px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid var(--accent)",
                    boxShadow: "0 0 20px rgba(100, 160, 255, 0.4)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "4px",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    border: "2px solid var(--bg)",
                    boxShadow: "0 0 8px #10b981",
                  }}
                  title="Online & Building PickUP"
                />
              </div>

              <h2 style={{ margin: "0.2rem 0 0.3rem", fontSize: "1.45rem", fontWeight: 800 }}>
                Jasnoor Singh
              </h2>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.35rem" }}>
                <span
                  className="eyebrow"
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.2rem 0.65rem",
                    background: "rgba(79, 140, 255, 0.12)",
                    borderColor: "rgba(79, 140, 255, 0.3)",
                  }}
                >
                  🎓 B.Tech 3rd Year CSE Student
                </span>
                <span
                  className="eyebrow"
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.2rem 0.65rem",
                    background: "rgba(16, 185, 129, 0.12)",
                    borderColor: "rgba(16, 185, 129, 0.3)",
                    color: "#10b981",
                  }}
                >
                  🚀 PickUP Creator
                </span>
              </div>
            </div>

            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
              💡 <strong>About:</strong> B.Tech 3rd-year Computer Science student who built PickUP to help fellow students easily access notes, roadmaps, and exam quizzes.
            </p>

            <div
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.04)",
                borderLeft: "3px solid var(--accent)",
                fontStyle: "italic",
                color: "var(--text)",
                fontSize: "0.84rem",
                lineHeight: 1.5,
              }}
            >
              &quot;Built to make learning, revision, and exam prep simple and accessible for every student.&quot;
            </div>

            {/* Creator Stats Grid */}
            <div className="creator-stats-grid">
              <div className="creator-stat-card">
                <span className="creator-stat-number">350+</span>
                <span className="creator-stat-label">Exam MCQs</span>
              </div>
              <div className="creator-stat-card">
                <span className="creator-stat-number">Semester 5</span>
                <span className="creator-stat-label">Core Focus</span>
              </div>
              <div className="creator-stat-card">
                <span className="creator-stat-number">100%</span>
                <span className="creator-stat-label">Free Access</span>
              </div>
              <div className="creator-stat-card">
                <span className="creator-stat-number">&lt; 24h</span>
                <span className="creator-stat-label">Response Time</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.2rem" }}>
              <span style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "99px", background: "rgba(255, 255, 255, 0.06)", color: "var(--muted)" }}>⚡ Fast Support</span>
              <span style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "99px", background: "rgba(255, 255, 255, 0.06)", color: "var(--muted)" }}>📚 Open Notes</span>
              <span style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "99px", background: "rgba(255, 255, 255, 0.06)", color: "var(--muted)" }}>🎯 Exam Ready</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Quick Contact Highlights Row */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-info-grid">
          <div className="info-card reveal" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>📬</div>
            <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.15rem", fontWeight: 800 }}>Direct Feedback</h3>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.55 }}>
              Share your thoughts, UI suggestions, or general feedback directly to improve PickUP for everyone.
            </p>
          </div>

          <div className="info-card reveal" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>📚</div>
            <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.15rem", fontWeight: 800 }}>Resource Requests</h3>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.55 }}>
              Need specific lecture slides, PDF notes, or past exam papers? Drop a request and we will upload them.
            </p>
          </div>

          <div className="info-card reveal" style={{ padding: "1.5rem" }}>
            <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>🧠</div>
            <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.15rem", fontWeight: 800 }}>Quiz Panel Suggestions</h3>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.55 }}>
              Suggest new high-yield MCQs or report answer key updates to keep our Quiz Panel accurate and sharp.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }} className="reveal">
            <span className="eyebrow">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: "var(--muted)", margin: "0.5rem 0 0" }}>
              Quick answers about contacting the creator, requesting resources, and contributing.
            </p>
          </div>

          <div className="faq-accordion reveal">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="faq-accordion-item"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="faq-accordion-question">
                    <span>{faq.q}</span>
                    <span style={{ fontSize: "1.2rem", transition: "transform 0.2s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                      ▾
                    </span>
                  </div>
                  {isOpen && <div className="faq-accordion-answer">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Re-confirmation Modal Overlay */}
      {showConfirmModal && (
        <div className="modal-overlay" onClick={() => setShowConfirmModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontSize: "1.4rem" }}>✉️</span>
                <h2 style={{ fontSize: "1.25rem" }}>Confirm Message</h2>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowConfirmModal(false)}
              >
                &times;
              </button>
            </div>

            <p className="modal-desc">
              Please review your message details before submitting to the creator.
            </p>

            <div className="confirm-preview-box">
              <div>
                <span style={{ color: "var(--muted)", fontSize: "0.8rem", display: "block", marginBottom: "0.15rem" }}>
                  Topic &amp; Sender:
                </span>
                <strong>[{formData.topic}]</strong> {formData.name} &lt;{formData.email}&gt;
              </div>
              <div style={{ marginTop: "0.4rem" }}>
                <span style={{ color: "var(--muted)", fontSize: "0.8rem", display: "block", marginBottom: "0.15rem" }}>
                  Message Preview:
                </span>
                <p className="confirm-preview-msg">&quot;{formData.message}&quot;</p>
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowConfirmModal(false)}
                style={{ minHeight: "2.6rem", padding: "0.4rem 1.1rem" }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirmSend}
                style={{ minHeight: "2.6rem", padding: "0.4rem 1.25rem" }}
              >
                Yes, Send Message 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Contact;