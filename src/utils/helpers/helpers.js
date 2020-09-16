export const getDataValueRight = (name, value, dataArr) => dataArr.length > 0 && dataArr.find(spec => spec.dataName === name) && dataArr.find(spec => spec.dataName === name).dataValue || name === name && value || "";

export const getIdByEvent = (e, idArr) => {
    const {action} = e.target.dataset;
    const parent =  idArr.find(el => e.target.closest(`#${el}`));  

    if (action === "close") return {
        id: parent,
        action,
    }
    
    // const el = {
    //     id: parent.id,
    //     isRender: false,
    // }
    console.log('terget :>> ');
}