/**
 * Historical Data Page - View historical trends
 */

import { useState } from 'react'
import HistoricalDataPanel from '../components/history/HistoricalDataPanel'
import { CITIES } from '../utils/constants'

function HistoricalData() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0].value)

  return (
    <div className="flex-1">
      {/* City Selector for Historical Data */}
      <div className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Historical Data Analysis
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                View temperature, wind, and air quality trends
              </p>
            </div>
            
            {/* City Selector */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Select City:
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                         rounded-lg text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition-all duration-200"
              >
                {CITIES.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Data Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <HistoricalDataPanel cityName={selectedCity} />
      </main>
    </div>
  )
}

export default HistoricalData
