import React from 'react';
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className="min-h-[82vh] bg-white flex justify-center items-center">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-12">Welcome to UIU HealthCare</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Doctor Card */}
          <Link href="/doctor/dashboard">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Doctor</h2>
              <p className="text-gray-700 mb-6">Access your doctor dashboard to manage appointments and patient records</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Sign in as a Doctor
              </button>
            </div>
          </Link>

          {/* Student Card */}
          <Link href="/student/dashboard">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow h-full flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h2 className="text-3xl font-bold text-green-900 mb-4">Student</h2>
              <p className="text-gray-700 mb-6">Access your student dashboard to book appointments and view health reports</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Sign in as a Student 
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
