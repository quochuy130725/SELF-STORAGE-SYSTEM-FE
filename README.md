# 📦 Self-Storage Management System - Frontend

Dự án giao diện web cho **Hệ thống Quản lý và Cho thuê Kho lưu trữ Tự phục vụ (Self-Storage Management System)**, phục vụ 5 phân hệ người dùng chính: Khách thuê kho (Storage Customer), Nhân viên cơ sở (Facility Staff), Quản lý cơ sở (Facility Manager), Quản lý vận hành kinh doanh (Business Operations Manager) và Quản trị viên hệ thống (System Administrator).

---

## 🛠 Tech Stack

- **Core:** React 18+ (SPA)
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **UI Components:** shadcn/ui + Lucide React (Icons)
- **Routing & RBAC:** React Router DOM (v6+)
- **State Management:** Zustand (Global State / Auth / Cart)
- **Server State & Data Fetching:** TanStack React Query + Axios
- **Form & Validation:** React Hook Form + Zod
- **Date Utilities:** date-fns
- **Linter & Code Quality:** ESLint + Prettier

---

## 🎨 Visual Direction & Design Rules

- **Phong cách chủ đạo:** Modern Corporate Soft-UI kết hợp với Cinematic & Vintage Lighting.
- **Tone màu:** Nền trầm có chiều sâu (Deep Charcoal hoặc Muted Forest Green - Xanh lá trầm cổ điển). Các điểm nhấn và nút bấm Call-to-Action sử dụng màu vàng đồng ấm (Warm Brass/Yellow).
- **Typography:** Geometric Sans-serif (Poppins, Outfit hoặc Montserrat) cho tiêu đề, tạo cảm giác thân thiện, rõ ràng.
- **Nguyên tắc tương tác & Hình khối:**
  - Sử dụng các thẻ thông tin dạng viên thuốc (pill-shaped) hoặc bo góc mềm mại (`rounded-2xl`).
  - Ứng dụng kỹ thuật xếp chồng (Overlapping floating elements) với bóng đổ (soft shadow) để tạo chiều sâu thay vì thiết kế phẳng lì.
  - Nút bấm chính nổi bật, có loading spinner khi gọi API và trạng thái hover đổi màu rõ ràng.

---

## 📁 Cấu trúc thư mục (Feature-Driven Architecture)

```text
src/
├── assets/             # Hình ảnh logo, icon tĩnh, vector
├── components/         # UI Components dùng chung (Button, Input, Table, Modal)
├── config/             # Biến môi trường, hằng số cấu hình (API_URL, ROLES)
├── features/           # Module hóa theo tính năng nghiệp vụ cốt lõi
│   ├── auth/           # Đăng nhập, đăng xuất, lưu token
│   ├── reservation/    # Tra cứu kho, đặt chỗ, chọn loại kho
│   ├── contract/       # Quản lý hợp đồng, gia hạn, trả kho
│   ├── payment/        # Luồng thanh toán tiền cọc, phí thuê, hóa đơn
│   ├── unit/           # Quản lý sơ đồ ô kho, cập nhật trạng thái kho
│   ├── support/        # Tiếp nhận, phân công và xử lý sự cố tại chỗ
│   └── report/         # Báo cáo doanh thu, tỷ lệ lấp đầy
├── hooks/              # Custom hooks dùng chung toàn dự án
├── layouts/            # Khung UI (Shell) bọc ngoài các trang
│   ├── CustomerLayout.tsx     # Khung giao diện khách hàng (Header, Footer)
│   ├── StaffLayout.tsx        # Khung tối ưu Mobile/Tablet cho nhân viên (Bottom Nav/Sidebar gọn)
│   ├── ManagerLayout.tsx      # Khung Dashboard chung cho Quản lý cơ sở & Quản lý vận hành
│   └── AdminLayout.tsx        # Khung giao diện Quản trị viên hệ thống
├── pages/              # Nơi lắp ráp Feature thành các Route hoàn chỉnh
│   ├── admin/          # Màn hình System Admin (Quản lý User, Logs)
│   ├── customer/       # Màn hình Storage Customer (Tìm kho, Booking, Quản lý của tôi)
│   ├── facility/       # Màn hình Facility Manager (Quản lý 1 cơ sở, điều phối nhân viên)
│   ├── operations/     # Màn hình Business Ops (Báo cáo hệ thống, cấu hình giá)
│   └── staff/          # Màn hình Facility Staff (To-do list, Check-in, Xử lý sự cố)
├── routes/             # Cấu hình đường dẫn và phân quyền bảo vệ route (ProtectedRoute / RBAC)
├── services/           # Cấu hình Axios client, Interceptors xử lý token & lỗi tập trung
├── store/              # Quản lý Global State (Zustand: authStore, bookingStore)
├── types/              # Khai báo TypeScript Interfaces/Types chung cho toàn hệ thống
└── utils/              # Các hàm tiện ích thuần (formatCurrency, formatDate, validatePhone)
