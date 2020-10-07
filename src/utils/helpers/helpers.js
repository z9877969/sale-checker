// export const getDataValueRight = (name, value, dataArr) => {
//     if (dataArr.length > 0 && dataArr.find(spec => spec.dataName === name)) return dataArr.find(spec => spec.dataName === name).dataValue;
//     if(name === name) return value;
//     return "";
// }
// dataArr.length > 0 && dataArr.find(spec => spec.dataName === name) && dataArr.find(spec => spec.dataName === name).dataValue || name === name && value || "";

export const getElPropsByEvent = (target, idArr) => {
    const {action, actionId} = target.dataset;
    const parent =  idArr.find(el => target.closest(`#${el.id}`))["id"];  

    if (action === "close") return {
        id: parent,
        action,
    }
    if (action === "open") return {
        id: actionId,
        action,
    }
}

export const getPropsAttribute = atrbValue => atrbValue ? atrbValue : "";