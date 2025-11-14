/**
 * City Selector Component
 * Allows users to search for any city/state and fetch data
 */

import { useState, useRef, useEffect } from 'react'
import { searchLocations, reverseGeocode } from '../services/apiService'

const CitySelector = ({ 
  selectedCity, 
  onCityChange, 
  onRefresh, 
  autoRefreshEnabled, 
  onAutoRefreshToggle,
  loading 
}) => {
  const [searchInput, setSearchInput] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isDetectingLocation, setIsDetectingLocation] = useState(false)
  const dropdownRef = useRef(null)
  const searchTimeoutRef = useRef(null)

  // Search for location suggestions
  useEffect(() => {
    if (searchInput.trim().length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    // Debounce search
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setIsSearching(true)
      try {
        const results = await searchLocations(searchInput)
        setSuggestions(results)
        setShowSuggestions(results.length > 0)
      } catch (error) {
        console.error('Error searching locations:', error)
        setSuggestions([])
      } finally {
        setIsSearching(false)
      }
    }, 500)

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [searchInput])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocationSelect = (locationName) => {
    onCityChange(locationName)
    setSearchInput('')
    setShowSuggestions(false)
    setSuggestions([])
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      onCityChange(searchInput.trim())
      setSearchInput('')
      setShowSuggestions(false)
      setSuggestions([])
    }
  }

  // Detect user's current location
  const handleDetectLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }

    setIsDetectingLocation(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          
          // Convert coordinates to city name
          const locationName = await reverseGeocode(latitude, longitude)
          
          // Update selected city
          onCityChange(locationName)
        } catch (error) {
          console.error('Error getting location name:', error)
          alert('Could not determine your location name')
        } finally {
          setIsDetectingLocation(false)
        }
      },
      (error) => {
        console.error('Geolocation error:', error)
        alert('Could not access your location. Please enable location permissions.')
        setIsDetectingLocation(false)
      }
    )
  }

  return (
    <section className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Location Search */}
          <div className="flex items-center gap-2 w-full md:flex-1 relative" ref={dropdownRef}>
            <label className="font-semibold text-gray-700 flex items-center gap-2 whitespace-nowrap">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              Location:
            </label>

            {/* Use My Location Button */}
            <button
              onClick={handleDetectLocation}
              disabled={loading || isDetectingLocation}
              className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 
                       transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed
                       flex items-center gap-2 whitespace-nowrap"
              title="Use my current location"
            >
              <i className={`fas fa-crosshairs ${isDetectingLocation ? 'fa-spin' : ''}`}></i>
              {isDetectingLocation ? 'Detecting...' : 'My Location'}
            </button>
            
            <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-xl">
              {/* Search Input */}
              <div className="relative">
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search any city or state..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  disabled={loading}
                  className="w-full pl-11 pr-4 py-2 border-2 border-gray-300 rounded-lg 
                           focus:border-blue-500 focus:outline-none transition-colors
                           bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                {isSearching && (
                  <i className="fas fa-spinner fa-spin absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                )}
              </div>

              {/* Current Location Display */}
              <div className="mt-1 text-sm text-gray-600 pl-11">
                Current: <span className="font-semibold text-blue-600">{selectedCity}</span>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-80 overflow-hidden">
                  <div className="overflow-y-auto max-h-80">
                    {suggestions.map((location, index) => (
                      <div
                        key={index}
                        onClick={() => handleLocationSelect(location.name)}
                        className="px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-start gap-2">
                          <i className="fas fa-map-pin text-blue-500 mt-1"></i>
                          <span className="text-gray-700">{location.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={loading}
            className="btn-primary flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <i className={`fas fa-sync-alt ${loading ? 'animate-spin' : ''}`}></i>
            {loading ? 'Loading...' : 'Refresh Data'}
          </button>

          {/* Auto-refresh Toggle */}
          <label className="flex items-center gap-2 cursor-pointer ml-auto w-full md:w-auto justify-center md:justify-start">
            <input
              type="checkbox"
              checked={autoRefreshEnabled}
              onChange={(e) => onAutoRefreshToggle(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-gray-700 font-medium">
              Auto-refresh (60s)
            </span>
          </label>
        </div>
      </div>
    </section>
  )
}

export default CitySelector
