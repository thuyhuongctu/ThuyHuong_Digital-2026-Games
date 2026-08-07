# 🏮 Vân Đồn — Đệ Nhất Thương Cảng

Game **xây dựng thương cảng** lấy bối cảnh lịch sử có thật: năm 1149, vua
**Lý Anh Tông** xuống chiếu lập trang **Vân Đồn** — thương cảng đầu tiên của
Đại Việt — sau khi thuyền buôn ba nước Trảo Oa (Java), Lộ Lạc, Xiêm La xin
vào Hải Đông buôn bán.

**Chơi ngay:** mở [`index.html`](index.html) bằng trình duyệt — một file HTML
duy nhất, không cần cài đặt, thiết kế ưu tiên màn hình dọc điện thoại.

## Cách chơi

Bạn là quan trấn thủ được vua giao dựng bến. Vòng chơi:

1. **Kiến thiết**: chạm công trình ở thanh dưới rồi chạm ô đất trống để dựng —
   lò gốm Chu Đậu, xưởng dệt lụa, bè ngọc trai, trạm trầm hương… sản xuất
   hàng hóa; cầu tàu (đặt ven bờ) đón thêm thuyền; kho tăng sức chứa.
2. **Giao thương**: thương thuyền **Tống, Nhật Bản, Trảo Oa, Xiêm La** lần
   lượt cập bến, mỗi nước chuộng mặt hàng khác nhau và trả giá khác nhau —
   hàng trong kho tự động bán ra thu **quan tiền**.
3. **Danh vọng & thăng cấp**: mỗi thuyền rời bến cho danh vọng (đền thần biển
   cộng thêm). Đủ danh vọng, triều đình thăng bến từ **Trang nhỏ** → **Trang
   Vân Đồn** → **Trấn Vân Đồn** → 👑 **Đệ Nhất Thương Cảng Đại Việt**, mỗi lần
   ban thưởng và mở công trình mới.
4. **Biến cố**: bão trên vịnh khiến mọi việc đình trệ; **giặc Tàu Ô** cướp
   bến nếu chưa dựng Vọng lâu thủy binh; đoàn cống sứ ghé ngang biếu quà.

Game tự lưu mỗi 12 giây — vào lại chọn **Chơi tiếp ván cũ**.

## Chất liệu lịch sử — văn hóa

- Chiếu lập trang Vân Đồn 1149 thời Lý Anh Tông (Đại Việt sử ký toàn thư)
- Gốm Chu Đậu, lụa, ngọc trai, trầm hương — các mặt hàng xuất khẩu nổi tiếng
- Kiến trúc mái ngói cong đầu đao, hoa văn sóng nước thời Lý trên giao diện
- Bảng màu lấy từ gốm men ngọc (celadon), nâu đất, đỏ son, vàng đồng

## Kỹ thuật

Một file `index.html` tự chứa (canvas 2D + WebAudio), không dependency,
chạy offline, hỗ trợ cả chuột lẫn cảm ứng.
