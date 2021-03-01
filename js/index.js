function Tab(label, anchor, titlePage) {
    this.label = label;
    this.anchor = anchor;
    this.page = new Page(titlePage); 
}

function Page(titlePage) {
    this.title = titlePage;
}

function createTabHTML(tab) {
    const tabTag = document.createElement('a');
    tabTag.href = `#${tab.anchor}`;
    tabTag.textContent = tab.label;
    document.querySelector('nav').appendChild(tabTag);
}

function createPageHTML(tab) {
    const section = document.createElement('section');
    section.id = tab.anchor;
    section.innerHTML = `
    <h1>${tab.page.title}</h1>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis quam voluptatum, explicabo, nihil sint natus vitae quibusdam optio dolorum dolore enim aspernatur minus omnis voluptate doloribus rerum beatae sed.
    </p>
    `;
    document.querySelector('#container').insertBefore(section, document.querySelector("footer"));
}


// Code métier

let tabs = [];
const KEY_TABS = "tabs";

document.addEventListener('DOMContentLoaded', () => {
    if(window.localStorage) {
        if(window.localStorage.getItem(KEY_TABS)) {
            const tabsString = localStorage.getItem(KEY_TABS);
            tabs = JSON.parse(tabsString);
            for (let tab of tabs) {
                console.log(tab);
                createPageHTML(tab);
                createTabHTML(tab);
            }
        }
    }
});



document.formAddTab.addEventListener('submit', function(e) {
    e.preventDefault();

    const tab = new Tab(
        this.label.value,
        this.anchor.value,
        this.title.value
    )



    createTabHTML(tab);
    createPageHTML(tab);

    tabs.push(tab);

    if (window.localStorage) {
        localStorage.setItem(KEY_TABS, JSON.stringify(tabs));
    }
    
    location.hash = tab.anchor;
});




