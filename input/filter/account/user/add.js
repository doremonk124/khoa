export default {
    data() {
        return {
            list_validate : [
                {
                    name : 'name',
                    required : true,
                    lengthString : {
                        min : 4,
                        max : 11
                    },
                },
                {
                    name : 'email',
                    required : true,
                    format : ['email'],
                    lengthString : {
                        min : 7
                    },
                },
                {
                    name : 'password',
                    required : true,
                    format : ['password'],
                    lengthString : {
                        min : 4,
                        max : 11
                    },
                },
                {
                    name : 'phone',
                    required : true,
                    lengthString : {
                        min : 10,
                        max : 11
                    },
                },
                {
                    name : 'city',
                    required : true,
                },
                {
                    name : 'avatar',
                    required : true,
                },
                {
                    name : 'sex',
                    required : true,
                },
                {
                    name : 'role-code',
                    required : true,
                },
            ]
        }
    }
}
