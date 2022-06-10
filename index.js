// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversName, string){
    return driversName.filter(item => item.toLowerCase() === string.toLowerCase())

}
//console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch(drivers,letter){
    return drivers.filter(function(driver){
        return driver[0].toUpperCase() === letter[0].toUpperCase()
    })
       

}
//console.log (fuzzyMatch(drivers, 'S')); 

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(arrayOfDrivers,string){
   let name = arrayOfDrivers.filter(function(item){
        return item.name === string
    })
    return name;
}
console.log (matchName(drivers, "Bobby"));

















