const userName = document.querySelector(".username"),
    action = document.querySelector(".action"),
    card = document.querySelector(".card"),
    avatar = document.querySelector(".avatar"),
    bio = document.querySelector(".bio"),
    repoList = document.querySelector(".repo"),
    url = document.querySelector(".url"),
    name = document.querySelector(".name"),
    userWrap = document.querySelector(".app-wrapper"),
    bodyBg = document.querySelector("body");


bodyBg.style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080')`;

// API Info
const BASE = `https://api.github.com/users/`;

userName.addEventListener("keypress", e => {
    const userNameValue = userName.value;
    if(e.which === 13 && userNameValue){
        fetch(BASE + userNameValue)
            .then(response => response.json())
            .then(data => {
                avatar.src = data.avatar_url;
                name.innerHTML = data.name;
                bio.innerHTML = data.bio;
                repoList.href = data.html_url + "?tab=repositories";
                url.href = data.blog;
            })

            .catch(error => {
                console.log(error);
            });
        setTimeout(f => {
            card.style.display = "block";
            userWrap.style.display = "none";
        }, 1000);
    }
});