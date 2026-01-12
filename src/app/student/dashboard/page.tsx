
import React from 'react';
import Link from 'next/link';

const appointments = [
    {
        doctorName: 'Dr. John Doe',
        status: 'Pending',
        id: '1',
    },
    {
        doctorName: 'Dr. Jane Smith',
        status: 'Prescription sent',
        id: '2',
    },
    {
        doctorName: 'Dr. Emily White',
        status: 'Completed',
        id: '3',
    },
];

const healthTips = [
    'Drink at least 8 glasses of water a day.',
    'Get at least 30 minutes of exercise daily.',
    'Eat a balanced diet with plenty of fruits and vegetables.',
    'Get 7-8 hours of sleep per night.',
];

const StudentDashboardPage = () => {
  const ongoingAppointments = appointments.filter(appointment => appointment.status !== 'Completed');

  return (
      <div className="min-h-screen bg-white text-black">
          <main className="container mx-auto px-4 py-12">
              <h1 className="text-3xl font-bold text-center mb-10">Student Dashboard</h1>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto shadow-md mb-10">
                  <h2 className="text-2xl font-semibold text-black mb-4">Your Appointments</h2>
                  <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                          <thead className="bg-gray-100">
                              <tr>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                              {ongoingAppointments.map((appointment) => (
                                  <tr key={appointment.id}>
                                      <td className="px-6 py-4 whitespace-nowrap">{appointment.doctorName}</td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                              appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                              appointment.status === 'Prescription sent' ? 'bg-blue-100 text-blue-800' :
                                              'bg-green-100 text-green-800'
                                          }`}>
                                              {appointment.status}
                                          </span>
                                      </td>
                                      <td className="px-6 py-4 whitespace-nowrap">
                                          <Link href={`/student/appointment/${appointment.id}`} className="text-indigo-600 hover:text-indigo-900">
                                              Check Details
                                          </Link>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto shadow-md">
                  <h2 className="text-2xl font-semibold text-black mb-4">Your Health Tips</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {healthTips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                      ))}
                  </ul>
              </div>
          </main>
      </div>
  );
};

export default StudentDashboardPage;
