import { useState } from "react";
import "./Subscribe.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      setSuccess("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-left">
            <div className="title">Subscribe Our Newsletter</div>
            <div className="subscribe-subtitle">
              Subscribe to our newsletter to receive early discount offers, updates and info
            </div>
          </div>

          <div className="subscribe-right">
            
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`subscribe-input ${error ? "error" : ""}`}
              />
              <button type="submit" className="subscribe-btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            {error && <p className="subscribe-error">{error}</p>}
            {success && <p className="subscribe-success">{success}</p>}


        </div>
      </div>
    </section>
  );
}
