//add new list
function addNew() {
    const modal_task = document.querySelector("#task");
    const modal_detail = document.querySelector("#detail");
    const modal_ddl = document.querySelector("#ddl");
    const modal_priority = document.querySelector("#priority");
    return ({
        name: `${modal_task.value}`, detail: `${modal_detail.value}`,
        date: `${modal_ddl.value}`, priority: `${modal_priority.value}`,
        id: `${Number(Math.random().toString())}`,checked:false
    })
}

export {addNew}