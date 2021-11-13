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

function onView(index){
    let actualSection=document.getElementById(`section_${index}`);

    for(var i=0; i<=list_menu.length-1; i++){
        if(i==index){
            actualSection.style.display="block";
            setTimeout(function(){
                actualSection.style.opacity="1";
            },200);
        }else{
            let otherSection=document.getElementById(`section_${i}`);
            otherSection.style.opacity="0";
            setTimeout(function(){
                otherSection.style.display="none";
            },200);
        }
    }
    
}

function crearMenu(){
    let ul_menu=document.getElementById('ul_menu'), ul_menu_movil=document.getElementById('ul_menu-movil'); 
    let li='', li_movil='';
    
    for(var i=0; i<=list_menu.length-1; i++){
        li+=`<li onclick="onView(${i})"><a href="#">${list_menu[i].title}</a></li>`;
        li_movil+=`<li onclick="onView(${i})" class="float-default"><a href="#">${list_menu[i].title}</a></li>`;
    }
    ul_menu.innerHTML=li;
    ul_menu_movil.innerHTML=li_movil;
}

function crearSecciones(){
    let content=document.getElementById('content');
    for(var i=0; i<=list_menu.length-1; i++){
        let div=document.createElement('div');
        div.classList='section'; div.id=`section_${i}`;
        //div.style.left=`${(100*i)}%`;

        const frame=document.createElement('iframe');
        frame.id=`frame-${list_menu[i].option_code}`;
        frame.src=`src/pages/${list_menu[i].option_code}.html?title='${list_menu[i].title}'`;

        div.appendChild(frame);
        content.appendChild(div);         
    }
}

var go={
    suma: function(){
    },
    resta: function(){
    }
}

function pageOnload(value){
    let head=document.head;

    let materializeCSS=document.createElement('link');
    materializeCSS.href='../CSS/materialize.css'; materializeCSS.rel='stylesheet';

    let googleapis=document.createElement('link');
    googleapis.href='https://fonts.googleapis.com'; googleapis.rel='preconnect';

    let gstatic=document.createElement('link');
    gstatic.href='https://fonts.gstatic.com'; gstatic.rel='preconnect';

    let styles=document.createElement('link');
    styles.href='../CSS/styles.css'; styles.rel='stylesheet';

    let poppins=document.createElement('link');
    poppins.href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'; 
    poppins.rel='stylesheet';

    let materializeJS=document.createElement('script');
    materializeJS.src='../JS/materialize.js'; 
    materializeJS.type='text/javascript';

    let tags=[materializeCSS,materializeJS,googleapis,gstatic,poppins,styles];

    for(var i=0; i<=tags.length-1; i++){
        head.appendChild(tags[i]);
    }

    let titleItem=document.getElementById(`title`);
    titleItem.innerHTML=getFrameValue(value).replace(`'`,``).replace(`'`,``).toUpperCase();
}

function getFrameValue(value){
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) 
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == value) 
            return decodeURI(pArr[1]); //return value
    }
}

document.addEventListener('DOMContentLoaded', function() {
    //window.onerror = function(){return true;}
    M.AutoInit();
    crearSecciones();
    crearMenu();
    onView(0);
});
