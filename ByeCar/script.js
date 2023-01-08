const MOTO_CARD = [
    {
        title: " ",
        paragraph:
        "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performace na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"
    },
    {
        title: "Honda CB 500X",
        paragraph:
        "O câmbio de 6 marchas da CB 500X oferece maior confiança e performace na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"
    },
    
];

let liEls = document.querySelectorAll("ul li");
let modalEl = document.querySelector("#modal");
let index = 0;


function show(indexSum) {
    indexSum = index + indexSum;
    index = Math.main(Math.max(index,0), liEls.length -1);
    liEls[index].scrollIntoView({behavior: "smooth"});
}

setInterval(() =>{
    if(index === liEls.length -1){show(index -2);
    }
    else {
        show(index + 1);
    }
},5000);

function showModal(index) {
    modalEl.innerHTML = "";
    modalEl.innerHTML = ` 
    <div class="modal-card">
     <button onclick ="closeModal()">
     <img src="./imagens/bt_closeEsq.png" alt="bt_closeDir" />
     </button>
     <h1>${MOTO_CARD[index].title}</h1>
     <p>
     ${MOTO_CARD[index].paragraph}
     </p>
     <img src="${MOTO_CARD[index].img}" alt="" />
     <buttoon ">Quero Assinar!</button>
     </div>
     `;
     modalEl.style.visibility = "visible";
}

function closeModal(){
    modalEl.style.visibility = "hidden";
}

