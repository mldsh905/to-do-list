//update list
import {createList} from "./create-list";


function updateList() {
    const content = document.querySelector(".content");
    content.textContent = "";
    let data=(JSON.parse(localStorage.getItem('key')))||[];
    data.forEach(item => {
        createList(item)
    })
}

export {updateList}