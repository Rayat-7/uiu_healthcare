import React from 'react';

const DoctorAvailabilityPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Doctor Availability</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DoctorCard name="Dr. John Doe" specialization="General Physician" available={true} />
          <DoctorCard name="Dr. Jane Smith" specialization="Cardiologist" available={false} />
          <DoctorCard name="Dr. Peter Jones" specialization="Dermatologist" available={true} />
        </div>
      </main>
    </div>
  );
};

const DoctorCard = ({ name, specialization, available }: { name: string, specialization: string, available: boolean }) => {
    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold text-black">{name}</h2>
            <p className="text-gray-600">{specialization}</p>
            <div className={`mt-4 text-lg font-semibold ${available ? 'text-green-500' : 'text-red-500'}`}>
                {available ? 'Available' : 'Unavailable'}
            </div>
        </div>
    )
}


export default DoctorAvailabilityPage;
