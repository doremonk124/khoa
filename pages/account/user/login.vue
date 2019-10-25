<template>
    <div class="content-wrapper">
        <div class="content d-flex justify-content-center align-items-center">
            <form class="login-form" @submit.prevent="login_auth">
                <div class="card mb-0">
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                            <h5 class="mb-0"><b>ĐĂNG NHẬP HỆ THỐNG</b></h5>
                            <div v-if="$store.state.account.user.alert" class="alert alert-danger">
                                <button type="button" class="close" @click="removeAlert('account/user')"><span>×</span></button>
                                {{$store.state.account.user.alert.content}}
                            </div>
                        </div>

                        <inputHelper
                            v-for="(item, index) in list_input"
                            v-bind="item"
                            v-bind:key="index"
                            @onChange="setValue"
                        >{{ item.label }}
                        </inputHelper>

                        <div class="form-group">
                            <button type="submit" class="btn btn-info btn-block legitRipple">Đăng nhập <i class="icon-circle-right2 ml-2"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import form_input from '~/input/form/account/user/login'
    import inputHelper from '~/components/helpers/input-helper'

    export default {
        middleware: 'default',
        mixins : [form_input],
        components : {
            inputHelper
        },
        head() {
            return {
                title: 'Đăng nhập hệ thống'
            }
        },
        async asyncData (context) {
            if(!localStorage.getItem('locations'))
                context.store.dispatch('account/user/getLocations')
        },
        data () {
            return {
                data_post : {},
            }
        },
        methods: {
            setValue(value) {
                this.data_post[value.name] = value.value;
            },
            async login_auth () {
                loading({ type: "open" });
                let list_input = this.list_input
                let path = ACCOUNT_USER_LOGIN
                $.each(list_input, function(key, value) {
                    value.input_class = value.input_class.replace(' has-error', '')
                    value.validate = ''
                })
                await this.sendData(path, this.data_post).then((res) => {
                    if(res === 'success') {
                        this.saveData(path, this.data_post).then((res) => {
                            loading({ type: "close" });
                            if (res === 'success') {
                                this.$router.push(ACCOUNT_DASHBOARD)
                            }
                        })
                    } else {
                        $.each(res, function(keyMaster, valueMaster) {
                            $.each(list_input, function(key, value) {
                                if(value.attributes.name === keyMaster) {
                                    value.input_class = value.input_class + ' has-error'
                                    value.validate = valueMaster
                                }
                            });
                        })
                        loading({ type: "close" });
                    }
                })
            },
        },
        mounted() {
            Custom.init()
        }
    }
</script>
