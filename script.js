const horses = [
  {
    name: "maythehorsebewithu",
    active: true,
    country: "AUS",
    yearOfBirth: 2000,
    hourlyRate: 30,
    numOfHoursWorked: 2000,
  },
  {
    name: "Seabiscuit",
    active: true,
    country: "USA",
    yearOfBirth: 2007,
    hourlyRate: 50,
    numOfHoursWorked: 2500,
  },
  {
    name: "Justify",
    active: true,
    country: "USA",
    yearOfBirth: 2004,
    hourlyRate: 30,
    numOfHoursWorked: 2000,
  },
  {
    name: "Lost in the Fog",
    active: false,
    country: "AUS",
    yearOfBirth: 1981,
    hourlyRate: 88,
    numOfHoursWorked: 900,
  },
  {
    name: "Eclipse",
    active: false,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 12,
    numOfHoursWorked: 9000,
  },
  {
    name: "Citation",
    active: true,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 42,
    numOfHoursWorked: 6450,
  },
];

// console.log(horseName);

//1. Use .forEach to print the name of each horse.
for (let i = 0; i < horses.length; i++) {
  console.log(horses[i].name);
}

//2. Use .map to return an array of the years of birth for each horse.
const horseBirthYear = horses.map(function (horse) {
  return horse.yearOfBirth;
});
console.log(horseBirthYear);

//3. Use .filter to filter in only the active horses.
const activeHorse = horses.filter(function (horse) {
  return horse.active === true;
});
console.log(activeHorse);

//4. Use the appropriate method(s) to select the horses from Australia.
const ausHorse = horses.filter(function (horse) {
  return horse.country === "AUS";
});
console.log(ausHorse);

//5. Use the appropriate method(s) to select horses that earn $50 or more per hour.
const earn50Plus = horses.filter(function (horse) {
  return horse.hourlyRate >= 50;
});
console.log(earn50Plus);

//6. Use the appropriate method(s) to get a list of the totals earned by each horse.
const totalEarning = horses.map(function (horse) {
  return horse.hourlyRate * horse.numOfHoursWorked;
});
console.log(totalEarning);

//BOUNS
horses.sort((a, b) => b.yearOfBirth - a.yearOfBirth);
console.log(horses);
