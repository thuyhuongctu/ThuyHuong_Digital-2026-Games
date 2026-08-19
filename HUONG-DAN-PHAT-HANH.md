# 📲 Hướng dẫn phát hành — Web app · CH Play · iOS

Cổng game này là **PWA (Progressive Web App)** hoàn chỉnh: cài được lên màn
hình chính, chạy toàn màn hình, chơi ngoại tuyến. Nhờ vậy **không cần viết
lại game bằng engine nào khác** (GDevelop, Unity, C++…) — chỉ cần "đóng gói"
đúng cách cho từng nền tảng.

| Nền tảng | Chi phí | Độ khó | Thời gian |
|---|---|---|---|
| 🌐 Web app (GitHub Pages + PWA) | **0 đ** | Dễ — đã xong sẵn | Ngay lập tức |
| 🤖 CH Play (Google Play) | 25 USD (nộp **một lần duy nhất**) | Trung bình | 1–2 buổi + vài ngày xét duyệt |
| 🍎 iOS — cài từ Safari | **0 đ** | Dễ — đã xong sẵn | Ngay lập tức |
| 🍎 iOS — App Store | 99 USD/**năm** + cần máy Mac | Khó | Không khuyến nghị lúc đầu |

---

## 1. 🌐 Web app — đã chạy sẵn {#web-app}

Trang web đã phát hành tại:

**https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/**

Nếu link trên chưa hoạt động, bật GitHub Pages như sau:

1. Vào repo trên GitHub → **Settings** → **Pages**
2. Mục **Source**: chọn *Deploy from a branch*
3. **Branch**: chọn `main`, thư mục `/ (root)` → **Save**
4. Chờ 1–2 phút, trang sẽ có tại địa chỉ trên

Người chơi mở link bằng điện thoại → bấm nút **📲 Cài vào Màn hình chính**
(hoặc menu trình duyệt → *Thêm vào màn hình chính*) → game chạy toàn màn
hình như app thật, kể cả khi **không có mạng**.

> Mỗi lần bạn đẩy code mới lên nhánh `main`, trang web và app đã cài trên
> máy người chơi đều **tự cập nhật** — không phải phát hành lại.

---

## 2. 🤖 Đưa lên CH Play (Google Play) {#ch-play}

Google chính thức hỗ trợ đưa PWA lên CH Play qua công nghệ **TWA (Trusted
Web Activity)**: app trên CH Play thực chất mở trang web của bạn toàn màn
hình, không thanh địa chỉ. Game chỉ cần bảo trì **một nơi duy nhất** (repo
này) — app tự cập nhật theo web.

### Bước 2.1 — Đăng ký tài khoản nhà phát triển {#play-console}

1. Vào https://play.google.com/console/signup
2. Đăng nhập tài khoản Google, chọn loại **Cá nhân**
3. Nộp phí **25 USD một lần** (thẻ Visa/Mastercard) và xác minh danh tính
   (ảnh giấy tờ tùy thân)
4. Chờ duyệt tài khoản (thường 1–2 ngày)

> Lưu ý: tài khoản cá nhân mới cần chạy **thử nghiệm khép kín với ít nhất
> 12 người thử trong 14 ngày** trước khi được phát hành công khai — Google
> áp dụng quy định này cho tài khoản cá nhân đăng ký mới. Bạn có thể mời
> sinh viên/đồng nghiệp làm người thử nghiệm bằng email của họ.

### Bước 2.2 — Tạo gói Android bằng PWABuilder (không cần cài gì) {#pwabuilder}

1. Vào **https://www.pwabuilder.com**
2. Dán địa chỉ web app:
   `https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/`
3. Bấm **Start** → chờ chấm điểm PWA → bấm **Package for stores**
4. Chọn **Android** → điền:
   - **Package ID**: `vn.thuyhuongdigital.suvietgames` (tên miền đảo ngược,
     đặt một lần, **không đổi được** về sau)
   - **App name**: `Sử Việt Games` · **Version**: `1.0.0`
   - Signing key: chọn *Create new* (tạo khóa ký mới)
5. Tải về file `.zip` — bên trong có:
   - `*.aab` — gói nộp lên CH Play
   - `signing.keystore` + mật khẩu — **⚠️ LƯU CẨN THẬN, MẤT LÀ KHÔNG CẬP
     NHẬT APP ĐƯỢC NỮA** (lưu vào Google Drive riêng tư + USB)
   - `assetlinks.json` — dùng ở bước tiếp theo

### Bước 2.3 — Xác minh quyền sở hữu web (assetlinks.json) {#assetlinks}

Để app mở toàn màn hình không hiện thanh địa chỉ, cần chứng minh web và app
cùng một chủ. Tạo file `.well-known/assetlinks.json` **trong repo này** với
nội dung PWABuilder đưa cho bạn (dạng như sau, thay `XX:YY:…` bằng vân tay
SHA-256 thật trong file tải về):

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "vn.thuyhuongdigital.suvietgames",
    "sha256_cert_fingerprints": ["XX:YY:ZZ:..."]
  }
}]
```

Đẩy lên `main` để file có tại:
`https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/.well-known/assetlinks.json`

### Bước 2.4 — Tạo ứng dụng trên Play Console và nộp {#play-submit}

1. Play Console → **Create app** → tên `Sử Việt Games — Cổng Trò Chơi Sử
   Việt`, ngôn ngữ mặc định *Tiếng Việt*, loại **Game**, **Miễn phí**
2. Hoàn tất các mục khai báo bắt buộc (Play Console liệt kê sẵn checklist):
   - **Mô tả ứng dụng**: lấy từ phần *Giới thiệu* trong README
   - **Đồ họa cửa hàng** cần chuẩn bị:
     - Biểu tượng 512×512 (có sẵn: `icons/icon-512.png`)
     - Ảnh bìa *feature graphic* 1024×500 (chụp cảnh game + tên game)
     - Tối thiểu 2 ảnh chụp màn hình điện thoại (chụp ngay trong game)
   - **Xếp hạng nội dung**: điền bảng hỏi → game không bạo lực máu me,
     thường được xếp 3+/7+
   - **Quyền riêng tư**: game không thu thập dữ liệu ai — có thể ghi rõ
     như vậy; cần một trang *privacy policy* (tạo file `privacy.html` trong
     repo là đủ)
3. **Testing → Closed testing** → tạo bản phát hành → tải file `.aab` lên
   → mời người thử nghiệm → chạy đủ 14 ngày (quy định tài khoản cá nhân mới)
4. Sau đó **Production → Create release** → nộp xét duyệt (vài ngày)

### Cập nhật app về sau {#update-app}

- Sửa **nội dung game** → chỉ cần push lên `main`, app tự cập nhật, **không
  phải nộp lại CH Play**
- Chỉ khi đổi tên app, biểu tượng, hoặc màn hình khởi động mới cần tạo lại
  `.aab` (PWABuilder, dùng lại signing key cũ) và nộp bản mới

---

## 3. 🍎 iOS {#ios}

**Cách miễn phí (khuyên dùng):** người chơi mở web app bằng **Safari** →
nút **Chia sẻ** (ô vuông mũi tên) → **Thêm vào MH chính** → game chạy toàn
màn hình, có biểu tượng riêng, chơi được ngoại tuyến. Không mất phí, không
cần xét duyệt.

**Đưa lên App Store (chỉ khi thật cần):**

- Cần tài khoản **Apple Developer 99 USD/năm** + **máy Mac** cài Xcode
- PWABuilder cũng tạo được gói iOS (chọn **iOS** ở bước Package) → mở bằng
  Xcode → ký và nộp qua App Store Connect
- ⚠️ Apple thường **từ chối** app "chỉ là trang web đóng gói" (quy định
  4.2). Muốn qua xét duyệt nên có thêm tính năng bản địa (ví dụ Game Center,
  thông báo đẩy). Vì vậy nên bắt đầu bằng cách miễn phí ở trên.

---

## 4. 📖 Lấy mã DOI cho dự án (Zenodo) {#doi}

DOI giúp trích dẫn phần mềm trong bài báo khoa học / hồ sơ học thuật. Zenodo
(kho lưu trữ của CERN, miễn phí) cấp DOI tự động cho mỗi bản phát hành
GitHub. Repo đã có sẵn file `CITATION.cff` để Zenodo lấy đúng thông tin
tác giả.

1. Vào **https://zenodo.org** → **Log in** → chọn **Log in with GitHub**
   → cho phép truy cập
2. Bấm ảnh đại diện (góc phải) → **GitHub** → tìm
   `thuyhuongctu/ThuyHuong_Digital-2026-Games` → gạt công tắc sang **ON**
3. Tạo một **release mới** trên GitHub (ví dụ `v.1.3`) — ⚠️ các release
   tạo *trước khi* bật công tắc (v.1.1, v.1.2) sẽ **không** được cấp DOI;
   chỉ release mới sau khi bật mới được lưu trữ
4. Chờ vài phút → quay lại trang GitHub trên Zenodo → repo sẽ hiện huy hiệu
   DOI. Bấm vào huy hiệu để lấy 2 mã:
   - **Concept DOI** — đại diện *mọi phiên bản* (dùng mã này trong README)
   - **Version DOI** — riêng cho từng bản phát hành
5. Cập nhật lại repo:
   - Trong `CITATION.cff`: bỏ dấu `#` ở dòng `doi:` và điền Concept DOI
   - Trong `README.md` (mục *How to cite*): dán huy hiệu Zenodo đưa cho bạn,
     dạng:
     ```markdown
     [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)
     ```

Từ đó về sau, **mỗi release GitHub mới sẽ tự động có thêm một Version DOI**
— không phải làm lại gì cả.

### Sửa metadata của bản ghi Zenodo đã phát hành {#doi-metadata}

Bản ghi lưu trữ **trước khi** repo có `.zenodo.json` sẽ thiếu thông tin: Zenodo
lấy tạm tên đăng nhập GitHub làm tác giả và không có phần mô tả. Sửa như sau
(mã DOI **không đổi**, chỉ metadata cập nhật):

1. Vào **zenodo.org** → đăng nhập → **My dashboard** → mở bản ghi → **Edit**
2. **Creators**: xóa dòng cũ, nhập
   - Family name `Do` · Given names `Thuy Huong`
   - Affiliation `Vinh Long University of Technology Education (VLUTE)`
   - Có ORCID thì điền luôn để bản ghi tự liên kết vào hồ sơ ORCID
3. **Description**: mở [`docs/zenodo-description.html`](docs/zenodo-description.html),
   copy toàn bộ phần bên dưới khối ghi chú và dán vào (ô này nhận HTML — nếu
   trình soạn thảo đang ở chế độ chữ thường, chuyển sang chế độ mã/HTML trước)
4. Bấm **Publish**

Các release **mới** không cần làm bước này: `.zenodo.json` trong repo đã chứa
sẵn tác giả và mô tả nên Zenodo tự điền.

---

## 5. ❓ Hỏi nhanh {#faq}

**Có cần dùng GDevelop / Cubyz / học C++ 3D không?**
Không. Game đã là 3D thật bằng **three.js** (WebGL) — cùng công nghệ nền
với các engine web. Viết lại bằng engine khác mất nhiều tháng mà kết quả
phát hành vẫn y như con đường PWA → TWA ở trên. Các repo đó chỉ hữu ích
làm tài liệu tham khảo kỹ thuật.

**Game 3D có chạy nổi trên điện thoại yếu?**
Có — bản 3D dùng khối hình đơn giản (low-poly), và người chơi luôn có thể
chọn bản 2D trên cùng cổng game.

**Một app trên CH Play chứa được cả 3 game?**
Đúng — app mở cổng game (trang chủ), từ đó vào cả Vân Đồn, Bắc Hải Đảo 2D
và 3D. Manifest đã khai báo *shortcut* để nhấn giữ biểu tượng app là nhảy
thẳng vào từng game.
