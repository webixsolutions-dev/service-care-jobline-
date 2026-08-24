import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaBriefcase,
  FaUserTie,
  FaRegHeart,
  FaPlus,
  FaConciergeBell,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { paths } from '../data/navLinks';
import { useAuth } from '../lib/auth/AuthContext';

const perks = [
  'Verified employers & candidates',
  'Free job posting to start',
  'Nationwide reach across Canada'
];

const Signup = () => {
  const [role, setRole] = useState('seeker'); // 'seeker' | 'employer'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setSubmitting(true);
    try {
      const backendRole = role === 'employer' ? 'recruiter' : 'job_seeker';
      const result = await signUp({ email, password, fullName, role: backendRole });
      if (result?.requiresEmailConfirmation) {
        setMessage('Account created. Check your email to confirm your account, then sign in.');
        return;
      }
      navigate(backendRole === 'recruiter' ? '/recruiter' : '/dashboard', { replace: true });
    } catch (err) {
      setError(err?.message || 'Unable to create account.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="flex-1 bg-slate-900 flex">
      <div className="container flex flex-col lg:flex-row w-full">
        {/* Left brand panel — hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12 bg-slate-800/40 border-r border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-cyan-500/10" />

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
              Join <span className="text-amber-400">Hospitality</span> &amp;{' '}
              <span className="text-cyan-400">Healthcare</span> employers and job seekers across Canada.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Create your free account in a couple of minutes and start connecting today.
            </p>

            <div className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                  <FaCheckCircle className="text-cyan-400 shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </motion.div>

          <FaConciergeBell className="absolute bottom-10 right-10 text-amber-400/10 text-[140px]" />
        </div>

        {/* Right form panel */}
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

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Create your account</h1>
            <p className="text-sm text-gray-400 mb-8">Join ServiceCare Jobline in a couple of minutes.</p>

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
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Full name</label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  />
                </div>
              </div>

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
                    minLength={8}
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

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Confirm password</label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength={8}
                    required
                    className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-11 pr-11 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/70 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showConfirm ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  </button>
                </div>
              </div>

              <label className="flex items-start gap-2 text-xs text-gray-400">
                <input type="checkbox" required className="mt-0.5 rounded border-slate-600 bg-slate-800 accent-cyan-400" />
                <span>
                  I agree to the{' '}
                  <Link to={paths.terms} className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to={paths.privacy} className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {error ? <p className="text-sm text-red-400" role="alert">{error}</p> : null}
              {message ? <p className="text-sm text-cyan-300" role="status">{message}</p> : null}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-3 rounded-xl transition-colors mt-2"
              >
                {submitting ? 'Creating Account...' : 'Create Account'}
                <FaArrowRight className="text-sm" />
              </button>
            </form>

         

            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account?{' '}
              <Link to={paths.signIn} className="text-cyan-400 font-medium hover:text-cyan-300">
                Log in
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
