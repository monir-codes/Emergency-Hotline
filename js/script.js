document.addEventListener("DOMContentLoaded", function(){

    let navHeart = document.getElementById("heart-nav");
    const heartIcons = document.querySelectorAll(".fa-heart");

    heartIcons.forEach((hearts) => {
        hearts.addEventListener("click", function(){
            let navHeartCount = parseInt(navHeart.textContent);
            let newNavHeart = navHeartCount +=1;
            navHeart.textContent = newNavHeart
        })
    })
})

