var list_menu=[
    {
        id: '1',
        title:'suma',
        option_code:'suma'
        
    },
    {
        id: '2',
        title:'resta',
        option_code:'resta'
        
    },
    {
        id: '3',
        title:'multiplicación',
        option_code:'multi'
        
    },
    {
        id: '4',
        title:'división',
        option_code:'division'
        
    },
    {
        id: '5',
        title:'raíz cuadrada',
        option_code:'raiz'
        
    },
    {
        id: '6',
        title:'fórmula general',
        option_code:'form_gen'
        
    },
    {
        id: '7',
        title:'binomio cuadrado perfecto',
        option_code:'bin_cp'
        
    }
];

function goContent(index){
    let content=document.getElementById('content');
    content.scrollLeft=content.clientWidth*index;
}

function crearMenu(){
    let ul_menu=document.getElementById('ul_menu');
    let li='';
    
    for(var i=0; i<=list_menu.length-1; i++){
        li+=`<li onclick="goContent(${i})"><a href="#">${list_menu[i].title}</a></li>`;
        if(i==list_menu.length-1){
            ul_menu.innerHTML=li;
        }
    }
}

function crearSecciones(){
    let content=document.getElementById('content');
    for(var i=0; i<=list_menu.length-1; i++){
        let div=document.createElement('div');
        div.classList='section'; div.id=`section_${i}`;
        div.style.left=`${(100*i)}%`;
       
}


var go={
    suma: function(){
       
    },
    resta: function(){

    }
}

window.onload = function() {
    crearMenu();
    crearSecciones();
};