import React from 'react'


const HeroSection = () => {
  return (
  <section className="mt-2.5 flex flex-col items-center justify-center flex-1 text-center px-6 pt-10  ">
        <h2 className="text-5xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
          Bridging <span className="text-blue-500">Students</span> &{" "}
          <span className="text-#00B894">Professionals</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          A trustworthy referral network where students get connected to
          professionals for real job opportunities and meaningful feedback.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-xl shadow bg-blue-500 hover:scale-105 transition">
            Upload Resume
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-xl shadow bg-green-500 hover:scale-105 transition">
            Join as Professional
          </button>
        </div>
     <div
        id="features"
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      
        {[
          {
            title: "AI Screening",
            text: "Smart resume analysis & short interviews to pre-verify candidates.",
          },
          {
            title: "Verified Referrals",
            text: "Professionals get only the most qualified candidates, saving time.",
          },
          {
            title: "Faster Jobs",
            text: "Students gain access to real opportunities and professional feedback.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-3">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}</div>
      </section>

    
      
    
  )
}

export default HeroSection
