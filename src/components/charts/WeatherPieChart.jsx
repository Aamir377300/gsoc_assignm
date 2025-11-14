/**
 * Weather Pie Chart Component
 * Displays weather metrics distribution using Doughnut chart
 */

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import ChartCard from '../ui/ChartCard'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

const WeatherPieChart = ({ data, loading }) => {
  if (loading || !data) {
    return (
      <ChartCard 
        title="Weather Metrics Distribution" 
        icon="fa-chart-pie"
      >
        <div className="h-64 flex items-center justify-center">
          <div className="text-gray-400">
            {loading ? 'Loading chart...' : 'No data available'}
          </div>
        </div>
      </ChartCard>
    )
  }

  const humidity = data.humidity || 0
  const clouds = data.clouds || 0
  const clearSky = 100 - clouds

  const chartData = {
    labels: ['Humidity', 'Cloud Cover', 'Clear Sky'],
    datasets: [
      {
        data: [humidity, clouds, clearSky],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(148, 163, 184, 0.7)',
          'rgba(251, 191, 36, 0.7)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(148, 163, 184)',
          'rgb(251, 191, 36)'
        ],
        borderWidth: 2
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`
          }
        }
      }
    }
  }

  return (
    <ChartCard 
      title="Weather Metrics Distribution" 
      icon="fa-chart-pie"
    >
      <div className="h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </ChartCard>
  )
}

export default WeatherPieChart
