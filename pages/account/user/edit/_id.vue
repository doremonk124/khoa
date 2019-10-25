<template>
    <div>
        <!-- Page header -->
        <div class="page-header page-header-light">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title d-flex">
                    <h4>{{data_post.name}}</h4>
                </div>

                <div class="header-elements d-none text-center text-md-left mb-3 mb-md-0">
                    <div class="btn-group">
                        <button type="button" @click="onSave()" class="btn bg-indigo-400"><i class="icon-database-insert mr-1"></i> Cập nhật</button>
                        <a href="<%= route_page %>" class="btn btn-sm btn-light ml-2"><i class="icon-exit mr-1"></i> Hủy</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page header -->

        <div v-if="$store.state.account.user.alert" class="alert alert-danger border-radius-0 border-0">
            <button type="button" class="close" @click="removeAlert('account/user')"><span>×</span></button>
            {{$store.state.account.user.alert.content}}
        </div>

        <!-- Content area -->
        <div class="content">
            <div class="card">
                <form id="form-data" action="<%= route_page %>/edit" method="post">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <fieldset class="mb-2">
                                    <legend class="font-weight-semibold">
                                        <i class="icon-file-text mr-2"></i> Chỉnh sửa thông tin
                                        <a href="javascript:;" class="float-right text-default" data-toggle="collapse" data-target="#collapse1">
                                            <i class="icon-subtract"></i>
                                        </a>
                                    </legend>

                                    <div class="row collapse show" id="collapse1">
                                        <inputHelper
                                            v-for="(item, index) in list_input"
                                            v-bind="item"
                                            v-bind:key="index"
                                            @onChange="setValue"
                                        >{{ item.label }}
                                        </inputHelper>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center bg-white">
                        <a href="<%= route_page %>" class="btn btn-light"><i class="icon-exit mr-1"></i> Hủy</a>
                        <button type="button" @click="onSave()" class="btn bg-indigo-400"><i class="icon-database-insert mr-1"></i> Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- /content area -->
    </div>
</template>

<script>
    import inputHelper from '~/components/helpers/input-helper';
    import form_input from '~/input/form/account/user/add';

    export default {
        layout: 'account',
        mixins : [form_input],
        components : {
            inputHelper
        },
        head() {
            return {
                title: 'Chỉnh sửa thông tin khách hàng'
            }
        },
        async asyncData (context) {
            let getUser
            console.log(context.route)
            await context.store.dispatch('account/user/getItem', { data: context.route.params.id }).then((res) => {
                getUser = res
            })
            return {
                data_post : getUser
            }
        },
        created() {
            this.setValueInput(this.list_input, this.data_post)
        },
        data() {
            return {
            }
        },
        methods : {
            setValue(element) {
                this.data_post[element.name] = element.value
            },
            async onSave () {
                console.log(this.data_post)
                loading({ type: "open" });
                let list_input = this.list_input
                let path = ACCOUNT_USER_EDIT
                $.each(list_input, function(key, value) {
                    value.input_class = 'form-group'
                    value.validate = ''
                })
                this.sendData(path, this.data_post).then((res) => {
                    if(res === 'success') {
                        //method
                        console.log('method')
                        // this.saveData(path, this.data_post).then((res) => {
                        loading({ type: "close" });
                        //     if (res === 'success') {
                        //         this.$router.push(ACCOUNT_DASHBOARD)
                        //     }
                        // })
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
            }
        },
        mounted() {
            Custom.init()
        }
    }
</script>
