import Link from "next/link";

export default function HorizontalCardContactFocus() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans text-slate-800">

      {/* --- Main Card Container --- */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row border border-slate-200">

        {/* === Left Side: Profile & Bio (35%) === */}
        <aside className="w-full md:w-[35%] bg-slate-50 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-100 relative">

          {/* Profile Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full p-1 border-2 border-indigo-100 bg-white shadow-sm">
            <img
              src="https://via.placeholder.com/200"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full" title="Online"></div>
          </div>

          {/* Name & Title */}
          <h1 className="text-2xl font-bold text-slate-900 mb-1">ชื่อของคุณ</h1>
          <p className="text-indigo-600 font-medium mb-6">Full Stack Developer</p>

          {/* About Me (Moved here) */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-full text-left">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">About Me</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ผมเชี่ยวชาญการสร้าง Web Application ที่เน้นประสิทธิภาพและการใช้งานจริง ชอบเรียนรู้เทคโนโลยีใหม่ๆ และมุ่งมั่นส่งมอบงานที่มีคุณภาพสูงสุดครับ
            </p>
          </div>

          {/* Decorative / Status */}
          <div className="mt-auto pt-6 w-full">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-slate-300"></span>
              <span>Bangkok, Thailand (GMT+7)</span>
            </div>

            {/* Login Link Button */}
            <div className="mt-6 w-full">
              <Link href="/login" className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                Go to Login
              </Link>
            </div>
          </div>
        </aside>

        {/* === Right Side: Content (65%) === */}
        <section className="w-full md:w-[65%] p-8 md:p-10 flex flex-col justify-center">

          {/* 1. Contact Section (Replaces About Me) */}
          <div className="mb-8">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Channels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="mailto:email@example.com" className="flex items-center p-3 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-sm font-semibold text-slate-900">hello@mysite.com</p>
                </div>
              </a>

              <a href="tel:+66000000000" className="flex items-center p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm font-semibold text-slate-900">089-999-9999</p>
                </div>
              </a>

              <a href="#" className="flex items-center p-3 rounded-xl border border-slate-200 hover:border-slate-800 hover:bg-slate-50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-slate-400">Source Code</p>
                  <p className="text-sm font-semibold text-slate-900">GitHub Profile</p>
                </div>
              </a>

              <a href="#" className="flex items-center p-3 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-slate-400">Professional</p>
                  <p className="text-sm font-semibold text-slate-900">LinkedIn</p>
                </div>
              </a>
            </div>
          </div>

          {/* 2. Services Section (New Topic) */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">My Services</h2>
              {/* Tech Stack Tags Small Display */}
              <div className="hidden sm:flex gap-1">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Service Card 1 */}
              <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Web Development</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    พัฒนาเว็บไซต์และเว็บแอปพลิเคชันแบบครบวงจร (Full Stack) รองรับทุกอุปกรณ์ (Responsive) ด้วยเทคโนโลยี Next.js และ Node.js
                  </p>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">System Design & API</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    ออกแบบโครงสร้างฐานข้อมูล (Database) และพัฒนา API ที่มีความปลอดภัย รองรับการขยายตัว (Scalable) เพื่อเชื่อมต่อกับระบบต่างๆ
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}