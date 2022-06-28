// TODO 需要修改代码
const darkmodeBtn = document.getElementById('darkmode')
darkmodeBtn.onclick=changeBanner
function changeBanner() {
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    const pageHeader = document.getElementById('page-header')
    if (nowMode === 'light') {
        pageHeader.style.backgroundImage = "url('/imgs/dark.jpg')"
    } else {
        pageHeader.style.backgroundImage = "url('/imgs/light.jpg')"
    }
}