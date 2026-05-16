export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
            <span className="text-4xl">🎨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi! I'm <span className="font-semibold text-pink-600">[Your Name]</span>, an animator and illustrator who loves creating cozy, whimsical worlds. 
            My work is all about bringing a little bit of magic and warmth into everyday life through cute characters and dreamy landscapes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This site is built with Next.js, TailwindCSS, and Howler.js – blending modern web technology 
            with a playful, artistic touch.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/50 rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-pink-600 mb-3 flex items-center gap-2">
              <span>✨</span> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {['2D Animation', 'Illustration', 'Character Design', 'Storyboarding', 'After Effects', 'Procreate', 'Clip Studio Paint', 'Blender'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm text-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/50 rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-pink-600 mb-3 flex items-center gap-2">
              <span>🎓</span> Education & Experience
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• BFA in Animation - [University Name]</li>
              <li>• 5+ years freelance illustration</li>
              <li>• Character Animator at Dream Studio</li>
              <li>• Featured in [Gallery/Publication Name]</li>
            </ul>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="bg-gradient-to-r from-pink-200/50 to-purple-200/50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-pink-600 mb-4 flex items-center gap-2">
            <span>🌟</span> Fun Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-3">
              <div className="text-3xl mb-1">🐱</div>
              <p className="text-xs text-gray-600">Cat mom to 2</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="text-3xl mb-1">🎮</div>
              <p className="text-xs text-gray-600">Cozy gamer</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="text-3xl mb-1">☕</div>
              <p className="text-xs text-gray-600">Matcha lover</p>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="text-3xl mb-1">🌸</div>
              <p className="text-xs text-gray-600">Pastel aesthetic</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}