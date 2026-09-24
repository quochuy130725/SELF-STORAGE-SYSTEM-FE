const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\KY 8\\wdp\\project\\SELF-STORAGE-SYSTEM-FE\\frontend\\src';

const replacements = [
  {
    file: 'pages/admin/AdminPanel.tsx',
    rules: [
      [/Người dùng Management/g, 'Quản lý Người dùng'],
      [/System Logs/g, 'Nhật ký hệ thống'],
      [/Create New Account/g, 'Tạo tài khoản mới'],
      [/ADMINISTRATION \/ ACTIVITY/g, 'QUẢN TRỊ \/ HOẠT ĐỘNG'],
      [/Search Logs\.\.\./g, 'Tìm kiếm nhật ký...'],
      [/Filter by Người dùng/g, 'Lọc theo Người dùng'],
      [/Filter by Date/g, 'Lọc theo Ngày'],
      [/>Today</g, '>Hôm nay<'],
      [/>Last 7 Days</g, '>7 Ngày qua<'],
      [/Activity Stream/g, 'Luồng hoạt động'],
      [/LIVE - 5 ENTRIES/g, 'TRỰC TIẾP - 5 MỤC'],
      [/HÀNH ĐỘNG DETAILS/g, 'CHI TIẾT HÀNH ĐỘNG'],
      [/IP Address/g, 'Địa chỉ IP'],
      [/Facility Access/g, 'Truy cập cơ sở'],
      [/Modified role for/g, 'Thay đổi vai trò cho'],
      [/Changed from Nhân viên to Quản lý cơ sở/g, 'Thay đổi từ Nhân viên sang Quản lý cơ sở'],
      [/Automated backup completed/g, 'Sao lưu tự động hoàn tất'],
      [/Database backup size: 4\.2GB/g, 'Kích thước sao lưu: 4.2GB'],
      [/Logged in successfully/g, 'Đăng nhập thành công'],
      [/Failed login attempt \(3\)/g, 'Đăng nhập thất bại (3)'],
      [/Incorrect password provided/g, 'Cung cấp sai mật khẩu'],
      [/Account locked:/g, 'Tài khoản bị khóa:'],
      [/Exceeded maximum login attempts/g, 'Vượt quá số lần đăng nhập tối đa'],
      [/Admin Người dùng/g, 'Quản trị viên'],
      [/Quản trị HTistrator/g, 'Quản trị Hệ thống'],
      [/Tất cả cơ sở/g, 'Tất cả cơ sở']
    ]
  },
  {
    file: 'pages/manager/ManagerDashboard.tsx',
    rules: [
      [/Manager Admin/g, 'Quản lý Cơ sở'],
      [/Facility B/g, 'Cơ sở B'],
      [/Overview/g, 'Tổng quan'],
      [/Units & Policy/g, 'Kho & Chính sách'],
      [/Contracts/g, 'Hợp đồng'],
      [/Staff Dispatch/g, 'Điều phối nhân sự'],
      [/Facility Overview/g, 'Tổng quan cơ sở'],
      [/>This Month</g, '>Tháng này<'],
      [/>Export PDF</g, '>Xuất PDF<'],
      [/Monthly Revenue/g, 'Doanh thu tháng'],
      [/Active Operations/g, 'Hoạt động đang diễn ra'],
      [/8 tasks pending/g, '8 công việc chờ xử lý'],
      [/Revenue & Usage Trends/g, 'Xu hướng doanh thu & sử dụng'],
      [/Monthly overview of facility performance/g, 'Tổng quan hiệu suất cơ sở theo tháng'],
      [/Available/g, 'Sẵn sàng'],
      [/On break/g, 'Đang nghỉ'],
      [/>Assign</g, '>Giao việc<'],
      [/>Delegate/g, '>Ủy quyền'],
      [/Contract & Unit Management/g, 'Quản lý Hợp đồng & Kho'],
      [/Edit Price/g, 'Sửa giá'],
      [/Assign Unit/g, 'Chỉ định kho'],
      [/Debt Reminder/g, 'Nhắc nợ'],
      [/Overdue/g, 'Quá hạn'],
      [/Empty/g, 'Trống'],
      [/>Unit</g, '>Kho<'],
      [/>Customer</g, '>Khách hàng<'],
      [/>Status</g, '>Trạng thái<'],
      [/>Actions</g, '>Thao tác<'],
      [/10x20ft Climate/g, '10x20ft Điều hòa'],
      [/5x5ft Standard/g, '5x5ft Tiêu chuẩn'],
      [/10x10ft Premium/g, '10x10ft Cao cấp'],
      [/Usage index/g, 'Chỉ số sử dụng'],
      [/Revenue/g, 'Doanh thu']
    ]
  }
];

for (const { file, rules } of replacements) {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [pattern, replacement] of rules) {
      content = content.replace(pattern, replacement);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
}
