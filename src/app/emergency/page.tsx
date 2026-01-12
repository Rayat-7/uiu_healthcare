
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Activity, Search, AlertCircle, Clock, HeartPulse, X } from 'lucide-react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

const EmergencyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<null | { condition: string; action: string; icon: string; detailed: string }>(null);

  const emergencyContacts = [
    { label: 'National Emergency', number: '999', icon: <AlertCircle className="text-red-600" /> },
    { label: 'UIU Medical Center', number: '0123456789', icon: <Activity className="text-red-600" /> },
    { label: 'Campus Security', number: '0198765432', icon: <MapPin className="text-red-600" /> },
  ];

  const cprSteps = [
    { title: 'Verify Scene Safety', desc: 'Ensure the area is safe for both you and the victim.', img: '/images/emergency/scene_safety.png' },
    { title: 'Check Response', desc: 'Tap shoulders and shout. Look for chest rising.', img: '/images/emergency/check_response.png' },
    { title: 'High-Quality Compressions', desc: 'Center of chest, 2-inch depth, 100 bpm.', img: '/images/emergency/compressions.png' },
    { title: 'AED Integration', desc: 'Follow AED voice prompts as soon as it arrives.', img: '/images/emergency/aed.png' },
  ];

  const visualGuides = [
    { 
      condition: 'Severe Bleeding', 
      action: 'Apply pressure with clean cloth.', 
      icon: '🩸',
      detailed: '1. Apply firm, steady pressure directly over the wound with a clean cloth or bandage. \n2. Do NOT remove the cloth if it becomes soaked; add more layers on top. \n3. Elevate the injured limb above heart level if possible. \n4. If bleeding is life-threatening and pressure fails, use a tourniquet if trained.'
    },
    { 
      condition: 'Choking', 
      action: 'Give 5 back blows & 5 abdominal thrusts.', 
      icon: '🖐️',
      detailed: '1. Stand behind the person and wrap your arms around their waist. \n2. Make a fist and place it just above the navel. \n3. Perform 5 quick, upward abdominal thrusts (Heimlich maneuver). \n4. Alternatively, give 5 firm blows between the shoulder blades. \n5. Repeat until the object is forced out or the person becomes unconscious.'
    },
    { 
      condition: 'Fainting', 
      action: 'Elevate legs 12 inches; loosen clothing.', 
      icon: '👤',
      detailed: '1. Lay the person flat on their back. \n2. Elevate their legs about 12 inches to help blood flow to the brain. \n3. Loosen any tight clothing (collars, belts). \n4. Check for breathing; if they don\'t wake up within a minute, call 999. \n5. Do not give them anything to drink until they are fully alert.'
    },
    { 
      condition: 'Burn Injury', 
      action: 'Cool with running water for 20 mins.', 
      icon: '🔥',
      detailed: '1. Immediately place the burned area under cool (not cold) running water for at least 20 minutes. \n2. Remove any jewelry or tight clothing before the area swells. \n3. Cover the burn loosely with a clean, non-stick bandage or plastic wrap. \n4. Do NOT apply ice, butter, or ointments. \n5. Seek medical help for large or deep burns.'
    },
    { 
      condition: 'Fracture', 
      action: 'Immobilize the limb; do not move it.', 
      icon: '🦴',
      detailed: '1. Keep the injured area completely still. Do NOT try to realign the bone. \n2. Use a splint (folded cardboard, magazines) to immobilize the joint above and below the break. \n3. Apply an ice pack wrapped in a cloth to reduce swelling. \n4. Monitor for signs of shock (pale skin, rapid breathing). \n5. Wait for professional medical help to arrive.'
    },
    { 
      condition: 'Allergic Reaction', 
      action: 'Administer Epipen if available; call 999.', 
      icon: '🐝',
      detailed: '1. Identify if the person has an EpiPen and help them administer it if needed. \n2. Call 999 immediately, even if symptoms seem to improve. \n3. Have the person lie flat with their legs elevated. \n4. Loosen tight clothing and cover them with a blanket. \n5. Monitor breathing and be prepared to perform CPR if necessary.'
    },
  ].filter(item => item.condition.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. URGENT TOP BAR */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold text-sm tracking-wide uppercase">
        Emergency Mode: Follow instructions carefully or call 999 immediately.
      </div>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* 2. HERO SECTION & QUICK CALLS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-black text-slate-900 mb-2">Emergency Response</h1>
            <p className="text-xl text-slate-600">UIU Healthcare Rapid Action Portal</p>
          </div>
          <div className="flex flex-col gap-3">
            {emergencyContacts.slice(0, 2).map((contact, i) => (
              <a key={i} href={`tel:${contact.number}`} className="flex items-center justify-between bg-white border-2 border-red-600 p-4 rounded-xl hover:bg-red-50 transition-all shadow-sm">
                <div className="flex items-center gap-3">
                  {contact.icon}
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">{contact.label}</p>
                    <p className="text-xl font-black text-red-600">{contact.number}</p>
                  </div>
                </div>
                <Phone className="w-5 h-5 text-red-600" />
              </a>
            ))}
          </div>
        </div>

        {/* 3. VISUAL FIRST AID GRID (SEARCHABLE) */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <HeartPulse className="text-red-600" /> Instant First Aid Guide
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search emergency (e.g. burn)..." 
                className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-red-600 outline-none w-full md:w-80"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {visualGuides.map((guide, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedGuide(guide)}
                className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:border-red-600 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{guide.icon}</div>
                <h4 className="font-bold text-sm mb-2">{guide.condition}</h4>
                <p className="text-[10px] leading-tight text-gray-500">{guide.action}</p>
              </button>
            ))}
          </div>
        </section>

        {/* 4. CPR STEP-BY-STEP (MODERN CARDS) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">How to Perform CPR</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {cprSteps.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                <div className="h-48 relative bg-gray-100">
                  <Image 
                    src={step.img} 
                    alt={step.title} 
                    fill 
                    className="object-contain p-4" 
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CAMPUS RESOURCES & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Nearby Medical Facilities</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="p-3 bg-blue-50 rounded-lg"><Clock className="text-blue-600 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold">UIU On-Campus Clinic</h4>
                  <p className="text-sm text-gray-500">Floor 1, West Wing • Open 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="p-3 bg-green-50 rounded-lg"><MapPin className="text-green-600 w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold">United Hospital (Nearest)</h4>
                  <p className="text-sm text-gray-500">8 mins drive from campus</p>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-xl">
              Download Emergency PDF Guide
            </button>
          </div>

          <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-200 relative">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.605069795147!2d90.44754421498144!3d23.796985484564537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d804154465%3A0x67399f665a589ed9!2sUnited%20International%20University!5e0!3m2!1sen!2sbd!4v1642055000000!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </main>

      {/* 6. MODAL FOR DETAILED ADVICE */}
      <Transition show={!!selectedGuide} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setSelectedGuide(null)}>
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-2xl transition-all border border-gray-100">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{selectedGuide?.icon}</div>
                      <div>
                        <DialogTitle as="h3" className="text-2xl font-black text-slate-900 leading-tight">
                          {selectedGuide?.condition}
                        </DialogTitle>
                        <p className="text-red-600 font-bold text-sm uppercase tracking-wider">Immediate Medical Advice</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedGuide(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-400" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-5 bg-red-50 rounded-2xl border border-red-100">
                      <p className="text-red-900 font-medium leading-relaxed whitespace-pre-line">
                        {selectedGuide?.detailed}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      type="button"
                      className="flex-1 inline-flex justify-center rounded-xl border-2 border-slate-900 px-4 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                      onClick={() => setSelectedGuide(null)}
                    >
                      I Understand
                    </button>
                    <a
                      href="tel:999"
                      className="flex-1 inline-flex justify-center rounded-xl bg-red-600 border-2 border-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                    >
                      Call 999 Now
                    </a>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <footer className="mt-20 border-t border-gray-200 py-10 text-center text-gray-400 text-sm">
        UIU Healthcare Emergency Portal • 2026 • Stay Safe.
      </footer>
    </div>
  );
};

export default EmergencyPage;