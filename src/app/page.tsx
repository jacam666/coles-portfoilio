import Image from "next/image";

// app/portfolio/page.tsx
export default function NicolePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <header className="gradient-bg text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                Nicole Cameron
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                Product Manager Graduate
              </p>
              <p className="text-lg text-blue-200 mt-2">
                MSci Mathematics • FINBOURNE Technology
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-lg transform scale-110"></div>
              <Image
                src="/images/headshot2.jpg"
                alt="Nicole Cameron"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* About Section */}
        <section className="card-shadow bg-white rounded-xl p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold gradient-text mb-6">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Recent MSci Mathematics graduate from UCL with First Class Honours,
            currently working as a Product Manager Graduate at FINBOURNE Technology.
            I bring a strong analytical foundation and practical experience in managing complex product features,
            coordinating cross-functional development teams, and delivering data-driven solutions in a fast-paced fintech environment.
            I'm especially motivated by opportunities to build impactful technology products through clear communication,
            strategic thinking, and collaborative problem-solving.
          </p>
        </section>

        {/* Contact Section */}
        <section className="card-shadow bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
            <span className="text-2xl">📍</span>
            Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-xl">📞</span>
              <span className="font-medium text-gray-800">07538764267</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-xl">✉️</span>
              <span className="font-medium text-gray-800">camcolecam@gmail.com</span>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="card-shadow bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
            <span className="text-2xl">💼</span>
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Product Manager Graduate – FINBOURNE Technology
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-3">July 2024 – Present</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">▶</span>
                  Redesigned the transaction fee engine to improve flexibility and maintainability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">▶</span>
                  Led development of a mobile version of the web app with cross-functional teams.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">▶</span>
                  Managed integrations with financial data vendors, aligning models with architecture.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">▶</span>
                  Created Power BI dashboards to track API usage for QA and reporting.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">▶</span>
                  Owned monthly product release notes and maintained roadmap documentation.
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Project Coordinator Intern – Duke CE
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-3">Summer 2023</p>
              <p className="text-gray-700">
                Created proposals, met with clients, and analyzed data from client deliveries.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Mathematics Tutor</h3>
              <p className="text-sm font-medium text-blue-600 mb-3">2020 – 2023</p>
              <p className="text-gray-700">
                Planned and taught maths lessons for students aged 10–16, adapting to varied needs.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="card-shadow bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            Education
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-900">
                MSci Mathematics – University College London
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-2">2020 – 2024, Predicted First Class Honours</p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-900">Vandyke Upper School</h3>
              <p className="text-sm font-medium text-blue-600 mb-3">2015 – 2020</p>
              <div className="space-y-2">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-800">4 A-Levels:</p>
                  <p className="text-gray-700">Maths (A*), Further Maths (A*), Physics (A*), English Literature (A)</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-800">10 GCSEs:</p>
                  <p className="text-gray-700">4x 9s, 3x 8s, 3x 7s including Maths and English</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Interests Section */}
        <section className="card-shadow bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
            <span className="text-2xl">🌟</span>
            Achievements & Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <span className="text-yellow-600">🏆</span>
                <span className="text-gray-800">Duke of Edinburgh Gold Award</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                <span className="text-purple-600">💻</span>
                <span className="text-gray-800">Self-taught Python and SQL</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                <span className="text-green-600">❤️</span>
                <span className="text-gray-800">Ran charity week raising £3000 for Smile Malawi</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                <span className="text-red-600">🏋️‍♀️</span>
                <span className="text-gray-800">Powerlifting – competed nationally</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <span className="text-blue-600">⚽</span>
                <span className="text-gray-800">Football – captained AFC Dunstable for 5 years</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <span className="text-orange-600">📚</span>
                <span className="text-gray-800">Reading – runs an online book blog with reviews</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2025 Nicole Cameron. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
