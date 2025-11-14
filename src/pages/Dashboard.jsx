/**
 * Dashboard Page - Main overview with current metrics
 */

import { useState } from 'react'
import CitySelector from '../components/CitySelector'
import StatusMessage from '../components/StatusMessage'
import MetricsGrid from '../components/MetricsGrid'
import ChartsGrid from '../components/ChartsGrid'
import { useAutoRefresh } from '../hooks/useAutoRefresh'
import { useDashboardData } from '../hooks/useDashboardData'
import { useCity } from '../contexts/CityContext'

function Dashboard() {
  const { selectedCity, setSelectedCity } = useCity()
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false)
  
  const { 
    weatherData, 
    airQualityData, 
    forecastData, 
    loading, 
    error, 
    lastUpdated,
    refreshData 
  } = useDashboardData(selectedCity)
  
  useAutoRefresh(refreshData, autoRefreshEnabled)

  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  const handleRefresh = () => {
    refreshData()
  }

  const handleAutoRefreshToggle = (enabled) => {
    setAutoRefreshEnabled(enabled)
  }

  return (
    <div className="flex-1">
      {/* City Selector */}
      <CitySelector
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
        onRefresh={handleRefresh}
        autoRefreshEnabled={autoRefreshEnabled}
        onAutoRefreshToggle={handleAutoRefreshToggle}
        loading={loading}
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Status Message */}
        <StatusMessage 
          error={error} 
          loading={loading}
          lastUpdated={lastUpdated}
        />
        
        {/* Metrics Cards Grid */}
        <MetricsGrid
          weatherData={weatherData}
          airQualityData={airQualityData}
          lastUpdated={lastUpdated}
          loading={loading}
        />
        
        {/* Charts Grid */}
        <ChartsGrid
          weatherData={weatherData}
          airQualityData={airQualityData}
          forecastData={forecastData}
          loading={loading}
        />
      </main>
    </div>
  )
}

export default Dashboard
