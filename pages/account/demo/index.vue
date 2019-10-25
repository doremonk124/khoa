<template>
    <div>
        <!-- Page header -->
        <div class="page-header page-header-light">
            <div class="page-header-content header-elements-md-inline">
                <div class="page-title d-flex">
                    <h4>{{title}}</h4>
                </div>

                <div class="header-elements text-center text-md-left">
                    <div class="btn-group ml-1 d-none actions-status-change">
                        <button @click="deleteItems(controller, module, null, 'check-lists')" type="button" class="btn btn-sm bg-danger-400">Xóa</button>
                    </div>
                    <div class="btn-group ml-1 d-none actions-status-change">
                        <button @click="changeStatus(controller, module, null, 1, 'check-lists')" type="button" class="btn btn-sm bg-success-400">Bật</button>
                    </div>
                    <div class="btn-group ml-1 d-none actions-status-change">
                        <button @click="changeStatus(controller, module, null, 0, 'check-lists')" type="button" class="btn btn-sm bg-grey-300">Tắt</button>
                    </div>
                    <div class="btn-group ml-1 d-none actions-status-change">
                        <button @click="changeStatus(controller, module, null, 0, 'check-lists')" type="button" class="btn btn-sm bg-blue-400">Sắp xếp</button>
                    </div>
                    <div class="btn-group ml-1">
                        <a href="<%= route_page %>/add" class="btn btn-sm bg-indigo-400"><i class="icon-database-add mr-1"></i> Thêm mới</a>
                    </div>
                    <div class="btn-group ml-1">
                        <button type="button" class="btn btn-sm btn-line dropdown-toggle" data-toggle="dropdown">Công cụ</button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="dropdown-header">Actions</div>
                            <a href="#" class="dropdown-item"><i class="icon-file-eye"></i> View reports</a>
                            <a href="#" class="dropdown-item"><i class="icon-file-plus"></i> Edit reports</a>
                            <a href="#" class="dropdown-item"><i class="icon-file-stats"></i> Statistics</a>
                            <div class="dropdown-header">Export</div>
                            <a href="#" class="dropdown-item"><i class="icon-file-pdf"></i> Export to PDF</a>
                            <a href="#" class="dropdown-item"><i class="icon-file-excel"></i> Export to CSV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page header -->

        <!-- Hiển thị thông báo -->
        <div v-if="$store.state.account.demo.alert">
            <div class="alert alert-<%= type %> mb-0 border-radius-0 border-0 alert-dismissible flash">
                <button type="button" class="close" data-dismiss="alert"><span>×</span></button>
                <span>{{ $store.state.account.demo.alert.content }}</span>
            </div>
        </div>

        <!-- Content area -->
        <div class="content" id="app-content">
            <!-- Table with togglable columns -->
            <div class="card">
                <div class="card-filter">
                    <div class="row">
                        <div class="col-12 col-sm-4 col-md-4 col-lg-2">
                            <div class="form-group">
                                <input name="keyword" type="text" class="form-control form-control-sm" placeholder="Tìm kiếm" v-model="filter.keyword">
                            </div>
                        </div>
                        <div class="col-12 col-sm-4 col-md-4 col-lg-2">
                            <div class="form-group">
                                <button type="button" class="btn bg-indigo-400 btn-sm">Tìm</button>
                                <button type="button" class="btn bg-danger-400 btn-sm">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="typeof list_items === 'object'">
                    <div v-if="list_items.length > 0">
                        <table id="table-data" class="table table-togglable table-hover">
                            <thead>
                            <tr>
                                <th class="width-50">
                                    <label class="xform-checker">
                                        <input type="checkbox" class="checkbox-all">
                                        <span class="checkmark"></span>
                                    </label>
                                </th>
                                <th data-toggle="true" data-hide="phone" data-ignore="true" class="width-70">#</th>
                                <th>Tên</th>
                                <th data-hide="phone,tablet">Mô tả</th>
                                <th data-hide="phone,tablet">Hiển thị</th>
                                <th data-hide="phone,tablet">Ngày tạo</th>
                                <th data-hide="phone,tablet">Ngày sửa</th>
                                <th class="text-center width-100" data-hide="phone,tablet">Thứ tự</th>
                                <th class="text-center" style="width: 30px;">Menu</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in list_items" :key="index">
                                <td>
                                    <label class="xform-checker">
                                        <input type="checkbox" class="checkbox-item" name="ids" :value="item.id">
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td>{{index + 1}}</td>
                                <td class="fw-500"><a href="<%= route_page %>/edit/<%= item.id %>">{{item.name}}</a></td>
                                <td>{{item.description}}</td>
                                <td>
                                    <input v-if="item.status === 1" @change="changeStatus(controller, module, [item.id], item.status)" type="checkbox" class="form-check-input-switchery" checked="checked" data-fouc>
                                    <input v-else @change="changeStatus([item.id], item.status)" type="checkbox" class="form-check-input-switchery" checked="checked" data-fouc>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="mr-1"><a href="" class="btn bg-teal-400 rounded-round btn-icon btn-sm"> <span class="letter-icon">N</span> </a></div>
                                        <div>
                                            <a href="" class="text-default font-weight-semibold letter-icon-title">Nguyễn Văn Nam</a>
                                            <div class="text-muted font-size-sm">Philip</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="mr-1"><a href="" class="btn bg-teal-400 rounded-round btn-icon btn-sm"> <span class="letter-icon">N</span> </a></div>
                                        <div>
                                            <a href="" class="text-default font-weight-semibold letter-icon-title">Nguyễn Văn Nam</a>
                                            <div class="text-muted font-size-sm">Philip</div>
                                        </div>
                                    </div>
                                </td>
                                <td><input type="text" name="order[1]" class="form-control form-control-xs text-center format-integer" value="255"></td>
                                <td class="text-center">
                                    <div class="list-icons">
                                        <a href="" class="list-icons-item" title="Xem chi tiết"><i class="icon-new-tab"></i></a>
                                        <a href="javascript:;" @click="deleteItems([item.id], null)" class="list-icons-item" title="Xóa"><i class="icon-trash"></i></a>
                                        <div class="dropdown">
                                            <a href="javascript:;" class="list-icons-item" data-toggle="dropdown">
                                                <i class="icon-menu"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right">
                                                <div class="dropdown-header">Action</div>
                                                <a href="<%= route_page %>/edit/<%= item.id %>" class="dropdown-item"><i class="icon-pencil7"></i> Sửa</a>
                                                <a  @click="deleteItems([item.id], null)" href="#" class="dropdown-item"><i class="icon-trash"></i> Xóa</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination :pagination="pagination" @changePageSize="changePageSize"></Pagination>
            </div>
            <!-- /table with togglable columns -->

        </div>
        <!-- /content area -->
    </div>
</template>

<script>
    import Pagination from "~/components/helpers/Pagination";

    export default {
        components : {
            Pagination
        },
        layout : 'account',
        async asyncData(context) {
            let list_items
            await context.store.dispatch('account/demo/getItems', {data : Object.assign({page : 1, page_size : 15})
            }).then((res) => {
                list_items = res
            })
            return {
                list_items : list_items.data,
                pagination: {
                    number_button: 10,
                    total_pages  : list_items.lastPage,
                    page         : list_items.page,
                    total_items  : list_items.total,
                    page_size    : list_items.perPage
                },
            }
        },
        data() {
            return {
                title : 'Giao diện - Danh sách',
                url : 'account/demo',
                filter : {
                    keyword : ''
                },
                list_items : '',
                pagination: {
                    number_button: 10,
                    total_pages  : 1,
                    page         : 1,
                    total_items  : 1,
                    page_size    : 1
                },
            }
        },
        watch: {
            "$route.query": {
                immediate: true,
                async handler(param) {
                    if (param && param.page) this.pagination.page = parseInt(param.page);
                    if (param && param.page_size) this.pagination.page_size = parseInt(param.page_size);
                    this.listItems(Object.assign(
                        {page : this.pagination.page, page_size : this.pagination.page_size}
                    ));
                }
            }
        },
        methods : {
            async listItems(data) {
                var result = {};
                await this.$store.dispatch(this.url + "/getItems", { data: data }) .then(function(res) {
                    result = res;
                });
                this.pagination.total_items = result.total;
                this.pagination.total_pages = result.lastPage;
                this.pagination.page        = result.page;
                this.pagination.page_size   = result.perPage;
                this.list_items             = result.data;
                setTimeout(function(){ Custom.init() }, 50);
            },

            async changeStatus(list_ids, status, type) {
                loading({ type: "open" });
                if (type === 'check-lists') {
                    let ids = [];
                    $(APP_CONTENT + " .table .checkbox-item:checked").each(function() {
                        ids.push($(this).val());
                    });
                    list_ids = ids
                } else {
                    status = status === 1 ? 0 : 1
                }
                await this.$store.dispatch(this.url + '/changeStatus', { list_ids: list_ids, status: status}).then((res) => {
                    notify({ text: NOTIFY_SUCCESS, type: "success" });
                    if (type === 'check-lists') {
                        location.reload()
                    }
                    loading({ type: "close" });
                })
            },

            async deleteItems(list_ids, type) {
                let swalInit = swal.mixin();
                let thisChild = this.$store
                swalInit({
                    title: "Bạn có chắc chắn muốn xóa?",
                    text: "Sau khi xóa dữ liệu sẽ không thể khôi phục lại",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Xác nhận xóa",
                    cancelButtonText: "Hủy",
                    confirmButtonClass: "btn btn-success",
                    cancelButtonClass: "btn btn-danger",
                    buttonsStyling: false
                }).then(async function(result) {
                    if (result.value) {
                        loading({ type: "open" });
                        if (type === 'check-lists') {
                            let ids = [];
                            $(APP_CONTENT + " .table .checkbox-item:checked").each(function() {
                                ids.push($(this).val());
                            });
                            list_ids = ids
                        }
                        await thisChild.dispatch(this.url + '/deleteItems', { list_ids: list_ids }).then((res) => {
                            notify({ text: NOTIFY_SUCCESS, type: "success" });
                            if (type === 'check-lists') {
                                location.reload()
                            }
                            loading({ type: "close" });
                        })
                    }
                })
            },

            changePageSize(size) {
                let query = Object.assign({}, this.$route.query);
                query.page = 1;
                query.page_size = size;
                this.$router.replace({ query });
            }
        },
    }
</script>
