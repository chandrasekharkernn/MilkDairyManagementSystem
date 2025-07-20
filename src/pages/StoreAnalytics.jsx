import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts'
import { 
  Package, 
  AlertTriangle, 
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react'
import MetricCard from '../components/charts/MetricCard'

const StoreAnalytics = () => {
  // Dummy data based on the image description
  const stockLevelsData = [
    { day: 'Mon', stock: 5200 },
    { day: 'Tue', stock: 4800 },
    { day: 'Wed', stock: 6100 },
    { day: 'Thu', stock: 5800 },
    { day: 'Fri', stock: 7200 },
    { day: 'Sat', stock: 6800 },
    { day: 'Sun', stock: 7500 }
  ]

  const inventorySummaryData = [
    { name: 'Raw Milk', value: 45, color: '#3B82F6' },
    { name: 'Finished Goods', value: 35, color: '#60A5FA' },
    { name: 'Packaging', value: 20, color: '#93C5FD' }
  ]

  const stockInOutData = [
    { month: 'Jan', stockIn: 4.8, stockOut: 5.2 },
    { month: 'Feb', stockIn: 4.6, stockOut: 6.5 },
    { month: 'Apr', stockIn: 4.0, stockOut: 7.5 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Stores Analytics</h1>
          <p className="text-gray-600">Inventory and stock management insights</p>
        </div>
      </div>

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="TOTAL STOCK VALUE"
          value="₹22,80,000"
          subtitle="This Month"
          icon={DollarSign}
        />
        <MetricCard
          title="STOCK ALERTS"
          value="8"
          subtitle="5 Near Expiry, 3 Outward"
          icon={AlertTriangle}
        />
        <MetricCard
          title="Available Stock"
          value="8,600 L"
          icon={Package}
        />
        <MetricCard
          title="Stock Turnover"
          value="4.2x"
          icon={TrendingUp}
        />
      </div>

      {/* Total Stock Alerts Card (IMPROVED) */}
      <div className="chart-container flex flex-col items-center justify-center shadow-md rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Total Stock Alerts</h3>
        <div className="flex flex-col items-center justify-center w-full">
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Books', value: 20 },
                  { name: 'Tables', value: 15 },
                  { name: 'Chairs', value: 15 }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="#fff"
                strokeWidth={3}
              >
                <Cell fill="#60A5FA" />
                <Cell fill="#3B82F6" />
                <Cell fill="#2563EB" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-row items-center justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#60A5FA' }}></span>
              <span className="text-base font-medium text-gray-700">Books</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#3B82F6' }}></span>
              <span className="text-base font-medium text-gray-700">Tables</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: '#2563EB' }}></span>
              <span className="text-base font-medium text-gray-700">Chairs</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-600">Incoming Stocks</span>
              <span className="text-base font-bold text-green-600">50</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base text-gray-600">Outgoing Stock</span>
              <span className="text-base font-bold text-red-600">30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock Levels */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Levels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={stockLevelsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="stock" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} dot />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Inventory Summary */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Summary</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={inventorySummaryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {inventorySummaryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock In vs Stock Out */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock In vs Stock Out</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stockInOutData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stockIn" fill="#60A5FA" name="Stock In" />
              <Bar dataKey="stockOut" fill="#3B82F6" name="Stock Out" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Stock Details */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Movement</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Today's Inward</span>
              <span className="text-sm font-medium text-green-600">+850 L</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Today's Outward</span>
              <span className="text-sm font-medium text-red-600">-1,200 L</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Net Movement</span>
              <span className="text-sm font-medium text-red-600">-350 L</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Stock Turnover Rate</span>
              <span className="text-sm font-medium text-blue-600">4.2x/month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Performance Table */}
      <div className="chart-container">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Min Stock Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Packaged Milk</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,500 L</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,000 L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Normal
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Curd</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">800 L</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Low Stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 hour ago</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Butter</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,200 L</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">800 L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Normal
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 hours ago</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ghee</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">400 L</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300 L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Critical
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 min ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StoreAnalytics 