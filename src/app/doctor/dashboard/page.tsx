'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Switch } from '@headlessui/react';

const DoctorDashboardPage = () => {
    const [isAvailable, setIsAvailable] = useState(false);

    const appointments = [
        { id: '1', name: 'John Smith', requestType: 'New Request' },
        { id: '2', name: 'Jane Doe', requestType: 'Follow up Request' },
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-center mb-10">Doctor Dashboard</h1>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8 text-center">
                        <h2 className="text-2xl font-semibold mb-6">Set your availability for today</h2>
                        <div className="flex justify-center items-center space-x-4">
                            <span className={`font-bold ${!isAvailable ? 'text-gray-500' : 'text-green-500'}`}>
                                {isAvailable ? 'Available' : 'Unavailable'}
                            </span>
                            <Switch
                                checked={isAvailable}
                                onChange={setIsAvailable}
                                className={`${isAvailable ? 'bg-green-500' : 'bg-gray-300'} relative inline-flex h-8 w-14 items-center rounded-full transition-colors`}
                            >
                                <span className="sr-only">Set availability</span>
                                <span
                                    className={`${isAvailable ? 'translate-x-7' : 'translate-x-1'} inline-block h-6 w-6 transform rounded-full bg-white transition-transform`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-black mb-6">Appointment Requests</h2>
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Patient Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Request Type
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {appointments.map(appointment => (
                                    <tr key={appointment.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.requestType}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link href={`/doctor/appointment/${appointment.id}`} className="text-blue-500 hover:text-blue-600 hover:underline transition duration-300">
                                                View Details
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

export default DoctorDashboardPage;
