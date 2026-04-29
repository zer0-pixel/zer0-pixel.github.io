function openTab(tabID, containerClass)
{
    document.querySelectorAll(`.${containerClass} .tab-content .tab-stories`).forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = "none";
    });


    document.querySelectorAll(`.${containerClass} .tab`).forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(tabID);
    activeTab.classList.add('active');
    activeTab.style.display = "block";

    document.querySelector(`[onclick="openTab('${tabID}', '${containerClass}')"]`).classList.add("active");
}

