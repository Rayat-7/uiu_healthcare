import React from 'react';
import Image from 'next/image';

const EmergencyPage = () => {
  const cprSteps = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgcw2M0Ricqkx0ch_ByTFMADKzcvMXFiXTiDvjOAil3WuO7F2lzqEoUEx2SP0FQ2FUrYHi8z3YE4Yh_t9_8nbiOMHTZk1ulT5-Xjn9E-UgM4jt9trYIxJ9sETGZoIJIe8o5E6x74FSFWVJVD6xc-qPNBlPel6Q8jf_AQIku-jfN-KHyNh1VlwgnMo7Zjs2mnz6y_puFXwWENLyk6R2JBBxWgQBy11ZMLiMjWxJ8eoTvQMIppYNrIr8TooAmz_nrUauhQXBjBhlCy4',
      title: 'Check for responsiveness',
      description: 'Tap and shout to check if the person responds.',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb3i4MYQFmIGnS56fJ1W_whGO5WhMXFGnWRFfbhMCaisCusiDLcVg2ssh9GJPZ5xrMBKrhw9y6Od51Fosae6qG3XtpvTbuQvZDf8JXnrLKBTC5JE8nCvBo4K-sozVbXKfnnauJyGJquMlluM-v3DsCA67_UYdO3tEskQVNQ2rVE0WYCwhnn7NrNLFuI6FcHXFJhFp2xQgnbkEGNdnjXi2Ouq0hDSR3g6XzXPBWoXZVi7MtXeh6yGxWxe9RQyNLqByHud7oelu0KBA',
      title: 'Call for help',
      description: 'Call emergency services immediately.',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxPP7QRD7T-PfTHH4GKPZzIQ5LvLsNdcklxqgFzP9BrLhNgeOpUVubSqGALFHtY0skwkKTYOrqCUwyWJLhsAK61B4ObqFapXfx7VQ6wmoqzG6l0ZDe2hhgN3xoa72Ox3-7FwNzImgedK6rA3OLFm_n5GrkX7XLBL1okiFdPQDjqjXjmKblRgyxIgHirakbBNzT6BCN4QQ51V8z9rZ2RWQBUK_JqGTfWdjcdhapCmR1VEoNPSmdwg93DJOJUgg3f3PNrEL9x1vGGlM',
      title: 'Start chest compressions',
      description: 'Push hard and fast in the center of the chest.',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADnoObpU6QA65u45otqlWLT3hqSTn-TmfagYSRPjuTmiHZyYZF69Haszhq7xlK1ZTZ2mOGlk_lWH7LqsVNXDk2orhTTFoHxprfJsDbuvFgw6Vn1xf9TJ2KdOc5AQHeJyiVmsGfxpcH9pyhhCLMRAU7Epo0uV6nxicf8zvpATirFc02_RMRmp89NSVJSelI3p5GyI2V8F3SrWapU-DmJawbufPR3UUS0WzmsfkGpkr-ucXGOpFXGwdCgvWyACCiPbpOOZJ9OOj-sJw',
      title: 'Continue until help arrives',
      description: 'Keep going until paramedics take over.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Emergency Help</h2>
            <p className="mt-4 text-lg text-gray-600">In case of an emergency, follow the steps below and call for help.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">CPR Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {cprSteps.map((step, index) => (
                <CprStep key={index} imageUrl={step.imageUrl} title={step.title} description={step.description} />
              ))}
            </div>
          </div>

          <HeartAttackWarning />

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nearest Hospitals</h3>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <a href="https://www.google.com/maps/search/?api=1&query=hospitals+near+United+International+University" target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://maps.google.com/maps?q=hospitals+near+United+International+University&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  aria-hidden="false"
                ></iframe>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold text-black mb-4">Emergency Contacts</h1>
          <p className="text-lg">In case of a medical emergency, please contact the following numbers immediately:</p>
          <ul className="list-disc list-inside mt-4 inline-block text-left">
            <li>Ambulance: <strong>999</strong></li>
            <li>UIU Medical Center: <strong>0123456789</strong></li>
          </ul>
        </div>
      </main>
    </div>
  );
};

const CprStep = ({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) => (
  <div className="bg-gray-50 rounded-lg p-4 h-full flex flex-col">
    <div className="relative w-full h-48 mb-4">
        <Image 
            src={imageUrl} 
            alt={title} 
            fill
            style={{objectFit: "cover"}}
            className="rounded-lg"
        />
    </div>
    <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-base text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const HeartAttackWarning = () => (
    <div className="mt-12 bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-4">If someone is having a heart attack:</h3>
        <ol className="list-decimal list-inside space-y-2">
            <li>
                Call emergency: <strong className="font-bold">999 (Bangladesh)</strong> or UIU Security: <strong className="font-bold">+880-2-55060000</strong>
            </li>
            <li>
                Perform CPR if trained: Chest compressions at 100-120 per minute.
            </li>
            <li>
                Use AED if available on campus.
            </li>
        </ol>
    </div>
);


export default EmergencyPage;