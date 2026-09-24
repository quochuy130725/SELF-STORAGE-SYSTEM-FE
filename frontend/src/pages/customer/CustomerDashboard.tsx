import { useState } from 'react';
import { Search, MapPin, ShieldCheck, Home, User, Box, Clock, Maximize } from 'lucide-react';

export default function CustomerDashboard() {
  const [activeFilter, setActiveFilter] = useState('Tất cả');

  const units = [
    { id: 1, size: '5x5 ft', type: 'Tiêu chuẩn', price: 65, features: ['Tầng trệt', 'Truy cập 24/7'] },
    { id: 2, size: '10x10 ft', type: 'Điều hòa', price: 119, features: ['Kiểm soát nhiệt', 'Camera an ninh'] },
    { id: 3, size: '10x20 ft', type: 'Cao cấp', price: 215, features: ['Trực tiếp lái xe vào', 'Điện 220V'] },
    { id: 4, size: '15x20 ft', type: 'Thương mại', price: 350, features: ['Lối đi xe tải rộng', 'Điện 3 pha'] },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-slate-900 relative pb-20 md:pb-0">

      {/* Top Navigation Bar (Desktop Only) */}
      <div className="hidden md:flex justify-between items-center bg-white px-8 py-4 shadow-sm z-20">
        <div className="flex items-center gap-2">
          <Box className="w-6 h-6 text-emerald-600" />
          <span className="font-bold text-xl tracking-tight text-slate-900">STORAGE SYS</span>
        </div>

        <nav className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-emerald-600 font-medium transition-colors">
            <Search className="w-5 h-5" />
            Tìm kho
          </button>
          <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
            <Home className="w-5 h-5" />
            Kho của tôi
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600">Jordan Lee</span>
          <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
            JL
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">

        {/* Split-Layout Hero Section */}
        <div className="relative bg-slate-50 overflow-hidden">
          {/* Subtle background abstract shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left Column (Content & CTA) */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center mb-2 md:hidden">
                <span className="text-slate-600 font-medium">Xin chào, Jordan</span>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold border border-slate-300">
                  JL
                </div>
              </div>
              
              <div>
                <span className="inline-block bg-emerald-50 text-emerald-700 font-bold px-4 py-1.5 rounded-full text-xs mb-6 border border-emerald-100 uppercase tracking-wider">
                  Từ phục vụ • An toàn • Linh hoạt
                </span>
                
                <style>
                  {`
                    @keyframes slide-up {
                      0%, 20% { transform: translateY(0); }
                      25%, 45% { transform: translateY(-1.4em); }
                      50%, 70% { transform: translateY(-2.8em); }
                      75%, 95% { transform: translateY(-4.2em); }
                      100% { transform: translateY(-5.6em); }
                    }
                    .animate-carousel {
                      animation: slide-up 8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                    }
                  `}
                </style>
                <h1
                  className="uppercase text-5xl lg:text-6xl xl:text-7xl font-black tracking-wide leading-normal mb-4 text-emerald-950"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  <div className="flex flex-wrap items-center gap-x-[0.3em] gap-y-2">
                    <span>KHÔNG GIAN LƯU TRỮ</span>
                    <span className="block mt-2 xl:mt-0 w-full xl:w-auto">
                      AN TOÀN CHO
                    </span>
                    <span className="inline-flex h-[1.4em] py-1 overflow-hidden text-orange-500 mt-2 xl:mt-0">
                      <div className="animate-carousel flex flex-col">
                        <span className="h-[1.4em] flex items-center">MỌI NHU CẦU</span>
                        <span className="h-[1.4em] flex items-center">GIA ĐÌNH</span>
                        <span className="h-[1.4em] flex items-center">DOANH NGHIỆP</span>
                        <span className="h-[1.4em] flex items-center">CÁ NHÂN</span>
                        <span className="h-[1.4em] flex items-center">MỌI NHU CẦU</span>
                      </div>
                    </span>
                  </div>
                </h1>
                <p className="text-slate-500 text-lg max-w-lg mt-6 font-medium">
                  Tìm và thuê kho lưu trữ tự phục vụ một cách nhanh chóng, dễ dàng. 
                  Giải pháp linh hoạt cho cá nhân, gia đình và doanh nghiệp.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-3 flex flex-col md:flex-row items-center gap-2 mt-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 max-w-2xl">
                <div className="flex-1 px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-slate-100 py-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1.5"><MapPin size={12}/> Địa điểm</div>
                  <select className="w-full bg-transparent text-slate-900 font-bold outline-none text-sm appearance-none cursor-pointer">
                    <option>Chọn cơ sở</option>
                  </select>
                </div>
                <div className="flex-1 px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-slate-100 py-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1.5"><Box size={12}/> Loại kho</div>
                  <select className="w-full bg-transparent text-slate-900 font-bold outline-none text-sm appearance-none cursor-pointer">
                    <option>Tất cả loại</option>
                  </select>
                </div>
                <div className="flex-1 px-4 w-full md:w-auto py-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1.5"><Maximize size={12}/> Kích thước</div>
                  <select className="w-full bg-transparent text-slate-900 font-bold outline-none text-sm appearance-none cursor-pointer">
                    <option>Tất cả kích thước</option>
                  </select>
                </div>
                <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 md:py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap active:scale-95">
                  <Search className="w-4 h-4" />
                  Tìm kho trống
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  </div>
                  Hơn 50+ cơ sở toàn quốc
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Maximize className="w-3 h-3 text-emerald-600" />
                  </div>
                  Đa dạng kích thước kho
                </div>
              </div>
            </div>

            <div className="relative w-full min-h-[500px] h-full hidden lg:block">
              <div className="relative overflow-hidden rounded-[2rem] w-full h-full shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Self-Storage Facility"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute z-20 -left-8 top-12 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-semibold text-slate-800 animate-float border border-gray-100">
                <div className="p-2 bg-emerald-50 text-emerald-500 rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
                Bảo hiểm 100%
              </div>

              <div className="absolute z-20 -right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-semibold text-slate-800 animate-float-delay border border-gray-100">
                <div className="p-2 bg-emerald-50 text-emerald-500 rounded-lg"><Clock className="w-5 h-5" /></div>
                Truy cập 24/7
              </div>

              <div className="absolute z-20 bottom-8 left-0 bg-white shadow-xl rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-semibold text-slate-800 animate-float border border-gray-100">
                <div className="p-2 bg-emerald-50 text-emerald-500 rounded-lg"><User className="w-5 h-5" /></div>
                Khóa riêng tư
              </div>
            </div>
          </div>
        </div>

        {/* Filters (Placed just below Hero) */}
        <div className="max-w-7xl mx-auto w-full px-6 pt-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {['Tất cả', '5x5', '10x10', '10x20', 'Điều hòa', 'Cao cấp'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-5 py-2 text-sm rounded-full font-medium transition-colors ${activeFilter === filter
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-100'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Unit List */}
        <div className="p-6 md:py-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <div key={unit.id} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3
                      className="uppercase text-3xl font-black tracking-wide text-slate-900"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {unit.size}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 mt-1">{unit.type}</p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-100">
                    Sẵn sàng
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {unit.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
                      {idx === 0 ? <MapPin className="w-4 h-4 text-slate-400" /> : <ShieldCheck className="w-4 h-4 text-slate-400" />}
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Dashed Separator (Boarding Pass style) */}
                <div className="border-t-2 border-dashed border-gray-200 mt-auto pt-6 flex flex-col gap-5">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl font-black tracking-wide text-slate-900"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {"$"}{unit.price}
                    </span>
                    <span className="text-sm text-slate-500 font-medium">/tháng</span>
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3.5 rounded-xl transition-colors active:scale-95 shadow-sm text-base">
                    Đặt ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Nav (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 flex justify-around items-center z-20 pb-safe">
        <button className="flex flex-col items-center gap-1.5 text-emerald-600">
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Tìm kho</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Kho của tôi</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Tài khoản</span>
        </button>
      </div>

    </div>
  );
}
