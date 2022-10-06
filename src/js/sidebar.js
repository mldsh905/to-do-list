import {createList} from "./create-list";

//change list  --- all task
function all_task() {
    const all = document.querySelector(".all");
    const content = document.querySelector(".content");
    all.addEventListener("click", () => {
        content.textContent = "";
        let data=(JSON.parse(localStorage.getItem('key')))||[];
        data.forEach(item=>{createList(item)})
    })
}


//change list  --- finished
function finished() {
    const finished = document.querySelector(".finished");
    const content = document.querySelector(".content");
    finished.addEventListener("click", () => {
        content.textContent = "";
        let data=(JSON.parse(localStorage.getItem('key')))||[];
        data.forEach(item=>{
            if (item.checked === true){
                createList(item)
            }
        })
    })
}


//change list  --- to do
function to_do() {
    const to_do = document.querySelector(".to-do");
    const content = document.querySelector(".content");
    to_do.addEventListener("click", () => {
        content.textContent = "";
        let data=(JSON.parse(localStorage.getItem('key')))||[];
        data.forEach(item=>{
            if (item.checked === false){
                createList(item)
            }
        })
    })
}

export {all_task, finished, to_do}