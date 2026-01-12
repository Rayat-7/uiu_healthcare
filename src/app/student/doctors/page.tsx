"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const doctors = [
    { id: 1, name: "Dr. John Doe", specialization: "General Physician", available: true },
    { id: 2, name: "Dr. Jane Smith", specialization: "Cardiologist", available: false },
    { id: 3, name: "Dr. Peter Jones", specialization: "Dermatologist", available: true },
    { id: 4, name: "Dr. Sarah Lee", specialization: "Pediatrician", available: true },
    { id: 5, name: "Dr. David Chen", specialization: "Neurologist", available: false },
];

const DoctorAvailabilityPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchSpecialty, setSearchSpecialty] = useState('');

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            doctor.specialization.toLowerCase().includes(searchSpecialty.toLowerCase())
        );
    }, [searchTerm, searchSpecialty]);

    return (
        <div className="min-h-screen bg-white text-black">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-center mb-10">Our Doctors</h1>
                
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search by doctor's name..."
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Search by specialty..."
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={searchSpecialty}
                        onChange={e => setSearchSpecialty(e.target.value)}
                    />
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto shadow-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredDoctors.map((doctor) => (
                                    <tr key={doctor.id}>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{doctor.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">{doctor.specialization}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                                                doctor.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                                {doctor.available ? 'Available' : 'Unavailable'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Link href={`/student/request-appointment/${doctor.id}`} className="text-indigo-600 hover:text-indigo-900 font-semibold">
                                                Request Appointment
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DoctorAvailabilityPage;
