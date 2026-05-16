export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">Feel free to reach out!</p>
          <a 
            href="mailto:hello@example.com" 
            className="text-pink-500 hover:text-pink-600"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </main>
  );
}