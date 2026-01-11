import React from 'react';
import Link from 'next/link';

const DoctorDashboardPage = () => {
  // Dummy data for appointment requests
  const appointments = [
    { id: '1', name: 'John Smith' },
    { id: '2', name: 'Jane Doe' },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-10">Doctor Dashboard</h1>
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8 text-center">
                    <h2 className="text-2xl font-semibold mb-6">Set your availability for today</h2>
                    <div className="flex justify-center space-x-6">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300">
                            Available
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300">
                            Unavailable
                        </button>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-black mb-6">Appointment Requests</h2>
                <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                    {appointments.map(appointment => (
                        <AppointmentRequest key={appointment.id} id={appointment.id} name={appointment.name} />
                    ))}
                </div>
            </div>
        </main>
    </div>
  );
};

const AppointmentRequest = ({ id, name }: { id: string, name: string }) => {
    return (
        <div className="border-b border-gray-200 p-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-black">{name}</h3>
            <Link href={`/doctor/appointment/${id}`} className="text-blue-500 hover:text-blue-600 hover:underline transition duration-300">
                View Details
            </Link>
        </div>
    )
}

export default DoctorDashboardPage;
