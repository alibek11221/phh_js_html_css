function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

class Vacancy {
    constructor(areaName, date, doljnost, typDoljnost, schoolName, staj, zp, dopInfo, id) {
        _defineProperty(this, "areaName", void 0);

        _defineProperty(this, "date", void 0);

        _defineProperty(this, "doljnost", void 0);

        _defineProperty(this, "typeDoljnost", void 0);

        _defineProperty(this, "schoolName", void 0);

        _defineProperty(this, "staj", void 0);

        _defineProperty(this, "zp", void 0);

        _defineProperty(this, "dopInfo", void 0);

        _defineProperty(this, "id", void 0);

        _defineProperty(this, "isShown", false);

        _defineProperty(this, "modalClosing", (modalBlock, modalFonBlock) => {
            modalFonBlock.removeClass("active");
            modalBlock.removeClass("active");
            $('body').css('overflow', 'auto');
            setTimeout(() => {
                modalBlock.html('');
            }, 450);
        });

        _defineProperty(this, "getDopInfo", () => this.dopInfo.length ? `<p class="mb-0"><b>Доп-ая информация</b>: <span>${this.dopInfo}</span>` : '');

        _defineProperty(this, "getDoljnost", () => this.typeDoljnost === '1' ? `Учитель ${this.doljnost}` : `${this.doljnost}`);

        _defineProperty(this, "getZp", () => this.zp === 'no' ? 'Не указана' : this.zp + ' &#8381;');

        _defineProperty(this, "getMarkUp", () => `<div class=" bg-white shadow-1" style="width: 360px; border-radius: 3px;">
                <div class="px-2 py-2"><p class="small font-weight-medium text-uppercase text-muted lts-2px">${this.date}</p>
                    <h1 class="ff-serif font-weight-normal text-black card-heading my-1" style="line-height: 1.25; font-size: 1.75rem;">
                    ${this.getDoljnost()}
                    </h1>
                    <p class="mb-1"><b>Район</b>: <span>${this.areaName.replace(' МР', '')}</span></p>
                    <p class="mb-1"><b>Школа</b>: <span>${this.schoolName}</span></p>
                    <p class="mb-1"><b>Зарпалата</b>: <span>${this.getZp()} </span></p>
                    <p class="mb-1"><b>Стаж работы</b>: <span>${this.staj}</span></p>
                </div>
            <a id="${this.id}" class="text-uppercase d-inline-block mb-1 font-weight-medium lts-2px text-center styled-link exit__btn"
               href="##">Подробнее</a>
            </div>`);

        _defineProperty(this, "modalMarkUp", () => {
            return `
            <a class="close-modal">
                <svg viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                          fill="#000000"></path>
                </svg>
            </a><!-- close modal -->
            <div class="modal-content" style="width: 100%;">
                <div class="my-2 mx-auto p-relative bg-white"
                     style="width: 100%; overflow: hidden; border-radius: 1px;">
                    <div class="px-2 py-2">
                        <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
                            ${this.date}</p>
                        <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1"
                            style="line-height: 1.25;">
                            ${this.getDoljnost()}
                        </h1>
                        <p class="mb-1"><b>Район</b>: <span>${this.areaName}</span></p>
                        <p class="mb-1"><b>Школа</b>: <span>${this.schoolName}</span></p>
                        <p class="mb-1"><b>Зарпалата</b>: <span>${this.getZp()}</span></p>
                        <p class="mb-1"><b>Стаж работы</b>: <span>${this.staj}</span></p>
                        ${this.getDopInfo()}
                        </p>
                    </div>
                    </p>
                    <p class="mb-1" style="margin: 0; margin-top:7%;">
                        <a class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 pb-2 text-center styled-link"
                           href="#0" id="otclick"
                           style="margin:0;">
                            Отозваться на вакансию
                        </a>
                    </p>
                </div>
            </div>
            <div class="modal_form">
                <form method="post">
                    <div class="base-box">
                        <p class="mb-1 mx-auto"><b>Сопроводительное письмо</b>:</p>
                        <textarea class="prof-box"
                                  cols="30"
                                  id="comment"
                                  name="comment"
                                  placeholder="Ваше сопроводительное письмо..."
                                  rows="10"></textarea>
                    </div>
                    <a class="mx-1 text-uppercase d-block font-weight-medium lts-2px text-center styled-link exit__btn"
                           id="send_vacancy_response"
                           value="${this.id}">
                           <i class="icon icon-message"></i>Отправить отзыв
                    </a>
                </form>
            </div>
            `;
        });

        _defineProperty(this, "markUpHandlers", (modalBlock, modalFonBlock) => {
            $('#' + this.id).on('click', e => {
                e.preventDefault();
                $('body').css('overflow', 'hidden');
                modalFonBlock.addClass('active');
                modalBlock.html(this.modalMarkUp()).after(() => {
                    modalBlock.addClass("active");
                    $('.close-modal').on('click', () => this.modalClosing(modalBlock, modalFonBlock));
                    $('#otclick').on('click', e => {
                        e.preventDefault();
                        $('.modal_form').slideToggle(600).after(() => {
                            $('#send_vacancy_response').on('click', e => {
                                $('.close-modal').off('click');
                                e.preventDefault();
                                $.post({
                                    url: `${baseUrl}/vacancy_responses`,
                                    data: {
                                        'vid': this.id,
                                        'comment': $('#comment').val()
                                    }
                                }).fail((jqXHR, textStatus) => {
                                    $('.modal_form').hide().after(() => {
                                        $('.modal-content').html(this.badModal(`Что-то пошло не так`)).after(() => {
                                            this.modalCenter();
                                        });
                                    });

                                    if (jqXHR.status === 401) {
                                        setTimeout(function () {
                                            window.location.href = "http://pedagogchr.ru/?openlogin=1";
                                        }, 2000);
                                    } else {
                                        setTimeout(() => this.modalClosing(modalBlock, modalFonBlock), 1300);
                                    }
                                }).done((data, textStatus, jqXHR) => {
                                    if (jqXHR.status === 201) {
                                        $('.modal_form').hide().after(() => {
                                            $('.modal-content').html(this.okModal('Ваш отзыв на вакансию успешно отправлен')).after(() => {
                                                this.modalCenter();
                                            });
                                            setTimeout(() => this.modalClosing(modalBlock, modalFonBlock), 1300);
                                        });
                                    } else {
                                        $('.modal_form').hide().after(() => {
                                            $('.modal-content').html(this.badModal('Что-то пошло не так')).after(() => {
                                                this.modalCenter();
                                            });
                                        });
                                        setTimeout(() => this.modalClosing(modalBlock, modalFonBlock), 1300);
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });

        this.id = id;
        this.areaName = areaName.replace(' МР', '');
        this.date = date;
        this.doljnost = doljnost;
        this.typeDoljnost = typDoljnost;
        this.schoolName = schoolName;
        this.staj = staj;
        this.zp = zp;
        this.dopInfo = dopInfo;
        Vacancy.index++;
    }

    modalCenter() {
        let blockCenter = [$('.modal').height() / 2, $('.modal').width() / 2];
        let contCenter = [$('#circle').height() / 2, $('#circle').width() / 2];
        let top = blockCenter[0] - contCenter[0];
        let left = blockCenter[1] - contCenter[1];
        $('#circle').css('top', top).css('left', left).css('visibility', 'visible');
    }

    okModal(text) {
        return `<div id="circle" style="position: fixed; visibility: hidden">
                    <svg class="checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                        <circle class="checkmark__circle" cx="26" cy="26" fill="none" r="25"/>
                        <path class="checkmark__check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"/>
                    </svg>
                    <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px" style="color: #7ac142;">${text}</p>
	            </div>`;
    }

    badModal(info) {
        return `<div id="circle" style="position: fixed; visibility: hidden">
                    <svg class="checkmark__x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle class="checkmark__circle__x" cx="26" cy="26" r="25" fill="none" />
                      <path class="checkmark__check__x" fill="none" d="M16 16 36 36 M36 16 16 36" />
                    </svg>
                    <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px" style="color: #d70707;">${info}</p>
                </div>`;
    }

    renderVacancyTeacherSide(block, baseId, modalBlock, modalFonBlock) {
        block.append(this.getMarkUp());
        block.hide().appendTo(baseId).slideDown(500);
        this.markUpHandlers(modalBlock, modalFonBlock);
        this.isShown = true;
    }

}

class VacancyController {
    constructor() {
        _defineProperty(this, "vacancyArray", []);

        _defineProperty(this, "counter", 0);

        _defineProperty(this, "baseId", `#page_${this.counter}`);

        _defineProperty(this, "modalBolck", void 0);

        _defineProperty(this, "modalFon", void 0);
    }

    set vacancyArray(value) {
        this.vacancyArray = value;
    }

    renderVacancies() {
        if ('#' + $('#vaca_cards').children().attr('id') != this.baseId) {
            $('#vaca_cards').append(`<div class="base-cards my-2 mx-1"  id="page_${this.counter}"></div>`);
        }

        $('#page_' + this.counter).html('');
        this.vacancyArray[this.counter].map(value => {
            let block = $("<div class='my-2 p-relative mx-auto'></div>");
            value.renderVacancyTeacherSide(block, this.baseId, this.modalBolck, this.modalFon);
        });
        this.vacancyArray[this.counter] = [];
    }

}

const areaElement = $('#base_areas');
const schoolElement = $('#base_schools');
const posElement = $('#base_dolj');
const payRangeSlider = $('#pay-range');
const modal = $('#real_vakansiya_modal');
const fon = $('#real_vakansiya_fon');
const more = $('#more');
const vacancyController = new VacancyController();
let areaId = 0;
let schoolId = 0;
let posId = 0;
let paymentValue = {
    min: 0,
    max: 0
};
let stajid = 0;
let disable = false;
const localParams = typeof localStorage.params !== 'undefined' ? JSON.parse(localStorage.params) : {};
let params = !$.isEmptyObject(localParams) ? localParams : {
    dis: disable,
    ac: areaId,
    schid: schoolId,
    pid: posId,
    pmin: paymentValue.min,
    pmax: paymentValue.max,
    staid: stajid,
    page: vacancyController.counter
};
const CancelToken = axios.CancelToken;
let cancel;

async function sortVacancies() {
    cancel && cancel();

    if (areaId !== 0) {
        params = _objectSpread(_objectSpread({}, params), {}, {
            ac: areaId
        });
    }

    if (schoolId !== 0) {
        params = _objectSpread(_objectSpread({}, params), {}, {
            schid: schoolId
        });
    }

    if (posId !== 0) {
        params = _objectSpread(_objectSpread({}, params), {}, {
            pid: posId
        });
    }

    params = _objectSpread(_objectSpread({}, params), {}, {
        pmin: paymentValue.min,
        pmax: paymentValue.max
    });

    if (stajid !== 0) {
        params = _objectSpread(_objectSpread({}, params), {}, {
            staid: stajid
        });
    }

    if (vacancyController.counter !== params.page) {
        params = _objectSpread(_objectSpread({}, params), {}, {
            page: vacancyController.counter
        });
    }

    localStorage.params = JSON.stringify(params);
    const {
        data
    } = await axios.get(`${baseUrl}/vacancies/sort`, {
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
        }),
        params
    });
    return data;
}

vacancyController.modalBolck = modal;
vacancyController.modalFon = fon;
let loading = false;

async function renderVacancies() {
    loading = true;

    if (loading && $('#page_' + vacancyController.counter).html() !== '<div class="lds-dual-ring"></div>') {
        $('#page_' + vacancyController.counter).html('<div class="lds-dual-ring"></div>');
    }

    vacancyController.vacancyArray[vacancyController.counter] = [];
    sortVacancies().then(res => {
        loading = false;

        if (res.length >= 9) {
            more.fadeIn(500);
        }

        if (res.length < 9) {
            more.fadeOut(500);
        }

        if (res.length) {
            res.map(value => {
                vacancyController.vacancyArray[vacancyController.counter].push(new Vacancy(value.areaname, value.date_insert, value.doljnost, value.doljtype, value.schoolname, value.staj, value.zp, value.dop_info, value.id));
            });
            vacancyController.renderVacancies();
        }

        if (!res.length && vacancyController.counter === 0) {
            $('#vaca_cards').html('<div class="base-cards my-2 mx-1" id="page_0"><h1 class="text-center" style="flex:1 1 100%">Вакансий не найдено</h1></div>');
        }
    }).catch(e => {
    });
}

function setSchools(areaCode = 0) {
    schoolElement.html('<option selected value="0">Выберите школу</option>');

    if (areaCode == 0) {
        getSchools().then(data => {
            data.map(x => {
                schoolElement.append(`<option value="${x.id}">${x.name.trim()}</option>`);
            });
            schoolElement.val(params.schid);
            schoolElement.trigger('refresh');
        });
    } else {
        getSchoolsByArea(areaCode).then(data => {
            data.map(x => {
                schoolElement.append(`<option value="${x.id}">${x.name.trim()}</option>`);
            });
            schoolElement.val(params.schid);
            schoolElement.trigger('refresh');
        });
    }
}

getDoljnosti().then(res => {
    res.map(x => {
        posElement.append(x.typedoljnostid !== '1' ? `<option value="${x.id}">${x.name}</option>` : `<option value="${x.id}">Учитель ${x.name}</option>`);
    });
    posElement.val(params.pid);
    posElement.trigger('refresh');
});
getAreas().then(res => {
    res.map(x => {
        areaElement.append(`<option value="${x.Code}">${x.name.replace(' МР', '')}</option>`);
    });

    if (params.ac !== '0') {
        areaElement.val(params.ac);
        setSchools(parseInt(params.ac));
    }

    areaElement.trigger('refresh');
});
more.on('click', async () => {
    vacancyController.counter++;
    await renderVacancies();
});
areaElement.on('change', async event => {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];
    areaId = event.target.value;
    schoolId = "0";

    if (areaId !== '0000') {
        setSchools(areaId);
    } else {
        setSchools();
    }

    await renderVacancies();
});
payRangeSlider.on('change', async event => {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];
    let [min, max] = event.target.value.split(';');
    paymentValue.min = min;
    paymentValue.max = max;
    await renderVacancies();
});
payRangeSlider.ionRangeSlider({
    type: "double",
    skin: "round",
    min: 3000,
    max: 100000,
    step: 100,
    from: 5000,
    to: 25000,
    drag_interval: true,
    postfix: " &#8381;"
});
schoolElement.on('change', async event => {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];
    schoolId = event.target.value;
    await renderVacancies();
});
posElement.on('change', async event => {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];
    posId = event.target.value;
    await renderVacancies();
});
const payinstance = payRangeSlider.data("ionRangeSlider");
$(':radio[name="exp"]').on('change', async event => {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];
    stajid = event.target.value;
    await renderVacancies();
});
$('#paymentCheck').on('change', async function (e) {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];
    const disable = e.target.checked;
    params.dis = disable;

    if (disable) {
        paymentValue.max = 0;
        paymentValue.min = 0;
        await renderVacancies();
    } else {
        payRangeSlider.trigger('change');
    }

    payinstance.update({
        disable: disable
    });
});
$(document).ready(() => {
    vacancyController.counter = 0;
    vacancyController.vacancyArray = [];

    if (!$.isEmptyObject(localParams)) {
        if (params.pmin > 0 && params.pmax > 0) {
            payinstance.update({
                from: params.pmin,
                to: params.pmax
            });
        } else {
            $('#paymentCheck').attr('checked', params.dis).trigger('change');
        }

        $(`#staj_${params.staid}`).attr('checked', true);
    }

    if (params.ac === '0') {
        setSchools();
    }
});