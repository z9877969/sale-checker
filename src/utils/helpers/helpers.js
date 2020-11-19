export const getElPropsByEvent = (target, idArr) => {
    const {action, actionId} = target.dataset;
    // console.log('target.closest() :>> ', target.closest(`[data-action-id="${el}"]`));
    const parent =  idArr.find(el => {
        console.log('target.closest :>> ',target.closest(`[data-action-id]`));
        return target.closest(`#${el.id}`) || target.closest(`[data-action-id]`)
    })["id"];  

    switch(action){
        case "open":
            return {
                id: actionId,
                action,
            };
        case "close":
            return {
                id: parent,
                action,
            };
        case  "fullSize": 
            return {
                id: actionId,
                action,
            };
        case "turn":
            return {
                id: actionId,
                action,
            };
        default:
            return;
    }
}

export const getPropsAttribute = atrbValue => atrbValue ? atrbValue : "";

export const getDispatchData = (id, action) => {  
    const payload = {id};
    payload[action] = true;
    return payload;
  };

export const isActiveEl = (activeEls, id) => activeEls.find(el => el.id === id);