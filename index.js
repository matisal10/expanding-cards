const cards = document.querySelectorAll('.card')

function removeActicveClass() {
    cards.forEach(card => card.classList.remove('active'))
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActicveClass()
        card.classList.add('active')
    })
})


