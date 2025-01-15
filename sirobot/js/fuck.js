$(document).ready(function() {
    const content = `
        <div class="discord-logo-container">
            <div class="discord-logo">
                <svg width="124" height="24" viewBox="0 0 124 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#a)">
                        <g clip-path="url(#b)" fill="#fff">
                            <path d="M26.242 2.01A25.218 25.218 0 0 0 19.851 0a18.718 18.718 0 0 0-.819 1.701a23.45 23.45 0 0 0-7.083 0A18.2 18.2 0 0 0 11.121 0a25.13 25.13 0 0 0-6.396 2.015C.68 8.132-.417 14.097.132 19.978c2.682 2.005 5.282 3.223 7.838 4.02A19.514 19.514 0 0 0 9.65 21.23a16.507 16.507 0 0 1-2.644-1.287c.222-.165.439-.337.648-.513 5.098 2.386 10.636 2.386 15.673 0 .211.177.428.348.648.513-.839.505-1.726.939-2.649 1.29A19.432 19.432 0 0 0 23.004 24c2.558-.797 5.16-2.015 7.843-4.022.643-6.817-1.099-12.728-4.605-17.968ZM10.343 16.361c-1.53 0-2.785-1.43-2.785-3.17 0-1.741 1.228-3.174 2.785-3.174 1.557 0 2.812 1.43 2.785 3.174.003 1.74-1.228 3.17-2.785 3.17Zm10.293 0c-1.53 0-2.786-1.43-2.786-3.17 0-1.741 1.228-3.174 2.785-3.174 1.557 0 2.812 1.43 2.785 3.174 0 1.74-1.228 3.17-2.785 3.17Z"/>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="a"><path fill="#fff" d="M0 0h124v24H0z"/></clipPath>
                        <clipPath id="b"><path fill="#fff" d="M0 0h124v24H0z"/></clipPath>
                    </defs>
                </svg>
            </div>
            <span class="logo-separator">X</span>
            <span class="siro-ticket-text">Siro Ticket</span>
        </div>
        <div class="artwork"></div>
        <div class="siroticket1">           
            <div class="invite-container">
                <div class="content-wrapper">
                    <div class="bot-header" style="text-align: center;">
                        <img class="bot-avatar" src="https://sirobot.kr/static/logo512.png" style="margin: 0 auto; width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
                        <div class="permissions-container">
                            <div class="bot-name" style="display: inline-flex; align-items: center; justify-content: center;">
                                Siro Ticket
                                <div class="verified-badge">
                                <i class="fa-solid fa-check"></i> 앱
                                </div>
                            </div>
                        </div>
                    <div class="access-text">이(가) 내 Discord 계정에 접근하려고 합니다.</div>
                    <div class="login-text">
                        Siro._.(으)로 로그인됨 <a href="#" class="login-link" onclick="showLoginMessage(event)">다른 사용자인가요?</a>
                    </div>
                    <div class="permissions-list">
                        <div class="permissions-container">
                        <div class="permissions-header">Siro Ticket의 개발자에게 다음 권한을 허용합니다.</div>
                        <div class="permission-item1">
                            <i class="fa-solid fa-circle-check fa-lg" style="color: #838c97;"></i> 서버에 봇 추가하기
                        </div>
                        <div class="permission-item2">
                            <i class="fa-solid fa-circle-check fa-lg" style="color: #838c97;"></i> 명령어 만들기
                        </div>
                        <div class="permission-item3 mb-4">
                            <i class="fa-solid fa-circle-xmark fa-lg" style="color: #838c97;"></i> 스크립트와 친구들과 함께 수수께끼 해결하기
                        </div>
                        <div class="popup-header"></div>
                        <div class="server-select-wrapper">
                            <div class="server_invite">서버에 추가하기</div>
                            <select class="server-select">
                                <option>시로 티켓봇 초대하기!</option>
                                <option>시로는 짱짱</option>
                            </select>
                            <div class="server-note">서버 관리 권한이 있어야만 추가 가능한 봇입니다.</div>
                        </div>
                    </div>
                </div>
                <div class="popup-footer">
                    <button class="cancel-btn">취소</button>
                    <button class="continue-btn" onclick="launchConfetti()">계속하기</button>
                </div>
            </div>
        </div>
    `;

    $('#content').html(content);
});
