var cars = [{
        model: 'Suran',
        brand: 'Volkswagen',
        year: 2015
    },
    {
        model: 'Audi TT',
        brand: 'Audi',
        year: 2017
    },
    {
        model: 'Gran turismo',
        brand: 'Maserati',
        year: 2018
    }
]

function Car(model, brand, year) {
    var id = Math.random()

    this.model = model
    this.brand = brand
    this.year = year
    this.getCarName = function() {
        var message = model + ', ' + brand + ', ' + year
        return message
    }
}

var newCars = []
var car
var newCar

for (var i = 0; i < cars.length; i++) {
    car = cars[i]
    newCar = new Car(car.model, car.brand, car.year)
    newCars.push(newCar)
}

console.log(newCars[0].getCarName())