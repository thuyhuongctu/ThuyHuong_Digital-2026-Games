# 🖼️ Đồ họa cửa hàng ứng dụng (store assets)

Tài nguyên đồ họa dùng khi nộp app lên CH Play (xem
[`HUONG-DAN-PHAT-HANH.md`](../HUONG-DAN-PHAT-HANH.md)).

| File | Dùng cho |
|---|---|
| `feature-graphic-1024x500.png` | Ảnh bìa *feature graphic* trên Play Console (bắt buộc, 1024×500) — bản tiếng Việt |
| `feature-graphic-en-1024x500.png` | Ảnh bìa cho store listing tiếng Anh |
| `feature-graphic.html` / `feature-graphic-en.html` | File nguồn SVG — sửa file này rồi render lại PNG |
| `store-listing-en.md` | Nội dung khai báo store listing tiếng Anh (tên app, mô tả ngắn, mô tả đầy đủ) |

## Tạo lại PNG sau khi sửa file nguồn

Mở `feature-graphic.html` bằng Chrome/Edge rồi chụp màn hình đúng 1024×500,
hoặc dùng Chrome dòng lệnh:

```bash
chrome --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1024,500 \
  --screenshot=feature-graphic-1024x500.png feature-graphic.html
```

Bảng màu lấy đúng từ trang chủ cổng game (men gốm Lý–Trần): nền nâu trầm
`#241708`, vàng `#d9a441`, kem `#fff8e0`, đỏ nâu `#a5402e`, xanh ngọc
`#2f5a4e` / `#9ec5ab`.
