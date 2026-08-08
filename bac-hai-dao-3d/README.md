# 🌊 Bắc Hải Đảo 3D

Bản **đồ họa 3 chiều** của game [Bắc Hải Đảo](../bac-hai-dao/) — cùng thế
giới, cùng toàn bộ lối chơi (phân vai 4 thuyền trưởng, buôn bán 6 thương
cảng, hải chiến với giặc Tàu Ô, bão giông, Rồng thiêng, nhạc ngũ cung),
nhưng nhìn qua camera 3D đuổi sau thuyền.

**Chơi ngay:** mở [`index.html`](index.html) bằng trình duyệt.

## Kỹ thuật

- Dựng bằng **three.js** (bản r147 nhúng sẵn tại `../lib/three.min.js` —
  không tải từ CDN, chạy offline được trong PWA)
- Biển là lưới sóng biến dạng theo thời gian thực; đảo đá vôi, thương cảng,
  thuyền buồm cánh dơi đều dựng từ khối cơ bản đúng bảng màu bản 2D
- Bão đổi trời + sương mù + mưa hạt; Rồng thiêng là chuỗi cầu vàng uốn lượn
- Toàn bộ logic game (kinh tế, gió, AI địch, lưu game) giữ nguyên từ bản 2D
  đã kiểm thử — chỉ thay lớp hiển thị
- Lưu game riêng (không đụng save bản 2D); điều khiển y hệt: phím hoặc cảm ứng
