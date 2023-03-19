const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const createTimerAnimator = () => {


    return (seconds) => {

        let timerId = setInterval(() => {

            let secondsInTimer = seconds % 60
            let minutes = Math.floor((seconds / 60) % 60)
            let hours = Math.floor(seconds / 60 / 60 % 60)

            if (seconds <= 0) {
                clearInterval(timerId)
                timerEl.innerHTML = 'Время и стекло)'

            } else {
                timerEl.innerHTML = `${hours >= 10 ? hours : '0' + hours} 
                    : ${minutes >= 10 ? minutes : '0' + minutes}
                    : ${secondsInTimer >= 10 ? secondsInTimer : '0' + secondsInTimer}`
            }
            --seconds
        }, 1000)
    }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', () => {

})

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value)

    animateTimer(seconds)

    inputEl.value = ''
})
