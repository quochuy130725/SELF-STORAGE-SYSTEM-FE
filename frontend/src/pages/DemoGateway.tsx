import { Link } from 'react-router-dom';
import { Users, LayoutDashboard, Settings, UserCircle } from 'lucide-react';

export default function DemoGateway() {
  const portals = [
    { title: 'Customer Portal', desc: 'Giao diện đặt kho & quản lý dành cho khách thuê.', path: '/customer', icon: <UserCircle size={32} />, color: 'bg-[#c9a44b]' },
    { title: 'Staff Interface', desc: 'Tablet-view nghiệm thu kho cho nhân viên cơ sở.', path: '/staff', icon: <Users size={32} />, color: 'bg-[#25352d] text-[#f2eee4]' },
    { title: 'Manager Dashboard', desc: 'Báo cáo số liệu & điều phối dành cho Quản lý.', path: '/manager', icon: <LayoutDashboard size={32} />, color: 'bg-white border border-[#1e272324]' },
    { title: 'Admin Panel', desc: 'Quản lý phân quyền & System Logs bảo mật.', path: '/admin', icon: <Settings size={32} />, color: 'bg-[#f8f6f0] border border-[#1e272324]' },
  ];

  return (
    <div className="min-h-screen bg-[#f2eee4] text-[#1e2723] flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-sm font-bold tracking-widest uppercase text-[#c9a44b] mb-2">Hệ thống Quản lý Kho tự quản</h1>

          <p className="text-[#1e2723]/70">Chọn một phân hệ bên dưới để trải nghiệm UI/UX nguyên mẫu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portals.map((portal) => (
            <Link
              key={portal.path}
              to={portal.path}
              className={`group relative p-8 rounded-2xl flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${portal.color}`}
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">{portal.icon}</div>
              <h3 className="text-2xl font-medium mb-2">{portal.title}</h3>
              <p className="opacity-80 text-sm mb-8">{portal.desc}</p>
              <div className="mt-auto flex items-center gap-2 font-medium">
                Truy cập <span className="transition-transform group-hover:translate-x-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
