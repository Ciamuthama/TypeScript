// explicit type: writing out the type, they are easier to read and more intentional
 let message: string = 'hello world'
 console.log(message)

//implicit type: typescript will guess the type based on the assigned value,

let mess = 'hello world'
console.log(mess)


//typed arrays tuple
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'hello']
ourTuple.push('something')
console.log(ourTuple)

//Typescript object
const car = {
    type: 'toyota'
}

//optional property
const cars: { type: string, mileage?: number } = {
    type: 'toyota'
}
cars.mileage = 2000

//index signatures
const nameAgeMap: { [index: string]: number } = {}
nameAgeMap.Jack = 23 //jack is the index

//numeric enums default/initialized

enum CardinalDirections{
    North=1,
    South,
    West,
    East
}

let current = CardinalDirections.North //logs 0
console.log(CardinalDirections.East);


//Numeric Enums Full Initialized
enum StatusCode{
    NotFound = 404,
    success = 200,
    accepted = 202,
    badRequest = 400
}

StatusCode.NotFound
StatusCode.success

//type aliases
type CarYear = number
type CarType = string
type CarModel = string
type Carses = {
    year: CarYear,
    type: CarType,
    model:CarModel
}

const carYear: CarYear = 2001
const carType: CarType = 'toyota'
const carModel: CarModel = 'corolla'
const c: Carses = {
    year: carYear,
    type: carType,
    model: carModel
}

//creating a new c using alias provided above
const carYear1: CarYear = 2002
const carType1: CarType = 'Lamborghini'
const carModel1: CarModel = 'Uris'
const c1: Carses = {
    year: carYear1,
    type: carType1,
    model:carModel1
}

console.log(c1)
console.log(c)

//interface
interface Rectangle{
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
}
console.log(rectangle)