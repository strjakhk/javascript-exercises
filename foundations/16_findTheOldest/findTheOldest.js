const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

const findTheOldest = function(people) {
    return people.sort((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
        if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return aAge > bAge ? -1 : 1;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
