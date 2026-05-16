export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="inline-block p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
          <span className="text-4xl">✨</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
          My Work
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl h-48 flex items-center justify-center text-6xl mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Project {i}</h3>
              <p className="text-gray-600 mt-2">Coming soon!</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}