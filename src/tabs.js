const tabsMenu = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    div.classList.add('tab-wrap');
    div.setAttribute('id', 'tab-wrap');
    content.appendChild(div.cloneNode());
    
    input.classList.add('tab');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', 'tab1');
    input.setAttribute('name', 'tabGroup1');
    input.setAttribute('checked', '');
    document.getElementById('tab-wrap').appendChild(input.cloneNode(true));

    label.setAttribute('id', 'tab1');
    label.setAttribute('for', 'tab1');
    label.innerHTML = 'Menu';
    document.getElementById('tab-wrap').appendChild(label.cloneNode(true));

    input.removeAttribute('checked');
    input.setAttribute('id', 'tab2');
    document.getElementById('tab-wrap').appendChild(input.cloneNode(true));

    label.setAttribute('id', 'tab2');
    label.setAttribute('for', 'tab2');
    label.innerHTML = 'Contact';
    document.getElementById('tab-wrap').appendChild(label.cloneNode(true));

    div.removeAttribute('class');
    div.removeAttribute('id');
    div.classList.add('tab__content');
    div.setAttribute('id', 'tab__content');
    document.getElementById('tab-wrap').appendChild(div.cloneNode(true));
};

const contactTab = () => {
    const tabContent = document.getElementById('tab__content');

    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    h3.setAttribute('id', 'h3');
    h3.innerHTML = 'Contact';
    tabContent.appendChild(h3);

    li.innerHTML = 'PHONE: (253) 737-4147';
    ul.appendChild(li.cloneNode(true));
    li.innerHTML = 'ADDRESS:1402 Lake Tapps Pkwy. Suite F101, Auburn, WA 98092';
    ul.appendChild(li.cloneNode(true));
    ul.setAttribute('id', 'ul');
    tabContent.appendChild(ul);
};

const menuTab = () => {
    const tabContent = document.getElementById('tab__content');

    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    h3.setAttribute('id', 'h3');
    h3.innerHTML = 'Menu';
    tabContent.appendChild(h3);

    li.innerHTML = 'STARTERS';
    li.setAttribute('id', 'starters');
    ul.appendChild(li.cloneNode(true));
    li.innerHTML = 'SALADS';
    li.setAttribute('id', 'salads');
    ul.appendChild(li.cloneNode(true));
    li.innerHTML = 'BURGERS';
    li.setAttribute('id', 'burgers');
    ul.appendChild(li.cloneNode(true));
    li.innerHTML = 'SANDWICHES & WRAPS';
    li.setAttribute('id', 'sandwiches');
    ul.appendChild(li.cloneNode(true));
    li.innerHTML = 'MACS & ENTREES';
    li.setAttribute('id', 'mac');
    ul.appendChild(li.cloneNode(true));
    ul.setAttribute('id', 'ul');
    tabContent.appendChild(ul);
};

export { tabsMenu, contactTab, menuTab }