import React from 'react'
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Area, AreaChart
} from 'recharts'
import { 
  Users, 
  Clock, 
  TrendingUp,
  UserCheck,
  UserX
} from 'lucide-react'
import MetricCard from '../components/charts/MetricCard'

const HRAnalytics = () => {
  // Dummy data based on the image description
  const attendanceData = [
    { day: 'Mon', attendance: 20 },
    { day: 'Tue', attendance: 45 },
    { day: 'Wed', attendance: 35 },
    { day: 'Thu', attendance: 60 },
    { day: 'Fri', attendance: 45 },
    { day: 'Sat', attendance: 70 }
  ]

  const employeesByDepartmentData = [
    { department: 'Prod', employees: 20 },
    { department: 'Sales', employees: 26 },
    { department: 'Stores', employees: 34 },
    { department: 'Finance', employees: 23 }
  ]

  const attendanceOverviewData = [
    { day: 'Mon', production: 20, sales: 15, stores: 25 },
    { day: 'Tue', production: 45, sales: 35, stores: 40 },
    { day: 'Wed', production: 35, sales: 30, stores: 35 },
    { day: 'Thu', production: 60, sales: 50, stores: 55 },
    { day: 'Fri', production: 45, sales: 40, stores: 45 },
    { day: 'Sat', production: 70, sales: 60, stores: 65 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">HR ANALYTICS</h1>
          <p className="text-gray-600">Employee and attendance management insights</p>
        </div>
      </div>

      {/* Top Row KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="TOTAL EMPLOYEES"
          value="120"
          icon={Users}
        />
        <MetricCard
          title="ATTENDANCE"
          value="110"
          subtitle="Present: 110, Absent: 10"
          icon={UserCheck}
        />
        <MetricCard
          title="Attendance Rate"
          value="91.7%"
          icon={TrendingUp}
        />
        <MetricCard
          title="Absent Today"
          value="10"
          icon={UserX}
        />
        <MetricCard
          title="Pending Leave Approvals"
          value="10"
          icon={UserX}
        />
        <MetricCard
          title="Pending Attendance"
          value="5"
          icon={Clock}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Overview */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceOverviewData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="production" stroke="#3B82F6" strokeWidth={3} name="Production" />
              <Line type="monotone" dataKey="sales" stroke="#22C55E" strokeWidth={3} name="Sales" />
              <Line type="monotone" dataKey="stores" stroke="#F59E0B" strokeWidth={3} name="Stores" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Employees by Department */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Employees by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={employeesByDepartmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="employees" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Summary */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <UserCheck className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">Present Today</span>
              </div>
              <span className="text-lg font-bold text-green-600">110</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <UserX className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-700">Absent Today</span>
              </div>
              <span className="text-lg font-bold text-red-600">10</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-700">On Leave</span>
              </div>
              <span className="text-lg font-bold text-blue-600">5</span>
            </div>
          </div>
        </div>

        {/* Department Details */}
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Details</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-700">Production</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-blue-600">20</span>
                <p className="text-xs text-gray-500">16.7% of total</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">Sales</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-green-600">26</span>
                <p className="text-xs text-gray-500">21.7% of total</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-500" />
                <span className="text-sm text-gray-700">Stores</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-purple-600">34</span>
                <p className="text-xs text-gray-500">28.3% of total</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-700">Finance</span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-orange-600">23</span>
                <p className="text-xs text-gray-500">19.2% of total</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HR Performance Table */}
      <div className="chart-container">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Employees
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Present Today
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Production</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Good
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sales</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">26</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92.3%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stores</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94.1%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Finance</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">87%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Average
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* HR Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Trends</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Week</span>
              <span className="text-sm font-medium text-green-600">92.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Last Week</span>
              <span className="text-sm font-medium text-blue-600">89.3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">This Month</span>
              <span className="text-sm font-medium text-green-600">91.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Target</span>
              <span className="text-sm font-medium text-blue-600">95%</span>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Distribution</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Full-time</span>
              <span className="text-sm font-medium">95</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Part-time</span>
              <span className="text-sm font-medium">15</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Contract</span>
              <span className="text-sm font-medium">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Intern</span>
              <span className="text-sm font-medium">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HRAnalytics 