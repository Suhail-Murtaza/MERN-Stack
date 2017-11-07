(function() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.upper{z-index: 3;position:fixed;bottom:0%;right:0%} #box{display:none;opacity:0.9;background-color:orange;color:white;text-align:center;padding-bottom:0%;margin-bottom:0%;border-radius:2px;height:200px;overflow:hidden} #btn{margin-top:0%;padding-top:0%;width:150px;height:30px;background-color:tomato;color:white;border-color:tomato;border-radius:2px}   #btn:active{width:152px;height:32px} ';
    document.head.appendChild(style);
    let div = document.createElement('div');
    div.setAttribute('class', 'upper');
    document.body.appendChild(div);
    let innerDiv = document.createElement('div');
    innerDiv.setAttribute('id', 'box');
    div.appendChild(innerDiv);
    let heading = document.createTextNode('Hello World');
    innerDiv.appendChild(heading);
    let button = document.createElement('button');
    button.setAttribute('id', 'btn');
    div.appendChild(button);
    let text = document.createTextNode('Click Me');
    button.appendChild(text);
    let counter = 0; //to check the click when to open and when to close the box on click
    button.addEventListener('click',
        function hide() {
            counter++;
            if (counter % 2 == 0) {
                document.getElementById('box').style.display = "none";
            } else {
                document.getElementById('box').style.display = "block";
            }
        });


}());