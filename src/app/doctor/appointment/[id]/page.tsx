'use client';

import React, { use } from 'react';
import Link from 'next/link';

const AppointmentDetailsPage = (props: { params: Promise<{ id: string }> }) => {
  const params = use(props.params);
  const appointment = {
    id: params.id,
    studentName: 'John Smith',
    studentEmail: 'john.smith@university.edu',
    emergencyContact: '+1 123-456-7890',
    symptoms: 'Feeling unwell, with a persistent cough and mild fever. It has been ongoing for the last 3 days.',
    medicalHistory: 'No significant medical history. No known allergies.',
    attachments: [
      { type: 'image', url: '/placeholder.svg', fileName: 'throat-photo.jpg' },
      { type: 'file', url: '#', fileName: 'blood-test-results.pdf' },
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Appointment Details</h1>
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-black">Student</h3>
              <p className="text-gray-700">{appointment.studentName}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Email</h3>
              <p className="text-gray-700">{appointment.studentEmail}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Emergency Contact</h3>
              <p className="text-gray-700">{appointment.emergencyContact}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-black mb-2">Symptoms</h3>
            <p className="text-gray-700 whitespace-pre-line">{appointment.symptoms}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-2">Medical History</h3>
            <p className="text-gray-700 whitespace-pre-line">{appointment.medicalHistory}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Attachments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointment.attachments.map((file, index) => (
                <a key={index} href={file.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-100 transition-colors">
                    <FileIcon />
                    <span className="text-gray-700 group-hover:text-black truncate">{file.fileName}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8 text-center">
            <Link href={`/doctor/prescription/${appointment.id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300">
                Create Prescription
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
)

export default AppointmentDetailsPage;
