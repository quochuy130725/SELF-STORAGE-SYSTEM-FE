import React, { useState } from 'react';
import { Search, ChevronDown, Key, AlertCircle, RefreshCw, LogOut, ArrowRight, ArrowLeft, X, Box, Bell, ShieldCheck } from 'lucide-react';

export default function CustomerDashboard() {
  const [showCode, setShowCode] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f2eee4] text-[#1e2723] font-sans antialiased selection:bg-[#c9a44b] selection:text-[#f2eee4]">

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#f2eee4]/90 backdrop-blur-md border-b border-[#1e2723]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-[#1e2723] text-[#c9a44b] p-1.5 rounded-full">
              <Box className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="font-medium tracking-[0.2em] uppercase text-sm text-[#1e2723]">Storage / Co</span>
          </div>

          {/* Center: Links */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <a href="#" className="text-[#1e2723] border-b border-[#1e2723] pb-1">Tìm kho trống</a>
            <a href="#" className="text-[#1e2723]/60 hover:text-[#1e2723] transition-colors pb-1">Kho của tôi</a>
            <a href="#" className="text-[#1e2723]/60 hover:text-[#1e2723] transition-colors pb-1">Trung tâm hỗ trợ</a>
          </nav>

          {/* Right: Profile */}
          <div className="flex items-center gap-6">
            <button className="text-[#1e2723]/60 hover:text-[#1e2723] transition-colors">
              <Bell className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-[#1e2723] text-[#f2eee4] flex items-center justify-center font-medium text-xs">
                JM
              </div>
              <span className="text-sm text-[#1e2723]/80 group-hover:text-[#1e2723] hidden md:block font-medium">
                Jordan Miller
              </span>
              <ChevronDown className="w-4 h-4 text-[#1e2723]/40 group-hover:text-[#1e2723] hidden md:block" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </header>

      {/* 1. Hero Section - Warm Minimalist Editorial */}
      <section className="px-6 md:px-12 pt-20 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column: Typography & Content */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-3 text-[#1e2723]/50 text-xs tracking-[0.2em] uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-[#c9a44b]"></span>
              <span>Không gian của bạn, thật đơn giản</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-normal tracking-tight text-[#1e2723] leading-[1.1] animate-fade-in-up opacity-0-init">
              Nơi lưu giữ những điều <span className="italic font-light text-[#25352d]/80 inline-block animate-fade-in-up-delay opacity-0-init">quan trọng.</span>
            </h1>

            <p className="text-lg text-[#1e2723]/70 max-w-md leading-relaxed">
              Tìm không gian an toàn, linh hoạt cho mọi nhu cầu cuộc sống. Ngay gần bạn.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-5 py-2.5 rounded-full border border-[#1e2723]/15 text-sm font-medium text-[#1e2723]/70">Truy cập 24/7</span>
              <span className="px-5 py-2.5 rounded-full border border-[#1e2723]/15 text-sm font-medium text-[#1e2723]/70">Kiểm soát khí hậu</span>
              <span className="px-5 py-2.5 rounded-full border border-[#1e2723]/15 text-sm font-medium text-[#1e2723]/70">Thuê theo tháng</span>
            </div>
          </div>

          {/* Right Column: Architectural Arch Graphic */}
          <div className="relative flex justify-center items-center h-[600px] w-full">
            {/* Background Accent Arch */}
            <div className="absolute w-[400px] h-[550px] bg-[#e6dfd1] rounded-t-full rounded-b-3xl -z-10 translate-x-12 translate-y-4"></div>

            {/* The Main Arch */}
            <div className="w-[350px] h-[500px] bg-[#25352d] rounded-t-full shadow-2xl relative flex flex-col justify-end overflow-hidden">
              {/* Vertical lines to give an architectural ribbed feel */}
              <div className="absolute inset-0 flex justify-evenly opacity-10">
                <div className="w-px h-full bg-[#f2eee4]"></div>
                <div className="w-px h-full bg-[#f2eee4]"></div>
                <div className="w-px h-full bg-[#f2eee4]"></div>
                <div className="w-px h-full bg-[#f2eee4]"></div>
              </div>
            </div>

            {/* Floating Tags */}
            <div className="absolute top-20 right-8 rotate-3 cursor-default">
              <div className="animate-float bg-[#f2eee4]/80 backdrop-blur-md px-5 py-2 rounded-full border border-[#1e2723]/10 shadow-lg">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1e2723]/60">THÀNH LẬP 1987</span>
              </div>
            </div>

            <div className="absolute bottom-32 left-4 -rotate-6 cursor-default">
              <div className="animate-float-delay bg-[#f2eee4]/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#1e2723]/10 shadow-xl">
                <span className="text-xs font-bold tracking-widest uppercase text-[#25352d]">AN TOÀN & BẢO MẬT</span>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 rotate-[-5deg] cursor-default">
              <div className="animate-float flex items-center gap-2 text-[#c9a44b]">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Bớt lo âu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Dark section) */}
      <section className="bg-[#25352d] text-[#f2eee4] px-6 md:px-12 py-24 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col space-y-24">

          {/* Quick Search Results */}
          <div>
            <div className="flex items-center gap-4 text-[#c9a44b] text-sm tracking-[0.2em] uppercase font-medium mb-12">
              <span>01</span>
              <span>Tìm kho của bạn</span>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
              {/* Search Input */}
              <div className="flex-1 relative flex items-center bg-[#2b3c33] rounded-2xl border border-[#394d42] transition-colors focus-within:border-[#c9a44b]">
                <Search className="absolute left-6 text-[#f2eee4]/50 w-5 h-5" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo vị trí hoặc mã ZIP"
                  className="w-full bg-transparent text-[#f2eee4] border-none py-6 pl-14 pr-6 text-lg focus:outline-none placeholder:text-[#f2eee4]/40"
                />
              </div>

              {/* Select Dropdowns */}
              <div className="md:w-64 relative flex items-center justify-between bg-[#2b3c33] rounded-2xl border border-[#394d42] px-6 cursor-pointer hover:bg-[#31453b] transition-colors">
                <div className="flex flex-col justify-center w-full py-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#f2eee4]/50 font-medium mb-1">Kích thước</span>
                  <span className="text-lg text-[#f2eee4]">Mọi kích thước</span>
                </div>
                <ChevronDown className="w-5 h-5 text-[#f2eee4]/50" strokeWidth={1.5} />
              </div>

              <div className="md:w-64 relative flex items-center justify-between bg-[#2b3c33] rounded-2xl border border-[#394d42] px-6 cursor-pointer hover:bg-[#31453b] transition-colors">
                <div className="flex flex-col justify-center w-full py-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#f2eee4]/50 font-medium mb-1">Ngân sách tháng</span>
                  <span className="text-lg text-[#f2eee4]">Mọi mức giá</span>
                </div>
                <ChevronDown className="w-5 h-5 text-[#f2eee4]/50" strokeWidth={1.5} />
              </div>

              <button className="bg-[#c9a44b] hover:bg-[#b89543] text-[#1e2723] rounded-2xl px-10 py-6 font-medium text-lg transition-colors flex items-center justify-center gap-3">
                Xem danh sách kho <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Size Cards */}
              <div
                onClick={() => setSelectedUnit('5x5')}
                className={`bg-[#f2eee4] text-[#1e2723] rounded-2xl p-8 flex flex-col justify-between border ${selectedUnit === '5x5' ? 'border-[#c9a44b] ring-2 ring-[#c9a44b]/30' : 'border-transparent'} h-64 hover:bg-white transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl group active:scale-95`}
              >
                <div className="flex justify-between items-start">
                  <Box className="w-6 h-6" strokeWidth={1.5} />
                  <span className="text-sm text-[#1e2723]/60">Còn trống 3</span>
                </div>
                <div>
                  <h3 className="text-4xl font-normal tracking-tight flex items-baseline gap-2">
                    5 <span className="text-2xl font-light text-[#1e2723]/50">×</span> 5<span className="text-lg font-light text-[#1e2723]/50">ft</span>
                  </h3>
                  <p className="text-[#1e2723]/60 mt-1">Nhỏ gọn</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-sm text-[#1e2723]/60">từ <strong className="text-lg text-[#1e2723] font-medium">$49</strong> / tháng</span>
                  <ArrowRight className="w-5 h-5 text-[#1e2723]/40 group-hover:text-[#1e2723] transition-transform duration-300 group-hover:translate-x-2" strokeWidth={1.5} />
                </div>
              </div>

              <div
                onClick={() => setSelectedUnit('10x10')}
                className={`bg-[#c9a44b] text-[#1e2723] rounded-2xl p-8 flex flex-col justify-between border ${selectedUnit === '10x10' ? 'border-white' : 'border-transparent'} h-64 hover:bg-[#b89543] transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl group active:scale-95`}
              >
                <div className="flex justify-between items-start">
                  <Box className="w-6 h-6" strokeWidth={1.5} />
                  <span className="text-sm text-[#1e2723]/70">Còn trống 5</span>
                </div>
                <div>
                  <h3 className="text-4xl font-normal tracking-tight flex items-baseline gap-2">
                    10 <span className="text-2xl font-light text-[#1e2723]/60">×</span> 10<span className="text-lg font-light text-[#1e2723]/60">ft</span>
                  </h3>
                  <p className="text-[#1e2723]/70 mt-1">Phổ biến nhất</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-sm text-[#1e2723]/70">từ <strong className="text-lg text-[#1e2723] font-medium">$119</strong> / tháng</span>
                  <ArrowRight className="w-5 h-5 text-[#1e2723]/60 group-hover:text-[#1e2723] transition-transform duration-300 group-hover:translate-x-2" strokeWidth={1.5} />
                </div>
              </div>

              <div
                onClick={() => setSelectedUnit('10x20')}
                className={`bg-[#f2eee4] text-[#1e2723] rounded-2xl p-8 flex flex-col justify-between border ${selectedUnit === '10x20' ? 'border-[#c9a44b] ring-2 ring-[#c9a44b]/30' : 'border-transparent'} h-64 hover:bg-white transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl group active:scale-95`}
              >
                <div className="flex justify-between items-start">
                  <Box className="w-6 h-6" strokeWidth={1.5} />
                  <span className="text-sm text-[#1e2723]/60">Còn trống 2</span>
                </div>
                <div>
                  <h3 className="text-4xl font-normal tracking-tight flex items-baseline gap-2">
                    10 <span className="text-2xl font-light text-[#1e2723]/50">×</span> 20<span className="text-lg font-light text-[#1e2723]/50">ft</span>
                  </h3>
                  <p className="text-[#1e2723]/60 mt-1">Rộng rãi</p>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-sm text-[#1e2723]/60">từ <strong className="text-lg text-[#1e2723] font-medium">$189</strong> / tháng</span>
                  <ArrowRight className="w-5 h-5 text-[#1e2723]/40 group-hover:text-[#1e2723] transition-transform duration-300 group-hover:translate-x-2" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto w-full flex flex-col space-y-24">

            {/* My Storage Management */}
            <div className="flex flex-col space-y-10">
              <div className="flex items-center gap-4 text-[#c9a44b] text-sm tracking-[0.2em] uppercase font-medium">
                <span>02</span>
                <span>Kho của tôi</span>
              </div>

              <h2 className="text-4xl font-normal tracking-tight">Quản lý kho của bạn.</h2>

              <div className="border border-[#f2eee4]/15 rounded-3xl p-10 bg-transparent">
                <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-[#f2eee4]/50 mb-6">Hợp đồng đang hiệu lực</h3>

                <div className="flex items-end justify-between border-b border-[#f2eee4]/10 pb-8 mb-8">
                  <div>
                    <h4 className="text-3xl font-medium tracking-tight">Kho #B14</h4>
                    <p className="text-[#f2eee4]/60 mt-2">Lớn, 10x20ft &bull; Hạn chót: 15 Thg 10, 2023</p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#c9a44b] text-[#1e2723] text-xs font-bold tracking-wide">
                    Active
                  </div>
                </div>

                {/* Mã số vào cửa */}
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-6">
                    <div className="text-[#f2eee4]/40">
                      <Key className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs text-[#f2eee4]/50 uppercase tracking-widest font-medium mb-1">Mã số vào cửa</div>
                      <div className="font-mono text-2xl tracking-wider font-medium">
                        {showCode ? '4829-1038' : '••••-••••'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCode(!showCode)}
                    className="text-sm font-medium border border-[#f2eee4]/20 hover:border-[#f2eee4]/40 transition-colors px-6 py-2.5 rounded-full"
                  >
                    {showCode ? 'Hide' : 'Reveal'}
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center justify-center gap-4 py-8 rounded-3xl border border-[#f2eee4]/15 hover:bg-white/5 transition-colors group">
                  <AlertCircle className="w-6 h-6 text-[#f2eee4]/60 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
                  <span className="text-sm font-medium">Hỗ trợ</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-4 py-8 rounded-3xl border border-[#f2eee4]/15 hover:bg-white/5 transition-colors group">
                  <LogOut className="w-6 h-6 text-[#f2eee4]/60 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
                  <span className="text-sm font-medium">Trả kho</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-4 py-8 rounded-3xl bg-[#c9a44b] hover:bg-[#b89543] border border-transparent transition-colors group">
                  <RefreshCw className="w-6 h-6 text-[#1e2723] group-hover:rotate-180 transition-transform duration-500" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-[#1e2723]">Gia hạn</span>
                </button>
              </div>
            </div>

            {/* Book Your Storage - Only show when a unit is selected */}
            {selectedUnit && (
              <div className="flex flex-col space-y-10 animate-[slideDown_0.5s_ease-out_forwards] opacity-0 translate-y-8" style={{ animation: 'slideDown 0.5s ease-out forwards' }}>
                <style>{`
                  @keyframes slideDown {
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <div className="flex items-center gap-4 text-[#c9a44b] text-sm tracking-[0.2em] uppercase font-medium">
                  <span>03</span>
                  <span>Đặt chỗ</span>
                </div>

                <h2 className="text-4xl font-normal tracking-tight">Đặt kho mới.</h2>

                <div className="border border-[#f2eee4]/15 rounded-3xl p-10 bg-[#f2eee4]/5 flex flex-col h-full backdrop-blur-sm">
                  <div className="mb-10">
                    <h3 className="text-2xl font-medium tracking-tight mb-2">Bước 2: Xác nhận chọn kho</h3>
                    <p className="text-[#f2eee4]/60">Bạn đã chọn kho {selectedUnit}.</p>
                  </div>

                  <div className="space-y-4 flex-1">
                    {/* Active Unit */}
                    <label className="flex items-center justify-between p-6 rounded-2xl border border-[#c9a44b] bg-[#c9a44b]/10 cursor-pointer transition-colors">
                      <div>
                        <div className="font-medium text-xl text-[#c9a44b]">Đã chọn: {selectedUnit}</div>
                        <div className="text-[#c9a44b]/80 mt-1">Giá từ $49/tháng</div>
                      </div>
                      <div className="w-6 h-6 rounded-full border border-[#c9a44b] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#c9a44b]"></div>
                      </div>
                    </label>
                  </div>

                  {/* Wizard Buttons */}
                  <div className="mt-12 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedUnit(null)}
                      className="flex-1 py-4 rounded-full border border-[#f2eee4]/15 hover:border-[#f2eee4]/30 text-[#f2eee4] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <X className="w-4 h-4" strokeWidth={1.5} /> Hủy
                    </button>
                    <button className="flex-[2] py-4 rounded-full bg-[#f2eee4] hover:bg-white text-[#1e2723] font-bold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer">
                      Tiếp tục đến thanh toán <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
