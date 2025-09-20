// Heart Icon Functionality 

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

// Call history functionality 

let history = []

function addHistory(){

    const parentDiv = document.getElementById("history")
    parentDiv.innerHTML = "";

    for (const updateDiv of history){
        const newDiv = document.createElement("div")
        newDiv.classList = "lists bg-[#fafafa] md:w-[352px] h-[86px] mt-5 mx-auto rounded-[8px]"
        newDiv.innerHTML = `<div class="lists bg-[#fafafa] md:w-[352px] md:h-[86px] mt-5 mx-auto p-5 rounded-[8px]">
                <div class="list-child flex justify-between">
                <div>
                    <p class="text-[#111111] text-[18px] madurai">${updateDiv.title}</p>
                    <p class="text-[#5c5c5c] text-[18px] madurai">${updateDiv.number}</p>
                </div>
                <div>
                    <p>${updateDiv.time}</p>
                </div>

                </div>

            </div>`;

            parentDiv.appendChild(newDiv);
    }

}




// Call button functionality 




const callBtn = document.querySelectorAll(".call-btn");
const navCoin = document.getElementById("nav-coin")


for(const callBtns of callBtn){
    callBtns.addEventListener("click", function(){
        const cards = callBtns.closest(".cards");
        const title = cards.querySelector(".titles .ador").innerText
        const nmbr = cards.querySelector(".mt-5 h3").innerText
        let navCoinInt = parseInt(navCoin.textContent)
        if ( navCoinInt > 0){
            navCoinInt -= 20
            navCoin.textContent = navCoinInt;
            alert(`${title} - ${nmbr}`) 

            history.push({
                title: title,
                number: nmbr,
                time: new Date().toLocaleTimeString()
            });

            addHistory();
           }

        else if (navCoinInt === 0){
            alert("Not enough coins!")
            return
        }

       

    }

)
}

// Clear button functionality 

document.getElementById("clear").addEventListener("click", function(){
   history = [];
   document.getElementById("history").innerHTML = "";
})


// Copy button functionality 

const copyBtn = document.querySelectorAll(".mt-5 .copy-btn");
let copyNav = document.getElementById("copy-navP");
let copyNavFinal = parseInt(copyNav.textContent);
 

for(const copyBtns of copyBtn){
    copyBtns.addEventListener("click", function(){
        alert("Copied!")
        copyNavFinal = copyNavFinal + 1;
        copyNav.textContent = copyNavFinal

        const copySelect = copyBtns.closest(".cards").querySelector(".mt-5 .roboto").textContent
        navigator.clipboard.writeText(copySelect);

        copyBtns.innerText = "Copied!";

        setTimeout(() => {
            "Copied!"
        }, 1200);

      

    })
}


})


