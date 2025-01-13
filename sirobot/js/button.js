(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const inviteButton = document.getElementById('inviteButton');
        if(inviteButton) {
            inviteButton.addEventListener('click', function() {
                window.location.href = 'https://sirobot.kr/invite';
            });
        }
    });
})();