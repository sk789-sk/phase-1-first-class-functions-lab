// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length-2,array.length)
}

/*const selectingDrivers = (f1,f2) => {
    return [f1,f2]
}*/

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int) {
    const fare = (fare) => {
       return fare * int
    }
    return fare
}

const x = createFareMultiplier()

function fareDoubler(fare){
    return 2*fare
}

function fareTripler(fare){
    return 3*fare
}

function selectDifferentDrivers(array,fnc){
    return fnc(array)
}

