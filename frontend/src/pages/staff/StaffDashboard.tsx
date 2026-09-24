import { useState } from 'react';
import { Filter, CheckCircle2, AlertCircle, Clock, ChevronRight, Package, User, PenTool, ShieldAlert } from 'lucide-react';

export default function StaffDashboard() {
  const [activeTask, setActiveTask] = useState('B14');

  const tasks = [
    { id: 'B14', type: 'Check-in', customer: 'Trần Văn A', time: '10:00 AM', status: 'Sẵn sàng', color: 'emerald' },
    { id: 'A05', type: 'Sự cố', customer: 'Nguyễn Thị B', time: '11:30 AM', status: 'Chờ xử lý', color: 'amber' },
    { id: 'C22', type: 'Kiểm tra', customer: 'Lê Văn C', time: '02:00 PM', status: 'Quá hạn', color: 'rose' },
  ];

  return (
    <div className="h-screen flex flex-col bg-slate-100 font-sans text-slate-900">
      {/* Top Brand Bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <Package className="text-emerald-600" size={24} />
          {/* LOGO: Ultra-bold Industrial Typography */}
          <span className="font-black uppercase tracking-wide text-2xl text-slate-900 mt-0.5" style={{ fontFamily: "'Anton', sans-serif" }}>STORAGE SYS</span>
          <span className="text-slate-400 font-medium ml-2">|</span>
          <span className="text-slate-600 font-medium ml-2">Nhân viên Cơ sở</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-bold text-slate-900">Phạm Văn D</div>
            <div className="text-xs text-slate-500">Ca Sáng</div>
          </div>
          <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">PD</div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden p-4 gap-4">
        {/* LEFT PANE: To-Do List (1/3 width) */}
        <div className="w-1/3 flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <h2 className="font-bold text-slate-900">Danh sách việc hôm nay</h2>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">3</span>
          </div>
          <div className="p-3 border-b border-slate-100">
            <button className="w-full flex items-center justify-center gap-2 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
              <Filter size={16} /> Lọc tác vụ ngày
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {tasks.map(task => (
              <button 
                key={task.id}
                onClick={() => setActiveTask(task.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col relative overflow-hidden ${
                  activeTask === task.id 
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-sm' 
                    : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                {activeTask === task.id && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-600"></div>}
                
                <div className="flex justify-between items-start mb-2 pl-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    {task.type === 'Check-in' ? <CheckCircle2 size={18} className="text-emerald-600"/> : 
                     task.type === 'Sự cố' ? <AlertCircle size={18} className="text-amber-500"/> : 
                     <Clock size={18} className="text-slate-500"/>}
                    {task.type}
                  </div>
                  <span className="text-xs font-medium text-slate-500">{task.time}</span>
                </div>
                <div className="pl-1 text-sm text-slate-600 mb-3 space-y-1">
                  <div>Khách hàng: <span className="font-medium text-slate-900">{task.customer}</span></div>
                  {/* UNIT ID IN LIST: Ultra-bold Industrial Typography */}
                  <div>Kho: <span className="font-black uppercase tracking-wide text-slate-900 text-lg" style={{ fontFamily: "'Anton', sans-serif" }}>{`#${task.id}`}</span></div>
                </div>
                <div className="flex justify-between items-center pl-1">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                    task.color === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    task.color === 'amber' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {task.status}
                  </span>
                  <ChevronRight size={18} className={activeTask === task.id ? 'text-emerald-600' : 'text-slate-400'} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT PANE: Task Details (2/3 width) */}
        <div className="w-2/3 flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in-right">
          <div className="p-8 flex-1 overflow-y-auto">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Sẵn sàng
              </span>
              <div className="flex items-baseline gap-3">
                <h1 className="text-3xl font-bold text-slate-900">Xử lý Kho</h1>
                {/* UNIT ID IN DETAIL: Ultra-bold Industrial Typography */}
                <span className="text-4xl font-black uppercase tracking-wide text-emerald-600" style={{ fontFamily: "'Anton', sans-serif" }}>#B14</span>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Thông tin nghiệm thu</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Khách hàng</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500"><User size={20}/></div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">Trần Văn A</div>
                    <div className="text-sm text-slate-500">0901 234 567</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Giờ hẹn</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><Clock size={20}/></div>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">10:00 AM</div>
                    <div className="text-sm text-slate-500">Hôm nay</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tình trạng kho</div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-slate-400"><CheckCircle2 size={20}/></div>
                  <div>
                    <div className="font-bold text-slate-900">Đã dọn dẹp & Trống</div>
                    <div className="text-sm text-slate-500 mt-1">10x20 ft • Có điều hòa</div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 border border-amber-100 p-5 rounded-xl">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">Ghi chú từ quản lý</div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-amber-500"><AlertCircle size={20}/></div>
                  <div className="text-sm text-amber-900 font-medium">
                    Khách yêu cầu kiểm tra ổ khóa dự phòng trước khi nhận. Vui lòng chụp ảnh xác nhận.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Touch-Optimized Action Bar */}
          <div className="p-6 border-t border-slate-200 bg-slate-50 flex gap-4">
            <button className="flex-1 bg-emerald-600 text-white h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-sm">
              <CheckCircle2 size={22} /> Xác nhận Check-in
            </button>
            <button className="px-6 bg-white border border-slate-300 text-slate-700 h-14 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm">
              <PenTool size={20} /> Ghi nhận hư hỏng
            </button>
            <button className="px-6 bg-white border border-slate-300 text-slate-700 h-14 rounded-xl font-bold flex items-center justify-center hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm" title="Báo cáo sự cố khẩn cấp">
              <ShieldAlert size={20} className="text-rose-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
