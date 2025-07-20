# Milk Dairy Management System - Analytics Dashboards

A comprehensive React-based analytics dashboard system for milk dairy management operations. This project provides seven different analytics dashboards to monitor various aspects of dairy operations.

## 🚀 Features

### Dashboards Available

1. **Analytical Dashboard** (Admin Only)
   - Comprehensive overview of all operations
   - Key performance indicators
   - Procurement, production, sales, and finance summaries
   - System alerts and supplier information

2. **Procurement Analytics**
   - Milk procurement tracking
   - Quality metrics (Fat %, SNF %, Acidity %)
   - Village-wise collection data
   - Stock and capacity management
   - Rejected milk tracking

3. **Production Analytics**
   - Milk processing metrics
   - Product yield and efficiency
   - Production line status
   - Downtime tracking
   - Product-wise production data

4. **Sales Analytics**
   - Sales performance tracking
   - Product-wise sales data
   - Regional distribution
   - Customer insights
   - Sales forecasting

5. **Finance Analytics**
   - Revenue and expense tracking
   - Profit margin analysis
   - Cash flow monitoring
   - Outstanding receivables
   - Financial ratios

6. **Store Analytics**
   - Inventory management
   - Stock levels and alerts
   - Stock in/out tracking
   - Expiry date monitoring
   - Stock forecasting

7. **HR Analytics**
   - Employee attendance tracking
   - Department-wise analytics
   - Leave management
   - Workforce insights
   - Performance metrics

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MilkDairyManagementSystem
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout.jsx              # Main layout with sidebar navigation
│   └── charts/
│       └── MetricCard.jsx      # Reusable metric card component
├── pages/
│   ├── AnalyticalDashboard.jsx # Admin overview dashboard
│   ├── ProcurementAnalytics.jsx
│   ├── ProductionAnalytics.jsx
│   ├── SalesAnalytics.jsx
│   ├── FinanceAnalytics.jsx
│   ├── StoreAnalytics.jsx
│   └── HRAnalytics.jsx
├── App.jsx                     # Main app component with routing
├── main.jsx                    # React entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with consistent styling
- **Interactive Charts**: Dynamic data visualizations using Recharts
- **Real-time Updates**: Dashboard metrics update automatically
- **Access Control**: Admin-only access for the main analytical dashboard

## 📊 Data Visualization

The dashboards include various types of charts and visualizations:

- **Line Charts**: For trend analysis (sales, attendance, stock levels)
- **Bar Charts**: For comparison data (production, employee distribution)
- **Pie Charts**: For composition analysis (inventory, sales distribution)
- **Area Charts**: For cumulative data (stock levels, cash flow)
- **Progress Bars**: For completion rates and performance indicators

## 🔧 Customization

### Adding New Metrics

1. Create new data arrays in the respective dashboard component
2. Add new MetricCard components with appropriate icons
3. Update the chart data as needed

### Modifying Charts

1. Import required chart components from Recharts
2. Update the data structure to match chart requirements
3. Customize colors, tooltips, and legends

### Styling Changes

1. Modify Tailwind classes in components
2. Update the `tailwind.config.js` for custom colors
3. Add custom CSS in `src/index.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📈 Key Metrics Tracked

### Procurement
- Total milk procured (liters)
- Procurement cost
- Average fat percentage
- Quality metrics
- Village-wise collection

### Production
- Total milk processed
- Product yield percentage
- Plant utilization
- Downtime tracking
- Product-wise production

### Sales
- Total sales revenue
- Sales growth rate
- Product-wise sales
- Regional distribution
- Customer performance

### Finance
- Total revenue
- Outstanding receivables
- Profit margin
- Expense breakdown
- Cash flow analysis

### Store
- Total stock value
- Stock alerts
- Inventory composition
- Stock movement
- Expiry tracking

### HR
- Total employees
- Attendance rate
- Department distribution
- Leave management
- Performance metrics

## 🔐 Access Control

- **Analytical Dashboard**: Admin access only (marked with "Admin" badge)
- **Other Dashboards**: Accessible to all users
- **Responsive Navigation**: Sidebar navigation with active state indicators

## 🎯 Future Enhancements

- [ ] Real-time data integration
- [ ] User authentication system
- [ ] Data export functionality
- [ ] Advanced filtering options
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Custom dashboard builder

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

**Note**: This is a demonstration project with dummy data. In a production environment, replace the dummy data with real API integrations and database connections. 