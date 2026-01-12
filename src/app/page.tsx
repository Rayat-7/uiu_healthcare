import Link from 'next/link';
import { 
  Plus, 
  Stethoscope, 
  Brain, 
  FileText, 
  CircleHelp, 
  Clock, 
  ShieldCheck, 
  PhoneCall 
} from 'lucide-react'; // Ensure lucide-react is installed

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <main className="container mx-auto px-4 py-8">
        
        {/* --- HERO SECTION --- */}
        <div 
          className="relative w-full min-h-[500px] rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100"
          style={{
            backgroundImage: `url('/landing-background.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Subtle Dark Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-8 md:p-20 max-w-4xl">
            <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
              UIU Campus Safety
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              Your Health. <br /> Our Priority.
            </h1>
            <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mb-10 leading-relaxed">
              Quick access to emergency help, real-time doctor availability, and professional mental health support for the UIU community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/emergency" className="group">
                <span className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-xl text-xl transition-all transform group-hover:scale-105 shadow-xl">
                  <PhoneCall className="animate-pulse" /> GET HELP NOW
                </span>
              </Link>
              <Link href="/signin">
                <span className="flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-10 rounded-xl text-xl transition-all">
                  Book Appointment
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* --- STATS / STATUS BAR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <StatusChip icon={<Clock className="text-orange-500" />} label="Clinic Hours" value="24/7 Assistance" />
          <StatusChip icon={<ShieldCheck className="text-green-500" />} label="Verified Staff" value="12+ Doctors On-Call" />
          <StatusChip icon={<Plus className="text-red-500" />} label="Emergency Response" value="Under 5 Mins" />
        </div>

        {/* --- CORE FEATURES SECTION --- */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">University Health Services</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Plus className="w-10 h-10 text-red-600" />}
              title="Emergency & First Aid"
              description="Real-time CPR guides, emergency protocols, and hospital navigation."
              link="/emergency"
              urgent
            />
            <FeatureCard
              icon={<Stethoscope className="w-10 h-10 text-blue-600" />}
              title="Medical Availability"
              description="Check live status of campus doctors, specialists, and nurses."
              link="/signin"
            />
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-orange-600" />}
              title="Mental Well-being"
              description="Confidential counseling resources and stress management tools."
              link="#"
            />
            <FeatureCard
              icon={<FileText className="w-10 h-10 text-slate-700" />}
              title="Health Complaints"
              description="Submit secure forms for medical concerns and follow-ups."
              link="/signin"
            />
            <FeatureCard
              icon={<CircleHelp className="w-10 h-10 text-slate-700" />}
              title="Guidelines & FAQ"
              description="Official UIU health policies and common medical answers."
              link="/faq"
            />
            {/* Added a placeholder for 6th card to balance the grid */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center border-4 border-orange-500/20">
              <h3 className="text-2xl font-bold mb-2">Need a Checkup?</h3>
              <p className="text-gray-400 mb-6">Schedule a visit with the UIU Medical Center today.</p>
              <Link href="/signin" className="text-orange-500 font-bold hover:underline">Connect with a Nurse →</Link>
            </div>
          </div>
        </section>

        {/* --- TRUST FOOTER --- */}
        <section className="text-center py-16 bg-gray-50 rounded-[3rem] border border-gray-100">
          <h2 className="text-3xl font-black mb-6">Your Well-being, Our Priority.</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-6">
            At UIU, your health and safety come first. Our portal offers fast, confidential, and easy-to-use
            resources designed to support you 24/7. Access immediate help, connect with on-campus
            medical professionals, and find reliable health information with complete peace of mind.
          </p>
        </section>
      </main>
    </div>
  );
}

function StatusChip({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="p-3 bg-gray-50 rounded-xl">{icon}</div>
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
        <p className="text-lg font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, link, urgent }: { icon: React.ReactNode, title: string, description: string, link: string, urgent?: boolean }) {
  return (
    <Link href={link} className="group">
      <div className={`h-full p-8 rounded-3xl transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col items-start shadow-sm hover:shadow-2xl bg-white border ${urgent ? 'border-red-100' : 'border-gray-100'}`}>
        <div className={`p-4 rounded-2xl mb-6 ${urgent ? 'bg-red-50' : 'bg-slate-50'} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-2xl font-black mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-500 leading-relaxed mb-6">{description}</p>
        <span className={`mt-auto font-bold flex items-center gap-2 ${urgent ? 'text-red-600' : 'text-orange-600'}`}>
          Explore Service <span className="group-hover:translate-x-2 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}




// import Link from 'next/link';
// import { PlusIcon, StethoscopeIcon, BrainIcon, FileIcon, QuestionMarkIcon } from '../components/icons';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       <main className="container mx-auto px-4 py-12">
//         <div 
//           className="relative w-full bg-white rounded-lg shadow-xl overflow-hidden mb-20"
//           style={{
//             backgroundImage: `url('/landing-background.webp')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="relative z-10 flex flex-col items-start justify-center text-white p-12 md:p-20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">Your Campus Hub for Health & Wellness</h1>
//             <h2 className="text-4xl md:text-6xl font-bold mb-6">Support</h2>
//             <p className="text-lg md:text-xl max-w-2xl mb-8">
//               UIU Health & Wellness provides students and staff with quick access to emergency help, doctor availability, and essential well-being resources, right here on campus.
//             </p>
//             <Link href="/emergency">
//               <span className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
//                 Get Help Now
//               </span>
//             </Link>
//           </div>
//         </div>

//         <section className="mb-20">
//           <h2 className="text-3xl font-bold text-center mb-10">What You Get</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//             <FeatureCard
//               icon={<PlusIcon className="w-8 h-8" />}
//               title="Emergency Help & First Aid"
//               description="Quick access to CPR steps, emergency contacts, and nearest hospital maps."
//               link="/emergency"
//             />
//             <FeatureCard
//               icon={<StethoscopeIcon className="w-8 h-8" />}
//               title="Doctor & Nurse Availability"
//               description="View on-campus medical staff, their specializations, and real-time availability."
//               link="/signin"
//             />
//             <FeatureCard
//               icon={<BrainIcon className="w-8 h-8" />}
//               title="Physical & Mental Health Resources"
//               description="Discover tips, counseling resources, and support for your physical and mental well-being."
//               link="#"
//             />
//             <FeatureCard
//               icon={<FileIcon className="w-8 h-8" />}
//               title="Online Health Form Submission"
//               description="Confidential online forms for submitting health complaints and requesting assistance."
//               link="/signin"
//             />
//             <FeatureCard
//               icon={<QuestionMarkIcon className="w-8 h-8" />}
//               title="FAQ & Campus Health Guidelines"
//               description="Find answers to common medical questions and understand campus health policies."
//               link="/faq"
//             />
//           </div>
//         </section>

//         <section className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Your Well-being, Our Priority.</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             At UIU, your health and safety come first. Our portal offers fast, confidential, and easy-to-use
//             resources designed to support you 24/7. Access immediate help, connect with on-campus
//             medical professionals, and find reliable health information with complete peace of mind.
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
//   return (
//     <Link href={link}>
//       <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-start hover:shadow-lg transition-shadow">
//         <div className="bg-gray-100 p-3 rounded-full mb-4">
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-gray-600 text-left">{description}</p>
//       </div>
//     </Link>
//   );
// }
