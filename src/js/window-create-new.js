//open/close window
import {addNew} from "./add-new";
import {updateList} from "./update-list";

function addWin() {
    const add_btn = document.querySelector(".add-btn");
    const win = document.querySelector(".window");
    add_btn.addEventListener("click", () => {
        win.style.display = "grid";
        win.addEventListener("click", (item) => {
            if (item.target.classList.value.includes("window")) {
                win.style.display = "none"
            }
        }, {once: true})
    })
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click",()=>{
        win.style.display = "none"
    })

    //create new list
    const modal_btn = document.querySelector(".modal-btn");
    const modal_task = document.querySelector("#task");

    modal_btn.addEventListener("click", () => {
        if (modal_task.value === "") {alert("Please fill in task name")}
        else {
            let data = (JSON.parse(localStorage.getItem('key'))) || [];
            data.push(addNew());
            localStorage.setItem('key', JSON.stringify(data));

            updateList();
            const win = document.querySelector(".window");
            win.style.display = "none";
        }
    })
}

export {addWin}