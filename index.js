function Menu(e){
    let main = document.querySelector('main');
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[1px]') , list.classList.add('opacity-100') , main.classList.add('opacity-5')) :( e.name = "menu" ,list.classList.remove('top-[1px]') , list.classList.remove('opacity-100') , main.classList.remove('opacity-5'))
}