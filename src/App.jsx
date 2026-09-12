import { useState, useEffect } from 'react';
import banner from './assets/banner-stack.png';
import TechnologyCard from './components/TechnologyCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [stack, setStack] = useState([]);
const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

    const handleAdd = (tech) => {
    const alreadyAdded = stack.find((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

    const handleRemove = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${removed.name} removed from your stack.`);
  };
  return (
    <div className="min-h-screen bg-white">
            <ToastContainer position="top-right" autoClose={2000} />
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
            {/* Technologies + Your Stack */}
      <section className="px-10 py-10">
        <h2 className="text-3xl font-bold mb-1">
          Explore the{' '}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-500 mb-8">Pick one technology per category to build your ideal stack.</p>

        {loading ? (
          <p className="text-gray-500">Loading technologies...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                onAdd={handleAdd}
                isAdded={!!stack.find((item) => item.id === tech.id)}
              />
            ))}

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-lg">Your Stack</h3>
              <p className="text-sm text-gray-500 mb-3">
                {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
              </p>
              {stack.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">Your stack is empty.</p>
              ) : (
                <div className="flex flex-col gap-2 mb-3">
                  {stack.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <img src={item.icon} alt={item.name} className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <button onClick={() => handleRemove(item.id)} className="text-red-500 font-bold">×</button>
                    </div>
                  ))}
                </div>
              )}
              {stack.length > 0 && (
                <button
                  onClick={() => setStack([])}
                  className="w-full border border-red-300 text-red-500 py-2 rounded-full font-medium"
                >
                  Remove All
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;