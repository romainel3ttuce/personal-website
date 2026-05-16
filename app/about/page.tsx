export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center">
        
        <div className="inline-block p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
          <span className="text-4xl">🎨</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
          About Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-8"></div>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Hi! I'm <span className="font-semibold text-pink-600">[Your Name]</span>, an animator and illustrator who loves creating cozy, whimsical worlds.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          My work brings a little bit of magic and warmth into everyday life through cute characters and dreamy landscapes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/50 rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-pink-600 mb-3 text-center">✨ Skills</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {['2D Animation', 'Illustration', 'Character Design', 'Procreate', 'Blender'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div className="bg-white/50 rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-pink-600 mb-3 text-center">🎓 Experience</h2>
            <ul className="space-y-2 text-gray-700 text-center">
              <li>• BFA in Animation</li>
              <li>• 5+ years freelance</li>
              <li>• Character Animator</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}