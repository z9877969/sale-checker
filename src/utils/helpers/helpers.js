export const getElPropsByEvent = (target, idArr) => {
    const {action, actionId} = target.dataset;
    const parent =  idArr.find(el => target.closest(`#${el.id}`))["id"];  

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