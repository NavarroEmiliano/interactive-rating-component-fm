const d = document;
const form = d.querySelector('.form')
const voteButtons = d.querySelectorAll('.vote-btn')

let btnSelected

form.addEventListener('click', function (e) { 
    e.preventDefault()
    if(e.target.matches('.vote-btn')) {
        btnSelected = e.target.innerText
        voteButtons.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
    }
})