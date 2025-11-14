import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../sections/FAQ.css";

const faqData = [
  {
    question: "Can I access my stored items anytime?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
  },
  {
    question: "Do you offer climate-controlled storage units?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
  },
  {
    question: "How long can I rent a storage unit?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
  },
  {
    question: "Can I change the size of my storage unit if I need more space?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
  },
  {
    question: "How do I pay for my storage unit?",
    answer:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion-container">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className={`faq-question ${openIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            {item.question}
            <i
              className={`bi ${
                openIndex === index ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>

          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
