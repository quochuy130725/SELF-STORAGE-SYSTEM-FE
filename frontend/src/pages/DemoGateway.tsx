import { Link } from 'react-router-dom';
import { UserCircle, Users, LayoutDashboard, Settings } from 'lucide-react';

export default function DemoGateway() {
  const portals = [
    { 
      title: 'Customer Portal', 
      desc: 'Giao diện đặt kho & quản lý dành cho khách thuê.', 
      path: '/customer', 
      icon: <UserCircle className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" /> 
    },
    { 
      title: 'Staff Interface', 
      desc: 'Tablet-view nghiệm thu kho cho nhân viên cơ sở.', 
      path: '/staff', 
      icon: <Users className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" /> 
    },
    { 
      title: 'Manager Dashboard', 
      desc: 'Báo cáo số liệu & điều phối dành cho Quản lý.', 
      path: '/manager', 
      icon: <LayoutDashboard className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" /> 
    },
    { 
      title: 'Admin Panel', 
      desc: 'Quản lý phân quyền & System Logs bảo mật.', 
      path: '/admin', 
      icon: <Settings className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" /> 
    },
  ];

  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center min-h-screen p-6 font-sans">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">STORAGE SYS</h2>
        <h1 className="text-3xl font-bold text-slate-900">Hệ thống Quản lý Kho</h1>
        <p className="text-slate-500 mt-2">Chọn một phân hệ để truy cập.</p>
      </div>

      {/* Minimalist Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mt-12">
        {portals.map((portal) => (
          <Link
            key={portal.path}
            to={portal.path}
            className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between group cursor-pointer transition-all hover:border-emerald-500 hover:shadow-md"
          >
            <div>
              {portal.icon}
              <h3 className="text-lg font-bold text-slate-900 mt-4">{portal.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{portal.desc}</p>
            </div>
            
            <div className="text-sm font-semibold text-emerald-600 mt-6 opacity-80 group-hover:opacity-100 transition-opacity flex items-center">
              Truy cập <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}
