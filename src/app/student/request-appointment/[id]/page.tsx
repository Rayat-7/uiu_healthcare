'use client';

import React, { useState, use } from 'react';
import { FaFilePdf, FaImage, FaTrash } from 'react-icons/fa';

const RequestAppointmentPage = (props: { params: Promise<{ id: string }> }) => {
    const params = use(props.params);
    const [symptoms, setSymptoms] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            setAttachedFiles(prevFiles => [...prevFiles, ...newFiles]);
        }
    };

    const handleFileDelete = (fileToDelete: File) => {
        setAttachedFiles(prevFiles => prevFiles.filter(file => file !== fileToDelete));
    };

    const getFileIcon = (file: File) => {
        if (file.type.startsWith('image/')) {
            return <FaImage className="text-red-500" />;
        } else if (file.type === 'application/pdf') {
            return <FaFilePdf className="text-blue-500" />;
        }
        return null;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ doctorId: params.id, symptoms, medicalHistory, emergencyContact, attachedFiles });
    };

    return (
        <div className="min-h-screen bg-white text-black">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-center mb-10">Request an Appointment</h1>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="symptoms" className="block text-lg font-semibold text-gray-800 mb-2">Symptoms</label>
                            <textarea
                                id="symptoms"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={symptoms}
                                onChange={e => setSymptoms(e.target.value)}
                                placeholder="Describe your symptoms..."
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="medicalHistory" className="block text-lg font-semibold text-gray-800 mb-2">Medical History</label>
                            <textarea
                                id="medicalHistory"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={medicalHistory}
                                onChange={e => setMedicalHistory(e.target.value)}
                                placeholder="Provide a brief medical history..."
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="emergencyContact" className="block text-lg font-semibold text-gray-800 mb-2">Emergency Contact</label>
                            <input
                                type="text"
                                id="emergencyContact"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={emergencyContact}
                                onChange={e => setEmergencyContact(e.target.value)}
                                placeholder="Enter emergency contact number"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">Attach Files</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500">
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="fileUpload"
                                />
                                <label htmlFor="fileUpload" className="cursor-pointer text-indigo-600 font-semibold">
                                    Click to upload PDFs or images
                                </label>
                            </div>
                            <div className="mt-4 space-y-3">
                                {attachedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
                                        <div className="flex items-center space-x-3">
                                            {getFileIcon(file)}
                                            <span className="text-gray-700">{file.name}</span>
                                        </div>
                                        <button type="button" onClick={() => handleFileDelete(file)} className="text-red-600 hover:text-red-800">
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RequestAppointmentPage;
