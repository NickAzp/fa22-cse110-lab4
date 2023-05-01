let statistics = {
    redCars: 21,
    blueCars : 45,
    greenCars : 12,
    raceCars : 5,
    blackCars : 40,
    raceCars : 2
};

for (let somestring in statistics) {
    if (somestring.startsWith('r') || statistics.somestring % 2 == 1) {
        console.log(statistics.somestring);
    }
}