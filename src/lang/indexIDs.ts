//Index IDs
export default new Map<any, string>([
    //nav elements
    [document.querySelectorAll('nav > .element > a')[1], 'nav-el-txt-1'],
    [document.querySelectorAll('nav > .element > a')[2], 'nav-el-txt-2'],
    [document.querySelectorAll('nav > .element > a')[3], 'nav-el-txt-3'],
    [document.querySelectorAll('nav > .element > a')[4], 'nav-el-txt-4'],
    //hero elements
    [document.querySelector('#hero > .txt-biggest'), 'hero-title'],
    [document.querySelector('#hero > .txt-bigger'), 'hero-subtitle'],
    [document.querySelector('#hero > .btn > .txt-medium'), 'hero-btn-txt'],
]);