const map = document.querySelector("#map");
const eqManager = document.querySelector("#eqManager");
const statManager = document.querySelector("#statManager");
const prompt = document.querySelector("#prompt");
const journal=document.querySelector("#journalFull");

const info_map= document.querySelector('#info-map');
const info_eq= document.querySelector('#info-eq');
const info_stat= document.querySelector('#info-stat');
const open_prompt= document.querySelector('#open-prompt');
const info_journal=document.querySelector('#info-journal');

const closeBtn=document.querySelectorAll('.closeBtn')


arr=[map,eqManager,statManager,prompt,journal];
arrInfo=[info_map,info_eq,info_stat, prompt,info_journal];


open_prompt.addEventListener('click', function(){
    map.style.visibility="hidden";
    eqManager.style.visibility="hidden";
    statManager.style.visibility="hidden";
    prompt.style.visibility="visible";
    journal.style.visibility="hidden";
    
    
});

info_map.addEventListener('click', function(){
    map.style.visibility="visible";
    eqManager.style.visibility="hidden";
    statManager.style.visibility="hidden";
    prompt.style.visibility="hidden";
    journal.style.visibility="hidden";
});
info_eq.addEventListener('click', function(){
    map.style.visibility="hidden";
    eqManager.style.visibility="visible";
    statManager.style.visibility="hidden";
    prompt.style.visibility="hidden";
    journal.style.visibility="hidden";
    
    
});
info_stat.addEventListener('click', function(){
    map.style.visibility="hidden";
    eqManager.style.visibility="hidden";
    statManager.style.visibility="visible";
    prompt.style.visibility="hidden";
    journal.style.visibility="hidden";
    

});
info_journal.addEventListener('click', function(){
    map.style.visibility="hidden";
    eqManager.style.visibility="hidden";
    statManager.style.visibility="hidden";
    prompt.style.visibility="hidden";
    journal.style.visibility="visible";
    
    
});

for(var i =0;i<closeBtn.length;i++){
    closeBtn[i].addEventListener('click', function(){
        console.log('dupa');
        for(var j=0;j<arr.length;j++){
            arr[j].style.visibility="hidden";
            console.log('dupa1');
            
        }
    });
}
