const testsElement = $("#test"), razdelsElements = $("#razdels");

function setRazdelHandlers() {
    $(".razdel.current").each(function () {
        $(this).on("click", function () {
            $(".selected").length > 0 && $(".selected")[0] != $(this)[0] && $(".selected").removeClass("selected"), $(this).hasClass("selected") || ($(this).addClass("selected"), $("#cards").html('<div class="lds-dual-ring my-2" style="position: fixed"></div>'), $.get(`${baseUrl}/rsur/particips/${testsElement.val()}?razdel=${$(this).attr("razdel")}&passed=${$(this).attr("passed")}`).done(t => {
                $("#cards").html(t), setHandler(), $(this).attr("passed") < 1 && setInputHandlers($(this).attr("razdel"))
            }))
        })
    })
}

function setInputHandlers(t) {
    $(".ballsTeacher").each(function () {
        let t = parseInt($(this).attr("max"));
        $(this).inputFilter(function (e) {
            return /^\d*$/.test(e) && ("" === e || parseInt(e) <= t)
        })
    }), $(".sub_elements").each(function () {
        $(this).on("submit", function (e) {
            e.preventDefault();
            let s = $(this), l = $(this).children(".send-button"), i = $(this).children("#message"),
                a = $(`#${$(this).attr("id")} .element-block`);
            if (0 === parseInt(l.attr("res"))) {
                $(`#${s.attr("id")} #looo`).show(), l.val("Сохраняется...");
                let e = {};
                $.each(a, function () {
                    let t = {};
                    $.each($(this).find(".ballsTeacher"), function () {
                        t = {...t, [$(this).attr("subelement")]: $(this).val()}
                    }), e = {...e, [$(this).attr("element")]: t}
                }), $.ajax({
                    type: "POST",
                    url: `${baseUrl}/rsur/intermediate/save`,
                    data: {particip: $(this).attr("particip"), test: testsElement.val(), razdel: t, marks: e}
                }).done(function () {
                    $(`#${s.attr("id")} #looo`).hide(), i.html("Данные успешно сохранены"), i.slideToggle(500), $.each(a, function () {
                        $.each($(this).find(".ballsTeacher"), function () {
                            $(this).addClass("saved"), $(this).attr("disabled", !0)
                        })
                    }), l.val("Изменить"), l.attr("res", 1), setTimeout(() => i.slideToggle(500), 1500)
                }).fail(function () {
                    $(`#${s.attr("id")} #looo`).hide(), i.html("Что-то пошло не так, если эта ошибка появится снова свяжитесь с нами!"), i.slideToggle(500), setTimeout(() => i.slideToggle(500), 1500)
                })
            } else $.each($(`#${$(this).attr("id")} .element-block`), function () {
                $.each($(this).find(".ballsTeacher"), function () {
                    $(this).attr("disabled", !1), $(this).removeClass("saved")
                })
            }), l.attr("res", 0), l.val("Сохранить")
        })
    })
}


jQuery.fn.inputFilter = function (t) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
        t(this.value) ? (this.oldValue = this.value, this.oldSelectionStart = this.selectionStart, this.oldSelectionEnd = this.selectionEnd) : this.hasOwnProperty("oldValue") ? (this.value = this.oldValue, this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)) : this.value = ""
    })
}, testsElement.on("change", function () {
    testsElement.val() > 0 ? (razdelsElements.html('<div class="lds-dual-ring my-2" style="position: inherit"></div>'), $.get(`${baseUrl}/rsur/${testsElement.val()}/razdels`).done(t => {
        razdelsElements.html(t), setRazdelHandlers()
    }).fail(() => {
        $("#razdels").html("<h3>Ничего не найдено</h3>")
    })) : (razdelsElements.html(""), $("#cards").html(""))
});