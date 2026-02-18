import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-white font-sans text-slate-800">
            {/* Left Side (Illustration) */}
            <div className="hidden md:flex w-1/2 items-center justify-center p-12 bg-white relative overflow-hidden">
                <div className="max-w-md w-full">
                    {/* Placeholder Illustration - Using an SVG or image */}
                    <img
                        src="https://illustrations.popsy.co/blue/work-from-home.svg"
                        alt="Workspace Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Right Side (Login Form) */}
            <div className="flex w-full md:w-1/2 items-center justify-center bg-blue-500 p-8 relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border-2 border-white/20"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-2 border-white/20"></div>

                {/* Login Card */}
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 md:p-10 z-10">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Hello!</h1>
                        <p className="text-slate-500 text-sm">Sign Up to Get Started</p>
                    </div>

                    <form className="space-y-5">
                        {/* Email Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm placeholder:text-slate-400"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm placeholder:text-slate-400"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors shadow-md hover:shadow-lg active:scale-[0.98] transform duration-100"
                        >
                            Login
                        </button>

                        {/* Forgot Password Link */}
                        <div className="text-center mt-4">
                            <Link href="#" className="text-xs text-slate-400 hover:text-blue-600 transition-colors">
                                Forgot Password
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
