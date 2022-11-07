export default (nlines: number, nrows: number) : void => {
    const element : Node = document.getElementById("decor")!;

    for (let i = 0; i < nlines; i++) { 
        for (let j = 0; i < nrows; j++) { 
            element.appendChild(bubbleElement);
        }
    }
}

var bubbleElement = document.createElement('div') as Element;
bubbleElement.setAttribute('class', 'bubble');
