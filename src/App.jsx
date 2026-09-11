import { useState } from 'react';

function App() {
  const [stack, setStack] = useState([]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="text-xl font-bold">
          <span className="text-gray-900">Dev</span>
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"> Stack</span>
        </div>
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#" className="hover:text-gray-900">Technologies</a>
          <a href="#" className="hover:text-gray-900">Projects</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
        <div className="flex gap-3 items-center">
          <button className="text-gray-700 font-medium">Sign In</button>
          <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full font-medium">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 gap-8">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build Your Ideal{' '}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500 mt-4">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-5 py-2.5 rounded-full font-medium">
              Explore Technologies
            </button>
            <button className="border border-gray-300 px-5 py-2.5 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div>
          {/* এখানে পরে banner-stack.png ছবি বসাবো */}
        </div>
      </section>
    </div>
  );
}

export default App;