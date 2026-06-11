import { Mail, MapPin, Phone } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">GS Advertising & Connections</h1>
          <p className="text-gray-600 mt-2">Connecting Local Businesses With Local Teams</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              We connect local businesses with youth sports teams, high school athletic programs, and community organizations through meaningful sponsorship partnerships.
            </p>
            <p className="text-gray-700">
              Whether you're looking to build brand awareness or give back to your community, we help create win-win sponsorship opportunities.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600" />
                <a href="mailto:contact@gsadvertising.com" className="text-indigo-600 hover:underline">
                  contact@gsadvertising.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600" />
                <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                <div className="text-gray-700">
                  <p>Your City, State</p>
                  <p>123 Main Street</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Strong Partnerships</h3>
              <p className="text-gray-600">We build lasting relationships between businesses and teams</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Measurable brand exposure and community impact</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored sponsorship packages for your needs</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p>&copy; 2024 GS Advertising & Connections. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}