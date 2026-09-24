import { Package, LayoutDashboard, FileText, Users, Download, TrendingUp, BarChart3, Activity, Bell } from 'lucide-react';

export default function ManagerDashboard() {
  const chartData = [
    { month: 'Thg 3', revenue: 45, fill: 60 },
    { month: 'Thg 4', revenue: 52, fill: 65 },
    { month: 'Thg 5', revenue: 58, fill: 72 },
    { month: 'Thg 6', revenue: 65, fill: 75 },
    { month: 'Thg 7', revenue: 70, fill: 82 },
    { month: 'Thg 8', revenue: 78, fill: 88 },
    { month: 'Thg 9', revenue: 84.2, fill: 92.4, active: true },
  ];

  return (
    <div className="h-screen flex bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 gap-2">
          <Package className="text-emerald-600" size={24} />
          {/* LOGO: Ultra-bold Industrial Typography */}
          <span className="uppercase tracking-wide text-2xl text-slate-900 mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>STORAGE SYS</span>
        </div>
        
        <div className="p-4 space-y-1 flex-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 mt-2 px-2">Bảng điều khiển</div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-600">
            <LayoutDashboard size={20} /> Tổng quan
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors border-l-4 border-transparent">
            <Package size={20} /> Kho & Chính sách
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors border-l-4 border-transparent">
            <FileText size={20} /> Hợp đồng
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors border-l-4 border-transparent">
            <Users size={20} /> Điều phối nhân sự
          </button>
        </div>
        
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700">NB</div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Nguyễn Thị B</div>
              <div className="text-xs text-slate-500">Quản lý Cơ sở</div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <h1 className="text-2xl font-bold text-slate-900">Tổng quan Cơ sở</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              Bộ lọc: 
              <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none focus:border-emerald-500 font-medium text-slate-900">
                <option>Tháng này</option>
                <option>Tháng trước</option>
              </select>
            </div>
            <button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-sm text-sm">
              <Download size={16} /> Xuất báo cáo
            </button>
          </div>
        </div>

        {/* Scrollable Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* KPI STAT CARDS */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-bold text-slate-500">Doanh thu tháng</div>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><TrendingUp size={18}/></div>
              </div>
              {/* BIG METRIC: Ultra-bold Industrial Typography */}
              <div className="text-4xl uppercase tracking-wide text-slate-900 mt-1 mb-3" style={{ fontFamily: "'Anton', sans-serif" }}>$84,250</div>
              <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2 py-0.5 rounded">
                +12.5% so với tháng trước
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-bold text-slate-500">Tỷ lệ lấp đầy</div>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><BarChart3 size={18}/></div>
              </div>
              {/* BIG METRIC: Ultra-bold Industrial Typography */}
              <div className="text-4xl uppercase tracking-wide text-slate-900 mt-1 mb-3" style={{ fontFamily: "'Anton', sans-serif" }}>92.4%</div>
              <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2 py-0.5 rounded">
                +2.1% so với tháng trước
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-bold text-slate-500">Hợp đồng hoạt động</div>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Activity size={18}/></div>
              </div>
              {/* BIG METRIC: Ultra-bold Industrial Typography */}
              <div className="text-4xl uppercase tracking-wide text-slate-900 mt-1 mb-3" style={{ fontFamily: "'Anton', sans-serif" }}>482</div>
              <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2 py-0.5 rounded">
                18 hợp đồng mới
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm font-bold text-slate-500">Yêu cầu chờ xử lý</div>
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Bell size={18}/></div>
              </div>
              {/* BIG METRIC: Ultra-bold Industrial Typography */}
              <div className="text-4xl uppercase tracking-wide text-slate-900 mt-1 mb-3" style={{ fontFamily: "'Anton', sans-serif" }}>14</div>
              <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold px-2 py-0.5 rounded">
                Cần xử lý hôm nay
              </span>
            </div>
          </div>

          {/* SECOND ROW: Charts & Dispatch */}
          <div className="flex gap-6 mb-6">
            
            {/* Chart Section (2/3) */}
            <div className="flex-1 bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
              <h3 className="font-bold text-lg text-slate-900">Biểu đồ Doanh thu & Tỷ lệ sử dụng</h3>
              <p className="text-sm text-slate-500 mb-8">Hiệu suất 7 tháng gần nhất</p>
              
              {/* CSS Mock Bar Chart */}
              <div className="flex-1 flex items-end gap-4 h-64 border-b border-slate-100 pb-2 relative">
                {/* Y-Axis Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2 text-xs text-slate-400 font-medium">
                  <div className="border-b border-slate-100 border-dashed w-full h-0 flex items-center"><span className="-mt-4 bg-white pr-2">$100k</span></div>
                  <div className="border-b border-slate-100 border-dashed w-full h-0 flex items-center"><span className="-mt-4 bg-white pr-2">$75k</span></div>
                  <div className="border-b border-slate-100 border-dashed w-full h-0 flex items-center"><span className="-mt-4 bg-white pr-2">$50k</span></div>
                  <div className="border-b border-slate-100 border-dashed w-full h-0 flex items-center"><span className="-mt-4 bg-white pr-2">$25k</span></div>
                </div>
                
                {/* Bars */}
                <div className="w-12 shrink-0"></div> {/* Spacer for Y-axis text */}
                {chartData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end group relative h-full pt-6">
                    {/* Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-4 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      ${data.revenue}k
                    </div>
                    {/* Bar */}
                    <div 
                      className={`w-full max-w-[48px] rounded-t-sm transition-all duration-300 ${data.active ? 'bg-emerald-600 shadow-md' : 'bg-slate-300 group-hover:bg-emerald-400'}`}
                      style={{ height: `${data.revenue}%` }}
                    ></div>
                    <div className="mt-4 text-xs font-bold text-slate-500">{data.month}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispatch Section (1/3) */}
            <div className="w-1/3 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-slate-900">Điều phối nhân sự</h3>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full border border-emerald-200">3 Trực ca</span>
              </div>

              <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs">PV</div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Phạm Văn D</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Sẵn sàng</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white border border-slate-300 text-slate-700 text-xs font-bold py-1.5 rounded hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors">Giao việc</button>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs">TV</div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Trần Văn F</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span> Đang xử lý sự cố</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white border border-slate-300 text-slate-700 text-xs font-bold py-1.5 rounded hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors">Xem tiến độ</button>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-emerald-50 text-emerald-700 font-bold text-sm py-2 rounded-lg hover:bg-emerald-100 transition-colors">Xem toàn bộ ca trực</button>
            </div>

          </div>

          {/* Table Section */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-900">Quản lý Hợp đồng gần đây</h3>
              <div className="flex gap-2">
                <button className="bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-slate-50">Tạo mã giảm giá</button>
                <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-emerald-700">Gán kho (Assign)</button>
              </div>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
                  <th className="p-4 border-b border-slate-200">Mã HĐ</th>
                  <th className="p-4 border-b border-slate-200">Khách hàng</th>
                  <th className="p-4 border-b border-slate-200">Mã Kho</th>
                  <th className="p-4 border-b border-slate-200">Thời hạn</th>
                  <th className="p-4 border-b border-slate-200">Trạng thái</th>
                  <th className="p-4 border-b border-slate-200 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-slate-900">
                <tr className="hover:bg-slate-50 border-b border-slate-100">
                  <td className="p-4 font-mono text-slate-500">HD-9921</td>
                  <td className="p-4">Jordan Lee</td>
                  <td className="p-4 font-bold text-slate-700">#B14</td>
                  <td className="p-4">24/12/2026</td>
                  <td className="p-4"><span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs">Hoạt động</span></td>
                  <td className="p-4 text-right"><button className="text-emerald-600 hover:text-emerald-800 font-bold">Chi tiết</button></td>
                </tr>
                <tr className="hover:bg-slate-50 border-b border-slate-100">
                  <td className="p-4 font-mono text-slate-500">HD-9905</td>
                  <td className="p-4">Elena Rodriguez</td>
                  <td className="p-4 font-bold text-slate-700">#A05</td>
                  <td className="p-4">20/09/2026</td>
                  <td className="p-4"><span className="bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full text-xs">Quá hạn nợ</span></td>
                  <td className="p-4 text-right"><button className="text-rose-600 hover:text-rose-800 font-bold">Nhắc nhở nợ</button></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
