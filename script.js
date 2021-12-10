fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        let jokeText = jokeData.attachments[0].text;
        let joke = document.getElementById("joke").innerHTML = jokeText
    })