const tabsBtn = document.querySelectorAll(".map__element");
const tabsItems = document.querySelectorAll(".tabs_map__block");

tabsBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        let currentBtn = item;
        
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach((item)=>{
            item.classList.remove("active");
        });
        tabsItems.forEach((item)=>{
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
});

const tabsBtn2 = document.querySelectorAll(".tabs-item");
const tabsItems2 = document.querySelectorAll(".tabs-ul-item");

tabsBtn2.forEach((item)=>{
    item.addEventListener('click',()=>{
        let currentBtn2 = item;

        let tabIdAbout = currentBtn2.getAttribute("id");
        let currentTabAbout = document.querySelector(tabIdAbout);


        tabsBtn2.forEach((item)=>{
            item.classList.remove('active1');
        });
        tabsItems2.forEach((item)=>{
            item.classList.remove("active1");
        });

        currentBtn2.classList.add('active1');
        currentTabAbout.classList.add('active1');
    });
});

