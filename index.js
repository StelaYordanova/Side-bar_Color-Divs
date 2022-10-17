const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-icon');
menuBtn.addEventListener('click', function(event) {
    sidebar.classList.toggle('open');
    if(sidebar.classList.contains('open')){
        sidebar.nextElementSibling.style.padding = '70px 20px 20px 120px';
    } else {
        sidebar.nextElementSibling.style.padding = '70px 20px 20px 20px';
    }
})


function colorDivs(content) {
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.lineHeight = 0;
    container.id = 'colors';
    for(let i = 0; i < 20; i++) {
        const div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.backgroundColor = 'red';
        div.style.display = 'inline-block';
        div.style.border = '1px solid #000';

        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
        });
        container.append(div);
    }

    content.append(container)
}


sidebar.addEventListener('click', function(event) {
    let target = event.target;
    if(target.nodeName !== 'LI')
        return;

    const content = document.querySelector('.content');
    switch(target.innerText) {
        case 'Home':
            content.innerHTML = target.innerText;
            break;
        case 'Table':
            content.innerHTML = target.innerText;
            break;
        case 'Color Divs':
            content.innerHTML = '';
            colorDivs(content);
            break;
        default: 
            content.innerHTML = '404 Not Found';
    }
});

// document.body.background = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`