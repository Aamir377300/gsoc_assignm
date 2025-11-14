/**
 * Temperature Chart Component
 * Displays temperature trend using Line chart
 */

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import ChartCard from '../ui/ChartCard'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const TemperatureChart = ({ data, loading }) => {
  if (loading || !data || data.length === 0) {
    return (
      <ChartCard 
        title="Temperature Trend (24h Forecast)" 
        icon="fa-chart-line"
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
    labels: data.map(item => item.time),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temp),
        borderColor: 'rgb(37, 99, 235)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(37, 99, 235)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            return `Temperature: ${context.parsed.y}°C`
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) {
            return value + '°C'
          }
        }
      }
    }
  }

  return (
    <ChartCard 
      title="Temperature Trend (24h Forecast)" 
      icon="fa-chart-line"
    >
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </ChartCard>
  )
}

export default TemperatureChart
