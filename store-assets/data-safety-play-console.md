# 🔐 Khai báo Data Safety trên Play Console

Bảng khai **Bảo mật dữ liệu / Data safety** là bắt buộc khi nộp app lên CH Play.
Khai sai — kể cả khai thừa — có thể bị Google gỡ app, nên nội dung dưới đây bám
đúng những gì đã kiểm chứng trong mã nguồn.

**Đường dẫn trên Play Console:** *Policy → App content → Data safety → Start*

---

## Nguyên tắc quyết định: "thu thập" nghĩa là gì {#dinh-nghia}

Google định nghĩa **thu thập (collect)** là dữ liệu **được truyền ra khỏi thiết
bị**. Dữ liệu chỉ nằm trên máy người dùng và không gửi đi đâu thì **không tính
là thu thập**.

Cổng game lưu tiến trình chơi và điểm cao bằng `localStorage` — dữ liệu này nằm
trong trình duyệt trên chính máy người chơi, không có bất kỳ đường truyền nào
đưa nó đi. Vì vậy toàn bộ bảng khai là **Không**.

Kết quả rà soát mã nguồn (ngày 19/08/2026): không có `fetch`, `XMLHttpRequest`,
`WebSocket`, `sendBeacon`; không có máy chủ bên thứ ba, CDN hay công cụ phân
tích; không có ô nhập liệu; không truy cập vị trí, máy ảnh, micro, danh bạ.

---

## Phần 1 — Data collection and security {#phan-1}

| Câu hỏi trên Play Console | Trả lời |
|---|---|
| Does your app collect or share any of the required user data types?<br>*(Ứng dụng của bạn có thu thập hoặc chia sẻ loại dữ liệu người dùng nào không?)* | **No** |

Chọn **No** thì Play Console **bỏ qua toàn bộ phần chọn loại dữ liệu** (vị trí,
danh tính, tài chính, tin nhắn, ảnh, tệp, hoạt động trong ứng dụng…) và các câu
hỏi phụ bên dưới. Không cần khai gì thêm ở phần này:

| Câu hỏi chỉ hiện khi trả lời "Yes" | Ghi chú |
|---|---|
| Is all of the user data collected by your app encrypted in transit? | Không hiện — vì không thu thập |
| Do you provide a way for users to request that their data be deleted? | Không hiện — vì không thu thập |

---

## Phần 2 — Data types {#phan-2}

Bỏ qua toàn bộ. Không tick bất kỳ loại dữ liệu nào.

---

## Phần 3 — Privacy policy {#phan-3}

| Trường | Giá trị |
|---|---|
| Privacy policy URL | `https://thuyhuongctu.github.io/ThuyHuong_Digital-2026-Games/privacy.html` |

Đây là trang chính sách song ngữ Việt–Anh đã có sẵn trong repo
([`privacy.html`](../privacy.html)). Kiểm tra link mở được trước khi nộp.

---

## Các khai báo bắt buộc khác trong mục App content {#khai-bao-khac}

| Mục | Trả lời |
|---|---|
| **Ads** — Does your app contain ads? | **No, my app does not contain ads** |
| **App access** — có màn hình nào cần đăng nhập để xem không? | **All functionality is available without special access** |
| **Content rating** — làm bảng hỏi | Game không có máu me, cờ bạc, chất kích thích, tương tác người dùng → thường được xếp **3+ / 7+** |
| **Data safety** | Như trên |
| **Government apps** | No |
| **Financial features** | None |
| **Health apps** | None |

### ⚠️ Cân nhắc: Target audience (Đối tượng mục tiêu) {#target-audience}

Đây là mục **cần bạn tự quyết**, vì nó thay đổi hẳn mức độ ràng buộc:

- **Chọn có nhóm tuổi dưới 13** → app rơi vào **Families Policy**: phải khai
  thêm, bị soát kỹ hơn, và bất kỳ thay đổi nào sau này (thêm quảng cáo, thêm
  liên kết ra ngoài) đều bị siết chặt.
- **Chọn từ 13 tuổi trở lên** → thủ tục nhẹ hơn nhiều, mà vẫn không ngăn học
  sinh nhỏ tuổi chơi được.

Game hướng tới học sinh phổ thông và sinh viên, nên **13+ là lựa chọn hợp lý và
ít rủi ro nhất**. Chỉ chọn nhóm dưới 13 nếu bạn thực sự muốn app xuất hiện
trong mục *Teacher Approved / Kids* của CH Play và chấp nhận quy trình duyệt
ngặt hơn.

---

## Khi nào phải cập nhật lại bảng khai {#cap-nhat}

App trên CH Play là lớp vỏ TWA mở chính trang web này, nên **bảng khai phải
phản ánh cả những gì trang web làm**. Phải quay lại sửa Data safety nếu sau này
bạn thêm bất kỳ thứ nào sau đây vào trang web hoặc vào game:

- Google Analytics, Firebase, hay bất kỳ công cụ đo lường nào
- Quảng cáo (AdMob…)
- Bảng xếp hạng trực tuyến, tài khoản đăng nhập, lưu tiến trình lên máy chủ
- Nút chia sẻ mạng xã hội có nhúng script của bên thứ ba
- Font, ảnh hay thư viện tải từ CDN bên ngoài

Chừng nào cổng game còn là trang tĩnh tự chứa như hiện nay thì bảng khai giữ
nguyên.
