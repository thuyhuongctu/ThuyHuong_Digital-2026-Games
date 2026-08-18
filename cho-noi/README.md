# Chợ Nổi — Phiên Chợ Trên Sông 🛶

Trò chơi nhanh tay (arcade catcher) lấy bối cảnh **chợ nổi miền Tây thời khẩn hoang
Đất Phương Nam (thế kỷ 19)**: ghe bầu chạy ngang thả nông sản, người chơi chèo
xuồng ba lá hứng cho đầy khoang trước khi tan chợ.

## Cách chơi
- **⬅️ ➡️ phím mũi tên** hoặc **rê / chạm màn hình** để chèo xuồng.
- Hứng nông sản: 🥥 🍌 **+1** · 🍉 🥭 **+2** · 🍍 🌾 **+3**.
- Né 🪵 gỗ trôi: **−5 điểm** và rung màn hình.
- Phiên chợ dài **90 giây**; chợ càng về trưa ghe thả càng dặt dìu, hàng rơi càng nhanh.
- Kỷ lục lưu trong trình duyệt (`localStorage`).

## Kỹ thuật
- Trò chơi **đầu tiên trong cổng dựng bằng [Phaser 3](https://phaser.io/)** (v3.90.0,
  giấy phép MIT) — engine được vendor tại `../assets/vendor/phaser.min.js`,
  không phụ thuộc CDN nên vẫn chạy ngoại tuyến qua service worker.
- Arcade Physics cho chuyển động rơi và va chạm xuồng–hàng.
- Đồ hoạ bằng emoji + `Graphics` vẽ nền sông phù sa — không cần tệp ảnh.
- Âm thanh ngũ cung (C–D–E–G–A) sinh bằng WebAudio, đồng bộ chất nhạc với
  Vân Đồn và Bắc Hải Đảo.
- Ba scene: `ManMoDau` → `ManChoi` → `ManTanCho`; khung 480×720 co giãn
  theo màn hình (`Phaser.Scale.FIT`).

## Bối cảnh sử liệu
Thế kỷ 19, lưu dân người Việt theo kênh rạch tiến vào khẩn hoang đồng bằng
sông Cửu Long. Đường bộ chưa mở, ghe xuồng là chân đi — người mua kẻ bán
tụ lại giữa sông thành **chợ nổi**, treo *cây bẹo* trước mũi ghe:
"treo hàng gì, bán hàng nấy".
