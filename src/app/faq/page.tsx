'use client';

import React, { useState } from 'react';

const faqs = [
  {
    title: "Where is the university health center located?",
    description: "The UIU Health Center is located on the ground floor of the main student complex, next to the library.",
  },
  {
    title: "What are the health center's operating hours?",
    description: "The health center is open from 9:00 AM to 5:00 PM on weekdays. It is closed on Thursdays, Fridays and public holidays.",
  },
  {
    title: "Do I need an appointment to see a doctor?",
    description: "Walk-ins are welcome, but booking an appointment in advance reduces waiting time. No appointment is needed in emergencies.",
  },
  {
    title: "Is there a fee for consulting a doctor?",
    description: "Consultations with on-campus doctors are completely free for all registered students and staff. Fees may apply for specialized treatments or prescribed medication.",
  },
  {
    title: "What services does the mental health counseling provide?",
    description: "Confidential counseling is offered for stress, anxiety, depression, academic pressure and relationship issues. Sessions can be booked via the student dashboard.",
  },
  {
    title: "How do I submit a health form or medical report?",
    description: "Students can securely submit forms or reports by logging into their account and using the 'Submit Report' section.",
  },
  {
    title: "How does the portal help in emergencies?",
    description: "The Emergency Help section provides CPR guidelines, campus emergency contacts and information about nearby hospitals.",
  },
  {
    title: "Can I see real-time doctor availability through the portal?",
    description: "Yes, the doctor availability section shows doctor's and nurse's online/offline status and duty hours in real-time.",
  },
  {
    title: "Are women's health issues addressed here?",
    description: "Yes, guidance and confidential support are available for period pain, hygiene and other common women's health issues.",
  },
  {
    title: "Can students view prescriptions online?",
    description: "Yes, prescriptions given by doctors can be viewed and printed from the student dashboard.",
  },
  {
    title: "Can doctors edit or respond to submitted health forms?",
    description: "Doctors can review student's health forms from the dashboard and provide medicine recommendations or test suggestions.",
  },
  {
    title: "Is the portal only for students?",
    description: "No, the portal is designed for both UIU students and staff members.",
  },
  {
    title: "Is personal medical data safe?",
    description: "Yes, all personal and medical data are securely stored and accessible only by authorized doctors and administrators.",
  },
  {
    title: "Can students track the status of their submitted health complaints?",
    description: "Yes, the student dashboard shows whether a submitted form is pending, reviewed or responded to by a doctor.",
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
