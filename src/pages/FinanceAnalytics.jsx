import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  Calculator
} from 'lucide-react'
import MetricCard from '../components/charts/MetricCard'

const FinanceAnalytics = () => {
  // Dummy data based on the image description
  const revenueExpensesData = [
    { month: 'Jan', revenue: 8.5, expenses: 6.2, stockIn: 5.0, stockOut: 4.2 },
    { month: 'Feb', revenue: 9.2, expenses: 7.1, stockIn: 5.5, stockOut: 4.8 },
    { month: 'Mar', revenue: 10.8, expenses: 8.3, stockIn: 6.0, stockOut: 5.2 },
    { month: 'Apr', revenue: 11.5, expenses: 8.9, stockIn: 6.2, stockOut: 5.5 },
    { month: 'May', revenue: 12.5, expenses: 9.2, stockIn: 6.8, stockOut: 6.0 }
  ]

  const expenseBreakdownData = [
    { name: 'Sale', value: 30, color: '#3B82F6' },
    { name: 'Stores', value: 25, color: '#60A5FA' },
    { name: 'Products', value: 25, color: '#93C5FD' },
    { name: 'HR', value: 20, color: '#BFDBFE' }
  ]

  const cashFlowData = [
    { month: 'Jan', cashFlow: 3.2 },
    { month: 'Feb', cashFlow: 2.8 },
    { month: 'Mar', cashFlow: 4.1 },
    { month: 'Apr', cashFlow: 3.5 },
    { month: 'May', cashFlow: 4.8 },
    { month: 'Jun', cashFlow: 3.9 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FINANCE ANALYTICS</h1>
          <p className="text-gray-600">Financial performance and cash flow management</p>
        </div>
      </div>

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="TOTAL REVENUE"
          value="₹12,50,000"
          subtitle="This Month"
          icon={DollarSign}
        />
        <MetricCard
          title="OUTSTANDING RECEIVABLES"
          value="₹4,75,000"
          icon={AlertTriangle}
        />
        <MetricCard
          title="PROFIT MARGIN"
          value="28.4%"
          icon={TrendingUp}
          trend="up"
          trendValue="+2.1% from last month"
        />
        <MetricCard
          title="EXPENSES"
          value="₹8,90,000"
          subtitle="This Month"
          icon={Calculator}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Expenses */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueExpensesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={3} name="Revenue" dot />
              <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={3} name="Expenses" dot />
              <Line type="monotone" dataKey="stockIn" stroke="#3B82F6" strokeWidth={3} name="Stock In" dot />
              <Line type="monotone" dataKey="stockOut" stroke="#F59E0B" strokeWidth={3} name="Stock Out" dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Breakdown */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseBreakdownData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {expenseBreakdownData.map((entry, index) => (
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
        {/* Cash Flow */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="cashFlow" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} dot />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Financial Summary */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Net Profit</span>
                </div>
                <p className="text-xl font-bold text-green-600 mt-1">₹3,60,000</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <span className="text-sm text-gray-600">Total Debt</span>
                </div>
                <p className="text-xl font-bold text-red-600 mt-1">₹2,40,000</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Operating Margin</span>
                <span className="text-sm font-medium text-green-600">32.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Debt-to-Equity</span>
                <span className="text-sm font-medium text-orange-600">0.45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Current Ratio</span>
                <span className="text-sm font-medium text-green-600">1.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceAnalytics 