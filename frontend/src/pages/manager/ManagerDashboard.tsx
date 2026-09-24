import React, { useState } from 'react';
import {
  Box, LayoutDashboard, Grid, FileText, Users, Calendar, Download,
  TrendingUp, BarChart3, Activity, AlertCircle, CheckCircle2,
  MoreHorizontal, Plus, Send, Bell
} from 'lucide-react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const chartData = [
  { name: 'Jan', value: 20000 },
  { name: 'Feb', value: 25000 },
  { name: 'Mar', value: 30000 },
  { name: 'Apr', value: 32000 },
  { name: 'May', value: 40000 },
  { name: 'Jun', value: 45000 },
  { name: 'Jul', value: 42000 },
  { name: 'Aug', value: 50000 },
  { name: 'Sep', value: 65000 },
  { name: 'Oct', value: 75000 },
  { name: 'Nov', value: 82000 },
  { name: 'Dec', value: 90000 },
];

export default function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="h-screen flex bg-[#f2eee4] text-[#1e2723] font-sans antialiased overflow-hidden selection:bg-[#c9a44b] selection:text-[#f2eee4]">

      {/* 2. Left Sidebar */}
      <aside className="w-64 bg-[#25352d] flex flex-col shrink-0">
        <div className="p-8 border-b border-[#f2eee4]/10">
          <div className="flex items-center gap-3">
            <div className="bg-[#c9a44b] text-[#1e2723] p-2 rounded-xl">
              <Box className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-bold tracking-[0.2em] uppercase text-xs text-[#f2eee4] block">Storage / Co</span>
              <span className="text-[#f2eee4]/60 text-xs">Manager</span>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${activeTab === 'overview' ? 'bg-[#f2eee4] text-[#25352d] font-medium' : 'text-[#f2eee4]/70 hover:bg-[#f2eee4]/5 hover:text-[#f2eee4]'
              }`}
          >
            <LayoutDashboard className="w-5 h-5" strokeWidth={1.5} />
            Tổng quan
          </button>

          <button
            onClick={() => setActiveTab('units')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${activeTab === 'units' ? 'bg-[#f2eee4] text-[#25352d] font-medium' : 'text-[#f2eee4]/70 hover:bg-[#f2eee4]/5 hover:text-[#f2eee4]'
              }`}
          >
            <Grid className="w-5 h-5" strokeWidth={1.5} />
            Kho & Chính sách
          </button>

          <button
            onClick={() => setActiveTab('contracts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${activeTab === 'contracts' ? 'bg-[#f2eee4] text-[#25352d] font-medium' : 'text-[#f2eee4]/70 hover:bg-[#f2eee4]/5 hover:text-[#f2eee4]'
              }`}
          >
            <FileText className="w-5 h-5" strokeWidth={1.5} />
            Hợp đồng
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${activeTab === 'staff' ? 'bg-[#f2eee4] text-[#25352d] font-medium' : 'text-[#f2eee4]/70 hover:bg-[#f2eee4]/5 hover:text-[#f2eee4]'
              }`}
          >
            <Users className="w-5 h-5" strokeWidth={1.5} />
            Điều phối nhân sự
          </button>
        </nav>

        <div className="p-6 border-t border-[#f2eee4]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#f2eee4]/10 flex items-center justify-center">
              <span className="text-[#f2eee4] font-medium text-sm">MB</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#f2eee4]">Quản lý Cơ sở</p>
              <p className="text-xs text-[#f2eee4]/50">Cơ sở B</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* 3. Top Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold mb-2 block">Bảng điều khiển</span>
              <h1 className="text-4xl font-normal tracking-tight">Tổng quan cơ sở</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#1e2723]/15 hover:bg-white transition-colors text-sm font-medium cursor-pointer active:scale-95">
                <Calendar className="w-4 h-4 text-[#1e2723]/60" strokeWidth={1.5} />
                This Month
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a44b] hover:bg-[#b89543] transition-colors text-[#1e2723] text-sm font-medium cursor-pointer active:scale-95">
                <Download className="w-4 h-4" strokeWidth={1.5} />
                Export PDF
              </button>
            </div>
          </header>

          {/* 4. Top Row (Key Metrics) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-[#1e2723]/15 bg-transparent hover:bg-white/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-5 h-5 text-[#c9a44b]" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[#1e2723]/60 uppercase tracking-wider">Doanh thu tháng</span>
              </div>
              <h2 className="text-5xl font-medium tracking-tight mb-2">$84,250</h2>
              <p className="text-sm text-green-600 font-medium">+12.5% from last month</p>
            </div>

            <div className="p-8 rounded-3xl border border-[#1e2723]/15 bg-transparent hover:bg-white/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-5 h-5 text-[#c9a44b]" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[#1e2723]/60 uppercase tracking-wider">Tỷ lệ lấp đầy</span>
              </div>
              <h2 className="text-5xl font-medium tracking-tight mb-2">92.4%</h2>
              <p className="text-sm text-[#1e2723]/50 font-medium">14 units available</p>
            </div>

            <div className="p-8 rounded-3xl border border-[#1e2723]/15 bg-transparent hover:bg-white/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-[#c9a44b]" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[#1e2723]/60 uppercase tracking-wider">Hoạt động đang diễn ra</span>
              </div>
              <h2 className="text-5xl font-medium tracking-tight mb-2">18</h2>
              <p className="text-sm text-[#1e2723]/50 font-medium">8 công việc chờ xử lý</p>
            </div>
          </section>

          {/* 5. Middle Row (2/3 & 1/3) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Chart Placeholder (2/3 width) */}
            <div className="lg:col-span-2 p-8 rounded-3xl border border-[#1e2723]/15 bg-transparent flex flex-col min-h-[400px]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">Xu hướng doanh thu & sử dụng</h3>
                  <p className="text-sm text-[#1e2723]/50 mt-1">Tổng quan hiệu suất cơ sở theo tháng</p>
                </div>
                <button className="text-[#1e2723]/50 hover:text-[#1e2723]">
                  <MoreHorizontal className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex-1 w-full mt-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e272324" />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      ticks={['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Dec']}
                      tick={{ fill: '#1e2723', opacity: 0.5, fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      ticks={[0, 25000, 50000, 100000]}
                      tickFormatter={(value) => value === 0 ? '$0' : `$${value / 1000}k`}
                      tick={{ fill: '#1e2723', opacity: 0.5, fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(201, 164, 75, 0.1)' }}
                      contentStyle={{ borderRadius: '12px', border: '1px solid rgba(30, 39, 35, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, 'Doanh thu']}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index < 8 ? '#4a5751' : '#c9a44b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Custom Legend */}
                <div className="flex items-center gap-6 mt-6 ml-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4a5751]"></span>
                    <span className="text-sm font-medium text-[#1e2723]/70">Doanh thu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c9a44b]"></span>
                    <span className="text-sm font-medium text-[#1e2723]/70">Chỉ số sử dụng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Điều phối nhân sự Panel (1/3 width) */}
            <div className="lg:col-span-1 p-8 rounded-3xl border border-[#1e2723]/15 bg-transparent flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-medium tracking-tight">Điều phối nhân sự</h3>
                <button className="w-8 h-8 rounded-full bg-[#1e2723]/5 flex items-center justify-center hover:bg-[#1e2723]/10">
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 space-y-4">
                {/* Staff 1 */}
                <div className="p-5 rounded-2xl border border-[#1e2723]/10 bg-white/30 hover:bg-white/60 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#25352d] text-[#f2eee4] flex items-center justify-center font-medium text-sm">
                        JL
                      </div>
                      <div>
                        <p className="font-medium">Jordan Lee</p>
                        <p className="text-xs text-[#1e2723]/50">Sẵn sàng</p>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 text-xs font-medium border border-[#1e2723]/15 rounded-full hover:bg-white">Giao việc</button>
                    <button className="flex-1 py-2 text-xs font-medium border border-[#1e2723]/15 rounded-full hover:bg-white flex items-center justify-center gap-1">
                      Delegate <Send className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* Staff 2 */}
                <div className="p-5 rounded-2xl border border-[#1e2723]/10 bg-white/30 hover:bg-white/60 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#c9a44b] text-[#1e2723] flex items-center justify-center font-medium text-sm">
                        AM
                      </div>
                      <div>
                        <p className="font-medium">Alex Morgan</p>
                        <p className="text-xs text-[#1e2723]/50">Đang nghỉ</p>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 text-xs font-medium border border-[#1e2723]/15 rounded-full hover:bg-white">Giao việc</button>
                    <button className="flex-1 py-2 text-xs font-medium border border-[#1e2723]/15 rounded-full hover:bg-white flex items-center justify-center gap-1">
                      Delegate <Send className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 6. Bottom Row (Table) */}
          <section className="p-8 rounded-3xl border border-[#1e2723]/15 bg-transparent overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-medium tracking-tight">Quản lý Hợp đồng & Kho</h3>
              <button className="text-sm font-medium text-[#1e2723]/60 hover:text-[#1e2723]">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#1e2723]/10">
                    <th className="pb-4 font-medium text-xs uppercase tracking-widest text-[#1e2723]/50 px-4">Kho</th>
                    <th className="pb-4 font-medium text-xs uppercase tracking-widest text-[#1e2723]/50 px-4">Khách hàng</th>
                    <th className="pb-4 font-medium text-xs uppercase tracking-widest text-[#1e2723]/50 px-4">Trạng thái</th>
                    <th className="pb-4 font-medium text-xs uppercase tracking-widest text-[#1e2723]/50 px-4 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2723]/5">
                  <tr className="hover:bg-[#e8e2d5] transition-colors">
                    <td className="py-5 px-4">
                      <p className="font-medium">Unit #B14</p>
                      <p className="text-xs text-[#1e2723]/50">10x20ft Điều hòa</p>
                    </td>
                    <td className="py-5 px-4 font-medium">Sarah Jenkins</td>
                    <td className="py-5 px-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" strokeWidth={2} /> Active
                      </span>
                    </td>
                    <td className="py-5 px-4 text-right space-x-2">
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#1e2723]/15 rounded-lg hover:bg-white cursor-pointer transition-colors">Sửa giá</button>
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#1e2723]/15 rounded-lg hover:bg-white cursor-pointer transition-colors">Chỉ định kho</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#e8e2d5] transition-colors">
                    <td className="py-5 px-4">
                      <p className="font-medium">Unit #A05</p>
                      <p className="text-xs text-[#1e2723]/50">5x5ft Tiêu chuẩn</p>
                    </td>
                    <td className="py-5 px-4 font-medium">Michael Chen</td>
                    <td className="py-5 px-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-700 text-xs font-medium">
                        <AlertCircle className="w-3 h-3" strokeWidth={2} /> Quá hạn
                      </span>
                    </td>
                    <td className="py-5 px-4 text-right space-x-2 flex justify-end gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#c9a44b]/30 rounded-lg bg-[#c9a44b]/10 text-[#b89543] hover:bg-[#c9a44b]/20 cursor-pointer transition-colors flex items-center">
                        <Bell className="w-3 h-3 mr-1" strokeWidth={1.5} /> Nhắc nợ
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#1e2723]/15 rounded-lg hover:bg-white cursor-pointer transition-colors">Sửa giá</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#e8e2d5] transition-colors">
                    <td className="py-5 px-4">
                      <p className="font-medium">Unit #C22</p>
                      <p className="text-xs text-[#1e2723]/50">10x10ft Cao cấp</p>
                    </td>
                    <td className="py-5 px-4 text-[#1e2723]/40 italic">Trống</td>
                    <td className="py-5 px-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#1e2723]/10 text-[#1e2723]/60 text-xs font-medium">
                        Sẵn sàng
                      </span>
                    </td>
                    <td className="py-5 px-4 text-right space-x-2">
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#1e2723]/15 rounded-lg hover:bg-[#1e2723]/90 bg-[#1e2723] text-[#f2eee4] cursor-pointer transition-colors">Chỉ định kho</button>
                      <button className="px-3 py-1.5 text-xs font-medium border border-[#1e2723]/15 rounded-lg hover:bg-white cursor-pointer transition-colors">Sửa giá</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}
