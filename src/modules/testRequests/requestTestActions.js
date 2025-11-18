import postTestData from "./postTestData";
import putTestData from "./putTestData";
import deleteTestData from "./deleteTestData";
import patchTestData from "./patchTestData";

const requestTestActions = () => {
    /** @type {HTMLDivElement} */
    const postBtn = document.getElementById('postRequest');
    /** @type {HTMLDivElement} */
    const deleteBtn = document.getElementById('deleteRequest');
    /** @type {HTMLDivElement} */
    const putBtn = document.getElementById('putRequest');
    /** @type {HTMLDivElement} */
    const patchBrn = document.getElementById('patchRequest');

    postBtn.addEventListener('click', postTestData())
    deleteBtn.addEventListener('click', deleteTestData())
    putBtn.addEventListener('click', putTestData())
    patchBrn.addEventListener('click', patchTestData())
}

export default requestTestActions