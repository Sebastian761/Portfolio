function Menu(e){
    let main = document.querySelector('main');
    let list = document.querySelector('ul');
    let menu = document.getElementById('menu')
    e.name === 'menu' 
    
    ? (e.name = "close", list.classList.add('top-[39px]') , 
    menu.classList.add('max-md:bg-sky-200') , list.classList.add('opacity-100') , 
    list.classList.add('max-md:bg-sky-200') , 
    list.classList.add('z-[100]')) 
    
    :( e.name = "menu" ,list.classList.remove('top-[39px]') , 
    list.classList.remove('opacity-100') , 
    list.classList.remove('z-[-1]') , 
    menu.classList.remove('max-md:bg-sky-200'))
}