export default {
    data () {
        // var arrayProvide = JSON.parse(localStorage.getItem('locations')).city
        // let arrayProvide = [{id: '', text: '- Chọn -'}]
        // var localstorage_data = JSON.parse(sessionStorage.getItem('data'))
        return {
            list_input : [
                {
                    control_type: 'text',
                    label: 'Họ và tên',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'name',
                        class: 'form-control form-control-sm maxlength-show',
                        value: '',
                        placeholder: 'Họ và tên',
                        maxlength: 50,
                    },
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Số điện thoại',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'phone',
                        class: 'form-control form-control-sm mask_phone maxlength-show',
                        value: '',
                        placeholder: 'Số điện thoại',
                        maxlength: 11,
                    },
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Địa chỉ email',
                    box_class : 'col-md-4 col-sm-6',
                    attributes: {
                        name: 'email',
                        class: 'form-control form-control-sm',
                        value: '',
                        placeholder: 'Địa chỉ email',
                    },
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Địa chỉ',
                    box_class : 'col-md-4 col-sm-6',
                    attributes: {
                        name: 'address',
                        class: 'form-control form-control-sm',
                        value: '',
                        placeholder: 'Địa chỉ',
                    },
                    validate : ''
                },
                {
                    control_type: 'select',
                    label: 'Tỉnh/thành phố',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name : 'city',
                        class: '',
                        value: '',
                    },
                    options_arr: [
                        {id: '', text: '- Chọn -'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'select',
                    label: 'Quận/huyện',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name : 'district',
                        class: '',
                        value: '',
                    },
                    options_arr: [
                        {id: '', text: '- Chọn -'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'select',
                    label: 'Phường/xã',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name : 'ward',
                        class: '',
                        value: '',
                    },
                    options_arr: [
                        {id: '', text: '- Chọn -'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'checkbox',
                    label: 'Sở thích',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'favorites',
                        class: 'form-input-styled',
                        value: [],
                    },
                    options_arr: [
                        {id: 'CG', text: 'Bóng đá'},
                        {id: 'HĐ', text: 'Xem phim'},
                        {id: 'BĐ', text: 'Nghe nhạc'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'radio',
                    label: 'Giới tính',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'sex',
                        class: 'form-input-styled',
                        value: '',
                    },
                    options_arr: [
                        {id: 'nam', text: 'Nam'},
                        {id: 'nu', text: 'Nữ'},
                        {id: 'k', text: 'Chưa xác định'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'file',
                    label: 'Select File',
                    box_class : 'col-md-4 col-sm-6',
                    id_image : 'preview_file',
                    attributes: {
                        labelx: 'Tải lên file',
                        name: 'file',
                        id: 'upload_file',
                        class: 'form-file-sm label_file',
                        value: '',
                    },
                    validate : ''
                },
                {
                    control_type: 'status',
                    label: 'Hiển thị',
                    attributes: {
                        type : 'checkbox',
                        name: 'status',
                        value : '1',
                        class: 'form-check-input-switchery',
                    },
                    validate : ''
                },
                {
                    control_type: 'textarea',
                    label: 'Ghi chú',
                    box_class: 'col-12',
                    attributes: {
                        name: 'note',
                        class: 'form-control form-control-sm elastic maxlength-textarea',
                        value: '',
                        placeholder: 'Ghi chú',
                        maxlength : '225',
                        rows : 5,
                        col : 3
                    },
                    validate : ''
                },
            ],
            list_input_2 : [
                {
                    control_type: 'text',
                    label: 'Enter your name',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'your-name',
                        class: 'form-control form-control-sm maxlength-show',
                        value: '',
                        placeholder: 'Eugene Kopyov',
                        maxlength: 50,
                    },
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Enter your password',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'your-password',
                        class: 'form-control form-control-sm maxlength-show',
                        value: '',
                        placeholder: 'Your strong password',
                        maxlength: 50,
                    },
                    validate : ''
                },
                {
                    control_type: 'multiple-select',
                    label: 'Select multiple',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    attributes: {
                        name : 'multiple',
                        class: 'select-multiple',
                        value: [],
                        multiple : 'multiple'
                    },
                    options_arr: [
                        {id: 'CG', text: 'Bóng đá'},
                        {id: 'HĐ', text: 'Xem phim'},
                        {id: 'BĐ', text: 'Nghe nhạc'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'selection-select',
                    label: 'Select selection',
                    box_class : 'col-md-4 col-sm-6',
                    // required: true,
                    placeholder : 'Select your state',
                    attributes: {
                        name : 'selection',
                        class: 'form-control select-search',
                        value: '',
                    },
                    options_arr: [
                        {text: null, arr : [
                                {id: 1, text :'Code'},
                                {id: 1, text :'Code nữa'},
                                {id: 1, text :'Code mãi'},
                            ]},
                        {text: 'Khoa', arr : [
                            {id: 1, text :'Học giỏi :3'},
                            {id: 2, text :'Đẹp trai :)'},
                            {id: 3, text :'Code pro :)'}
                            ]},
                        {text: 'Khải', arr : [
                                {id: 1, text :'Lấy vợ'},
                            ]},
                    ],
                    validate : ''
                },
                {
                    control_type: 'file',
                    id_image : 'preview_file',
                    label: 'Select File',
                    box_class : 'col-md-8',
                    attributes: {
                        labelx: 'Tải lên file',
                        name: 'file',
                        id: 'upload_file',
                        class: 'form-input-styled',
                        value: '',
                    },
                    validate : ''
                },
                {
                    control_type: 'textarea',
                    label: 'Your message',
                    box_class: 'col-sm-12',
                    attributes: {
                        name: 'note',
                        class: 'form-control',
                        value: '',
                        placeholder: 'Ghi chú',
                        maxlength : '225',
                        rows : 5,
                        col : 5
                    },
                    validate : ''
                },
            ],
            list_input_3 : [
                {
                    control_type: 'text',
                    label: 'Enter your name',
                    box_class : 'col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'your-name',
                        class: 'form-control form-control-sm maxlength-show',
                        value: '',
                        placeholder: 'Eugene Kopyov',
                        maxlength: 50,
                    },
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Enter your password',
                    box_class : 'col-sm-6',
                    // required: true,
                    attributes: {
                        name: 'your-password',
                        class: 'form-control form-control-sm maxlength-show',
                        value: '',
                        placeholder: 'Your strong password',
                        maxlength: 50,
                    },
                    validate : ''
                },
                {
                    control_type: 'multiple-select',
                    label: 'Select multiple',
                    box_class : 'col-sm-6',
                    // required: true,
                    attributes: {
                        name : 'multiple',
                        class: 'select-multiple',
                        value: [],
                        multiple : 'multiple'
                    },
                    options_arr: [
                        {id: 'CG', text: 'Bóng đá'},
                        {id: 'HĐ', text: 'Xem phim'},
                        {id: 'BĐ', text: 'Nghe nhạc'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'selection-select',
                    label: 'Select selection',
                    box_class : 'col-sm-6',
                    // required: true,
                    placeholder : 'Select your state',
                    attributes: {
                        name : 'selection',
                        class: 'form-control select-search',
                        value: '',
                    },
                    options_arr: [
                        {text: null, arr : [
                                {id: 1, text :'Code'},
                                {id: 1, text :'Code nữa'},
                                {id: 1, text :'Code mãi'},
                            ]},
                        {text: 'Khoa', arr : [
                                {id: 1, text :'Học giỏi :3'},
                                {id: 2, text :'Đẹp trai :)'},
                                {id: 3, text :'Code pro :)'}
                            ]},
                        {text: 'Khải', arr : [
                                {id: 1, text :'Lấy vợ'},
                            ]},
                    ],
                    validate : ''
                },
                {
                    control_type: 'file',
                    id_image : 'preview_file',
                    label: 'Select File',
                    box_class : 'col-sm-6',
                    attributes: {
                        labelx: 'Tải lên file',
                        name: 'file',
                        id: 'upload_file',
                        class: 'form-input-styled',
                        value: '',
                    },
                    validate : ''
                },
                {
                    control_type: 'textarea',
                    label: 'Your message',
                    box_class: 'col-sm-12',
                    attributes: {
                        name: 'note',
                        class: 'form-control',
                        value: '',
                        placeholder: 'Ghi chú',
                        maxlength : '225',
                        rows : 5,
                        col : 5
                    },
                    validate : ''
                },
            ]
        }
    },
}
