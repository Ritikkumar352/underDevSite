       
        const progressBar = document.getElementById('progressBar');
        let width = 0;
        
        function animateProgress() {
            if (width >= 70) {
                
                clearInterval(progressInterval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }
        
        const progressInterval = setInterval(animateProgress, 50);
        
        function updateCountdown() {
            const launchDate = new Date();
            launchDate.setDate(launchDate.getDate() + 30);
            
            const now = new Date();
            const diff = launchDate - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('countdown').innerHTML = `Estimated completion in <strong>${days}d ${hours}h ${minutes}m ${seconds}s</strong>`;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        const form = document.querySelector('.email-form');
        const input = form.querySelector('input');
        const button = form.querySelector('button');
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (input.value.trim() !== '') {
                button.textContent = 'Subscribed!';
                input.value = '';
                setTimeout(() => {
                    button.textContent = 'Notify Me';
                }, 2000);
            }
        });
    