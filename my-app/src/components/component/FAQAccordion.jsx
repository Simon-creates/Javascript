import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../sections/FAQ.css";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs")
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => console.error("FAQ API error:", err));
  }, []);

  return (
    <div className="faq-accordion-container">

      {faqData.length === 0 && <p>Laddar FAQ...</p>}

      {faqData.map((item, index) => (
        <div key={item.id} className="faq-item">
          
          <button
            className={`faq-question ${openIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            {item.title}

            <i
              className={`bi ${
                openIndex === index ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>

          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
