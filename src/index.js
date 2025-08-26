import { dogsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)
memeModalCloseBtn.addEventListener('click', closeModal)
getImageBtn.addEventListener('click', renderDog)

// Close modal when clicking outside of it
memeModal.addEventListener('click', function(e) {
    if (e.target === memeModal) {
        closeModal()
    }
})



function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal(){
    memeModal.style.display = 'none'
}

function renderDog(){
    const dogObject = getSingleDogObject()
    if (dogObject) {
        memeModalInner.innerHTML = `
            <img
            class="dog-img"
            src="./images/${dogObject.image}"
            alt="${dogObject.alt}"
            >
        `
        memeModal.style.display = 'flex'
    } else {
        alert('Please select an emotion first!')
    }
}

function getSingleDogObject(){
    const dogsArray = getMatchingDogsArray()
    
    if (!dogsArray || dogsArray.length === 0) {
        return null
    }
    
    if(dogsArray.length === 1){
        return dogsArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * dogsArray.length)
        return dogsArray[randomNumber]
    }
}

function getMatchingDogsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        
        const matchingDogsArray = dogsData.filter(function(dog){
            return dog.emotionTags.includes(selectedEmotion)
        })
        return matchingDogsArray
    }
}

function getEmotionsArray(dogs){
    const emotionsArray = []
    for (let dog of dogs){
        for (let emotion of dog.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(dogs){
    let radioItems = ``
    const emotions = getEmotionsArray(dogs)
    for (let emotion of emotions){
        radioItems += `
            <div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
            </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(dogsData)