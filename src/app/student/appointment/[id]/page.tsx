'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';

const AppointmentDetailsPage = (props: { params: Promise<{ id: string }> }) => {
    const params = use(props.params);
    const appointment = {
        id: params.id,
        doctorName: 'Dr. John Doe',
        status: 'Prescription sent', // This controls the logic
        date: '2024-07-25',
        time: '10:00 AM',
        details: 'This is a follow-up appointment to discuss the results of your recent tests.',
        prescription: {
            fileName: 'prescription.pdf',
            url: '/placeholder.svg' // Replace with the actual URL
        }
    };

    const [newSymptoms, setNewSymptoms] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [attachment, setAttachment] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setAttachment(event.target.files[0]);
        }
    };

    const handleFileDelete = () => {
        setAttachment(null);
    };

    const handleReAppointmentRequest = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newSymptoms.trim()) {
            alert('Please describe your new symptoms.');
            return;
        }
        if (!healthStatus) {
            alert('Please select your current health status.');
            return;
        }
        console.log({
            originalAppointmentId: appointment.id,
            newSymptoms,
            healthStatus,
            attachment,
        });
        alert('Re-appointment requested successfully!');
        setNewSymptoms('');
        setHealthStatus('');
        setAttachment(null);
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-center mb-10">Appointment Details</h1>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto shadow-md">
                    {/* Appointment details... */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-black">Doctor: <span className="font-normal">{appointment.doctorName}</span></h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-black">Status: 
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                appointment.status === 'Prescription sent' ? 'bg-blue-100 text-blue-800' :
                                'bg-green-100 text-green-800'
                            }`}>
                                {appointment.status}
                            </span>
                        </h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-black">Date: <span className="font-normal">{appointment.date}</span></h2>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-black">Time: <span className="font-normal">{appointment.time}</span></h2>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-black">Details:</h2>
                        <p className="text-gray-700">{appointment.details}</p>
                    </div>

                    {appointment.prescription && (
                        <div className="border-t pt-6">
                            <h2 className="text-xl font-semibold text-black mb-4">Prescription</h2>
                            <a href={appointment.prescription.url} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4 hover:bg-gray-100 transition-colors">
                                    <FileIcon />
                                    <span className="text-gray-700 group-hover:text-black truncate">{appointment.prescription.fileName}</span>
                                </div>
                            </a>
                        </div>
                    )}

                    {/* Re-appointment Section */}
                    {appointment.status === 'Prescription sent' && (
                        <div className="border-t mt-8 pt-6">
                            <h2 className="text-2xl font-semibold text-black mb-4">Request a Re-appointment</h2>
                            <form onSubmit={handleReAppointmentRequest}>
                                <div className="mb-4">
                                    <label htmlFor="newSymptoms" className="block text-lg font-medium text-black mb-2">New Symptoms</label>
                                    <textarea id="newSymptoms" value={newSymptoms} onChange={(e) => setNewSymptoms(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-black bg-white focus:ring-indigo-500 focus:border-indigo-500" rows={4} placeholder="Describe any new or changed symptoms..."></textarea>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="healthStatus" className="block text-lg font-medium text-black mb-2">Health Status</label>
                                    <select id="healthStatus" value={healthStatus} onChange={(e) => setHealthStatus(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md text-black bg-white focus:ring-indigo-500 focus:border-indigo-500">
                                        <option value="" disabled>Select status</option>
                                        <option value="Improved">Improved</option>
                                        <option value="Unchanged">Unchanged</option>
                                        <option value="Worsened">Worsened</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-lg font-medium text-black mb-2">Add Attachment (PDF/Image)</label>
                                    {!attachment ? (
                                        <label htmlFor="attachment-upload" className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md transition-colors">
                                            Choose File
                                        </label>
                                    ) : (
                                        <div className="flex items-center justify-between border border-gray-300 rounded-md p-2">
                                            <div className="flex items-center space-x-2">
                                                <FileIcon />
                                                <span className="text-black">{attachment.name}</span>
                                            </div>
                                            <button onClick={handleFileDelete} type="button" className="p-1 rounded-full hover:bg-gray-200">
                                                <TrashIcon />
                                            </button>
                                        </div>
                                    )}
                                    <input id="attachment-upload" type="file" accept="image/*,application/pdf" onChange={handleFileChange} className="hidden" />
                                </div>

                                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors">Request Re-appointment</button>
                            </form>
                        </div>
                    )}

                    <div className="text-center mt-8">
                        <Link href="/student/dashboard" className="text-indigo-600 hover:text-indigo-900">Back to Dashboard</Link>
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
);

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

export default AppointmentDetailsPage;
