import { useState } from 'react';
import { Package, Search, Plus, Edit2, Lock, Shield } from 'lucide-react';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 px-8 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Package className="text-emerald-600" size={24} />
          {/* LOGO: Ultra-bold Industrial Typography */}
          <span className="font-black uppercase tracking-wide text-2xl text-slate-900 mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>STORAGE SYS</span>
          <span className="text-slate-400 font-medium ml-2">|</span>
          <span className="text-slate-600 font-medium ml-2">Quản trị Hệ thống</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-slate-900">Trần Văn A</div>
            <div className="text-xs text-slate-500">System Admin</div>
          </div>
          <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">TA</div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        
        {/* Tab Switcher */}
        <div className="flex gap-6 border-b border-slate-200 mb-8">
          <button 
            onClick={() => setActiveTab('users')}
            className={`pb-3 font-bold text-sm transition-colors relative ${activeTab === 'users' ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Quản lý Người dùng
            {activeTab === 'users' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`pb-3 font-bold text-sm transition-colors relative ${activeTab === 'logs' ? 'text-emerald-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            Nhật ký hệ thống (System Logs)
            {activeTab === 'logs' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"></div>}
          </button>
        </div>

        {/* TAB 1: USER MANAGEMENT */}
        {activeTab === 'users' && (
          <div className="animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm tài khoản..." 
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium focus:outline-none focus:border-emerald-500 shadow-sm"
                />
              </div>
              <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-emerald-700 shadow-sm transition-colors">
                <Plus size={18} /> Tạo tài khoản mới
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
                    <th className="p-4 border-b border-slate-200 w-1/3">Người dùng</th>
                    <th className="p-4 border-b border-slate-200">Vai trò</th>
                    <th className="p-4 border-b border-slate-200">Cơ sở truy cập</th>
                    <th className="p-4 border-b border-slate-200">Trạng thái</th>
                    <th className="p-4 border-b border-slate-200 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50 border-b border-slate-100 group transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center">TA</div>
                        <div>
                          <div className="font-bold text-slate-900">Trần Văn A</div>
                          <div className="text-xs text-slate-500 mt-0.5">tran.a@storageco.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-md">
                        <Shield size={12}/> Quản trị HT
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-700">Tất cả cơ sở</td>
                    <td className="p-4">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-bold">Hoạt động</span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200" title="Chỉnh sửa phân quyền"><Edit2 size={16} /></button>
                        <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-transparent hover:border-rose-200" title="Khóa tài khoản"><Lock size={16} /></button>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50 border-b border-slate-100 group transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center">NB</div>
                        <div>
                          <div className="font-bold text-slate-900">Nguyễn Thị B</div>
                          <div className="text-xs text-slate-500 mt-0.5">nguyen.b@storageco.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-md">
                        Quản lý cơ sở
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-700">Cơ sở Trung tâm</td>
                    <td className="p-4">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-bold">Hoạt động</span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200"><Edit2 size={16} /></button>
                        <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-transparent hover:border-rose-200"><Lock size={16} /></button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 - Locked */}
                  <tr className="hover:bg-slate-50 border-b border-slate-100 group transition-colors bg-slate-50/50">
                    <td className="p-4 opacity-60">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-400 font-bold flex items-center justify-center">LC</div>
                        <div>
                          <div className="font-bold text-slate-900">Lê Văn C</div>
                          <div className="text-xs text-slate-500 mt-0.5">le.c@storageco.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 opacity-60">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold px-2.5 py-1 rounded-md">
                        Nhân viên
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-700 opacity-60">Cơ sở Quận 1</td>
                    <td className="p-4">
                      <span className="bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full text-xs font-bold">Đã khóa</span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-200"><Edit2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM LOGS */}
        {activeTab === 'logs' && (
          <div className="animate-fade-in-up">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" placeholder="Tra cứu Log hệ thống..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium focus:outline-none focus:border-emerald-500 shadow-sm" />
              </div>
              <select className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 shadow-sm">
                <option>Lọc theo User</option>
                <option>Trần Văn A</option>
                <option>System</option>
              </select>
              <select className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 outline-none focus:border-emerald-500 shadow-sm">
                <option>7 Ngày qua</option>
                <option>Hôm nay</option>
              </select>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  {/* Tech Terminal Header Style */}
                  <tr className="bg-slate-900 text-slate-300 text-xs uppercase font-bold tracking-wider">
                    <th className="px-4 py-3 border-b border-slate-800 w-48">Timestamp</th>
                    <th className="px-4 py-3 border-b border-slate-800 w-1/4">User</th>
                    <th className="px-4 py-3 border-b border-slate-800">Action Performed</th>
                    <th className="px-4 py-3 border-b border-slate-800 w-48 text-right">IP / Origin</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="hover:bg-slate-50 border-b border-slate-100">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-500">2026-09-24 19:45:12</td>
                    <td className="px-4 py-2.5 font-bold text-slate-800">Trần Văn A</td>
                    <td className="px-4 py-2.5 text-slate-600">Updated role for <span className="font-semibold text-slate-900">Lê Văn C</span> to <span className="text-rose-600">Locked</span></td>
                    <td className="px-4 py-2.5 font-mono text-xs text-emerald-600 text-right bg-slate-50/50">192.168.1.45</td>
                  </tr>
                  <tr className="hover:bg-slate-50 border-b border-slate-100">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-500">2026-09-24 15:30:05</td>
                    <td className="px-4 py-2.5 font-bold text-slate-800">System (Auto)</td>
                    <td className="px-4 py-2.5 text-slate-600">Automated database backup completed successfully.</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-400 text-right">10.0.0.1 (Local)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 border-b border-slate-100">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-500">2026-09-24 14:12:33</td>
                    <td className="px-4 py-2.5 font-bold text-slate-800">Nguyễn Thị B</td>
                    <td className="px-4 py-2.5 text-slate-600">Logged in successfully. Session ID: x92k1</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-emerald-600 text-right bg-slate-50/50">172.16.254.1</td>
                  </tr>
                  <tr className="hover:bg-slate-50 border-b border-slate-100">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-500">2026-09-24 10:05:19</td>
                    <td className="px-4 py-2.5 font-bold text-slate-800">Lê Văn C</td>
                    <td className="px-4 py-2.5 text-slate-600">Failed login attempt (3/3). Triggering security lockout.</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-amber-600 text-right bg-amber-50">198.51.100.23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
