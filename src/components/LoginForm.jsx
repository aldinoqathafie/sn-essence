import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === '' || password === '') {
      setError('Email dan kata sandi tidak boleh kosong.');
      return;
    }

    if (onSubmit) {
      onSubmit({ email, password });
    } else {
      console.log('Login attempt:', { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Kartu Login Glassmorphism */}
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl
                      shadow-lg shadow-black/30 transform transition duration-500 hover:shadow-yellow-500/30">
        
        <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-wide">
          LOGIN
        </h2>

        {error && (
          <div className="mb-4 p-3 text-sm font-medium text-red-300 bg-red-900/50 rounded-lg border border-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="anda@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/30 text-white 
                        placeholder-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                        backdrop-blur-sm transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              placeholder="Minimal 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white/30 text-white 
                        placeholder-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 
                        backdrop-blur-sm transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-gray-900 bg-yellow-500 
                       rounded-lg shadow-lg shadow-yellow-500/50 hover:bg-yellow-400 transition 
                       duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Masuk Sekarang
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white">
          <a href="#" className="font-medium text-yellow-500 hover:text-yellow-400 transition">
            Lupa Kata Sandi?
          </a>
          <p className="mt-2">
            Belum punya akun?{' '}
            <a href="#" className="font-medium text-yellow-500 hover:text-yellow-400 transition">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
