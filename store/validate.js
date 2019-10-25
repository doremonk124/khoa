import axios from 'axios'

export const state = () => ({
    alert: null,
    filter: null
})

export const mutations = {
    SET_ALERT (state, data) {
        state.alert = data
    },
}

export const actions = {

    async validate({commit}, {data}) {
        var result = {}
        var method = this
        $.each(data.list_validate, function(key, value) {

            // Kiểm tra name trong validate có tồn tại không
            if (!value.name) {
                console.log(value.name + ' không tồn tại')
            }

            // Kiểm tra field đã có thông báo lỗi chưa
            if (result[value.name]) {
                return result
            }

            if (value.required === true) {
                method.dispatch('validate/required', {data, value, result}).then((res) => {
                    result = res
                })
            }
            if (value.format && !result[value.name]) {
                method.dispatch('validate/format', {data, value, result}).then((res) => {
                    result = res
                })
            }
            if (value.lengthString && !result[value.name]) {
                method.dispatch('validate/lengthString', {data, value, result}).then((res) => {
                    result = res
                })
            }
        })

        return result
    },

    // required
    required({commit},{data, value, result}) {
        if (!data.data_post[value.name]) {
            result[value.name] = 'Giá trị này không được để trống'
        } else if (typeof (data.data_post[value.name]) === "object" && data.data_post[value.name].length === 0) {
            result[value.name] = 'Giá trị này không được để trống'
        }
        return result
    },

    // format
    async format({commit}, {data, value, result}) {
        // email
        $.each(value.format, function(key, valueChild) {
            switch (valueChild) {
                case 'email' :
                    let at = data.data_post[value.name].indexOf("@");         //check vị trí @
                    let dot = data.data_post[value.name].lastIndexOf(".");    //check vị trí dấu chấm cuối cùng trong chuỗi
                    let space = data.data_post[value.name].indexOf(" ");      //check vị trí khoảng trắng

                    if ((at != -1) && (at != 0) && (dot != -1) && (dot > at + 1) && (dot < data.data_post[value.name].length - 1) && (space == -1))
                    {

                    } else {
                        result[value.name] = 'Định dạng email không chính xác'
                    }
                    break
                case 'password' :
                    let characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/  //check kí tự đặc biệt
                    let number = /[0123456789]/                                //check số tự nhiên
                    if(!characters.test(data.data_post[value.name])){
                        result[value.name] = 'Mật khẩu cần ít nhất 1 kí tự đặc biệt'
                    } else if(!number.test(data.data_post[value.name])){
                        result[value.name] = 'Mật khẩu cần ít nhất 1 chữ số'
                    }
                    break
                default :
                    result[value.name] = 'Lỗi cấu hình hệ thống'
            }
        })
    },

    // length
    async lengthString ({commit}, {data, value, result}) {
        let lengthString = data.data_post[value.name].length
        let name = value.name.charAt(0).toUpperCase() + value.name.slice(1)
        if (lengthString < value.lengthString.min || lengthString > value.lengthString.max) {
            if (!value.lengthString.min) {
                result[value.name] = name + 'Có chiều dài không quá ' + value.lengthString.max + ' ký tự'
            } else if (!value.lengthString.max) {
                result[value.name] = name + 'Có chiều dài tối thiểu ' + value.lengthString.min + ' ký tự'
            } else {
                result[value.name] = name + ' có chiều dài trong khoảng ' + value.lengthString.min + ' đến ' + value.lengthString.max + ' ký tự'
            }
        }
    },
}
