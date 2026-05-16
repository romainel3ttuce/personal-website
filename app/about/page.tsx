export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 mb-4">
          Hi! I'm an animator and illustrator who loves creating cozy, whimsical worlds.
        </p>
        <p className="text-gray-600">
          This site is built with Next.js, TailwindCSS, and Howler.js.
        </p>
      </div>
    </main>
  );
}