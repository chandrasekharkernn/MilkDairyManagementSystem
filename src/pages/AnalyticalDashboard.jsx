import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts'
import { 
  TrendingUp, 
  ShoppingCart, 
  Package, 
  DollarSign, 
  Clock,
  Users,
  AlertTriangle
} from 'lucide-react'
import MetricCard from '../components/charts/MetricCard'

const AnalyticalDashboard = () => {
  // Dummy data based on the image description
  const procurementData = [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 4.5 },
    { month: 'Apr', value: 6 },
    { month: 'Jun', value: 8 },
    { month: 'Aug', value: 14 }
  ]

  const productionData = [
    { product: 'Curd', value: 120 },
    { product: 'Butter', value: 280 },
    { product: 'Butter Milk', value: 150 },
    { product: 'Milk Powder', value: 80 }
  ]

  const salesData = [
    { name: 'Milk', value: 25, color: '#3B82F6' },
    { name: 'Curd', value: 20, color: '#60A5FA' },
    { name: 'Butter Milk', value: 15, color: '#93C5FD' },
    { name: 'Ghee', value: 25, color: '#22C55E' },
    { name: 'Butter', value: 15, color: '#F59E0B' }
  ]

  const orderStatusData = [
    { status: 'Pending', count: 40 },
    { status: 'Dispatched', count: 80 },
    { status: 'Delivered', count: 120 }
  ]

  const topSuppliers = [
    { name: 'Guntur', value: 95 },
    { name: 'Krishna', value: 70 },
    { name: 'Adilabad', value: 40 },
    { name: 'Karimnagar', value: 30 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive overview of dairy operations</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Admin Access
          </span>
        </div>
      </div>

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Procurement"
          value="15,250 L"
          subtitle="₹8,52,500 per day"
          icon={TrendingUp}
        />
        <MetricCard
          title="Total Sales"
          value="₹9,45,000"
          subtitle="12,300 units"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Available Stock"
          value="8,600 L"
          icon={Package}
        />
        <MetricCard
          title="Total Revenue"
          value="₹12,30,000"
          subtitle="per day"
          icon={DollarSign}
        />
      </div>

      {/* Middle Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Milk Procurement Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Milk Procurement</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={procurementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" name="Months" />
              <YAxis name="Litres" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} dot />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Production Summary */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Production Summary</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Product */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Product</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row Details */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Procurement Quality */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Procurement Quality</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. Fat %</span>
              <span className="text-sm font-medium">3.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. SNF %</span>
              <span className="text-sm font-medium">8.5%</span>
            </div>
          </div>
        </div>

        {/* Order Status */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Status</h3>
          <div className="space-y-3">
            {orderStatusData.map((item) => (
              <div key={item.status} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.status}</span>
                <span className="text-sm font-medium">{item.count} per day</span>
              </div>
            ))}
          </div>
        </div>

        {/* Finance Overview */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Finance Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Total Expenses</span>
              <span className="text-sm font-medium">₹7,60,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Profit</span>
              <span className="text-sm font-medium text-green-600">↑ ₹4,50,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Outstanding</span>
              <span className="text-sm font-medium text-orange-600">₹1,60,000</span>
            </div>
          </div>
        </div>

        {/* Top Suppliers */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Procurements</h3>
          <div className="space-y-3">
            {topSuppliers.map((supplier) => (
              <div key={supplier.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{supplier.name}</span>
                  <span className="font-medium">{supplier.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${supplier.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-gray-600">Low stock alert for Butter</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm text-gray-600">Payment overdue for Supplier A</span>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-600">Quality check required for new batch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticalDashboard 