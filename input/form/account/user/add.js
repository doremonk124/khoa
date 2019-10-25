export default {
    data() {
        return {
            list_input: [
                {
                    control_type: 'text',
                    label: 'Tên',
                    input_class : 'form-group',
                    required: true,
                    attributes: {
                        name: 'name',
                        class: 'form-control form-control-sm maxlength-sho',
                        value: '',
                        placeholder: 'Nhập tên',
                        maxlength: 40,
                    },
                    validate : ''
                },
                {
                    control_type: 'email',
                    label: 'Email',
                    input_class : 'form-group',
                    required: true,
                    attributes: {
                        name: 'email',
                        class: 'form-control form-control-sm',
                        value: '',
                        placeholder: 'Nhập email',
                        maxlength: 40,
                    },
                    validate : ''
                },
                {
                    control_type: 'password',
                    label: 'Password',
                    input_class : 'form-group',
                    required: true,
                    attributes: {
                        name: 'password',
                        class: 'form-control form-control-sm',
                        value: '',
                        placeholder: 'Nhập mật khẩu',
                        maxlength: 40,
                    },
                    note : 'Mật khẩu cần ít nhất một kí tư đặc biệt và một số',
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Số điện thoại',
                    box_class : 'col-md-4 col-sm-6',
                    required: true,
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
                    control_type: 'select',
                    label: 'Tỉnh thành',
                    input_class : 'form-group',
                    required: true,
                    attributes: {
                        name: 'city',
                        class: 'select-search-sm',
                        value: '',
                    },
                    options_arr: [
                        {id: '', text: '- Chọn -'},
                        {id: 'nd', text: 'Nam Định'},
                        {id: 'hn', text: 'Hà Nội'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'file',
                    label: 'Avatar',
                    required: true,
                    attributes: {
                        labelx: 'Tải lên file',
                        name: 'avatar',
                        id: 'upload_file',
                        class: 'form-file-sm',
                        value: '',
                    },
                    note : 'Định dạng: gif, png, jpg. Dung lượng tối đa 2Mb',
                    validate : ''
                },
                {
                    control_type: 'text',
                    label: 'Sắp xếp',
                    input_class : 'form-group',
                    attributes: {
                        name: 'order',
                        class: 'form-control form-control-sm format-number',
                        value: '255',
                        placeholder: 'Nhập thứ tự',
                    },
                    validate : ''
                },
                {
                    box_class : 'col-12',
                    control_type: '',
                    attributes : {}
                },
                {
                    control_type: 'radio',
                    label: 'Giới tính',
                    input_class : 'form-group',
                    required: true,
                    attributes: {
                        name: 'sex',
                        value: '',
                    },
                    options_arr: [
                        {id: 'male', text: 'Nam'},
                        {id: 'female', text: 'Nữ'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'checkbox',
                    label: 'Nhóm quyền',
                    required: true,
                    attributes: {
                        name: 'role-code',
                        value: [],
                    },
                    options_arr: [
                        {id: 'root', text: 'Root'},
                        {id: 'owner', text: 'Owner'},
                        {id: 'admin', text: 'Admin'},
                        {id: 'leader', text: 'Leader'},
                    ],
                    validate : ''
                },
                {
                    control_type: 'status',
                    label: 'Hiển thị',
                    attributes: {
                        type : 'checkbox',
                        name: 'status',
                        class: 'form-check-input-switchery',
                    },
                    checked : true,
                    validate : ''
                },
                {
                    control_type: 'textarea',
                    label: 'Mô tả',
                    box_class: 'col-12',
                    attributes: {
                        name: 'description',
                        class: 'form-control form-control-sm elastic maxlength-textarea',
                        value: '',
                        placeholder: 'Mô tả',
                        maxlength : '500',
                        rows : 5,
                        col : 3
                    },
                    validate : ''
                },
                {
                    control_type: 'textarea',
                    label: 'Nội dung',
                    box_class: 'col-12',
                    attributes: {
                        name: 'content',
                        class: 'form-control form-control-sm elastic maxlength-textarea',
                        value: '',
                        placeholder: 'Nội dung',
                        maxlength : '500',
                        rows : 5,
                        col : 3
                    },
                    validate : ''
                },
            ]
        }
    }
}
