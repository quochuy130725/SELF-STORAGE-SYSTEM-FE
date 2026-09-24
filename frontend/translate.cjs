const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\KY 8\\wdp\\project\\SELF-STORAGE-SYSTEM-FE\\frontend\\src';

const replacements = [
  {
    file: 'pages/customer/CustomerDashboard.tsx',
    rules: [
      [/Find a unit/g, 'Tìm kho trống'],
      [/My storage/g, 'Kho của tôi'],
      [/Help center/g, 'Trung tâm hỗ trợ'],
      [/Your space, made simple/g, 'Không gian của bạn, thật đơn giản'],
      [/Room for what/g, 'Nơi lưu giữ những điều'],
      [/matters\./g, 'quan trọng.'],
      [/Find a secure, flexible space for every season of life\. Right around the corner\./g, 'Tìm không gian an toàn, linh hoạt cho mọi nhu cầu cuộc sống. Ngay gần bạn.'],
      [/24\/7 access/g, 'Truy cập 24/7'],
      [/Climate controlled/g, 'Kiểm soát khí hậu'],
      [/Month-to-month/g, 'Thuê theo tháng'],
      [/EST\. 1987/g, 'THÀNH LẬP 1987'],
      [/SAFE & SOUND/g, 'AN TOÀN & BẢO MẬT'],
      [/Worry Less/g, 'Bớt lo âu'],
      [/Find Your Space/g, 'Tìm kho của bạn'],
      [/Search by location or ZIP/g, 'Tìm kiếm theo vị trí hoặc mã ZIP'],
      [/>Size</g, '>Kích thước<'],
      [/>Any size</g, '>Mọi kích thước<'],
      [/>Monthly Budget</g, '>Ngân sách tháng<'],
      [/>Any price</g, '>Mọi mức giá<'],
      [/Show units/g, 'Xem danh sách kho'],
      [/3 available/g, 'Còn trống 3'],
      [/5 available/g, 'Còn trống 5'],
      [/2 available/g, 'Còn trống 2'],
      [/>Compact</g, '>Nhỏ gọn<'],
      [/>Most popular</g, '>Phổ biến nhất<'],
      [/>Roomy</g, '>Rộng rãi<'],
      [/from <strong(.*?)>\$49<\/strong> \/ mo/g, 'từ <strong$1>\$49</strong> / tháng'],
      [/from <strong(.*?)>\$119<\/strong> \/ mo/g, 'từ <strong$1>\$119</strong> / tháng'],
      [/from <strong(.*?)>\$189<\/strong> \/ mo/g, 'từ <strong$1>\$189</strong> / tháng'],
      [/>My Storage</g, '>Kho của tôi<'],
      [/Manage your unit\./g, 'Quản lý kho của bạn.'],
      [/Active Contract/g, 'Hợp đồng đang hiệu lực'],
      [/Unit #B14/g, 'Kho #B14'],
      [/Large, 10x20ft &bull; Due: Oct 15, 2023/g, 'Lớn, 10x20ft &bull; Hạn chót: 15 Thg 10, 2023'],
      [/>Active</g, '>Hoạt động<'],
      [/Access Code/g, 'Mã số vào cửa'],
      [/>Reveal</g, '>Hiện<'],
      [/>Hide</g, '>Ẩn<'],
      [/>Support</g, '>Hỗ trợ<'],
      [/>Return</g, '>Trả kho<'],
      [/>Renew</g, '>Gia hạn<'],
      [/>Reserve</g, '>Đặt chỗ<'],
      [/Book a new unit\./g, 'Đặt kho mới.'],
      [/Step 2: Confirm Unit/g, 'Bước 2: Xác nhận chọn kho'],
      [/You have selected the (.*?) unit\./g, 'Bạn đã chọn kho $1.'],
      [/Selected:/g, 'Đã chọn:'],
      [/Starting from \$49\/mo/g, 'Giá từ $49/tháng'],
      [/> Cancel/g, '> Hủy'],
      [/Continue to Payment/g, 'Tiếp tục đến thanh toán']
    ]
  },
  {
    file: 'pages/admin/AdminPanel.tsx',
    rules: [
      [/ADMINISTRATION \/ USERS/g, 'QUẢN TRỊ \/ NGƯỜI DÙNG'],
      [/Access & Roles/g, 'Quyền & Vai trò'],
      [/Manage team members and their system permissions\./g, 'Quản lý thành viên nhóm và quyền hạn hệ thống của họ.'],
      [/>Users</g, '>Người dùng<'],
      [/>System Logs</g, '>Nhật ký hệ thống<'],
      [/>Search users\.\.\.</g, '>Tìm kiếm người dùng...<'],
      [/Team members/g, 'Thành viên nhóm'],
      [/>Role</g, '>Vai trò<'],
      [/>Facility</g, '>Cơ sở<'],
      [/>Status</g, '>Trạng thái<'],
      [/>Actions</g, '>Thao tác<'],
      [/>Active</g, '>Hoạt động<'],
      [/Locked/g, 'Đã khóa'],
      [/Edit user/g, 'Chỉnh sửa người dùng'],
      [/Lock account/g, 'Khóa tài khoản'],
      [/Unlock account/g, 'Mở khóa tài khoản'],
      [/Live monitoring/g, 'Giám sát trực tiếp'],
      [/Timestamp/g, 'Thời gian'],
      [/User/g, 'Người dùng'],
      [/Action/g, 'Hành động'],
      [/System Admin/g, 'Quản trị HT'],
      [/Facility Manager/g, 'Quản lý cơ sở'],
      [/Staff/g, 'Nhân viên'],
      [/All Facilities/g, 'Tất cả cơ sở']
    ]
  },
  {
    file: 'pages/manager/ManagerDashboard.tsx',
    rules: [
      [/Dashboard/g, 'Bảng điều khiển'],
      [/Facilities/g, 'Cơ sở'],
      [/Tenants/g, 'Khách thuê'],
      [/Financials/g, 'Tài chính'],
      [/Reports/g, 'Báo cáo'],
      [/Total Revenue/g, 'Tổng doanh thu'],
      [/Occupancy Rate/g, 'Tỷ lệ lấp đầy'],
      [/Active Units/g, 'Kho đang thuê'],
      [/Pending Maintenance/g, 'Bảo trì đang chờ'],
      [/vs last month/g, 'so với tháng trước'],
      [/Revenue Overview/g, 'Tổng quan doanh thu'],
      [/This Year/g, 'Năm nay'],
      [/Last Year/g, 'Năm ngoái'],
      [/Recent Activity/g, 'Hoạt động gần đây'],
      [/New tenant moved in/g, 'Khách mới dọn vào'],
      [/Unit A-12, Downtown Facility/g, 'Kho A-12, Cơ sở Downtown'],
      [/Maintenance completed/g, 'Hoàn tất bảo trì'],
      [/Gate repair at Westside/g, 'Sửa cổng tại Westside'],
      [/Payment received/g, 'Đã nhận thanh toán'],
      [/\$150 from John Smith/g, '$150 từ John Smith'],
      [/Lease expiring soon/g, 'Hợp đồng sắp hết hạn'],
      [/Unit C-04, 3 days remaining/g, 'Kho C-04, còn 3 ngày'],
      [/View all/g, 'Xem tất cả'],
      [/Facility Status/g, 'Trạng thái cơ sở'],
      [/Capacity/g, 'Sức chứa'],
      [/Downtown Storage/g, 'Kho Downtown'],
      [/Westside Unit/g, 'Kho Westside'],
      [/Northgate Storage/g, 'Kho Northgate']
    ]
  },
  {
    file: 'pages/staff/StaffDashboard.tsx',
    rules: [
      [/Staff Dashboard/g, 'Bảng điều khiển Nhân viên'],
      [/Good morning, Alex\./g, 'Chào buổi sáng, Alex.'],
      [/Thursday, September 24/g, 'Thứ Năm, 24 tháng 9'],
      [/Today's to-do/g, 'Việc cần làm hôm nay'],
      [/>Filter</g, '>Lọc<'],
      [/Customer check-in/g, 'Khách hàng nhận kho'],
      [/Review details/g, 'Xem chi tiết'],
      [/Gate malfunction/g, 'Cổng lỗi'],
      [/Main Entrance/g, 'Cổng chính'],
      [/Unit Inspection/g, 'Kiểm tra kho'],
      [/assigned to/g, 'phân công cho'],
      [/Ready for customer arrival/g, 'Sẵn sàng đón khách'],
      [/>Customer</g, '>Khách hàng<'],
      [/ID Verified/g, 'Đã xác minh ID'],
      [/>Unit</g, '>Kho<'],
      [/10x20ft Climate Control/g, '10x20ft Có điều hòa'],
      [/>Appointment</g, '>Cuộc hẹn<'],
      [/Expected today/g, 'Dự kiến hôm nay'],
      [/>Unit Status</g, '>Trạng thái kho<'],
      [/Cleaned & Empty/g, 'Đã dọn dẹp & Trống'],
      [/Inspected yesterday/g, 'Đã kiểm tra hôm qua'],
      [/Available Actions/g, 'Thao tác'],
      [/Confirm check-in/g, 'Xác nhận nhận kho'],
      [/Report damage/g, 'Báo cáo hư hại'],
      [/Update unit status/g, 'Cập nhật trạng thái kho'],
      [/Select a task to view details/g, 'Chọn một công việc để xem chi tiết']
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
