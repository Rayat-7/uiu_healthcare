import Link from 'next/link';
import { PlusIcon, StethoscopeIcon, BrainIcon, FileIcon, QuestionMarkIcon } from '../components/icons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-12">
        <div 
          className="relative w-full bg-white rounded-lg shadow-xl overflow-hidden mb-20"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSm80JiSO8WqX0MFnVC8t7kZip4HqrSjwMkMu6IPbOAT6guMuNDR1J2IbDM_3siIWIQ79tIjBtYEATOqJ9mbt5scesENzaDd1SJGlZcFeTBZfcf39kqH3jkB4Cla3DV4mAEJRyzfEF-n_m3wTAHj7ExO-uJLZSoXXPP-gQRJ9NN6Tk6aCnoNlDyOtmc_XcJu0xnlSVHhrT5LjZuBLI2bLl_4ClJNUyNwHXVJ-eE1p-m3YbhbHGyTxm8UC8eC0yDtf3LtJ5WYSYhJ1fv-Kx91UKKSr74RIqE9oJLVZVYOqDMAGXU73otlZGWmLA2bZ8rA0KIcwpYzNaWtPuw8Qs_3uLzcFmKkCkWqKoaxAcYsmnows_vp1fTStPf4hxhp8o0B8o4iCbslL8P31qPgBUX0kOqa_lcdvOSS-dtB5jp2ywJN_U76s_NMeNmXTZ8Lx2iW15sf2kB5MGEBEJ76y5lBPorbw-yFhO-e3JVgmFpoGl61chCCtQGwlqdbUDlUPcjJQ0qVrJaxM83GsmpBHLjATHm0FB1t0GQkPB-Fz7tSpZpdS7XkJYue2iKIbV-y80TK33f056Ny9ax-MMivgDXj_CmyP5SNihq4HE0yvESu3_6QwBs-7W-pJIj2_vTzDOMr2zEUL6BQlx5s5PA3EcYEVcj0pDxrsIa6BpvOS5u5qqwrEWiM7TyJ7PuK29xtDWyoSJ-KTcFjPFqd7AMvYFtsv1ncRxcFX3yRq6tWv_YDXWdRQJtJpGQTBjQ9am17o_QKkyok_Di2hQmCOSLK7pz7iZfi8haWIyEUsvIRFhWC6ak5RMKY_Z1HYvbs3oRjZWGKbO7ksJm-8XvOkiW5it7G12LiRE8yi_kHYILhZHgQF1pl65Lk6ZhtmGI1p6RCXK-Rq6cZ6v7na121M1Zaf_ddXW9x7VBuEtKdo2MWjryLoZmqM8uDcnkMHZo6x8NEjZF3ozWhXa5btaCJRyOtW65xhnvdfDo9t_zDXgYzuy_R0Ue-oMELkRBcI9OCEE5RUgK-0zAfULp7KVJdkELnTTKGRKGaSIFaKTtQbQLRDeykwlqS8YMMGX4ERyvUiAgkgVy7c2tduYL7xDRcleXcg3M2nkFvzATXz0e8wdyu-pAbuhOwcFnMIt70B2IY4Fg6bGdq4M5h1nFgTjDe0H9TXaNkMnXRVznUknwKMC-c-fqSV5z7sxCQPNhoMAssA5woOfHiFcRL74yG752SpwlEREvsVYN6lmVvTntSC513kjUcm13OWkbv4sAxtAg9yDH537Zi=s1024-rj')`,
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
