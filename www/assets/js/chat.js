(function() {

    var output = PUBNUB.$('output'),
        input = PUBNUB.$('input'),
        button = PUBNUB.$('button'),
        avatar = PUBNUB.$('avatar'),
        presence = PUBNUB.$('presence');

    var channel = 'mchat';

    // Assign a random avatar in random color
    avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

    var p = PUBNUB.init({
        subscribe_key: 'sub-c-ab3d63c8-5722-11e8-a697-1afc57e8b539',
        publish_key:   'pub-c-3e61180f-0cc5-4c72-b5e8-4b1cd9aec01a'
    });
p0rbrans
    p.subscribe({
        channel  : channel,
        callback : function(m) {
            output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' +  m.text.replace( /[<>]/ig, '' ) + '</span></p>' + output.innerHTML;
        },
        presence: function(m){
            if(m.occupancy > 1) {
                presence.textContent = m.occupancy + ' people online';
            } else {
                presence.textContent = 'Nobody else is online';
            }
        }
    });

    p.bind('keyup', input, function(e) {
        (e.keyCode || e.charCode) === 13 && publish()
    });

    p.bind('click', button, publish);

    function publish() {
        p.publish({
            channel : channel,
            message : {avatar: avatar.className, text: input.value},
            x : (input.value='')
        });
    }


})();