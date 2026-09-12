function TechnologyCard({ tech, onAdd, isAdded }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">{tech.badge}</span>
      </div>
      <h3 className="font-bold text-lg">{tech.name}</h3>
      <p className="text-sm text-gray-500 flex-1">{tech.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs">{tech.category}</span>
        <span>{tech.difficulty} · ⭐ {tech.rating}</span>
      </div>
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-2 py-2 rounded-full font-medium text-white ${
          isAdded ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}

export default TechnologyCard;