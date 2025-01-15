function launchConfetti() {
            const duration = 200;
            const end = Date.now() + duration;
            const colors = ['#5865f2', '#57f287', '#fee75c', '#eb459e', '#ed4245'];
            (function frame() {
                confetti({
                    particleCount: 12,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                
                confetti({
                    particleCount: 12,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

            setTimeout(() => {
                window.location.href = 'https://discord.com/oauth2/authorize?client_id=1279766676572868629';
            }, 2000);
        }

        function showLoginMessage(event) {
            event.preventDefault();
            alert('왜 눌러보시나요?');
        }
        function goBack() {
                    window.history.back();
        }
