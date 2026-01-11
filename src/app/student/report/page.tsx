import React from 'react';

const SubmitReportPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Submit Report</h1>
        <div className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-md p-8">
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="report">
                Upload Report/Image
              </label>
              <input 
                className="block w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 cursor-pointer focus:outline-none" 
                id="report" 
                type="file" 
              />
               <p className="mt-1 text-sm text-gray-500">PNG, JPG, or PDF (MAX. 800x400px).</p>
            </div>
            <div className="flex justify-center">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300" 
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubmitReportPage;
