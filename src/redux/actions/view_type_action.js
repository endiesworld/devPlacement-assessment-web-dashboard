
 export const view = {
    normal: "Normal" ,
    expanded: "Expanded" ,
 }


export const getNormalView = () => {
  return { 
       type: view.normal 
    }
}

export const getExpandedView = (user) => {
  return { 
       type: view.expanded ,
       payload: user
    }
}

