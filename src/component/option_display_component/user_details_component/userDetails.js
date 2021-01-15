let defaultValue = [ {
        cell: "(484)-469-8775" ,
dob: {date: "1961-07-09T20:36:26.196Z", age: 60} ,
email: "summer.smith@example.com" ,
gender: "female",
id: {name: "", value: null} ,
location: {
    city: "Napier" ,
    coordinates: {latitude: "67.9520", longitude: "159.6543"} ,
    country: "New Zealand" ,
    postcode: 33290 ,
    state: "Marlborough" ,
    street: {number: 6011, name: "South Road"}
 },
timezone: {offset: "-10:00", description: "Hawaii"} ,
login: {uuid: "a719c764-bfcb-4d82-be7b-c4283a794bdc", username: "heavypeacock828",
 password: "ticket", salt: "S7USYIln", md5: "5d5b9be50b999c752089cdfd921b7cc2", } ,
name: {title: "Mrs", first: "Summer", last: "Smith"} ,
nat: "NZ" ,
phone: "(264)-627-8755" ,
picture: {large: "https://randomuser.me/api/portraits/women/51.jpg", 
medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
 thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg"} ,
registered: {date: "2004-07-31T00:00:54.245Z", age: 17}
    } ]

export const userDetailsExtractor = (data) => {
  const {results}  = data ;
  let newUserDetails ;
  if(results){
     newUserDetails = JSON.stringify(results, null, 2);
    newUserDetails = JSON.parse(newUserDetails) ;
  }
  console.log ("data from API is", newUserDetails);
    return (newUserDetails) ? newUserDetails : defaultValue  ;
};