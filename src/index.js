
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImage(){
    fetch(imgUrl)
    .then(res=>res.json())
    .then(dogs=>{
        dogs.message.forEach(dog => {
            const image = document.createElement('img')
           
            image.src = dog.message

            document.getElementById('dog-image-container').appendChild(image)
        })
    })

}

const breedUrl ='https://dog.ceo/api/breeds/list/all'
function dogBreeds(){
    fetch(breedUrl)
    .then(res=>res.json())
    .then(breeds=>breeds.message.forEach(breed=>{
        console.log(breed)
    }))
}
dogBreeds()
window.addEventListener('load',fetchImage)
