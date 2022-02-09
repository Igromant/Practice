const scroll = () => {
    // Объявление переменной и функция анимации
    const smoothLinks = document.querySelectorAll('.link');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        return id
            
        });

        
    };
}
export default scroll