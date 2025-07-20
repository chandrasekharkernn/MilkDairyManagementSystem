import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import AnalyticalDashboard from './pages/AnalyticalDashboard'
import ProcurementAnalytics from './pages/ProcurementAnalytics'
import ProductionAnalytics from './pages/ProductionAnalytics'
import SalesAnalytics from './pages/SalesAnalytics'
import FinanceAnalytics from './pages/FinanceAnalytics'
import StoreAnalytics from './pages/StoreAnalytics'
import HRAnalytics from './pages/HRAnalytics'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/analytical-dashboard" replace />} />
          <Route path="/analytical-dashboard" element={<AnalyticalDashboard />} />
          <Route path="/procurement-analytics" element={<ProcurementAnalytics />} />
          <Route path="/production-analytics" element={<ProductionAnalytics />} />
          <Route path="/sales-analytics" element={<SalesAnalytics />} />
          <Route path="/finance-analytics" element={<FinanceAnalytics />} />
          <Route path="/store-analytics" element={<StoreAnalytics />} />
          <Route path="/hr-analytics" element={<HRAnalytics />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App 