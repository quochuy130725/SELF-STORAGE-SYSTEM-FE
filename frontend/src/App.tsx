import { Routes, Route } from 'react-router-dom';
import DemoGateway from './pages/DemoGateway';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import StaffDashboard from './pages/staff/StaffDashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import AdminPanel from './pages/admin/AdminPanel';

function App() {
  return (
    <Routes>
      {/* Cổng trung chuyển cho buổi Demo */}
      <Route path="/" element={<DemoGateway />} />

      {/* 4 Phân hệ chính */}
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/manager" element={<ManagerDashboard />} />
      <Route path="/admin" element={<AdminPanel />} />

      {/* Fallback 404 */}
      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center bg-[#f2eee4] text-[#25352d] text-2xl font-medium">
            404 - Không tìm thấy trang (Không có kho nào ở đây cả!)
          </div>
        }
      />
    </Routes>
  );
}

export default App;
