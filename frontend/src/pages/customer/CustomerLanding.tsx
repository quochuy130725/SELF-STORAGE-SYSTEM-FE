import { Link } from 'react-router-dom';

export default function CustomerLanding() {
  return (
    <div className="min-h-screen bg-[#f2eee4] text-[#1e2723] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-serif mb-4">Customer Portal</h1>
      <p className="text-[#1e2723]/70 mb-8">Trang dành cho khách hàng đang được phát triển.</p>
      <Link to="/" className="px-6 py-3 bg-[#c9a44b] text-[#1e2723] font-medium rounded-xl hover:bg-[#b89543] transition-colors">
        Quay lại Gateway
      </Link>
    </div>
  );
}
