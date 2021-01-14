/**
 * Actions are fired/dispatched by the applications, however, they are passed to the reducer with the aid 
 * of react-redux library "mapDispatchToProps"
 */

 export const users = {
  male: "Male Users" ,
  female: "Female Users" ,
  all: "All Users" ,
 }


export const getMaleUsers = () => {
  return { 
       type: users.male 
    }
}

export const getFemaleUsers = () => {
  return { 
       type: users.female
    }
}

export const getAllUsers = () => {
  return { 
       type: users.all
    }
}