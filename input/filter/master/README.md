Với filter, bạn cần đặt vị trí thư mục và tên theo đúng controller, khai báo các filter ở master/index.js
Hướng dẫn sử dụng filter :
- filter trả về 1 mảng data() lưu thông tin validate của các thẻ input để dùng cho component input-helper.vue
- Với 1 filter sẽ có các field bắt buộc sau đây :
    + name : name (attribute của thẻ input)

- Các field validate đang có (không bắt buộc) : 
    + required : giá trị không được để trống, với dữ liệu dạng array thì là độ dài mảng tối thiểu 1
    + format : Định dạng dữ liệu ( hiện tại có 2 loại định dạng) : 
        * email : định dạng kiểu email (phải có @, dấu '.' không được ở cuối cùng, @ không được ở đầu, không tồn tại khoảng trắng)
        * password : định dạng mật khẩu (phải có ít nhất 1 ký tự đặc biệt, phải có ít nhất 1 số)
    + length : độ dài dữ liệu (với dạng dữ liệu string và number) tồn tại tối thiểu 1 trong 2 :
        * min : độ dài tối thiểu của mảng dữ liệu
        * max : độ dài tối đa của mảng dữ liệu
