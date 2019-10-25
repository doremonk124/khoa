// Thay đổi trạng thái
async function changeStatus(controller, module, list_ids, status) {
    // let ajax_url = options.url;
    // let page_reload = false;
    // let data = {};
    // if (options.id) {
    //     data["id"] = options.id;
    // }
    // if (options.type == "checklist") {
    //     let ids = [];
    //     $(APP_CONTENT + " .table .checkbox-item:checked").each(function() {
    //         ids.push($(this).val());
    //     });
    //     data["ids"] = ids;
    //     data["status"] = parseInt(options.status);
    //     page_reload = true;
    // }

    loading({ type: "open" });
    await this.$store.dispatch(module + '/' + controller + '/changeStatus', { list_ids: list_ids, status: status}).then((res) => {
        notify({ text: NOTIFY_SUCCESS, type: "success" });
    })
    loading({ type: "close" });

    // $.ajax({
    //     url: ajax_url,
    //     type: "POST",
    //     data: data,
    //     beforeSend: function() {
    //         loading({ type: "open" });
    //     },
    //     success: function(result) {
    //         if (page_reload === true) {
    //             location.reload();
    //         } else {
    //             loading({ type: "close" });
    //         }
    //     },
    //     complete: function() {
    //         if (page_reload === false) {
    //             notify({ text: NOTIFY_SUCCESS, type: "success" });
    //         }
    //     }
    // });
}

// Xóa dữ liệu
function deleteItem(options) {
    let swalInit = swal.mixin();

    let ajax_url = options.url;
    let page_reload = false;
    let data = {};
    if (options.id) {
        data["id"] = options.id;
        page_reload = true;
    }
    if (options.type == "checklist") {
        let ids = [];
        $(APP_CONTENT + " .table .checkbox-item:checked").each(function() {
            ids.push($(this).val());
        });
        data["ids"] = ids;
        page_reload = true;
    }

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
    }).then(function(result) {
        if (result.value) {
            $.ajax({
                url: ajax_url,
                type: "POST",
                data: data,
                beforeSend: function() {
                    loading({ type: "open" });
                },
                success: function(result) {
                    if (page_reload === true) {
                        location.reload();
                    } else {
                        loading({ type: "close" });
                    }
                },
                complete: function() {
                    if (page_reload === false) {
                        notify({ text: NOTIFY_SUCCESS, type: "success" });
                    }
                }
            });
        }
    });
}

// Pupop thông báo
function alert(options) {
    // Định nghĩa giá trị mặng định
    var swalInit = swal.mixin({
        buttonsStyling: false,
        confirmButtonClass: "btn btn-primary",
        cancelButtonClass: "btn btn-light"
    });

    let params = {
        text: options.text,
        type: options.type ? options.type : "success"
    };
    if (options.title) {
        params["title"] = options.title;
    }
    swalInit(params);
}

// Thông báo
function notify(options) {
    // Override Noty defaults
    Noty.overrideDefaults({
        theme: "limitless",
        layout: "topRight",
        type: "alert",
        timeout: 2500
    });

    let params = {
        text: options.text,
        type: options.type
    };
    let notice = new Noty(params).show();
}

// Loading
function loading(options) {
    let container = options.container ? options.container : "body";
    let type = options.type ? options.type : "open";

    switch (type) {
        case "open":
            let text = options.text ? options.text : "Đang xử lý";
            let icon = options.icon ? options.icon : "icon-spinner4 spinner";
            let body = `<div class="loading_body"><i class="${icon} mr-2"></i>${text}</div>`;
            let modal = `<div class="loading_modal"></div>`;
            $(container).css({ position: "relative" });
            $(container).append(modal);
            $(container).append(body);
            break;

        default:
            $(container).removeAttr("style");
            $(".loading_modal").remove();
            $(".loading_body").remove();
            break;
    }
}
