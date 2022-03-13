(() => {
const url = 'https://v2.jokeapi.dev/joke/Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt&type=twopart'

document.querySelector("#bttn").addEventListener('click', (e) => {
fetch(url).then((response)=>{
    console.log('resoloved', response);
    return response.json();
}).then(data =>
    {
        console.log(data)
        // console.error(data.category)
        let setup = data.setup
        let delivery = data.delivery
        
            document.querySelector("#setup").innerText = setup
            document.querySelector("#delivery").innerText = delivery
        
            
        
    }).catch((err)=>{
    console.log('rejected', err)


    
})

})

})()