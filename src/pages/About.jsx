/**
 * About Page - Information about the dashboard
 */

function About() {
  return (
    <div className="flex-1">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Smart City Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real-time monitoring and analysis for smart cities worldwide
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Real-time Data
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Live weather and air quality updates every 5 minutes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Historical Analysis
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View trends over 24 hours and 7 days
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Multi-city Support
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Monitor multiple cities around the world
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Air Quality Monitoring
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Track PM2.5, PM10, and AQI levels
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-2">⚛️</div>
              <p className="font-semibold text-gray-800 dark:text-white">React 18</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">UI Framework</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <p className="font-semibold text-gray-800 dark:text-white">Tailwind CSS</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Styling</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-semibold text-gray-800 dark:text-white">Chart.js</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Visualization</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-gray-800 dark:text-white">Vite</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Build Tool</p>
            </div>
          </div>
        </div>

        {/* APIs Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Data Sources
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="p-2 bg-blue-500 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  OpenWeatherMap API
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Current weather conditions and forecasts
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                FREE
              </span>
            </div>

            <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="p-2 bg-purple-500 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  Open-Meteo API
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Historical weather data and air quality metrics
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                FREE
              </span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Built with ❤️ for smart cities worldwide</p>
          <p className="mt-2">All data sources are free and require no API keys (except OpenWeatherMap)</p>
        </div>
      </main>
    </div>
  )
}

export default About
