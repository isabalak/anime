// const burgerFunc = () =>{
//     const burger = document.querySelector('.mobile-btn')
//     const nav = document.querySelector('.nav')
//     const navItems = document.querySelectorAll('.nav-items')
//     burger.addEventListener('click',()=>{
//         burger.classList.toggle('show-mobile-btn')
//         nav.classList.toggle('show-nav')
//     })
    
//     for(let item of navItems){
//         item.addEventListener('click',()=>{
//         burger.classList.remoove('show-mobile-btn')
//         nav.classList.remove('show-nav')
//         })
//     }


// }
// burgerFunc()

// const preventReload = () =>{
//     const linkTag = document.querySelectorAll('a')
//     for(let item of linkTag){
//         item.addEventListener('click',(e)=>{
//             console.log(e)
//             e.preventDefault()
//             // Убирает перезагрузку страницы
//         })
//     }
// }
// preventReload()

// modal
const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modalButton')
const backdrop = document.querySelector('.backdrop')
const modalCloseButton = document.querySelector('.modalCloseButton')

const toggleModal = (event) =>{
    modal.classList.toggle('modalActive')
    backdrop.classList.toggle('backdropActive')
    document.body.classList.toggle('hidden')
}

modalButton.addEventListener('click',toggleModal)
modalCloseButton.addEventListener('click',toggleModal)
backdrop.addEventListener('click',toggleModal)
// modal