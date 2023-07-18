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

//extended interface
interface square{
    height: number,
    width: number
}
interface ColorSquare extends square{
    color: string
}

const colorSquare: ColorSquare = {
    height: 20,
    width: 20,
    color: "black"
    
}

//union | (or)

function printStatusCode(code: string| number) {
    console.log(`my status is ${code}.`)
}
printStatusCode(404) //404
printStatusCode('404') //404

// TS functions
//Return type
function getTime(): number {
    // the `:number` here specifies that this function returns a number
    return new Date().getTime();
}

//void return type
function printAny():void {
    console.log('hello') // hello
    console.log(3) // 3
}

//Parameter 
function multiply(a:number, b: number) {
    return a*b
}

// optional parameters
function add(a:number,b:number,c:number) {
    return a+b+(c||0)
}
console.log(2, 5) //7

//default parameters
function pow(value:number, exponent:number = 10) {
    return value ** exponent // 10000000000
}

//named parameter
function divide({ divided, divisor }: {
    divided: number, divisor:number
}) {
    return divided/divisor
}

// rest parameters
function adding(a: number, b: number, ...rest: number[]) {
    return a +b + rest.reduce((p,c)=> p+c, 0)
}

//type alias
type Negate = (value: number) => number

const negateFunction:Negate = (value)=> value *-1


//CASTING
// as
let x: unknown = 'hello'
console.log((x as string).length)

//casting with <>
let y: unknown = 'hello'
console.log((<string>x).length)

// force casting
let z = 'hello'
console.log(((x as unknown) as string).length);


//Classes in TS
// Members: Types
class Person {
    name: string;
}
const person = new Person()
person.name = 'John';
console.log(person) // Person{name:'John'}
console.log(person.name) // John

//members: visibility
class Persons {
  
    public constructor(private name: string) {
        // TS provides a way of defining a class member in the constructor, by adding the visibility modifiers to the parameter
        this.name = name
    }

    public getName(): string{
        return this.name
    }
}
const persons = new Persons('John')
console.log(persons.getName()) // person.name cannot be accessed outside the class since its private