import {all_task, finished, to_do} from "./sidebar";
import {addWin} from "./window-create-new";
import {createList} from "./create-list";

addWin();
to_do();
all_task();
finished();

//create main page
let data = (JSON.parse(localStorage.getItem('key'))) || [];
data.forEach(item => {
    createList(item)
})











