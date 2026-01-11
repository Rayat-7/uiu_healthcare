import React from 'react';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-sm">
        <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-black mb-8">Sign In</h1>
            <form>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email or ID
                </label>
                <input 
                    className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    id="username" 
                    type="text" 
                    placeholder="you@example.com" 
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input 
                    className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                />
            </div>
            <div className="flex items-center justify-center">
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-300" 
                    type="button"
                >
                Sign In
                </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
