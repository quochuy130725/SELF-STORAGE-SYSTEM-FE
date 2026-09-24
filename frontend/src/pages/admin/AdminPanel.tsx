import React, { useState } from 'react';
import { Search, ChevronDown, Edit2, Lock, Unlock, ShieldAlert, Users } from 'lucide-react';

const mockUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice.j@storageco.com', initials: 'AJ', role: 'Quản trị HT', facility: 'Tất cả cơ sở', status: 'Active', avatarBg: 'bg-rose-100 text-rose-700' },
  { id: 2, name: 'Robert Chen', email: 'robert.c@storageco.com', initials: 'RC', role: 'Quản lý cơ sở', facility: 'Downtown Storage', status: 'Active', avatarBg: 'bg-blue-100 text-blue-700' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena.r@storageco.com', initials: 'ER', role: 'Nhân viên', facility: 'Westside Unit', status: 'Đã khóa', avatarBg: 'bg-amber-100 text-amber-700' },
  { id: 4, name: 'Marcus Tyrell', email: 'm.tyrell@storageco.com', initials: 'MT', role: 'Quản lý cơ sở', facility: 'Northgate Storage', status: 'Active', avatarBg: 'bg-emerald-100 text-emerald-700' },
  { id: 5, name: 'Sarah Jenkins', email: 's.jenkins@storageco.com', initials: 'SJ', role: 'Nhân viên', facility: 'Eastside Unit', status: 'Active', avatarBg: 'bg-purple-100 text-purple-700' },
];

const mockLogs = [
  { id: 'L-1049', timestamp: '2026-09-24 16:45:12', user: 'alice.j@storageco.com', action: 'Thay đổi vai trò cho Robert Chen', detail: 'Thay đổi từ Nhân viên sang Quản lý cơ sở', ip: '192.168.1.45' },
  { id: 'L-1048', timestamp: '2026-09-24 15:30:05', user: 'system', action: 'Sao lưu tự động hoàn tất', detail: 'Kích thước sao lưu: 4.2GB', ip: '10.0.0.1' },
  { id: 'L-1047', timestamp: '2026-09-24 14:12:33', user: 'robert.c@storageco.com', action: 'Đăng nhập thành công', detail: 'Session ID: xcv-892-klm', ip: '172.16.254.1' },
  { id: 'L-1046', timestamp: '2026-09-24 10:05:19', user: 'elena.r@storageco.com', action: 'Đăng nhập thất bại (3)', detail: 'Cung cấp sai mật khẩu', ip: '198.51.100.23' },
  { id: 'L-1045', timestamp: '2026-09-24 10:05:20', user: 'system', action: 'Tài khoản bị khóa: elena.r@storageco.com', detail: 'Vượt quá số lần đăng nhập tối đa', ip: '10.0.0.1' },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'users' | 'logs'>('users');

  return (
    <div className="min-h-screen bg-[#f2eee4] text-[#1e2723] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 border-b border-[#1e272324]">
        <div className="font-medium tracking-wide flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#c9a44b]" />
          <span>STORAGE / CO | ADMIN</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium">Quản trị viên</span>
            <span className="text-xs text-[#1e2723]/60">Quản trị Hệ thống</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#1e2723] text-[#f2eee4] flex items-center justify-center font-medium">
            AD
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-10">
        
        {/* Tabs */}
        <div className="relative flex border-b border-[#1e272324] mb-10">
          <button 
            onClick={() => setActiveTab('users')}
            className={`pb-4 px-6 font-medium transition-colors cursor-pointer ${
              activeTab === 'users' ? 'text-[#1e2723]' : 'text-[#1e2723]/60 hover:text-[#1e2723]'
            }`}
          >
            Quản lý Người dùng
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`pb-4 px-6 font-medium transition-colors cursor-pointer ${
              activeTab === 'logs' ? 'text-[#1e2723]' : 'text-[#1e2723]/60 hover:text-[#1e2723]'
            }`}
          >
            Nhật ký hệ thống
          </button>
          <div 
            className="absolute bottom-[-1px] h-[2px] bg-[#c9a44b] transition-all duration-300 ease-out"
            style={{ 
              width: activeTab === 'users' ? '160px' : '150px', 
              left: activeTab === 'users' ? '8px' : '182px' 
            }}
          />
        </div>

        {/* Tab 1: Quản lý Người dùng */}
        {activeTab === 'users' && (
          <div className="animate-in fade-in duration-300">
            <div className="flex justify-between items-end mb-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#c9a44b] mb-2 font-semibold">
                  QUẢN TRỊ / NGƯỜI DÙNG
                </div>
                <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Quyền & Vai trò</h2>
              </div>
              <button className="bg-[#c9a44b] text-[#1e2723] px-6 py-3 rounded-xl font-medium hover:bg-[#b89543] transition-colors cursor-pointer border-0 shadow-sm flex items-center gap-2">
                <span>+</span> Tạo tài khoản mới
              </button>
            </div>

            <div className="bg-[#f8f6f0] rounded-2xl border border-[#1e272324] overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center gap-3 p-6 border-b border-[#1e272324] bg-white/50">
                <Users className="w-5 h-5 text-[#1e2723]/60" />
                <h3 className="font-medium text-lg">Thành viên nhóm</h3>
                <span className="bg-[#e4dfd4] text-[#1e2723] text-xs font-semibold px-2 py-0.5 rounded-md ml-1">05</span>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-transparent">
                    <th className="px-6 py-4 text-left font-medium text-xs uppercase tracking-wider text-[#1e2723]/60 border-b border-[#1e272324]">Người dùng</th>
                    <th className="px-6 py-4 text-left font-medium text-xs uppercase tracking-wider text-[#1e2723]/60 border-b border-[#1e272324]">Vai trò</th>
                    <th className="px-6 py-4 text-left font-medium text-xs uppercase tracking-wider text-[#1e2723]/60 border-b border-[#1e272324]">Truy cập cơ sở</th>
                    <th className="px-6 py-4 text-left font-medium text-xs uppercase tracking-wider text-[#1e2723]/60 border-b border-[#1e272324]">Trạng thái</th>
                    <th className="px-6 py-4 text-right font-medium text-xs uppercase tracking-wider text-[#1e2723]/60 border-b border-[#1e272324]">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e272324]">
                  {mockUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-white/60 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${user.avatarBg}`} title={user.name}>
                            {user.initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-[#1e2723]">{user.name}</span>
                            <span className="text-sm text-gray-500">{user.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#1e2723]/10 bg-[#f2eee4] text-sm font-medium text-[#1e2723]">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#1e2723]/80">{user.facility}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                          user.status === 'Active' ? 'text-green-700' : 'text-red-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-1 opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg hover:bg-amber-50 text-[#1e2723]/60 hover:text-amber-500 transition-all cursor-pointer" title="Chỉnh sửa">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className={`p-2 rounded-lg transition-all cursor-pointer ${
                            user.status === 'Đã khóa' ? 'text-red-600 hover:bg-red-50' : 'text-[#1e2723]/60 hover:text-red-600 hover:bg-red-50'
                          }`} title={user.status === 'Đã khóa' ? "Mở khóa" : "Khóa tài khoản"}>
                            {user.status === 'Đã khóa' ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Nhật ký hệ thống */}
        {activeTab === 'logs' && (
          <div className="animate-in fade-in duration-300">
            <div className="text-xs uppercase tracking-widest text-[#c9a44b] mb-2 font-semibold">
              QUẢN TRỊ / HOẠT ĐỘNG
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">Nhật ký hệ thống</h2>
            
            {/* Filter Bar */}
            <div className="flex gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-[#1e2723]/40" />
                </div>
                <input 
                  type="text" 
                  placeholder="Tìm kiếm nhật ký..." 
                  className="w-full bg-white/50 border border-[#1e272324] rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#c9a44b] focus:ring-1 focus:ring-[#c9a44b] transition-all shadow-sm"
                />
              </div>
              <div className="relative w-48">
                <select className="w-full bg-white/50 border border-[#1e272324] rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:border-[#c9a44b] cursor-pointer shadow-sm">
                  <option value="">Lọc theo Người dùng</option>
                  <option value="alice.j@storageco.com">Alice Johnson</option>
                  <option value="system">System</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#1e2723]/60">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
              <div className="relative w-48">
                <select className="w-full bg-white/50 border border-[#1e272324] rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none focus:border-[#c9a44b] cursor-pointer shadow-sm">
                  <option value="">Lọc theo Ngày</option>
                  <option value="today">Hôm nay</option>
                  <option value="7days">7 Ngày qua</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#1e2723]/60">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="bg-[#1e2723] text-white rounded-2xl overflow-hidden shadow-xl border border-[#2a3832]">
              {/* Dark Card Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#25352d]">
                <h3 className="font-medium text-sm tracking-wide">Luồng hoạt động</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-widest text-white/60">TRỰC TIẾP - 5 MỤC</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#1e2723]">
                    <tr>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white/40 border-b border-white/10">Thời gian</th>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white/40 border-b border-white/10">Người dùng</th>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white/40 border-b border-white/10">Hành động Details</th>
                      <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-white/40 border-b border-white/10 text-right">Địa chỉ IP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 bg-[#1e2723]">
                    {mockLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="font-mono text-sm text-[#c9a44b]">{log.timestamp}</span>
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-sm font-bold text-white">
                            {log.user}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex flex-col">
                            <span className="text-sm text-white font-medium">{log.action}</span>
                            <span className="text-xs text-white/50 mt-1">{log.detail}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right whitespace-nowrap">
                          <span className="font-mono text-sm text-[#8fa291]">{log.ip}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
