//Style
import './style.scss';

//LANG IDs
import IDs from './lang/indexIDs.js';

//*VH FIX
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//* JSON READER
//get the content of a file in another path
function getFileContent(path: string): string | void {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", path, false);
    xmlhttp.send();
    if (xmlhttp.status != 200) {
        return;
    }
    return JSON.parse(xmlhttp.responseText);
}

//*LANGUAGE HANDLER
function getLanguage(): string {
    if (localStorage.getItem('language') != null) {
        return localStorage.getItem('language')!;
    }
    setLanguage('en');
    return 'en';
}

function setLanguage(lang: string): void {
    localStorage.setItem('language', lang);
}

//*TEXT LOADER
setLanguage('en');
loadText(IDs);

function loadText(pageIDs: Map<any, string>): void {

    let data: string = getFileContent('/languages/' + getLanguage() + '.json')!;

    pageIDs.forEach((value: string, key: any) => {
        key != null && value != null && value.length > 0 ? key.innerHTML = data[value] + '' : data['en'] + '';
    });
}

//*LANGUAGE SWITCHER
var langOpen:boolean = false;
document.getElementById("lang")!.addEventListener("click", () => !langOpen ? openLangSide() : closeLangSide());
document.getElementById("back_from_lang")!.addEventListener("click", () => !langOpen ? openLangSide() : closeLangSide());

function openLangSide() {
    document.getElementById("langSide")!.style.marginLeft = "0";
    document.getElementById("main")!.style.marginLeft = "16rem";
    document.getElementById("main")!.style.filter = "blur(4px)";
    langOpen = true;
}

function closeLangSide() {
    document.getElementById("langSide")!.style.marginLeft = "-16rem";
    document.getElementById("main")!.style.marginLeft = "0";
    document.getElementById("main")!.style.filter = "blur(0px)";
    langOpen = false;
}

document.getElementById('langSide__lang__en')!.addEventListener('click', () => {
    setLanguage('en');
    loadText(IDs);
    closeLangSide();
});

document.getElementById('langSide__lang__it')!.addEventListener('click', () => {
    setLanguage('it');
    loadText(IDs);
    closeLangSide();
});

document.getElementById('langSide__lang__es')!.addEventListener('click', () => {
    setLanguage('es');
    loadText(IDs);
    closeLangSide();
});
