//Array Methods with Callbacks

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

//forEach method

horses.forEach((element) => {
    console.log(element.name);
})

//map method

const birthYear = horses.map(element => element.yearOfBirth)
console.log(birthYear);

//filter method

const active = horses.filter(element => element.active === true)
console.log(active);

//Question 4 - filter

const aus = horses.filter(element => element.country === 'AUS')
console.log(aus);

//Question 5 - filter

const rich = horses.filter(element => element.hourlyRate >= 50)
console.log(rich);

//Question 6 - 

const earnings = horses.map(element => element.hourlyRate * element.numOfHoursWorked)
console.log(earnings);

//BONUS

const age = horses.sort((a,b) => b.yearOfBirth - a.yearOfBirth)
console.log(age);


  