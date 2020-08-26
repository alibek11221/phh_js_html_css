const baseUrl = 'http://vacancy.test';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const getAreas = async () => {
    const {data} = await axios.get(`${baseUrl}/areas`);
    return data;
};

const getParticipants = async (testid) => {
    const {data} = await axios.get(`${baseUrl}/particips/${testid}`);
    return data;
};

const getSubElements = async (razdelId) => {
    const {data} = await axios.get(`${baseUrl}/sub_elements?razdel=${razdelId}`);
    return data;
};
(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

const getTest = async (yearId, subjectCode, particip) => {
    const {data} = await axios.get(`${baseUrl}/tests/get_by_selection?year=${yearId}&subject=${subjectCode}&particip=${particip}`);
    return data;
};

const getSchoolsByArea = async (areaCode) => {
    const {data} = await axios.get(`${baseUrl}/areas/${areaCode}/schools`);
    return data;
};
const getSchools = async () => {
    const {data} = await axios.get(`${baseUrl}/schools`);
    return data;
};

async function getDoljnosti() {
        const {data} = await axios.get(`${baseUrl}/positions`);
    return data;

}

async function getVacanciesBySchoolId() {
    const {data} = await axios.get(`${baseUrl}/vacancies/by_school`);
    return data;
}


function okModal(text) {
    return `<div id="circle" style="position: fixed; visibility: hidden">
                    <svg class="checkmark" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                        <circle class="checkmark__circle" cx="26" cy="26" fill="none" r="25"/>
                        <path class="checkmark__check" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"/>
                    </svg>
                    <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px" style="color: #7ac142;">${text}</p>
	            </div>`;
}

function badModal(info) {
    return `<div id="circle" style="position: fixed; visibility: hidden">
                    <svg class="checkmark__x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle class="checkmark__circle__x" cx="26" cy="26" r="25" fill="none" />
                      <path class="checkmark__check__x" fill="none" d="M16 16 36 36 M36 16 16 36" />
                    </svg>
                    <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px" style="color: #d70707;">${info}</p>
                </div>`;
}


