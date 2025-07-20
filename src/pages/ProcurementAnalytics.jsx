import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { 
  TrendingUp, 
  DollarSign, 
  Droplets
} from 'lucide-react'
import MetricCard from '../components/charts/MetricCard'

const ProcurementAnalytics = () => {
  // Dummy data based on the image description
  const milkProcuredData = [
    { day: 'Mon', liters: 580 },
    { day: 'Tue', liters: 650 },
    { day: 'Wed', liters: 720 },
    { day: 'Thu', liters: 800 },
    { day: 'Fri', liters: 850 },
    { day: 'Sat', liters: 950 },
    { day: 'Sun', liters: 900 }
  ]

  // AP/Telangana random BMCs
  const bmcCollectionData = [
    { bmc: 'Nalgonda', liters: 1200 },
    { bmc: 'Warangal', liters: 1100 },
    { bmc: 'Guntur', liters: 950 },
    { bmc: 'Khammam', liters: 800 },
    { bmc: 'Vizianagaram', liters: 700 }
  ]

  // Real AP/TS villages
  const villageCollectionData = [
    { village: 'Madhavaram', liters: 1050 },
    { village: 'Kothapalli', liters: 900 },
    { village: 'Chintalapudi', liters: 850 },
    { village: 'Sircilla', liters: 700 },
    { village: 'Palakonda', liters: 600 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">PROCUREMENT ANALYTICS</h1>
          <p className="text-gray-600">Milk procurement and quality management</p>
        </div>
      </div>

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Total Milk Procured"
          value="5,150 liters"
          icon={Droplets}
        />
        <MetricCard
          title="Milk Procurement Cost"
          value="₹2,35,000"
          icon={DollarSign}
        />
        <MetricCard
          title="Total Cost per Litre"
          value="₹20"
          icon={DollarSign}
        />
        <div className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Milk Procuring Quantity</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">Avg Fat: 3.9%</p>
              <p className="text-sm text-gray-500 mt-1">Avg SNF: 8.2%</p>
            </div>
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Milk Procured Line Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Milk Procured (liters) <span className='text-xs text-gray-500'>(in a week)</span></h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={milkProcuredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="liters" stroke="#3B82F6" strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Milk Collected by BMC */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Milk Collected by BMC</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bmcCollectionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="liters" type="number" />
              <YAxis dataKey="bmc" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="liters" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Milk Collected by Village (NEW) */}
      <div className="chart-container">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Milk Collected by Village</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={villageCollectionData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="liters" type="number" />
            <YAxis dataKey="village" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="liters" fill="#60A5FA" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock and Buffer Info */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock & Capacity</h3>
          <div className="space-y-6">
            {/* Gauge Chart Simulation */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">7,500</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mt-2">liters</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Buffer Stock</span>
                <span className="text-sm font-medium">400 L</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Current Capacity</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Max Capacity</span>
                <span className="text-sm font-medium">10,000 L</span>
              </div>
            </div>
          </div>
        </div>
        {/* Procurement Alerts */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Procurement Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
              <Droplets className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-700">Low collection from Vizianagaram BMC</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-700">Procurement target achieved for this week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcurementAnalytics 