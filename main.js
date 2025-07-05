const quote = document.querySelector('h1')
const container = document.querySelector('.container')
const author = document.querySelector('p')
const dice = document.querySelector('.dice')
const icon = document.querySelector('i')

const icons = ['fa-solid fa-dice-one', 'fa-solid fa-dice-two', 'fa-solid fa-dice-three', 'fa-solid fa-dice-four', 'fa-solid fa-dice-five', 'fa-solid fa-dice-six']


const changeDice = () => {
    container.style.backgroundColor = `#${Math.floor(Math.random() * 999 + 1)}D70`
    dice.style.backgroundColor = `#${Math.floor(Math.random() * 999 + 1)}D70`
    icon.className = icons[Math.floor(Math.random() * 6)]
    icon.style.transform = 'rotate(120deg)'
    setTimeout(() => {
        icon.style.transform = 'rotate(0deg)'
    }, 250)
}




const fetchQuote = async () => {
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    changeDice()
    quote.innerText = data.quote
    author.innerText = data.author
}

dice.addEventListener("click", fetchQuote)
fetchQuote()