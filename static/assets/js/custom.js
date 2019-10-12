/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */

var Custom = (function() {
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn("Warning - select2.min.js is not loaded.");
            return;
        }

        // Default initialization
        $(".select").select2({
            minimumResultsForSearch: Infinity,
            containerCssClass: "form-control form-control-md"
        });
        $(".select-sm").select2({
            minimumResultsForSearch: Infinity,
            containerCssClass: "form-control form-control-sm",
            dropdownCssClass: "select2-dropdown-sm",
            dropdownAutoWidth: true
        });

        // Select with search
        $(".select-search").select2({
            containerCssClass: "form-control form-control-md"
        });
        $(".select-search-sm").select2({
            containerCssClass: "form-control form-control-sm",
            dropdownCssClass: "select2-dropdown-sm",
            language: {
                noResults: function() {
                    return "Không có dữ liệu";
                }
            },
            escapeMarkup: function(markup) {
                return markup;
            }
        });

        // Multiple selects
        $(".select-multiple").select2({
            minimumResultsForSearch: Infinity,
            containerCssClass: "form-control form-control-md"
        });

        $(".select-multiple-sm").select2({
            minimumResultsForSearch: Infinity,
            containerCssClass: "form-control form-control-sm"
        });

        // Allow clear selection
        $(".select-fixed").select2({
            minimumResultsForSearch: Infinity
        });

        // Fixed width. Single select
        $(".select-fixed-single").select2({
            minimumResultsForSearch: Infinity,
            width: 250
        });

        //
        // Advanced examples
        //

        // Minimum input length
        $(".select-minimum").select2({
            minimumInputLength: 2,
            minimumResultsForSearch: Infinity
        });

        // Tagging support
        $(".select-multiple-tags").select2({
            tags: true
        });

        // Maximum input length
        $(".select-multiple-maximum-length").select2({
            tags: true,
            maximumInputLength: 5
        });

        // Tokenization
        $(".select-multiple-tokenization").select2({
            tags: true,
            tokenSeparators: [",", " "]
        });

        // Maximum selection
        $(".select-multiple-limited").select2({
            maximumSelectionLength: 3
        });

        // Maximum selections allowed
        $(".select-multiple-maximum").select2({
            maximumSelectionSize: 3
        });

        // Initialize with tags
        $(".select-multiple-drag").select2({
            containerCssClass: "sortable-target"
        });

        // Format icon
        function iconFormat(icon) {
            var originalOption = icon.element;
            if (!icon.id) {
                return icon.text;
            }
            var $icon =
                '<i class="icon-' +
                $(icon.element).data("icon") +
                '"></i>' +
                icon.text;

            return $icon;
        }

        // Initialize with options
        $(".select-icons").select2({
            templateResult: iconFormat,
            minimumResultsForSearch: Infinity,
            templateSelection: iconFormat,
            escapeMarkup: function(m) {
                return m;
            }
        });

        //
        // Loading remote data
        //

        // Format displayed data
        function formatRepo(repo) {
            if (repo.loading) return repo.text;

            var markup =
                '<div class="select2-result-repository clearfix">' +
                '<div class="select2-result-repository__avatar"><img src="' +
                repo.owner.avatar_url +
                '" /></div>' +
                '<div class="select2-result-repository__meta">' +
                '<div class="select2-result-repository__title">' +
                repo.full_name +
                "</div>";

            if (repo.description) {
                markup +=
                    '<div class="select2-result-repository__description">' +
                    repo.description +
                    "</div>";
            }

            markup +=
                '<div class="select2-result-repository__statistics">' +
                '<div class="select2-result-repository__forks">' +
                repo.forks_count +
                " Forks</div>" +
                '<div class="select2-result-repository__stargazers">' +
                repo.stargazers_count +
                " Stars</div>" +
                '<div class="select2-result-repository__watchers">' +
                repo.watchers_count +
                " Watchers</div>" +
                "</div>" +
                "</div></div>";

            return markup;
        }

        // Format selection
        function formatRepoSelection(repo) {
            return repo.full_name || repo.text;
        }

        // Initialize
        $(".select-remote-data").select2({
            ajax: {
                url: "https://api.github.com/search/repositories",
                dataType: "json",
                delay: 250,
                data: function(params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function(data, params) {
                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;

                    return {
                        results: data.items,
                        pagination: {
                            more: params.page * 30 < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function(markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatRepo, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        });

        //
        // Programmatic access (single)
        //

        // Set/get value
        $(".select-access-value").select2({
            minimumResultsForSearch: Infinity,
            placeholder: "Select State..."
        });
        $(".access-get").on("click", function() {
            alert("Selected value is: " + $(".select-access-value").val());
        });
        $(".access-set").on("click", function() {
            $(".select-access-value")
                .val("CA")
                .trigger("change");
        });

        // Open/close menu
        $(".select-access-open").select2({
            minimumResultsForSearch: Infinity,
            placeholder: "Select State..."
        });
        $(".access-open").on("click", function() {
            $(".select-access-open").select2("open");
        });
        $(".access-close").on("click", function() {
            $(".select-access-open").select2("close");
        });

        // Enable/disable menu
        $(".select-access-enable").select2({
            minimumResultsForSearch: Infinity,
            placeholder: "Select State..."
        });
        $(".access-disable").on("click", function() {
            $(".select-access-enable").prop("disabled", true);
        });
        $(".access-enable").on("click", function() {
            $(".select-access-enable").prop("disabled", false);
        });

        // Destroy/create menu
        function create_menu() {
            $(".select-access-create").select2({
                minimumResultsForSearch: Infinity,
                placeholder: "Select State..."
            });
        }
        create_menu();
        $(".access-create").on("click", function() {
            return create_menu();
        });
        $(".access-destroy").on("click", function() {
            $(".select-access-create").select2("destroy");
        });

        //
        // Programmatic access (multiple)
        //

        // Reacting to external value changes
        $(".select-access-multiple-value").select2();
        $(".change-to-ca").on("click", function() {
            $(".select-access-multiple-value")
                .val("CA")
                .trigger("change");
        });
        $(".change-to-ak-co").on("click", function() {
            $(".select-access-multiple-value")
                .val(["AK", "CO"])
                .trigger("change");
        });

        // Open/close menu
        $(".select-access-multiple-open").select2({
            minimumResultsForSearch: Infinity
        });
        $(".access-multiple-open").on("click", function() {
            $(".select-access-multiple-open").select2("open");
        });
        $(".access-multiple-close").on("click", function() {
            $(".select-access-multiple-open").select2("close");
        });

        // Enable/disable menu
        $(".select-access-multiple-enable").select2({
            minimumResultsForSearch: Infinity
        });
        $(".access-multiple-disable").on("click", function() {
            $(".select-access-multiple-enable").prop("disabled", true);
        });
        $(".access-multiple-enable").on("click", function() {
            $(".select-access-multiple-enable").prop("disabled", false);
        });

        // Destroy/create menu
        function create_menu_multiple() {
            $(".select-access-multiple-create").select2({
                minimumResultsForSearch: Infinity
            });
        }
        create_menu_multiple();
        $(".access-multiple-create").on("click", function() {
            return create_menu_multiple();
        });
        $(".access-multiple-destroy").on("click", function() {
            $(".select-access-multiple-create").select2("destroy");
        });

        // Clear selection
        $(".select-access-multiple-clear").select2({
            minimumResultsForSearch: Infinity
        });
        $(".access-multiple-clear").on("click", function() {
            $(".select-access-multiple-clear")
                .val(null)
                .trigger("change");
        });
    };

    // Default file input style
    var _componentFootable = function() {
        if (!$().footable) {
            console.warn("Warning - footable.min.js is not loaded.");
            return;
        }

        // Initialize responsive functionality
        $(".table-togglable").footable({
            breakpoints: {
                phone: 768,
                tablet: 1024
            }
        });

        $(".table .checkbox-all").change(function() {
            var set = $(this).attr("data-set");
            var checked = $(this).is(":checked");
            $(".table .checkbox-item").each(function() {
                if (checked) {
                    $(this).prop("checked", true);
                    $(this)
                        .parents("tr")
                        .addClass("table-active");
                } else {
                    $(this).prop("checked", false);
                    $(this)
                        .parents("tr")
                        .removeClass("table-active");
                }
            });

            if (checked) {
                $(".actions-status-change").removeClass("d-none");
            } else {
                $(".actions-status-change").addClass("d-none");
            }

            $.uniform.update();
        });

        $(".table .checkbox-item").change(function() {
            $(this)
                .parents("tr")
                .toggleClass("table-active");

            var total = 0;
            $(".table .checkbox-item").each(function() {
                if ($(this).is(":checked")) {
                    total++;
                }
            });

            if (total > 0) {
                $(".actions-status-change").removeClass("d-none");
                if (total == $(".table .checkbox-item").length) {
                    $(".table .checkbox-all").prop("checked", true);
                } else {
                    $(".table .checkbox-all").prop("checked", false);
                }
            } else {
                $(".actions-status-change").addClass("d-none");
                $(".table .checkbox-all").prop("checked", false);
            }
        });
    };

    // Uniform
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn("Warning - uniform.min.js is not loaded.");
            return;
        }

        $(".form-input-styled").uniform();

        // Styled checkboxes, radios
        $(".form-file-sm").uniform({
            fileClass: "uniform-uploader uniform-uploader-sm",
            fileButtonClass: "action btn btn-sm bg-pink-400"
        });
    };

    // Input formatter
    var _componentInputFormatter = function() {
        // Currency
        if ($(".format-currency").length > 0) {
            autoNumericCurrency = new AutoNumeric.multiple(".format-currency", {
                digitGroupSeparator: ".",
                decimalCharacter: ",",
                decimalPlaces: 0,
                selectOnFocus: false
            });
        }

        // Number Integer
        if ($(".format-integer").length > 0) {
            autoNumericInteger = new AutoNumeric.multiple(".format-integer", {
                digitGroupSeparator: "",
                decimalCharacter: ",",
                decimalPlaces: 0,
                selectOnFocus: false
            });
        }

        // Lowercase
        if ($(".format-lowercase").length > 0) {
            $(".format-lowercase").keyup(function() {
                var value = $(this).val();
                if (value.length > 0) {
                    $(this).val(value.toLowerCase());
                }
            });
        }

        // UpperCase
        if ($(".format-uppercase").length > 0) {
            $(".format-uppercase").keyup(function() {
                var value = $(this).val();
                if (value.length > 0) {
                    $(this).val(value.toUpperCase());
                }
            });
        }

        // Number
        $(".format-number").formatter({
            pattern: "{{9999999999999999}}"
        });

        // Date
        $('[name="format-date"]').formatter({
            pattern: "{{99}}/{{99}}/{{9999}}"
        });

        // Credit card
        $('[name="format-credit-card"]').formatter({
            pattern: "{{9999}} - {{9999}} - {{9999}} - {{9999}}"
        });

        // Phone #
        $(".format-phone-number").formatter({
            pattern: "({{999}}) {{999}} - {{9999}}"
        });

        // Phone ext
        $('[name="format-phone-ext"]').formatter({
            pattern: "({{999}}) {{999}} - {{9999}} / {{a999}}"
        });

        // International phone
        $('[name="format-international-phone"]').formatter({
            pattern: "+3{{9}} {{999}} {{999}} {{999}}"
        });

        // Tax id
        $('[name="format-tax-id"]').formatter({
            pattern: "{{99}} - {{9999999}}"
        });

        // SSN
        $('[name="format-ssn"]').formatter({
            pattern: "{{999}} - {{99}} - {{9999}}"
        });

        // Product key
        $('[name="format-product-key"]').formatter({
            pattern: "{{a*}} - {{999}} - {{a999}}"
        });

        // Order #
        $('[name="format-order-number"]').formatter({
            pattern: "{{aaa}} - {{999}} - {{***}}"
        });

        // ISBN
        $('[name="format-isbn"]').formatter({
            pattern: "{{999}} - {{99}} - {{999}} - {{9999}} - {{9}}"
        });

        // Persistent
        $('[name="format-persistent"]').formatter({
            pattern: "+3 ({{999}}) {{999}} - {{99}} - {{99}}"
        });
    };

    // Autosize
    var _componentAutosize = function() {
        if (typeof autosize == "undefined") {
            console.warn("Warning - autosize.min.js is not loaded.");
            return;
        }

        // Basic example
        autosize($(".elastic"));

        // Manual trigger
        $(".elastic-manual-trigger").on("click", function() {
            var manual = autosize($(".elastic-manual"));
            $(".elastic-manual").val(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nibh, sed faucibus eros. Vivamus tristique fringilla ante, vitae pellentesque quam porta vel. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc vehicula gravida nisl non imperdiet. Mauris felis odio, vehicula et laoreet non, tempor non enim. Cras convallis sapien hendrerit nibh sagittis sollicitudin. Fusce nec ultricies justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac urna in dui consequat cursus vel sit amet mauris. Proin nec bibendum arcu. Aenean sit amet nisi mi. Sed non leo nisl. Mauris leo odio, ultricies interdum ornare ac, posuere eu risus. Suspendisse adipiscing sapien sit amet gravida sollicitudin. Maecenas laoreet velit in dui adipiscing, vel fermentum tellus ullamcorper. Nullam et mi rhoncus, tempus nulla sit amet, varius ipsum."
            );
            autosize.update(manual);
        });

        // Destroy method
        var destroyAutosize = autosize($(".elastic-destroy"));
        $(".elastic-destroy-trigger").on("click", function() {
            autosize.destroy(destroyAutosize);
        });
    };

    // Maxlength
    var _componentMaxlength = function() {
        if (!$().maxlength) {
            console.warn("Warning - maxlength.min.js is not loaded.");
            return;
        }

        // Basic example
        $(".maxlength").maxlength();

        // Always show badge
        $(".maxlength-show").maxlength({
            alwaysShow: true
        });

        // Threshold
        $(".maxlength-threshold").maxlength({
            threshold: 15
        });

        // Custom badge color
        $(".maxlength-custom").maxlength({
            threshold: 10,
            warningClass: "badge badge-primary form-text",
            limitReachedClass: "badge badge-danger form-text"
        });

        // Options
        $(".maxlength-options").maxlength({
            alwaysShow: true,
            threshold: 10,
            warningClass: "text-success form-text",
            limitReachedClass: "text-danger form-text",
            separator: " of ",
            preText: "You have ",
            postText: " chars remaining.",
            validate: true
        });

        // Always show badge
        $(".maxlength-textarea").maxlength({
            alwaysShow: true
        });

        // Badge position
        $(".maxlength-badge-position").maxlength({
            alwaysShow: true,
            placement: "top"
        });
    };

    // Switchery
    var _componentSwitchery = function() {
        if (typeof Switchery == "undefined") {
            console.warn("Warning - switchery.min.js is not loaded.");
            return;
        }

        // Initialize multiple switches
        if ($(".form-check-input-switchery").length > 0) {
            var elems = Array.prototype.slice.call(
                document.querySelectorAll(".form-check-input-switchery")
            );
            elems.forEach(function(html) {
                var switchery = new Switchery(html);
            });
        }

        // Colored switches
        if ($(".form-check-input-switchery-primary").length > 0) {
            var primary = document.querySelector(
                ".form-check-input-switchery-primary"
            );
            var switchery = new Switchery(primary, { color: "#2196F3" });
        }

        if ($(".form-check-input-switchery-danger").length > 0) {
            var danger = document.querySelector(
                ".form-check-input-switchery-danger"
            );
            var switchery = new Switchery(danger, { color: "#EF5350" });
        }

        if ($(".form-check-input-switchery-warning").length > 0) {
            var warning = document.querySelector(
                ".form-check-input-switchery-warning"
            );
            var switchery = new Switchery(warning, { color: "#FF7043" });
        }

        if ($(".form-check-input-switchery-info").length > 0) {
            var info = document.querySelector(
                ".form-check-input-switchery-info"
            );
            var switchery = new Switchery(info, { color: "#00BCD4" });
        }
    };

    // Return objects assigned to module
    return {
        init: function() {
            _componentSelect2();
            _componentFootable();
            _componentUniform();
            _componentInputFormatter();
            _componentAutosize();
            _componentMaxlength();
            _componentSwitchery();
        }
    };
})();

// When content is loaded
document.addEventListener("DOMContentLoaded", function() {
    Custom.init();
});
