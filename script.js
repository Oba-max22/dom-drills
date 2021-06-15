 
window.addEventListener(
    "DOMContentLoaded", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        container.className = 'header-container';

        const h1 = document.createElement("h1");
        const h1Text = document.createTextNode("This is an h1");
        h1.appendChild(h1Text);
        container.appendChild(h1);
        h1.className = "h1";

        const h2 = document.createElement("h2");
        const h2Text = document.createTextNode("This is an h2");
        h2.appendChild(h2Text);
        container.appendChild(h2);
        h2.className = "h2";

        const h3 = document.createElement("h3");
        const h3Text = document.createTextNode("This is an h3");
        h3.appendChild(h3Text);
        container.appendChild(h3);
        h3.className = "h3";

        const h4 = document.createElement("h4");
        const h4Text = document.createTextNode("This is an h4");
        h4.appendChild(h4Text);
        container.appendChild(h4);
        h4.className = "h4";

        const h5 = document.createElement("h5");
        const h5Text = document.createTextNode("This is an h5");
        h5.appendChild(h5Text);
        container.appendChild(h5);
        h5.className = "h5";

        const h6 = document.createElement("h6");
        const h6Text = document.createTextNode("This is an h6");
        h6.appendChild(h6Text);
        container.appendChild(h6);
        h6.className = "h6";

        const color = ['aqua', 'coral', 'greenyellow', 'blue', 'blueviolet', 'pink', 'purple', 'black'];

        function getRandomColor () {
            let randomColor = color[Math.ceil(Math.random() * color.length)];
            return randomColor;
        }
        
        
        h1.addEventListener('dblclick', () => {
            h1.style.color = getRandomColor();
        });
    
        h2.addEventListener('dblclick', () => {
            h2.style.color = getRandomColor();
        });
    
        h3.addEventListener('dblclick', () => {
            h3.style.color = getRandomColor();
        });
    
        h4.addEventListener('dblclick', () => {
            h4.style.color = getRandomColor();
        });
    
        h5.addEventListener('dblclick', () => {
            h5.style.color = getRandomColor();
        });
    
        h6.addEventListener('dblclick', () => {
            h6.style.color = getRandomColor();
        });

        const button = document.getElementsByClassName('btn-add')[0];

        const unorderedList = document.createElement('ul');
        container.appendChild(unorderedList);

        let n = 0;
        function insertListItem (){
            n++;
            let list = document.createElement('li');
            let listText = document.createTextNode('This is list item ' + n);
            list.appendChild(listText);
            unorderedList.appendChild(list);

            list.addEventListener("click", () => {
                list.style.color = getRandomColor();
            });
    
            list.addEventListener("dblclick", () => {
                list.remove();
            });
        }

        button.addEventListener(
            'click', () => {
                insertListItem();
            } 
        );

        
    }
);