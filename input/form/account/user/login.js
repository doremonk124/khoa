export default {
    data() {
        return {
            list_input: [
                {
                    control_type: 'text',
                    icon : 'icon-user text-muted',
                    box_class : '',
                    input_class : 'form-group form-group-feedback form-group-feedback-left',
                    // required: true,
                    attributes: {
                        name: 'email',
                        class: 'form-control',
                        value: '',
                        placeholder: 'Email',
                        maxlength: 50,
                    },
                },
                {
                    control_type: 'password',
                    icon : 'icon-lock2 text-muted',
                    box_class : '',
                    input_class : 'form-group form-group-feedback form-group-feedback-left',
                    // required: true,
                    attributes: {
                        name: 'password',
                        class: 'form-control',
                        value: '',
                        placeholder: 'Mật khẩu',
                        maxlength: 50,
                    },
                },
                {
                    control_type: 'checkbox',
                    box_class : '',
                    input_class : 'form-group float-right',
                    // required: true,
                    attributes: {
                        name: 'save',
                        class: 'form-control',
                        value: '',
                        maxlength: 50,
                    },
                    options_arr: [
                        {id: 'true', text: 'Lưu mật khẩu'},
                    ],
                    validate : ''
                },
            ]
        }
    }
}
