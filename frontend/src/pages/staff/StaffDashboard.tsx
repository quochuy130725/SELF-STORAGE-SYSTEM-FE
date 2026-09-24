import { useState } from 'react';
import { Key, ClipboardList, Settings, User, Filter, ArrowRight, Clock, LogIn, AlertCircle, Search, CheckCircle2, AlertTriangle, FileEdit } from 'lucide-react';

export default function StaffDashboard() {
  const [activeTask, setActiveTask] = useState('t1');

  return (
    <div className="h-screen flex bg-[#f2eee4] text-[#1e2723] font-sans antialiased overflow-hidden selection:bg-[#c9a44b] selection:text-[#f2eee4]">
      
      {/* 2. Left Sidebar (Ultra-compact) */}
      <aside className="w-20 bg-[#25352d] flex flex-col items-center py-8 shrink-0">
        <div className="flex flex-col gap-6 w-full items-center">
          <div className="w-12 h-12 bg-[#c9a44b] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#b89543] transition-colors">
            <Key className="w-6 h-6 text-[#1e2723]" strokeWidth={1.5} />
          </div>
          
          <div className="relative w-12 h-12 bg-[#f2eee4] rounded-2xl flex items-center justify-center cursor-pointer">
            <ClipboardList className="w-6 h-6 text-[#25352d]" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-[#25352d] rounded-full"></span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-6 w-full items-center">
          <button className="text-[#f2eee4]/60 hover:text-[#f2eee4] transition-colors cursor-pointer">
            <Settings className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button className="text-[#f2eee4]/60 hover:text-[#f2eee4] transition-colors cursor-pointer p-2 rounded-full border border-[#f2eee4]/20">
            <User className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </aside>

      {/* 3. Middle Pane (To-Do List) */}
      <section className="w-[35%] min-w-[360px] max-w-[480px] border-r border-[#1e2723]/15 flex flex-col">
        <div className="p-8 border-b border-[#1e2723]/10">
          <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold mb-4 block">Bảng điều khiển Nhân viên</span>
          <h1 className="text-3xl font-medium tracking-tight mb-2">Chào buổi sáng, Alex.</h1>
          <p className="text-[#1e2723]/60 text-sm">Thứ Năm, 24 tháng 9</p>
        </div>

        <div className="p-8 flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium tracking-tight">Việc cần làm hôm nay</h2>
            <button className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full border border-[#1e2723]/15 hover:bg-white transition-colors cursor-pointer active:scale-95">
              <Filter className="w-4 h-4" strokeWidth={1.5} /> Filter
            </button>
          </div>

          {/* Task List */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            
            {/* Active Card */}
            <div 
              onClick={() => setActiveTask('t1')}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-out active:scale-[0.98] ${
                activeTask === 't1' 
                  ? 'bg-[#25352d] text-[#f2eee4] shadow-xl' 
                  : 'bg-transparent border border-[#1e2723]/15 hover:border-[#1e2723]/30 text-[#1e2723]'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTask === 't1' ? 'bg-[#c9a44b] text-[#1e2723]' : 'bg-[#1e2723]/5 text-[#1e2723]'}`}>
                  <LogIn className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className={`text-xs font-medium ${activeTask === 't1' ? 'text-[#f2eee4]/60' : 'text-[#1e2723]/50'}`}>10:00 AM</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Khách hàng nhận kho</h3>
              <p className={`text-sm ${activeTask === 't1' ? 'text-[#f2eee4]/70' : 'text-[#1e2723]/60'}`}>Unit #B14</p>
              
              <div className="mt-6 flex justify-between items-center group">
                <span className={`text-sm font-medium ${activeTask === 't1' ? 'text-[#c9a44b]' : 'text-[#1e2723]'}`}>Xem chi tiết</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${activeTask === 't1' ? 'text-[#c9a44b]' : 'text-[#1e2723]/40'}`} strokeWidth={1.5} />
              </div>
            </div>

            {/* Inactive Card 1 */}
            <div 
              onClick={() => setActiveTask('t2')}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-out active:scale-[0.98] ${
                activeTask === 't2' 
                  ? 'bg-[#25352d] text-[#f2eee4] shadow-xl' 
                  : 'bg-transparent border border-[#1e2723]/15 hover:border-[#1e2723]/30 text-[#1e2723]'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTask === 't2' ? 'bg-[#c9a44b] text-[#1e2723]' : 'bg-red-500/10 text-red-600'}`}>
                  <AlertCircle className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className={`text-xs font-medium ${activeTask === 't2' ? 'text-[#f2eee4]/60' : 'text-[#1e2723]/50'}`}>11:30 AM</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Cổng lỗi</h3>
              <p className={`text-sm ${activeTask === 't2' ? 'text-[#f2eee4]/70' : 'text-[#1e2723]/60'}`}>Cổng chính</p>
              
              <div className="mt-6 flex justify-between items-center group">
                <span className={`text-sm font-medium ${activeTask === 't2' ? 'text-[#c9a44b]' : 'text-[#1e2723]'}`}>Xem chi tiết</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${activeTask === 't2' ? 'text-[#c9a44b]' : 'text-[#1e2723]/40'}`} strokeWidth={1.5} />
              </div>
            </div>

            {/* Inactive Card 2 */}
            <div 
              onClick={() => setActiveTask('t3')}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-out active:scale-[0.98] ${
                activeTask === 't3' 
                  ? 'bg-[#25352d] text-[#f2eee4] shadow-xl' 
                  : 'bg-transparent border border-[#1e2723]/15 hover:border-[#1e2723]/30 text-[#1e2723]'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTask === 't3' ? 'bg-[#c9a44b] text-[#1e2723]' : 'bg-green-600/10 text-green-700'}`}>
                  <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className={`text-xs font-medium ${activeTask === 't3' ? 'text-[#f2eee4]/60' : 'text-[#1e2723]/50'}`}>02:00 PM</span>
              </div>
              <h3 className="text-xl font-medium mb-1">Kiểm tra kho</h3>
              <p className={`text-sm ${activeTask === 't3' ? 'text-[#f2eee4]/70' : 'text-[#1e2723]/60'}`}>Unit #C22</p>
              
              <div className="mt-6 flex justify-between items-center group">
                <span className={`text-sm font-medium ${activeTask === 't3' ? 'text-[#c9a44b]' : 'text-[#1e2723]'}`}>Xem chi tiết</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${activeTask === 't3' ? 'text-[#c9a44b]' : 'text-[#1e2723]/40'}`} strokeWidth={1.5} />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Right Pane (Task Details & Actions) */}
      <section className="flex-1 flex flex-col bg-white overflow-hidden">
        {activeTask === 't1' ? (
          <div className="h-full flex flex-col animate-slide-in-right">
            {/* Header */}
            <div className="p-8 border-b border-[#1e2723]/10 flex items-center justify-between bg-white">
              <div>
                <h1 className="text-3xl font-medium tracking-tight mb-2">Khách hàng nhận kho</h1>
                <p className="text-[#1e2723]/50 text-sm font-medium">Unit #B14 &middot; phân công cho Jordan Lee</p>
              </div>
              <button className="w-12 h-12 rounded-full border border-[#1e2723]/15 flex items-center justify-center hover:bg-[#f2eee4] transition-colors cursor-pointer">
                <Search className="w-5 h-5 text-[#1e2723]/70" strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 flex-1 overflow-y-auto bg-[#f2eee4]/40 space-y-8">
              
              {/* Task Details Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#1e2723]/10 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <h2 className="text-2xl font-medium tracking-tight">Sẵn sàng đón khách</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#f2eee4]/60 rounded-2xl p-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold block mb-2">Khách hàng</span>
                    <p className="text-lg font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-[#1e2723]/50" strokeWidth={1.5} />
                      Jordan Lee
                    </p>
                    <p className="text-[#1e2723]/60 text-sm mt-1 font-medium">Đã xác minh ID</p>
                  </div>
                  
                  <div className="bg-[#f2eee4]/60 rounded-2xl p-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold block mb-2">Kho</span>
                    <p className="text-lg font-medium flex items-center gap-2">
                      <Key className="w-4 h-4 text-[#1e2723]/50" strokeWidth={1.5} />
                      Unit #B14
                    </p>
                    <p className="text-[#1e2723]/60 text-sm mt-1 font-medium">10x20ft Có điều hòa</p>
                  </div>

                  <div className="bg-[#f2eee4]/60 rounded-2xl p-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold block mb-2">Cuộc hẹn</span>
                    <p className="text-lg font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1e2723]/50" strokeWidth={1.5} />
                      10:00 AM
                    </p>
                    <p className="text-[#1e2723]/60 text-sm mt-1 font-medium">Dự kiến hôm nay</p>
                  </div>

                  <div className="bg-[#f2eee4]/60 rounded-2xl p-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold block mb-2">Trạng thái kho</span>
                    <p className="text-lg font-medium flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#1e2723]/50" strokeWidth={1.5} />
                      Đã dọn dẹp & Trống
                    </p>
                    <p className="text-[#1e2723]/60 text-sm mt-1 font-medium">Đã kiểm tra hôm qua</p>
                  </div>
                </div>
              </div>

              {/* Thao tác Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#1e2723]/10 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-[#1e2723]/50 font-bold block mb-6">Thao tác</span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="col-span-1 md:col-span-2 h-14 min-h-[3.5rem] rounded-2xl bg-[#c9a44b] hover:bg-[#b89543] text-[#1e2723] font-medium text-lg transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg hover:brightness-105 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
                    Xác nhận nhận kho
                  </button>
                  
                  <button className="h-14 min-h-[3.5rem] rounded-2xl border border-[#1e2723]/15 hover:border-[#1e2723]/40 text-[#1e2723] font-medium transition-colors cursor-pointer active:scale-[0.98] flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#1e2723]/50" strokeWidth={1.5} />
                    Báo cáo hư hại
                  </button>

                  <button className="h-14 min-h-[3.5rem] rounded-2xl border border-[#1e2723]/15 hover:border-[#1e2723]/40 text-[#1e2723] font-medium transition-colors cursor-pointer active:scale-[0.98] flex items-center justify-center gap-2">
                    <FileEdit className="w-5 h-5 text-[#1e2723]/50" strokeWidth={1.5} />
                    Cập nhật trạng thái kho
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-[#1e2723]/40 bg-[#f2eee4]/20">
            <ClipboardList className="w-16 h-16 mb-4 stroke-1" />
            <p className="text-lg font-medium">Chọn một công việc để xem chi tiết</p>
          </div>
        )}
      </section>

    </div>
  );
}
