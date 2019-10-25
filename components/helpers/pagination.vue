<template>
    <div class="card-footer">
        <div class="pagination_info"><span class="d-none d-sm-inline">{{ item_begin }} - {{ item_end }}</span> Tổng {{ pagination.total_items }}</div>
        <div class="pagination_page">
            <ul class="pagination pagination-sm align-self-center">
                <li class="page-item mr-1 d-none d-sm-inline">
                    <select2 :options="options_arr" v-model="page_size" v-on:change="changePageSize"/>
                </li>
                <li :class="{'disabled':pagination.page === 1}" class="page-item first-item">
                    <nuxt-link :to="{ query: { page: 1, page_size: page_size  }}" class="page-link">← Đầu</nuxt-link>
                </li>
                <li :class="{'disabled':pagination.page === 1}" class="page-item previous-item">
                    <nuxt-link :to="{ query: { page: pagination.page - 1, page_size: page_size  }}" class="page-link">Trước</nuxt-link>
                </li>
                <li v-for="page in pages" :key="page.name" :class="{'active':pagination.page === page.name}" class="page-item number-item">
                    <nuxt-link :to="{ query: { page: page.name, page_size: page_size  }}" class="page-link">{{ page.name }}</nuxt-link>
                </li>
                <li :class="{'disabled':pagination.page === pagination.total_pages}" class="page-item next-item">
                    <nuxt-link :to="{ query: { page: pagination.page + 1, page_size: page_size  }}" class="page-link">Tiếp</nuxt-link>
                </li>
                <li :class="{'disabled':pagination.page === pagination.total_pages}" class="page-item last-item">
                    <nuxt-link :to="{ query: { page: pagination.total_pages, page_size: page_size  }}" class="page-link">Cuối →</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import select2 from 'v-select2-component'

    export default {
        name: 'Pagination',
        components: {select2},
        props: {
            pagination: { // số trang hiển thị ra
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                page_size  : this.pagination.page_size,
                item_begin: 1,
                item_end  : this.pagination.total_items,
                options_arr : [
                    {id: 2, text : 2},
                    {id: 5, text : 5},
                    {id: 15, text : 15},
                    {id: 20, text : 20},
                    {id: 50, text : 50},
                    {id: 100, text : 100},
                ]
            }
        },
        methods:{
            changePageSize(){
                this.$emit('changePageSize', this.page_size);
            }
        },
        computed: {
            startPage() {
                // Khi click vào trang đầu tiên
                if (this.pagination.page === 1 || this.pagination.page < this.pagination.number_button) {
                    return 1;
                }

                // Khi ở trang cuối cùng
                if (this.pagination.page === this.pagination.total_pages) {
                    if ((this.pagination.total_pages - this.pagination.number_button) > 0) {
                        return this.pagination.total_pages - this.pagination.number_button + 1;
                    } else {
                        return 1;
                    }
                }

                if ((this.pagination.total_pages - this.pagination.page) < this.pagination.number_button) {
                    return this.pagination.page - (this.pagination.number_button - (this.pagination.total_pages - this.pagination.page)) + 1;
                }

                // Khi bơ vơ
                return this.pagination.page - 1;
            },
            pages() {
                const range = [];
                for (let i = this.startPage;
                     i <= Math.min(this.startPage + this.pagination.number_button - 1, this.pagination.total_pages);
                     i+= 1 ) {
                    range.push({
                        name: i,
                        isDisabled: i === this.pagination.page
                    });
                }
                return range;
            },
        },
        watch: {
            '$route.query': {
                immediate: true,
                async handler(param) {
                    var current_page = 1;
                    if(param && param.page) current_page = parseInt(param.page);
                    this.item_begin = (current_page-1) * this.pagination.page_size + 1;
                    this.item_end   = current_page * this.pagination.page_size;
                    if(this.item_end > this.pagination.total_items) this.item_end = this.pagination.total_items;
                }
            }
        }
    }
</script>
