## 🗺️ Bản đồ Màn hình & Nút hành động (Screen & CTA Mapping)

Hệ thống Front-end được thiết kế dựa trên luồng nghiệp vụ của 4 phân hệ người dùng chính. Dưới đây là đặc tả chức năng và các nút bấm cốt lõi (Call-to-Action) bắt buộc phải có trên từng giao diện.

### 1. Phân hệ Khách hàng (Customer Portal - Hướng tới chuyển đổi)
Giao diện này cần trực quan, dễ thao tác để khách hàng nhanh chóng chốt đơn thuê kho và tự quản lý tài sản.

| Màn hình (Screen) | Chức năng (Functions) | Nút bấm cốt lõi (Buttons) |
| :--- | :--- | :--- |
| **Trang chủ / Tìm kiếm** | Tra cứu cơ sở, chọn loại kho, kích thước. | `Tìm kho trống`, `Xem chi tiết`, `Bộ lọc (Kích thước/Giá)` |
| **Luồng Đặt kho (Booking)** | Hiển thị bảng giá, chọn thời gian thuê, xác nhận thông tin đặt chỗ. | `Đặt kho ngay`, `Quay lại bước trước`, `Hủy` |
| **Thanh toán (Payment)** | Tính toán tiền cọc, phí thuê, chuyển hướng Gateway. | `Thanh toán cọc`, `Thanh toán phí thuê` |
| **Quản lý của tôi** | Xem hợp đồng, mã truy cập, yêu cầu hỗ trợ sự cố, và gửi yêu cầu gia hạn. | `Xem mã truy cập`, `Gửi yêu cầu hỗ trợ`, `Yêu cầu trả kho`, `Gia hạn hợp đồng` |

### 2. Phân hệ Nhân viên Cơ sở (Staff Interface - Hướng tới tác vụ nhanh)
Giao diện này ưu tiên hiển thị tốt trên máy tính bảng (Tablet) bằng Bottom Navigation để nhân viên cầm đi nghiệm thu kho thực tế.

| Màn hình (Screen) | Chức năng (Functions) | Nút bấm cốt lõi (Buttons) |
| :--- | :--- | :--- |
| **Danh sách việc (To-do)** | Xem lịch khách hàng check-in, trả kho, hoặc cần hỗ trợ trong ngày. | `Xem chi tiết lịch hẹn`, `Lọc tác vụ ngày` |
| **Xử lý Check-in/out** | Bàn giao kho, nghiệm thu tình trạng kho thực tế. | `Xác nhận Check-in`, `Ghi nhận hư hỏng`, `Hoàn tất trả kho`, `Cập nhật trạng thái kho` |
| **Xử lý Sự cố** | Tiếp nhận xử lý sự cố tại chỗ (mất chìa, lỗi mã, hỏng kho). | `Tiếp nhận xử lý`, `Đóng sự cố`, `Cập nhật trạng thái kho` |

### 3. Phân hệ Quản lý & Vận hành (Manager Dashboard - Hướng tới số liệu)
Khu vực dành cho Facility Manager và Business Operations Manager với layout dạng Dashboard chứa nhiều biểu đồ và bảng dữ liệu.

| Màn hình (Screen) | Chức năng (Functions) | Nút bấm cốt lõi (Buttons) |
| :--- | :--- | :--- |
| **Tổng quan (Overview)** | Theo dõi doanh thu, tỷ lệ sử dụng kho và hiệu suất vận hành. | `Xuất báo cáo (PDF/Excel)`, `Bộ lọc thời gian` |
| **Quản lý Kho & Chính sách** | Setup sơ đồ kho, cập nhật bảng giá, phí phụ thu, chính sách giảm giá. | `Thêm/Sửa kho`, `Cập nhật bảng giá`, `Tạo mã giảm giá` |
| **Quản lý Hợp đồng** | Phân công kho lưu trữ, quản lý gia hạn, và xử lý các trường hợp thuê quá hạn. | `Gán kho (Assign)`, `Nhắc nhở nợ`, `Xử lý quá hạn` |
| **Điều phối nhân sự** | Phân công nhân viên cơ sở thực hiện bàn giao, kiểm tra kho hoặc xử lý sự cố. | `Phân công nhân viên`, `Giao việc hỗ trợ` |

### 4. Phân hệ Quản trị (Admin Panel - Hướng tới bảo mật)
Khu vực lõi của hệ thống, quản lý quyền hạn và theo dõi truy vết.

| Màn hình (Screen) | Chức năng (Functions) | Nút bấm cốt lõi (Buttons) |
| :--- | :--- | :--- |
| **Quản lý Người dùng** | Quản lý tài khoản, phân gán vai trò người dùng (Role Assignment), cấu hình quyền. | `Tạo tài khoản mới`, `Chỉnh sửa phân quyền`, `Khóa tài khoản` |
| **System Logs** | Theo dõi lịch sử đăng nhập và nhật ký hoạt động (user activity logs) của người dùng. | `Tra cứu Log`, `Lọc theo User/Date` |
