import { useState } from "react";
import "./GetInTouch.css";

export default function GetInTouch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    comment: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.subject || !form.comment) {
      setError("All required fields must be filled in.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      if (!response.ok) throw new Error("API error");

      setSuccess("Thank you! Your message has been sent.");

      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        comment: ""
      });

    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="getintouch">
      <div className="getintouch_container">

        
        <div className="left-content">
          <h5 className="getintouch-subtitle">Get in Touch</h5>
          <h2 className="getintouch-title">Get Personalized Assistance – Contact Us</h2>

          <p className="getintouch-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>

          <div className="gray-box"></div>
        </div>

        
        <div className="form-card">
          <form className="contact-form" onSubmit={handleSubmit}>

            <label className="label">Your Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="input"
            />

            <div className="two-columns">
              <div className="column">
                <label className="label">Email <span className="required">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div className="column">
                <label className="label">Telephone</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Telephone"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            <label className="label">Subject <span className="required">*</span></label>
            <input
              type="text"
              name="subject"
              placeholder="How can we help you"
              value={form.subject}
              onChange={handleChange}
              className="input"
            />

            <label className="label">Comments / Questions <span className="required">*</span></label>
            <textarea
              name="comment"
              placeholder="Comments"
              value={form.comment}
              onChange={handleChange}
              className="textarea"
            ></textarea>

            <button className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>

            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
