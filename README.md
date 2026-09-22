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

- **Phong cách chủ đạo:** Industrial Brutalism kết hợp Cinematic Dark Mode.
- **Tone màu:** Nền đen/xám than (`zinc-950` / `zinc-900`), viền rõ nét, điểm nhấn màu vàng cảnh báo/neon (`amber-400` / `yellow-400`).
- **Typography:** Sans-serif đậm nét, khối vuông vức mô phỏng cấu trúc ô kho lưu trữ thực tế.
- **Nguyên tắc tương tác:**
  - Nút bấm chính (CTA) nổi bật, có loading spinner khi gọi API.
  - Lỗi nhập liệu (Validation Errors) phải hiển thị trực tiếp dưới chân ô input.
  - Tuyệt đối không dùng các template Bootstrap mặc định bo tròn đa sắc.

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
├── layouts/            # Khung giao diện theo vai trò (CustomerLayout, ManagerLayout, AdminLayout)
├── pages/              # Nơi lắp ráp các feature thành trang hoàn chỉnh (Customer, Staff, Manager, Admin)
├── routes/             # Cấu hình đường dẫn và phân quyền bảo vệ route (ProtectedRoute / RBAC)
├── services/           # Cấu hình Axios client, Interceptors xử lý token & lỗi tập trung
├── store/              # Quản lý Global State (Zustand: authStore, bookingStore)
├── types/              # Khai báo TypeScript Interfaces/Types chung cho toàn hệ thống
└── utils/              # Các hàm tiện ích thuần (formatCurrency, formatDate, validatePhone)
