# Array Methods with Callbacks

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Create two files `index.html` and `script.js`
1. Include `script.js` in `index.html` using a `<script>` tag
1. Open `index.html` in your web browser and open the console
1. After answering each section below, `git commit` your work
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

Given the following array of `horses`:

``` js
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
```

Write code to do the following (sometimes it helps to write each solution in a `for` loop first):
1. Use `.forEach` to print the name of each horse.

    Expected output:
    ``` text
    maythehorsebewithu
    Seabiscuit
    Justify
    Lost in the Fog
    Eclipse
    Citation
    ```

2. Use `.map` to return an array of the years of birth for each horse.

    Expected output:
    ``` text
    [2000, 2007, 2004, 1981, 2003, 2003]
    ```

3. Use `.filter` to filter in only the active horses.

    Expected output:
    ``` text
    [
      {name: 'maythehorsebewithu', active: true, country: 'AUS', yearOfBirth: 2000, hourlyRate: 30, …},
      {name: 'Seabiscuit', active: true, country: 'USA', yearOfBirth: 2007, hourlyRate: 50, …},
      {name: 'Justify', active: true, country: 'USA', yearOfBirth: 2004, hourlyRate: 30, …},
      {name: 'Citation', active: true, country: 'AUS', yearOfBirth: 2003, hourlyRate: 42, …}
    ]
    ```

4. Use the appropriate method(s) to select the horses from Australia.

    Expected output:
    ``` text
    [
      {name: 'maythehorsebewithu', active: true, country: 'AUS', yearOfBirth: 2000, hourlyRate: 30, …},
      {name: 'Lost in the Fog', active: false, country: 'AUS', yearOfBirth: 1981, hourlyRate: 88, …},
      {name: 'Eclipse', active: false, country: 'AUS', yearOfBirth: 2003, hourlyRate: 12, …},
      {name: 'Citation', active: true, country: 'AUS', yearOfBirth: 2003, hourlyRate: 42, …}
    ]
    ```

5. Use the appropriate method(s) to select horses that earn $50 or more per hour.

    Expected output:
    ``` text
    [
      {name: 'Seabiscuit', active: true, country: 'USA', yearOfBirth: 2007, hourlyRate: 50, …},
      {name: 'Lost in the Fog', active: false, country: 'AUS', yearOfBirth: 1981, hourlyRate: 88, …}
    ]
    ```

6. Use the appropriate method(s) to get a list of the totals earned by each horse.

    Expected output:
    ``` text
    [60000, 125000, 60000, 79200, 108000, 270900]
    ```

### BONUS

Use the appropriate method to return horses from youngest to oldest **hint:** look up "JS `sort` compare function".

    Expected output:
    ``` text
    [
      {name: 'Seabiscuit', active: true, country: 'USA', yearOfBirth: 2007, hourlyRate: 50, …},
      {name: 'Justify', active: true, country: 'USA', yearOfBirth: 2004, hourlyRate: 30, …},
      {name: 'Eclipse', active: false, country: 'AUS', yearOfBirth: 2003, hourlyRate: 12, …},
      {name: 'Citation', active: true, country: 'AUS', yearOfBirth: 2003, hourlyRate: 42, …},
      {name: 'maythehorsebewithu', active: true, country: 'AUS', yearOfBirth: 2000, hourlyRate: 30, …},
      {name: 'Lost in the Fog', active: false, country: 'AUS', yearOfBirth: 1981, hourlyRate: 88, …}
    ]
    ```
