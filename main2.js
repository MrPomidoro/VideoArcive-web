const videoPath = {
    0: {
        path: 'video.mp4',
        time: 30.465,
        currentTime: 0,
        flag: true
    },
    1: {
        path: 'video1.mp4',
        time: 15.651,
        currentTime: 0,
        flag: false
    },
    2: {
        path: 'video.mp4',
        time: 30.465,
        currentTime: 0,
        flag: false
    },
    3: {
        path: 'video1.mp4',
        time: 15.651,
        currentTime: 0,
        flag: false
    },
}

const video = document.getElementById('video')
const input = document.getElementById('range')
const rangeVal = document.getElementById('rangeIn')

let key = 0

/**
 * @description Отслеживание изменения времени видео
 * @date 09/11/2022
 */
video.addEventListener('timeupdate', (event) => {
    // console.log(event.srcElement.currentTime);
    changeRange(event.srcElement.currentTime)
});


/**
 * @description Отслеживание окончания видео
 * @date 09/11/2022
 */
video.addEventListener('ended', () => {
    key++
    videoNext(k);
})

/**
 * @description Переключение на видео 
 * относительно изменнения ползунка
 * @date 09/11/2022
 * @param {string} src
 * @param {int} currentTime
 * @return {}
 */
function videoBackAndPlayToCurrentTime(src, currentTime) {
    video.childNodes[1].src = src
    videoLoadAndPlay()
    video.currentTime = currentTime
}


/**
 * @description Получение пути для source видео
 * @date 09/11/2022
 * @param {int} k
 * @return {string}
 */
function getSourceVideo(k) {
    return `http://127.0.0.1:5500/${videoPath[k]['path']}`
}

/**
 * @description Загрузка видеофайла и запуск
 * @date 09/11/2022
 * @return {}
 */
function videoLoadAndPlay() {
    video.load();
    video.play();
}

/**
 * @description Переключение на следующее видео
 * @date 09/11/2022
 * @return {}
 */
function videoNext(k)  {
    video.childNodes[1].src = getSourceVideo(k)
    videoLoadAndPlay()
}


/**
 * @description Изменяет положение ползунка
 * относительно изменения видео
 * @date 09/11/2022
 * @param {float} value
 * @return {}
 */
function changeRange(value) {
    input.setAttribute('value', value)
    rangeVal.innerText = value.toFixed(0) + ' cek'
}


/**
 * @description Отслеживает изменение 
 * ползунка относительно тега
 * @date 09/11/2022
 * @param {int} value
 * @return {}
 */
function onInput(value) {
    rangeVal.innerText = value + ' cek';
}