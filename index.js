window.onload = () => {
    changeBasicInfo();
}

function changeBasicInfo() {
    const elementsByName = document.getElementsByName("info");
    for (const element of elementsByName) {
        const infoDiv = document.getElementById(`${element.value}-info`);
        infoDiv.style.display = element.checked ?  "block" : "none";
    }
}