import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaBriefcase,
  FaUserTie,
  FaRegHeart,
  FaPlus,
  FaConciergeBell,
  FaArrowRight
} from 'react-icons/fa';
import { paths } from '../data/navLinks';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [role, setRole] = useState('seeker'); // 'seeker' | 'employer'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    login(email || (role === 'employer' ? 'employer@example.com' : 'alex.rivera@example.com'), role);
    navigate(role === 'employer' ? '/recruiter' : '/dashboard');
  }

  return (
    <section className="flex-1 bg-slate-900 flex">
      <div className="container flex flex-col lg:flex-row w-full">
        {/* Visual panel — left on desktop */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12 border-r border-slate-700/50">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/img4.webp')" }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/75 to-cyan-950/70" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-md"
          >
            <Link to={paths.home} className="flex items-center gap-3 mb-10">
              <div className="relative w-12 h-12 shrink-0">
                <FaRegHeart className="absolute inset-0 w-full h-full text-cyan-400" />
                <FaPlus className="absolute top-[26%] left-1/2 -translate-x-1/2 text-cyan-400 text-sm" />
              </div>
              <span className="text-xl font-bold text-white">
                ServiceCare <span className="text-cyan-400">Jobline</span>
              </span>
            </Link>

            <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
              Welcome back to <span className="text-cyan-400">Canada&apos;s</span>{' '}
              <span className="text-amber-400">care & service</span> hiring platform.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-10">
              Log in to manage your applications, saved jobs, or job postings — all in one place.
            </p>

            <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                &ldquo;I found my dream job in healthcare through ServiceCare Jobline. The process was simple,
                fast, and stress-free!&rdquo;
              </p>
              <p className="text-cyan-400 font-semibold text-sm">Priya S.</p>
              <p className="text-gray-400 text-xs">Registered Nurse, Toronto, ON</p>
            </div>
          </motion.div>

          <FaConciergeBell className="absolute bottom-10 right-10 text-amber-400/10 text-[140px]" />
        </div>

        {/* Form panel — right on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Mobile logo */}
            <Link to={paths.home} className="flex lg:hidden items-center gap-3 mb-8 justify-center">
              <div className="relative w-10 h-10 shrink-0">
                <FaRegHeart className="absolute inset-0 w-full h-full text-cyan-400" />
                <FaPlus className="absolute top-[26%] left-1/2 -translate-x-1/2 text-cyan-400 text-xs" />
              </div>
              <span className="text-lg font-bold text-white">
                ServiceCare <span className="text-cyan-400">Jobline</span>
              </span>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-sm text-gray-400 mb-8">Log in to manage your jobs and applications.</p>

            {/* Role selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setRole('seeker')}
                className={`flex items-center justify-center gap-2 text-sm font-medium py-3 rounded-xl border transition-colors ${
                  role === 'seeker'
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-slate-700/60 text-gray-400 hover:border-slate-600'
                }`}
              >
                <FaUserTie /> Job Seeker
              </button>
              <button
                type="button"
                onClick={() => setRole('employer')}
                className={`flex items-center justify-center gap-2 text-sm font-medium py-3 rounded-xl border transition-colors ${
                  role === 'employer'
                    ? 'border-amber-400 bg-amber-400/10 text-amber-400'
                    : 'border-slate-700/60 text-gray-400 hover:border-slate-600'
                }`}
              >
                <FaBriefcase /> Employer
              </button>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-11 pr-11 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-gray-400">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800 accent-cyan-400" />
                  Remember me
                </label>
                <Link to={paths.helpCenter} className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Forgot password?
                </Link>
              </div>

              {error ? <p className="text-sm text-red-400" role="alert">{error}</p> : null}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-3 rounded-xl transition-colors mt-2"
              >
              {submitting ? <><span className="sc-spinner sc-spinner-sm" /> Logging In</> : <><span>Log In</span><FaArrowRight className="text-sm" /></>}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-8">
              Don&apos;t have an account?{' '}
              <Link to={paths.signUp} className="text-cyan-400 font-medium hover:text-cyan-300">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
