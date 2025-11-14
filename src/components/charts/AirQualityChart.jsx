/**
 * Air Quality Chart Component
 * Displays air quality components using Bar chart
 */

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import ChartCard from '../ui/ChartCard'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const AirQualityChart = ({ data, loading }) => {
  if (loading || !data) {
    return (
      <ChartCard 
        title="Air Quality Components" 
        icon="fa-chart-bar"
      >
        <div className="h-64 flex items-center justify-center">
          <div className="text-gray-400">
            {loading ? 'Loading chart...' : 'No data available'}
          </div>
        </div>
      </ChartCard>
    )
  }

  const chartData = {
    labels: ['PM2.5', 'PM10', 'NO₂', 'O₃', 'SO₂', 'CO'],
    datasets: [
      {
        label: 'Concentration (µg/m³)',
        data: [
          parseFloat(data.pm25) || 0,
          parseFloat(data.pm10) || 0,
          parseFloat(data.no2) || 0,
          parseFloat(data.o3) || 0,
          parseFloat(data.so2) || 0,
          parseFloat(data.co) || 0
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(124, 58, 237, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(236, 72, 153, 0.7)'
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
          'rgb(124, 58, 237)',
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(236, 72, 153)'
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
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y} µg/m³`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + ' µg/m³'
          }
        }
      }
    }
  }

  return (
    <ChartCard 
      title="Air Quality Components" 
      icon="fa-chart-bar"
    >
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </ChartCard>
  )
}

export default AirQualityChart
