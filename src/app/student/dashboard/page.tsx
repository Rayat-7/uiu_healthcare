import React from 'react';

const StudentDashboardPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-10">Student Dashboard</h1>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto shadow-md">
                <h2 className="text-2xl font-semibold text-black mb-4">Your Health Tips</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Drink at least 8 glasses of water a day.</li>
                    <li>Get at least 30 minutes of exercise daily.</li>
                    <li>Eat a balanced diet with plenty of fruits and vegetables.</li>
                    <li>Get 7-8 hours of sleep per night.</li>
                </ul>
            </div>
        </main>
    </div>
  );
};

export default StudentDashboardPage;
