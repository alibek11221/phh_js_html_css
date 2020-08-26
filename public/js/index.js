conn.onopen = function (e) {
    msg.type = 'init';
    conn.send(JSON.stringify(msg));
};
button.on('click', (e) => {
    e.preventDefault();
    const sendMessage = {
        type: 'message',
        text: text.val()
    };
    text.val('');
    conn.send(JSON.stringify(sendMessage));
});
conn.onmessage = function (e) {
    let getMsg = JSON.parse(e.data);
    switch (getMsg.type) {
        case 'init':
            msg.id = getMsg.id;
            let a;
            getMsg.data.map(x => {
                let tt = new Date(x.date.date);
                if (a !== tt.getDate()) {
                    chat.append(`<div class="mb-1 lts-2px text-muted text-uppercase">${tt.toLocaleDateString()}</div>`);
                    a = tt.getDate();
                }
                tt = getTimeString(tt);
                if (x.participantId === msg.id) {
                    chat.append(` <div class="msg right-msg">
                                    <div class="msg-bubble">
                                        <div class="msg-info">
                                            <div class="msg-info-name">${x.name}</div>
                                            <div class="msg-info-time">${tt}</div>
                                        </div>
                                        <div class="msg-text">
                                           ${x.text}
                                        </div>
                                    </div>
                                </div>`)
                } else {
                    chat.append(`<div class="msg left-msg">
                                <div class="msg-bubble">
                                    <div class="msg-info">
                                        <div class="msg-info-name">${x.name}</div>
                                        <div class="msg-info-time">${tt}</div>
                                    </div>
                                    <div class="msg-text">
                                        ${x.text}
                                    </div>
                                </div>
                            </div>`)
                }
            });
            chat.scrollTop(chat[0].scrollHeight);
            break;
        case 'message':
            let time = new Date(getMsg.message.date.date);
            time = getTimeString(time);
            if (getMsg.message.participantId === msg.id) {
                chat.append(` <div class="msg right-msg">
                                    <div class="msg-bubble">
                                        <div class="msg-info">
                                            <div class="msg-info-name">${getMsg.message.name}</div>
                                            <div class="msg-info-time">${time}</div>
                                        </div>
                                        <div class="msg-text">
                                           ${getMsg.message.text}
                                        </div>
                                    </div>
                                </div>`);
            } else {
                chat.append(`<div class="msg left-msg">
                                <div class="msg-bubble">
                                    <div class="msg-info">
                                        <div class="msg-info-name">${getMsg.message.name}</div>
                                        <div class="msg-info-time">${time}</div>
                                    </div>
                                    <div class="msg-text">
                                        ${getMsg.message.text}
                                    </div>
                                </div>
                            </div>`)
            }
            chat.animate({scrollTop: chat.prop("scrollHeight")}, 500);
            break;

    }

};
conn.onclose = event => {
    console.log(event);
};

function getTimeString(time) {
    return time.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
}