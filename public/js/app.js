const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const MessageOne = document.querySelector('#message-1')
const MessageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    MessageOne.textContent = 'Loading...'
    MessageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if(data.error){
            MessageOne.textContent = data.error
        }else{
            MessageOne.textContent = data.location
            MessageTwo.textContent = data.forecast
        }
    })
})
})