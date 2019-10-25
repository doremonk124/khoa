Hướng dẫn sử dụng form :
- form trả về 1 mảng data() lưu thông tin các thẻ input để dùng cho component input-helper.vue
- Với 1 input sẽ có các field bắt buộc sau đây :
    + control_type : Định dạng thẻ input gồm các loại đơn giản đang có hiện nay : hidden, text, email, number, tel, time,
password, date, select, file cùng các loại custom như : textarea, multiple-select, selection-select, status, checkbox, radio.
    + attribute : các thuộc tính của thẻ input như class, id, placeholder, maxLength, ... trong đó có các thuộc tính rất
cần thiết như : name, value (thường để rỗng).
    + validate : để hiện thị validate màu đỏ (thường để '')
- Các field không bắt buộc : label, box-class (col-md-4 col-sm-6), input_class (form_group), required (flase), note, options_arr
(bắt buộc với select), icon
- Nếu muốn các thành phần tiếp theo tách riêng với các input trước đó có thể chỉ cần đặt  {  box_class : 'col-12', control_type: '', attributes : {} },
