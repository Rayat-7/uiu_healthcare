import Link from 'next/link';
import { PlusIcon, StethoscopeIcon, BrainIcon, FileIcon, QuestionMarkIcon } from '../components/icons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <div 
          className="relative w-full bg-white rounded-lg shadow-xl overflow-hidden mb-20"
          style={{
            backgroundImage: `url('/landing-background.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 flex flex-col items-start justify-center text-white p-12 md:p-20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Your Campus Hub for Health & Wellness</h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Support</h2>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              UIU Health & Wellness provides students and staff with quick access to emergency help, doctor availability, and essential well-being resources, right here on campus.
            </p>
            <Link href="/emergency">
              <span className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Get Help Now
              </span>
            </Link>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <FeatureCard
              icon={<PlusIcon className="w-8 h-8" />}
              title="Emergency Help & First Aid"
              description="Quick access to CPR steps, emergency contacts, and nearest hospital maps."
              link="/emergency"
            />
            <FeatureCard
              icon={<StethoscopeIcon className="w-8 h-8" />}
              title="Doctor & Nurse Availability"
              description="View on-campus medical staff, their specializations, and real-time availability."
              link="/signin"
            />
            <FeatureCard
              icon={<BrainIcon className="w-8 h-8" />}
              title="Physical & Mental Health Resources"
              description="Discover tips, counseling resources, and support for your physical and mental well-being."
              link="#"
            />
            <FeatureCard
              icon={<FileIcon className="w-8 h-8" />}
              title="Online Health Form Submission"
              description="Confidential online forms for submitting health complaints and requesting assistance."
              link="/signin"
            />
            <FeatureCard
              icon={<QuestionMarkIcon className="w-8 h-8" />}
              title="FAQ & Campus Health Guidelines"
              description="Find answers to common medical questions and understand campus health policies."
              link="/faq"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Well-being, Our Priority.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At UIU, your health and safety come first. Our portal offers fast, confidential, and easy-to-use
            resources designed to support you 24/7. Access immediate help, connect with on-campus
            medical professionals, and find reliable health information with complete peace of mind.
          </p>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-start hover:shadow-lg transition-shadow">
        <div className="bg-gray-100 p-3 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-left">{description}</p>
      </div>
    </Link>
  );
}
