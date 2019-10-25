<template>
    <div>
        <!-- Page header -->
        <div class="page-header page-header-light">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title d-flex">
                    <h4>Giao diện - Form</h4>
                </div>

                <div class="header-elements d-none text-center text-md-left mb-3 mb-md-0">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm bg-indigo-400"><i class="icon-database-insert mr-1"></i>
                            Cập nhật
                        </button>
                        <a href="" class="btn btn-sm btn-light ml-2"><i class="icon-exit mr-1"></i> Hủy</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page header -->

        <!-- Content area -->
        <div class="content">
            <div class="card">
                <form action="#">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <fieldset class="mb-2">
                                    <legend class="font-weight-semibold">
                                        <i class="icon-file-text mr-2"></i> Thông tin chung
                                        <a href="javascript:;" class="float-right text-default" data-toggle="collapse"
                                           data-target="#collapse5">
                                            <i class="icon-subtract"></i>
                                        </a>
                                    </legend>

                                    <div class="row collapse show" id="collapse5">
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
                        <div class="row">
                            <div class="col-sm-6">
                                <fieldset class="mb-2">
                                    <legend class="font-weight-semibold">
                                        <i class="icon-reading mr-2"></i> Personal details
                                        <a href="javascript:;" class="float-right text-default" data-toggle="collapse"
                                           data-target="#collapse2">
                                            <i class="icon-subtract"></i>
                                        </a>
                                    </legend>

                                    <div class="row collapse show" id="collapse2">
                                        <inputHelper
                                            v-for="(item, index) in list_input_2"
                                            v-bind="item"
                                            v-bind:key="index"
                                            @onChange="setValue"
                                        >{{ item.label }}
                                        </inputHelper>
                                    </div>
                                </fieldset>
                            </div>
                            <div class="col-sm-6">
                                <fieldset class="mb-2">
                                    <legend class="font-weight-semibold">
                                        <i class="icon-reading mr-2"></i> Personal details
                                        <a href="javascript:;" class="float-right text-default" data-toggle="collapse"
                                           data-target="#collapse3">
                                            <i class="icon-subtract"></i>
                                        </a>
                                    </legend>

                                    <div class="row collapse show" id="collapse3">
                                        <inputHelper
                                            v-for="(item, index) in list_input_3"
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
                        <a href="" class="btn btn-light"><i class="icon-exit mr-1"></i> Hủy</a>
                        <button type="submit" class="btn bg-indigo-400"><i class="icon-database-insert mr-1"></i> Cập
                            nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!-- /content area -->
    </div>
</template>

<script>
    import inputHelper from "~/components/helpers/input-helper";
    import form_input from '~/input/form/account/demo/layout-add';

    export default {
        layout : 'account',
        mixins : [form_input],
        components : {
            inputHelper
        },
        data() {
            return {
                module : ACCOUNT,
                // arrayDistrict : JSON.parse(localStorage.getItem('locations')).district,
                // arrayWard : JSON.parse(localStorage.getItem('locations')).ward,
                data_info : '',
                data_post : {},
                formData : '',
            }
        },
        methods: {
            setValue() {
                console.log('hehe')
            }
        },
        mounted() {
            Custom.init()
        }
    }
</script>
