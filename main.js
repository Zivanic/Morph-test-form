
function progresAnim(e) {
//    console.log(e.value);
    let inputId = e.getAttribute("data-id");
    if (e.value != '') {
        if (!document.querySelector('.' + inputId).classList.contains('active')) {
            document.querySelector('.' + inputId).classList.add('active');
            addProgress();

        }

    } else {
        if (document.querySelector('.' + inputId).classList.contains('active')) {
            document.querySelector('.' + inputId).classList.remove('active');
            removeProgress();
        }
    }
}
function addProgress() {
    const progressValue = 25;
    const progressHolder = document.querySelector('#mainProgress span');
    let val = parseInt(progressHolder.getAttribute("data-value"));
    let i = val;
    console.log(i);
    document.querySelector('#mainProgress .circle').classList.add('hvr-pulse');
    let inv = setInterval(function () {
        if (i < (val + progressValue) && i < 100) {
            progressHolder.innerHTML = ++i +'%';
            progressHolder.setAttribute("data-value", val + progressValue);
            if (val + progressValue == '100') {
                document.querySelector('#submit').classList.add('active');
            }
        } else {
            document.querySelector('#mainProgress .circle').classList.remove('hvr-pulse');
            clearInterval(inv);

        }
    }, 6000 / 100);

}
function removeProgress() {
    const progressValue = 25;
    const progressHolder = document.querySelector('#mainProgress span');
    let val = parseInt(progressHolder.getAttribute("data-value"));
    let i = val;
    console.log(i);
    document.querySelector('#mainProgress .circle').classList.add('hvr-pulse');
    let inv = setInterval(function () {
        if (i >= (val - progressValue) && i >= 0) {
            console.log('usao')
            progressHolder.innerHTML = i-- +'%';
            progressHolder.setAttribute("data-value", val - progressValue);
            if (document.querySelector('#submit').classList.contains('active')) {
                document.querySelector('#submit').classList.remove('active');
            }
        } else {
            document.querySelector('#mainProgress .circle').classList.remove('hvr-pulse');
            clearInterval(inv);
        }
    }, 6000 / 100);
}
