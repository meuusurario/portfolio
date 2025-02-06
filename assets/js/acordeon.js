
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
       const is0pen = acordeon.classList.contains('open')

       if (is0pen) {
        acordeon.classList.remove('open')
       } else {
        acordeon.classList.add('open')
       }
       
    })
})