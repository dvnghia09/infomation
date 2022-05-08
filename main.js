const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navItems = $$('.nav-item')
const options = $$('.option')

navItems.forEach( (value,index) => {
    const option = options[index]
    console.log(option)
    value.onclick = () => {

        // xóa class active ở item cũ và thêm vào item click
        $('.nav-item.active').classList.remove('active')
        value.classList.add('active')

        $('.option.active').classList.remove('active')
        option.classList.add('active')
    }
});