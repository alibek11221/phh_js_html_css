function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
    } else {
        obj[key] = value;
    }
    return obj;
}

let newVcButton = $('#new_vacancy');
let newVcModal = $('#new_vacancy_modal');
let newVcModalFon = $('#new_vacancy_fon');

class Responder {
    constructor(participId, areaName, telefon, birthday, doljnost, dopinfo, email, surname, name, secondName, staj, quality, comment, response_day, id, isAccepted) {
        _defineProperty(this, "areaName", void 0);

        _defineProperty(this, "birthday", void 0);

        _defineProperty(this, "doljnost", void 0);

        _defineProperty(this, "dopinfo", void 0);

        _defineProperty(this, "email", void 0);

        _defineProperty(this, "surname", void 0);

        _defineProperty(this, "name", void 0);

        _defineProperty(this, "secondName", void 0);

        _defineProperty(this, "staj", void 0);

        _defineProperty(this, "quality", void 0);

        _defineProperty(this, "comment", void 0);

        _defineProperty(this, "responseDay", void 0);

        _defineProperty(this, "id", void 0);

        _defineProperty(this, "participId", void 0);

        _defineProperty(this, "getDopInfo", () => this.comment.length ? `<p class="mb-1"><b>Сопроводительное письмо</b>: <span>${this.comment}</span>` : '');

        _defineProperty(this, "getStaj", () => this.staj !== null ? `<p class="mb-1"><b>Стаж работы</b>: <span>${this.staj}</span>` : '');

        _defineProperty(this, "getQualityName", () => this.quality !== null ? `<p class="mb-1"><b>Квалификация</b>: <span>${this.quality}</span>` : '');

        _defineProperty(this, "getPhone", () => this.telefon !== '' ? `<p class="mb-1"><b>Телефон</b>: <span>${this.telefon}</span>` : '');

        _defineProperty(this, "getEmail", () => this.email !== '' ? `<p class="mb-1"><b>e-mail</b>: <span>${this.email}</span>` : '');

        _defineProperty(this, "getAccept", () => this.isAccepted === 0 ? ` <a class="text-uppercase d-block font-weight-medium lts-2px text-center styled-link accept__btn"
                                id="accept">
                                Принять
                            </a>` : `<a href="${baseUrl}/vacancy_responses/${this.id}/dialog" class="text-uppercase font-weight-medium lts-2px text-center styled-link accept__btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></a>`);

        _defineProperty(this, "modalMarkUp", () => {
            return `<a class="close-modal" id="close_${this.id}">
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
                                ${this.responseDay}</p>
                            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1"
                                style="line-height: 1.25;">
                                ${this.surname} ${this.name} ${this.secondName}
                            </h1>
                            <p class="mb-1"><b>Дата рождения</b>: <span>${this.birthday}</span></p>
                            ${this.getStaj()}
                            ${this.getQualityName()}
                            <p class="mb-1"><b>Район проживания</b>: <span>${this.areaName}</span></p>
                            ${this.getDopInfo()}
                            ${this.getPhone()}
                            ${this.getEmail()}
                            </p>
                        </div>
                        </p>
                        <div style="display: flex;justify-content: space-evenly">
                            ${this.getAccept()}
                            <a class="text-uppercase d-block font-weight-medium lts-2px text-center styled-link exit__btn"
                               href="#" id="exit">
                                Закрыть
                            </a>
                             <a class="text-uppercase btn--light  d-block font-weight-medium lts-2px styled-link cancel__btn"
                               href="#" id="delete">
                                Отклонить
                            </a>
                        </div>
                    </div>
                </div>
                `;
        });

        _defineProperty(this, "setModalHandlers", (modalClosing, deleting, accepting) => {
            $(`#close_${this.id}`).on('click', () => modalClosing());
            $('#exit').on('click', () => modalClosing());
            $('#delete').on('click', () => deleting(this.id));
            $('#accept').on('click', () => accepting(this.id));
        });

        this.participId = participId;
        this.id = id;
        this.telefon = telefon;
        this.areaName = areaName;
        this.birthday = birthday;
        this.doljnost = doljnost;
        this.dopinfo = dopinfo;
        this.email = email;
        this.surname = surname;
        this.name = name;
        this.secondName = secondName;
        this.staj = staj;
        this.quality = quality;
        this.comment = comment;
        this.responseDay = response_day;
        this.isAccepted = isAccepted;
        console.log(this.isAccepted);
    }

}

class DirectorVacancy {
    constructor(date, doljnost, _dopInfo, typeDoljnost, _id, idDirector, name, schoolid, stajId, stajValue, zp, resps) {
        _defineProperty(this, "date", void 0);

        _defineProperty(this, "doljnost", void 0);

        _defineProperty(this, "dopInfo", void 0);

        _defineProperty(this, "typeDoljnost", void 0);

        _defineProperty(this, "id", void 0);

        _defineProperty(this, "idDirector", void 0);

        _defineProperty(this, "name", void 0);

        _defineProperty(this, "schoolid", void 0);

        _defineProperty(this, "stajId", void 0);

        _defineProperty(this, "stajValue", void 0);

        _defineProperty(this, "zp", void 0);

        _defineProperty(this, "resps", void 0);

        _defineProperty(this, "vacancyModal", $('#new_vacancy_modal'));

        _defineProperty(this, "vacancyModalFon", $('#new_vacancy_fon'));

        _defineProperty(this, "getDoljnost", () => this.typeDoljnost === '1' ? `Учитель ${this.name}` : `${this.name}`);

        _defineProperty(this, "getCardMarkUp", () => {
            return `
					<div class="accordion-name" id="name_${this.id}" style=" display: flex;align-items: center;padding: 5px 5px 5px 50px;justify-content: space-between;">
						<p class="small font-weight-normal text-uppercase lts-2px" id="p_${this.id}"
						   style="cursor: pointer;">${this.date} ${this.getDoljnost()} откликнулись: <b id="resps_${this.id}">${this.resps.length}</b>
						</p>
						<div>
							<a class="text-uppercase btn--light  d-inline-block font-weight-medium lts-2px styled-link exit__btn"
							       id="edit_${this.id}"><i aria-hidden="true" class="fa fa-pencil"></i></a>
							<a class="text-uppercase btn--light  d-inline-block font-weight-medium lts-2px styled-link cancel__btn"
							       id="delete_${this.id}"><i aria-hidden="true" class="fa fa-trash"></i></a>						
						</div>
					</div>
					<div class="accordion-content mx-2 pb-1">
						<ul>${this.resps.map(resp => {
                console.log(resp);
                return `
                                    <li id="li_${resp.response_id}"><p class="mb-0 small font-weight-normal text-uppercase mb-1 text-black lts-2px" 
                                                        style="${resp.is_accepted > 0 ? 'color:green;' : ''}">
										<b>${resp.response_day}</b> Отклик от ${resp.surname} ${resp.name} ${resp.secondname}  
										<a class="styled-link" id="resp_${resp.response_id}" style="cursor: pointer;">Подробнее...</a>
									</p></li>`;
            }).join('')}
						</ul>
					</div>
				`;
        });

        _defineProperty(this, "modalClosing", () => {
            this.vacancyModalFon.removeClass("active");
            this.vacancyModal.removeClass("active");
            $('body').css('overflow', 'auto');
            setTimeout(() => this.vacancyModal.html(''), 500);
        });

        _defineProperty(this, "getModalMarkUp", () => {
            return `<a class="close-modal" id="close_modal_${this.id}">
					<svg viewBox="0 0 20 20">
						<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
						      fill="#000000"></path>
					</svg>
				</a><!-- close modal -->
				<div class="modal-content" style="width:100%;">
					<div class="my-2 p-relative bg-white px-2 py-2"
					     style="width: 100%; overflow: hidden; border-radius: 1px;">
						<p class="mb-0 small font-weight-medium text-uppercase mb-1 text-black lts-2px">
							${this.date}
						</p>
						<h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1"
						    style="line-height: 1.25;">
							<select id="base_dolj">
								<option id="dolj0" value="0">Выберите должность</option>
							</select>
							<label class="checkbox my-1">
								<input checked id="salary_check_${this.id}" type="checkbox"><span></span>Указать
								размер заработной платы
							</label>
							<input id="salary_${this.id}" placeholder="Размер зарабатной платы в рублях" type="text">
						</h1>
						<select id="staj">
							<option value="0">Выберите стаж работы</option>
							<option value="1">Начало карьеры, выпускник</option>
							<option value="2">1-3 лет</option>
							<option value="3">3-5 лет</option>
							<option value="4">Свыше 5 лет</option>
						</select>
						<p class="mb-1"><b>Дополнительная информация</b>:</p>
						<textarea id="dopinfo"
						          maxlength="1050"
						          class="mb-1"
						          placeholder="Укажите дополнительную информацию"></textarea>
						</p>
						<p class="small font-weight-medium text-uppercase lts-2px red my-1"
						   id="error_no_dolj"
						   style="display:none;">
							Выберите должность
						</p>
						<p class="small font-weight-medium text-uppercase lts-2px red my-1"
						   id="error_no_staj"
						   style="display:none;">
							Выберите необходимый стаж
						</p>
						<a class="text-uppercase d-block font-weight-medium lts-2px text-center styled-link exit__btn"
						   id="update_${this.id}">
						   Сохранить изменения
						</a>
					</div>
				</div>`;
        });

        _defineProperty(this, "setModalValues", () => {
            $('#staj').val(this.stajId).styler({
                onFormStyled: function () {
                    $('.jq-selectbox__dropdown ul').scrollbar();
                }
            });
            $('#dopinfo').val(this.dopInfo);
            getDoljnosti().then(res => {
                res.map(function (value) {
                    $('#base_dolj').append(value.typedoljnostid !== '1' ? `<option id="dolj${value.id}" value="${value.id}">${value.name}</option>` : `<option id="dolj${value.id}" value="${value.id}">Учитель ${value.name}</option>`);
                });
                $('#base_dolj').val(this.doljnost).styler({
                    onFormStyled: function () {
                        $('.jq-selectbox__dropdown ul').scrollbar();
                    }
                });
            });
            $(`#salary_${this.id}`).ionRangeSlider({
                type: "single",
                skin: "round",
                prettify_enabled: true,
                step: 100,
                min: 0,
                max: 100000,
                from: this.zp,
                postfix: " &#8381;"
            });
            const sliderElemInstance = $(`#salary_${this.id}`).data('ionRangeSlider');

            if (this.zp === 'no') {
                $(`#salary_check_${this.id}`).prop('checked', false);
                sliderElemInstance.update({
                    from: 0,
                    disable: true
                });
            }
        });

        _defineProperty(this, "updateVacancy", res => {
            this.date = res.date_insert;
            this.doljnost = res.doljnost_id;
            this.dopInfo = res.dop_info;
            this.typeDoljnost = res.dtype;
            this.name = res.name;
            this.stajId = res.staj_id;
            this.stajValue = res.value;
            this.zp = res.zp;
            this.resps = res.resp;
        });

        _defineProperty(this, "setModalHandlers", () => {
            const salaryElem = $(`#salary_${this.id}`);
            let salary = salaryElem.prop("value");
            const sliderElemInstance = salaryElem.data('ionRangeSlider');
            salaryElem.on('change', e => {
                if (e.target.value == 0) {
                    salary = null;
                } else {
                    salary = e.target.value;
                }
            });
            $(`#salary_check_${this.id}`).on('change', e => {
                const disable = !e.target.checked;
                sliderElemInstance.update({
                    from: 0,
                    disable: disable
                });
                salary = null;
            });
            $(`#close_modal_${this.id}`).on('click', () => this.modalClosing());
            $(`#update_${this.id}`).on('click', e => {
                e.preventDefault();
                const staj = $('#staj').val();
                const dopInfo = $('#dopinfo').val();
                const pid = $('#base_dolj').val();

                if (!this.resps.length) {
                    if (this.check(pid, staj)) {
                        axios.patch(`${baseUrl}/vacancies/${this.id}`, {
                            pid: pid === this.doljnost ? null : pid,
                            staid: staj,
                            dopinfo: dopInfo,
                            payment: salary
                        }).catch(error => {
                            $('.modal-content').html(this.badModal(`Ошибка ${error.response.status} ${error.response.data.reason}`)).after(() => this.modalCenter());
                            setTimeout(() => this.modalClosing(), 1300);
                        }).then(({
                                     data
                                 }) => {
                            console.log(data);
                            this.updateVacancy(data);
                            $('.modal-content').html(this.okModal("Ваши изменения успешно сохранены")).after(() => this.modalCenter());
                            setTimeout(() => this.modalClosing(), 1300);
                            $(`#p_${this.id}`).html(`${this.date} ${this.getDoljnost()} откликнулись: <b>${this.resps.length}</b>`);
                        });
                    }
                } else {
                    $('.modal-content').html(this.badModal(`На вакансию уже откликнулись данные нельзя менять`)).after(() => this.modalCenter());
                    setTimeout(() => this.modalClosing(), 1300);
                }
            });
        });

        _defineProperty(this, "setHandlers", () => {
            $(`#name_${this.id} p`).on('click', function (e) {
                e.preventDefault();
                $(this).closest('.accordion').toggleClass('active');
                $(this).closest('.accordion').find('.accordion-content').stop().slideToggle(500);
            });
            $(`#delete_${this.id}`).on('click', () => {
                axios.delete(`${baseUrl}/vacancies/${this.id}`).then(() => {
                    $(`#div_${this.id}`).slideUp(700);
                });
            });
            $(`#edit_${this.id}`).on('click', e => {
                e.preventDefault();
                this.vacancyModal.html(this.getModalMarkUp()).after(() => {
                    this.setModalValues();
                    this.setModalHandlers();
                });
                this.vacancyModalFon.addClass('active');
                this.vacancyModal.addClass('active');
                $('body').css('overflow', 'hidden');
            });
            this.resps.map(resp => {
                DirectorVacancy.respslength += 1;
                $(`#resp_${resp.response_id}`).on('click', e => {
                    e.preventDefault();
                    const me = this.resps.filter(x => x.response_id == resp.response_id)[0];
                    console.log(me);
                    const responder = new Responder(me.prticip_id, me.area_name, me.telefon, me.birthday, me.doljnost, me.dopinfo, me.email, me.surname, me.name, me.secondname, me.particip_staj, me.quality_name, me.response_comment, me.response_day, me.response_id, me.is_accepted);
                    this.vacancyModal.html(responder.modalMarkUp()).after(() => {
                        responder.setModalHandlers(this.modalClosing, this.deleteRespHandler, this.acceptRespHandler);
                    });
                    this.vacancyModalFon.addClass('active');
                    this.vacancyModal.addClass('active');
                    $('body').css('overflow', 'hidden');
                });
            });
        });

        _defineProperty(this, "acceptRespHandler", responseid => {
            $.ajax({
                method: "GET",
                url: `${baseUrl}/vacancy_responses/${responseid}/accept`
            }).done(() => {
                window.location.href = `${baseUrl}/vacancy_responses/${responseid}/dialog`;
            });
        });

        _defineProperty(this, "deleteRespHandler", id => {
            axios.delete(`${baseUrl}/vacancy_responses/${id}`).then(() => {
                $(`#li_${id}`).fadeOut(500);
                this.resps = this.resps.filter(x => x.response_id != id);
                $(`#resps_${this.id}`).text(this.resps.length);
                DirectorVacancy.respslength -= 1;
                $('#vacancy_count').text(getRightSting(DirectorVacancy.respslength));
                this.vacancyModalFon.removeClass("active");
                this.vacancyModal.removeClass("active");
                $('body').css('overflow', 'auto');
                setTimeout(() => this.vacancyModal.html(''), 500);
            });
        });

        _defineProperty(this, "renderDirectorSide", blockId => {
            let b = $(`<div class="accordion name" id="div_${this.id}" style="text-align: left; margin-top: 0.3rem"></div>`);
            b.append(this.getCardMarkUp());
            b.hide().appendTo(blockId).fadeIn(1500);
            this.setHandlers();
        });

        this.date = date;
        this.doljnost = doljnost;
        this.dopInfo = _dopInfo;
        this.typeDoljnost = typeDoljnost;
        this.id = _id;
        this.idDirector = idDirector;
        this.name = name;
        this.schoolid = schoolid;
        this.stajId = stajId;
        this.stajValue = stajValue;
        this.zp = zp;
        this.resps = resps;
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

    modalCenter() {
        let blockCenter = [this.vacancyModal.height() / 2, this.vacancyModal.width() / 2];
        let contCenter = [$('#circle').height() / 2, $('#circle').width() / 2];
        let top = blockCenter[0] - contCenter[0];
        let left = blockCenter[1] - contCenter[1];
        $('#circle').css('top', top).css('left', left).css('visibility', 'visible');
    }

    check(pid, staid) {
        if (pid === '0') {
            $('#error_no_dolj').slideToggle();
            setTimeout(function () {
                $('#error_no_dolj').slideToggle();
            }, 1500);
            return false;
        }

        if (staid === '0') {
            $('#error_no_staj').slideToggle();
            setTimeout(function () {
                $('#error_no_staj').slideToggle();
            }, 1500);
            return false;
        }

        return true;
    }

}

function modalCenter() {
    let blockCenter = [$('.modal').height() / 2, $('.modal').width() / 2];
    let contCenter = [$('#circle').height() / 2, $('#circle').width() / 2];
    let top = blockCenter[0] - contCenter[0];
    let left = blockCenter[1] - contCenter[1];
    $('#circle').css('top', top).css('left', left).css('visibility', 'visible');
}

newVcButton.on('click', function (e) {
    e.preventDefault();
    newVcModal.html(newVacaModal()).after(function () {
        setModalValues();
        setModalHandlers();
    });
    newVcModalFon.addClass('active');
    newVcModal.addClass('active');
    $('body').css('overflow', 'hidden');
});

function setModalValues() {
    $('#staj').styler({
        onFormStyled: function () {
            $('.jq-selectbox__dropdown ul').scrollbar();
        }
    });
    getDoljnosti().then(res => {
        res.map(function (value) {
            $('#base_dolj').append(value.typedoljnostid !== '1' ? `<option id="dolj${value.id}" value="${value.id}">${value.name}</option>` : `<option id="dolj${value.id}" value="${value.id}">Учитель ${value.name}</option>`);
        });
        $('#base_dolj').styler({
            onFormStyled: function () {
                $('.jq-selectbox__dropdown ul').scrollbar();
            }
        });
    });
    $(`#salary`).ionRangeSlider({
        type: "single",
        skin: "round",
        prettify_enabled: true,
        step: 100,
        min: 0,
        max: 100000,
        postfix: " &#8381;"
    });
    $(`#salary_check`).prop('checked', true);
}

function modalClosing() {
    newVcModalFon.removeClass("active");
    newVcModal.removeClass("active");
    $('body').css('overflow', 'auto');
    setTimeout(() => newVcModal.html(''), 500);
}

function check(pid, staid) {
    if (pid === '0') {
        $('#error_no_dolj').slideToggle();
        setTimeout(function () {
            $('#error_no_dolj').slideToggle();
        }, 1500);
        return false;
    }

    if (staid === '0') {
        $('#error_no_staj').slideToggle();
        setTimeout(function () {
            $('#error_no_staj').slideToggle();
        }, 1500);
        return false;
    }

    return true;
}



function setModalHandlers() {
    const salaryElem = $(`#salary`);
    let salary = salaryElem.prop("value");
    const sliderElemInstance = salaryElem.data('ionRangeSlider');
    salaryElem.on('change', e => {
        if (e.target.value == 0) {
            salary = 'no';
        } else {
            salary = e.target.value;
        }
    });
    $(`#salary_check`).on('change', e => {
        const disable = !e.target.checked;
        sliderElemInstance.update({
            from: 0,
            disable: disable
        });
    });
    $(`#close_modal`).on('click', () => modalClosing());
    $(`#post`).on('click', e => {
        e.preventDefault();
        const staj = $('#staj').val();
        const dopInfo = $('#dopinfo').val();
        const pid = $('#base_dolj').val();

        if (check(pid, staj)) {
            $.ajax({
                type: "POST",
                url: `${baseUrl}/vacancies/`,
                data: {
                    'payment': salary,
                    'pid': pid,
                    'staid': staj,
                    'dopinfo': dopInfo
                }
            }).fail((jqXHR, textStatus) => {
                $('.modal-content').html(badModal(`Ошибка ${jqXHR.status} ${jqXHR.responseText}`)).after(() => modalCenter());
                setTimeout(() => modalClosing(), 1300);
            }).done(res => {
                $('.modal-content').html(okModal("Вакансия успешно сохранена")).after(() => modalCenter());
                setTimeout(() => modalClosing(), 1300);
                const vacancy = new DirectorVacancy(res.date_insert, res.doljnost_id, res.dop_info, res.dtype, res.id, res.id_directora, res.name, res.schoolid, res.staj_id, res.value, res.zp, res.resp);
                vacancy.renderDirectorSide(`#schools_vacancies`);
            });
        }
    });
}

function newVacaModal() {
    return `<a class="close-modal" id="close_modal">
					<svg viewBox="0 0 20 20">
						<path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
						      fill="#000000"></path>
					</svg>
				</a><!-- close modal -->
				<div class="modal-content" style="width:100%;">
					<div class="my-2 p-relative bg-white px-2 py-2"
					     style="width: 100%; overflow: hidden; border-radius: 1px;">
						<p class="mb-0 small font-weight-medium text-uppercase mb-1 text-black lts-2px">
							${new Date().toLocaleDateString()}
						</p>
						<h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1"
						    style="line-height: 1.25;">
							<select id="base_dolj">
								<option id="dolj0" value="0">Выберите должность</option>
							</select>
							<label class="checkbox my-1">
								<input checked id="salary_check" type="checkbox"><span></span>Указать
								размер заработной платы
							</label>
							<input id="salary" placeholder="Размер зарабатной платы в рублях" type="text">
						</h1>
						<select id="staj">
							<option value="0">Выберите стаж работы</option>
							<option value="1">Начало карьеры, выпускник</option>
							<option value="2">1-3 лет</option>
							<option value="3">3-5 лет</option>
							<option value="4">Свыше 5 лет</option>
						</select>
						<p class="mb-1"><b>Дополнительная информация</b>:</p>
						<textarea id="dopinfo"
						          maxlength="1050"
						          class="mb-1"
						          placeholder="Укажите дополнительную информацию"></textarea>
						</p>
						<p class="small font-weight-medium text-uppercase lts-2px red my-1"
						   id="error_no_dolj"
						   style="display:none;">
							Выберите должность
						</p>
						<p class="small font-weight-medium text-uppercase lts-2px red my-1"
						   id="error_no_staj"
						   style="display:none;">
							Выберите необходимый стаж
						</p>
						<a class="text-uppercase d-block font-weight-medium lts-2px text-center styled-link exit__btn"
						    
						   id="post">
						   Добавить вакансию
						</a>
					</div>
				</div>`;
}

function renderVaca() {
    DirectorVacancy.respslength = 0;
    getVacanciesBySchoolId().then(result => {
        $('.rating-box').html('');
        result.map(function (res) {
            const vacancy = new DirectorVacancy(res.date_insert, res.doljnost_id, res.dop_info, res.dtype, res.id, res.id_directora, res.name, res.schoolid, res.staj_id, res.value, res.zp, res.resp);
            vacancy.renderDirectorSide(`#schools_vacancies`);
        });
        $('#vacancy_count').text(getRightSting(DirectorVacancy.respslength));
    });
}

function getRightSting(length) {
    if (length == 1) {
        return `${length} соискатель`;
    }

    if (length == 2 || length == 3 || length == 4) {
        return `${length} соискателя`;
    }

    if (length > 5) {
        return `${length} соискателя`;
    }

    return '0';
}

$(document).ready(() => {
    renderVaca();
});