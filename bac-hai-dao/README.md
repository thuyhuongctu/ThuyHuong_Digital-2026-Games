# 🏴‍☠️ Bắc Hải Đảo — Hải Tặc Vịnh Bắc Bộ

Game hải tặc lấy cảm hứng từ thể loại **game đảo hải tặc** kinh điển,
nhưng bối cảnh **thuần Việt Nam**: vịnh Bắc Bộ năm 1780, thuyền buồm cánh dơi,
thương cảng cổ Vân Đồn và giặc biển Tàu Ô.

**Chơi ngay:** mở [`index.html`](index.html) bằng trình duyệt — không cần cài đặt,
không cần server, toàn bộ game nằm trong một file HTML duy nhất (canvas 2D,
không phụ thuộc thư viện ngoài).

## Bối cảnh & chất Việt Nam

| Yếu tố game đảo hải tặc | Phiên bản Bắc Hải Đảo |
|---|---|
| Vùng biển hải tặc xa lạ | Vịnh Bắc Bộ với đảo đá vôi Hạ Long |
| Tàu galleon | Thuyền buồm **cánh dơi** (ghe mành) |
| Port Royal, Tortuga | **Vân Đồn**, Hòn Gai, Cát Bà, Quan Lạn, Cô Tô, Bạch Long Vĩ |
| Rượu rum, thuốc lá, vàng | Muối, **nước mắm Cát Hải**, chè Thái Nguyên, gốm Chu Đậu, lụa, quế, ngọc trai Cô Tô, trầm hương |
| Hải tặc Râu Đen | Giặc **Tàu Ô** và trùm **Hắc Giao** |
| Kraken, nàng tiên cá | **Rồng thiêng Hạ Long** hiện lên ban phước |
| Doubloon | **Lượng** bạc |

## Phân vai — chọn thuyền trưởng

Khi bắt đầu ván mới, bạn chọn 1 trong 4 thuyền trưởng, mỗi vai một sở trường:

| Vai | Biệt danh | Sở trường |
|---|---|---|
| 🔥 **Đô đốc T'Hương** | «Phượng Hỏa Bắc Hải» | +1 nòng pháo mỗi mạn, nạp đạn nhanh hơn 30% — thiện chiến nhất |
| 🧭 **Lái buôn Trần Vân Đồn** | «Thần Toán Bến Cổ» | Mua rẻ 10%, bán đắt 10%, +20 khoang hàng — làm giàu nhanh nhất |
| 🌪️ **Kiếm khách Hải Âu** | «Cánh Én Ngược Gió» | Tốc độ +15%, bẻ lái nhanh hơn 25% — cơ động nhất |
| ⚓ **Bà Tư Cát Hải** | «Mẹ Biển Cả» | +50 máu, +4 thủy thủ — bền bỉ nhất |

Đô đốc T'Hương có tạo hình riêng (hội *Vietnam Tech Pirates* — xem
`assets/`), buồm màu ngọc lam và màn kết thắng trận đặc biệt.
Mỗi vai có màu buồm riêng để nhận diện trên biển.

## Cách chơi

**Máy tính:**
- **↑ / ↓** — căng / hạ buồm (3 cấp). **← / →** — bẻ lái.
- **Space** — khai hỏa thần công cả hai mạn tàu.
- **E** — cập bến khi đến gần thương cảng. **P** — tạm dừng.

**Điện thoại / máy tính bảng** (tự nhận diện thiết bị cảm ứng):
- **⟲ ⟳** (góc trái) — bẻ lái. **⛵▲ / ⛵▼** — căng / hạ buồm.
- **💥** (góc phải) — giữ để khai hỏa liên tục.
- Chạm vào dòng "⚓ Nhấn E để cập bến" để vào cảng. Nên xoay ngang màn hình.

### Vòng chơi

1. **Buôn hàng**: mỗi cảng có đặc sản giá rẻ (chữ xanh) và mặt hàng khan hiếm
   giá cao (chữ đỏ) — mua chỗ rẻ, chở sang bán chỗ đắt. Giá dao động theo thời gian.
2. **Chiến đấu**: giặc Tàu Ô tuần tra khắp vịnh, đánh chìm chúng để lấy chiến lợi
   phẩm và **uy danh**. Chú ý hướng gió: xuôi gió chạy nhanh, ngược gió ì ạch.
3. **Nâng cấp** ở xưởng tàu: thân gỗ lim (+máu), buồm lớn (+tốc độ), thêm nòng
   thần công, mở rộng khoang hàng; mộ thủy thủ ở quán rượu để nạp đạn và vá tàu nhanh hơn.
4. **Bão biển**: khi bão nổi phải hạ buồm, căng buồm to trong bão sẽ vỡ tàu.
5. **Rồng thiêng Hạ Long** thỉnh thoảng hiện lên giữa các đảo đá — chèo đến gần
   để được hồi máu, thuận buồm và cộng uy danh.
6. **Mục tiêu**: đạt 10 uy danh để trùm **Hắc Giao** xuất trận gần Bạch Long Vĩ.
   Đánh chìm soái hạm của hắn để xưng **Vua Bắc Hải Đảo** 👑.

Thua trận không mất hết: dân chài Vân Đồn vớt bạn về bến, mất nửa số bạc.
Game tự lưu (localStorage) mỗi lần cập bến — vào lại chọn **Chơi tiếp**.

## 🎵 Nhạc nền

Nhạc nền **ngũ cung** sinh trực tiếp bằng WebAudio (không file nhạc ngoài):
tiếng gảy dây kiểu đàn tranh với luyến âm đàn bầu, bè trầm và trống mõ.
Hai điệu tự chuyển: **ra khơi** khoan thai và **giáp chiến** dồn dập khi
thuyền giặc áp sát. Bật tắt bằng nút 🔊 góc trái hoặc phím **M**,
lựa chọn được ghi nhớ.

## Kỹ thuật

- 1 file `index.html` tự chứa: HTML + CSS + JavaScript thuần (canvas 2D, WebAudio).
- Không cần build, không dependency, chạy offline; hỗ trợ mọi trình duyệt hiện đại.
- Thế giới 4200×3000 với 6 thương cảng, ~40 đảo đá vôi, gió đổi hướng, chu kỳ
  thời tiết, AI địch tuần tra/truy đuổi/bắn đón đầu, bản đồ nhỏ và hệ thống lưu game.
