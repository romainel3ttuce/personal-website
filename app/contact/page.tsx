export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-md mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl text-center w-full">
        
        <div className="inline-block p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4">
          <span className="text-4xl">📬</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Contact Me
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-8"></div>

        <p className="text-gray-700 mb-6">Feel free to reach out for collaborations or just to say hi!</p>

        <form className="space-y-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"></textarea>
          <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
            Send Message ✨
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-6">
          Or email me directly at <a href="mailto:hello@example.com" className="text-pink-500">hello@example.com</a>
        </p>
      </div>
    </main>
  );
}