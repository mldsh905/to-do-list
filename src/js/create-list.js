//create list
function createList(item) {
    const content = document.querySelector(".content");
    const sublist = document.createElement("div");
    sublist.classList.add("sublist");
    sublist.setAttribute("id", item.id)
    content.appendChild(sublist);

    const sublist_left = document.createElement("div");
    sublist_left.classList.add("sublist-left");
    const sublist_right = document.createElement("div");
    sublist_right.classList.add("sublist-right");
    sublist.appendChild(sublist_left);
    sublist.appendChild(sublist_right);

    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = item.checked;
    checkbox.checked ? sublist.classList.add("checked") : sublist.classList.remove("checked");
    const sublist_task = document.createElement("div");
    sublist_task.classList.add("sublist-task");
    const sublist_detail = document.createElement("div");
    sublist_detail.classList.add("sublist-detail");
    sublist_left.appendChild(checkbox);
    sublist_left.appendChild(sublist_task);
    sublist_left.appendChild(sublist_detail);
    checkbox.addEventListener("click", () => {
        checkbox.checked ? sublist.classList.add("checked") : sublist.classList.remove("checked");
        let data = JSON.parse(localStorage.getItem('key'));
        data.forEach(e => {
            if (e.id === item.id) {
                e.checked = checkbox.checked
            }
        })
        localStorage.setItem('key', JSON.stringify(data));
    })

    const sublist_date = document.createElement("div");
    sublist_date.classList.add("sublist-date");
    const sublist_priority = document.createElement("div");
    sublist_priority.classList.add("sublist-priority");
    const sublist_icon = document.createElement("div");
    sublist_icon.classList.add("sublist-icon");
    sublist_right.appendChild(sublist_date);
    sublist_right.appendChild(sublist_priority);
    sublist_right.appendChild(sublist_icon);

    const win1 = document.querySelector(".window1");
    const icon1 = document.createElement("i");
    icon1.classList.add("fa-solid");
    icon1.classList.add("fa-pen-to-square");
    icon1.addEventListener("click", () => {
        const modal_task1 = document.querySelector("#task1");
        const modal_detail1 = document.querySelector("#detail1");
        const modal_ddl1 = document.querySelector("#ddl1");
        const modal_priority1 = document.querySelector("#priority1");
        win1.style.display = "grid";
        const cancel1 = document.querySelector(".cancel1");
        cancel1.addEventListener("click",()=>{
            win1.style.display = "none"
        })
        win1.addEventListener("click", (item) => {
            if (item.target.classList.value.includes("window1")) {
                win1.style.display = "none"
            }
        })


        modal_task1.value = `${sublist_task.textContent}`;
        modal_detail1.value = `${sublist_detail.textContent}`;
        modal_ddl1.value = `${sublist_date.textContent}`;
        modal_priority1.value = `${sublist_priority.textContent}`;
        const modal_btn1 = document.querySelector(".modal-btn1");
        modal_btn1.addEventListener("click", () => {

            sublist_task.textContent = `${modal_task1.value}`;
            sublist_detail.textContent = `${modal_detail1.value}`;
            sublist_date.textContent = `${modal_ddl1.value}`;
            sublist_priority.textContent = `${modal_priority1.value}`;

            let data = (JSON.parse(localStorage.getItem('key'))) || [];
            data.forEach(e => {
                if (e.id === item.id) {
                    e.name = `${modal_task1.value}`;
                    e.detail = `${modal_detail1.value}`;
                    e.date = `${modal_ddl1.value}`;
                    e.priority = `${modal_priority1.value}`;
                }
            })
            localStorage.setItem('key', JSON.stringify(data));

            win1.style.display = "none";
        }, {once: true})
    })


    const icon2 = document.createElement("i");
    icon2.classList.add("fa-solid");
    icon2.classList.add("fa-trash-can");
    sublist_icon.appendChild(icon1);
    sublist_icon.appendChild(icon2);
    icon2.addEventListener("click", () => {
        sublist.remove();
        let data = (JSON.parse(localStorage.getItem('key'))) || [];
        data.forEach(e => {
            if (e.id === sublist.id) {
                data.splice(data.indexOf(e), 1)
            }
        })
        localStorage.setItem('key', JSON.stringify(data));
    })

    sublist_task.textContent = item.name;
    sublist_detail.textContent = `${item.detail}`;
    sublist_date.textContent = `${item.date}`;
    sublist_priority.textContent = `${item.priority}`;

    const modal_task = document.querySelector("#task");
    const modal_detail = document.querySelector("#detail");
    const modal_ddl = document.querySelector("#ddl");
    const modal_priority = document.querySelector("#priority");

    modal_task.value = "";
    modal_detail.value = "";
    modal_ddl.value = "";
    modal_priority.value = "low";
}


export {createList}