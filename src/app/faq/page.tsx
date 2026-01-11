'use client';

import React, { useState } from 'react';

const faqs = [
  {
    title: "Where is the university health center located?",
    description: "The UIU Health Center is located on the ground floor of the main student complex, next to the library.",
  },
  {
    title: "What are the health center's operating hours?",
    description: "The health center is open from 9:00 AM to 5:00 PM on weekdays and from 10:00 AM to 2:00 PM on Saturdays. It is closed on Sundays and public holidays.",
  },
  {
    title: "Do I need an appointment to see a doctor?",
    description: "Walk-ins are welcome, but we recommend booking an appointment through this portal to avoid long waiting times. For emergencies, no appointment is needed.",
  },
  {
    title: "Is there a fee for consulting a doctor?",
    description: "Consultations with our on-campus doctors are free for all registered students and staff members. However, fees may apply for specialized treatments or prescribed medication.",
  },
  {
    title: "What services does the mental health counseling provide?",
    description: "Our counseling services offer confidential support for stress, anxiety, depression, academic pressure, and relationship issues. You can book a session through the student dashboard.",
  },
  {
    title: "How do I submit a health form or medical report?",
    description: "You can securely submit your health forms and medical reports by logging into your student account and navigating to the 'Submit Report' section.",
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Health FAQs</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} title={faq.title} description={faq.description} />
          ))}
        </div>
      </main>
    </div>
  );
};

const FaqItem = ({ title, description }: { title: string, description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="p-6 pt-0">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
