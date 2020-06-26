import initPage from './initpage.js';
import { tabsMenu, contactTab, menuTab } from './tabs.js';

initPage();
tabsMenu();
menuTab();

document.getElementById('tab1').addEventListener('click', function() {
    document.getElementById('ul').remove();
    document.getElementById('h3').remove();
    menuTab();
});

document.getElementById('tab2').addEventListener('click', function() {
    document.getElementById('h3').remove();
    document.getElementById('ul').remove();
    contactTab();
});
