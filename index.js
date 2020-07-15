(function () {
    window.onload = function () {
        const steps = document.getElementsByClassName('step');
        let front = 0;
        let bottom = 1;
        let back = 2;
        let ticking = false;
        function prev(i) {
            if (i == 0) {
                return 2;
            }
            return (i - 1) % 3;
        }
        function changeClass() {
            steps[front].classList.remove('front');
            steps[bottom].classList.remove('bottom');
            steps[back].classList.remove('back');
            front = prev(front);
            bottom = prev(bottom);
            back = prev(back);
            steps[front].classList.add('front');
            steps[bottom].classList.add('bottom');
            steps[back].classList.add('back');
        }
        function cycleClass() {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    changeClass();
                    ticking = false;
                    setTimeout(cycleClass, 1500);
                });
            }
        }
        setTimeout(cycleClass, 1500);
    }
})()