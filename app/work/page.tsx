export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center">
              🎨
            </div>
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}