//---------------------------------------------------
// ARRAY METHODS WITH CALLBACKS

const horses = [
    {
      name: 'maythehorsebewithu',
      active: true,
      country: 'AUS',
      yearOfBirth: 2000,
      hourlyRate: 30,
      numOfHoursWorked: 2000
    },
    {
      name: 'Seabiscuit',
      active: true,
      country: 'USA',
      yearOfBirth: 2007,
      hourlyRate: 50,
      numOfHoursWorked: 2500
    },
    {
      name: 'Justify',
      active: true,
      country: 'USA',
      yearOfBirth: 2004,
      hourlyRate: 30,
      numOfHoursWorked: 2000
    },
    {
      name: 'Lost in the Fog',
      active: false,
      country: 'AUS',
      yearOfBirth: 1981,
      hourlyRate: 88,
      numOfHoursWorked: 900
    },
    {
      name: 'Eclipse',
      active: false,
      country: 'AUS',
      yearOfBirth: 2003,
      hourlyRate: 12,
      numOfHoursWorked: 9000
    },
    {
      name: 'Citation',
      active: true,
      country: 'AUS',
      yearOfBirth: 2003,
      hourlyRate: 42,
      numOfHoursWorked: 6450
    }
]   


// 1.
horses.forEach(function(horse) {
    console.log(horse.name)
})

// 2.
const birthYears = horses.map(function(horse) {
    return horse.yearOfBirth
})
console.log(birthYears)

// 3.
const activeHorses = horses.filter(function(horse) {
    if (horse.active === true) {
        return horse.active === true
    }
})
console.log(activeHorses)

// 4.
const australianHorses = horses.filter(function(horse) {
    if (horse.country === "AUS") {
        return horse
    }
})
console.log(australianHorses)

// 5.
const hourlyRate50OrMore = horses.filter(function(horse) {
    if (horse.hourlyRate >= 50) {
        return horse
    }
})
console.log(hourlyRate50OrMore)

// 6. 
const totalEarned = horses.map(function(horse) {
    return horse.hourlyRate * horse.numOfHoursWorked
})
console.log(totalEarned)

// BONUS (referenced from https://bobbyhadz.com/blog/javascript-sort-array-of-objects-by-date-property)
const youngestToOldest = horses.sort(function(horseA, horseB) {
    return horseB.yearOfBirth - horseA.yearOfBirth
})
console.log(youngestToOldest)
