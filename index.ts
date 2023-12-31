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
interface Rectangular{
    height: number,
    width: number
}

const rectangular: Rectangular = {
    height: 20,
    width: 10,
  
}
console.log(rectangular)

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
  
    public constructor(private readonly name: string) {
        // TS provides a way of defining a class member in the constructor, by adding the visibility modifiers to the parameter
        // the readonly keyword prevents the class member from being changed
        this.name = name
    }

    public getName(): string{
        return this.name
    }
}
const persons = new Persons('John')
console.log(persons.getName()) // person.name cannot be accessed outside the class since its private

//inheritance in classes
// implements
interface Shape{
    getArea:() => number
}

class Rectangles implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) { }
    
       public getArea():number {
        return this.width * this.height
    }
}

const myRect = new Rectangles(10, 20)
console.log(myRect.getArea()) // 200

//extends
interface Shapes{
    drawShape : ()=> number
} 

class Squares implements Shapes{
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public drawShape(): number{
        return this.width * this.height
    }
}

class Rectangle extends Squares{
    public constructor(width: number) {
        super(width, width)
    }
}
const mySq = new Squares(20,0)
console.log(mySq.drawShape()) //400

//Abstract Classes
abstract class Polygon{
    public abstract getArea(): number

    public toString(): string{
        return `Polygon[{area=$this.getArea()}]`
    }
}
class Triangle extends Polygon {
       
    public constructor(protected readonly width: number, protected readonly height: number) {
        super()
    }
    public getArea(): number{
        return this.width * this.height
    }
}


//GENERICS
// functions
function createPair<S,T>(v1:S, v2:T):[S,T] {
    return [v1,v2]
}
console.log(createPair<string, number>('hello', 42)) //['hello', 42]

//classes
class Pair<U> { 
    private _value: U | undefined
    constructor(private name: string){}

    public setValue(value: U) {
        this._value= value
    }

    public getValue(): U | undefined{
        return this._value
    }

    public toString(): string{
        return `${this.name}: ${this._value}`
    }
}

let value = new Pair<number>('myNumber');
value.setValue(10)
console.log(value.toString())

//type aliases
type Wrapped<T> = { value: T }
const wrappedString: Wrapped<string> = { value: 'Hello' };


//Default value
class NamedValue<T = string>{
    private _value : T | undefined
    constructor (private name : string){}

    public setValue(value: T) {
        this._value = value
    }

    public getValue(): T |undefined{
        return this._value
    }

    public toString(): string{
        return `${this.name}: ${this._value}`
    }
}

let values = new NamedValue('myNumber')
values.setValue('myValue')
console.log(value.toString()); // myNumber: myValue

//extends
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T]{
    console.log(`creating pair: v1='${v1}', v2='${v2}'`)
    return [v1,v2];
}
createLoggedPair("hello", 4);

//UTILITY TYPES
//partial
interface Point{
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}
pointPart.x =10

// Required
interface Bus{
    make: string
    model: string
    mileage?: number
}

let myBus: Required<Bus> = {
    make: 'Scania',
    model: 'EBZ',
    mileage: 1000
}

//Record
const namesAgeMap: Record<string, number> = {
    //Record<string, number> is equivalent to { [key: string]: number }
    'Alice': 21,
    "Bob": 25
}

//omit
interface Person{
    name: string
    age: number
    location?: string
}

let bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
     // `Omit` has removed age and location from the type and they can't be defined here
}

//Pick
interface Person {
    name: string
    age: number
    location?: string
}

let james: Pick<Person, 'name'>={
    name: 'James'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
}

//Exclude
type MyType = string|number|boolean
const type: Exclude<MyType, string> = true; 
//a string cannot be used here since Exclude removed it from the type. 
console.log(typeof (type)) //boolean

//ReturnType
type PointGenerator = () => {
    x: number
    y:number
}

const point: ReturnType<PointGenerator> = {
    x: 10,
    y:20
}

//Parameters
type addNumbers = (p: { x: number; y: number }) => void
const pointer :Parameters < addNumbers > [0]={
    x: 10,
    y:20
}

//readonly
interface People{
    name: string
    age: number
}
const people: Readonly = { 
    name: 'John',
    age:35
}


//Keyof
//explicit keys
interface Someone{
    name: string
    age: number
}
function printSomeoneProperty(someone: Someone, property: keyof Someone) {
    console.log(`Printing person property ${property}: "${someone[property]}"`);
  }
  
let someone = {
    name: 'James',
    age:46    
}
printSomeoneProperty(someone, 'name');// will print someone name

//index signatures
type StringMap = { [key: string]: unknown }
//`keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap{
    return { [property]: value }
}

//NULL and UNDEFINED
//Type
let val: string | undefined | null = null
console.log(typeof val)//object
val = "hello"
console.log(typeof val)// string
val = undefined
console.log(typeof val)// undefined

//optional chaining
interface House{
    sqft: number
    yard?: {
        sqft: number
    }
}

function printYardSize(house:House) {
    const yardSize = house.yard?.sqft
    if (yardSize === undefined) {
        console.log('No yard')
    } else {
        console.log(`Yard is ${yardSize} sqft`) 
    }
}

let home:House={
    sqft: 1000
}
printYardSize(home)// Prints 'No yard'

//nullish coalescence
function printMileage(mileage:number | null| undefined) {
    console.log(`Milage: ${mileage ??'Not Available'}`)
}

printMileage(null)// Prints 'Mileage: Not Available'
printMileage(0)// Prints 'Mileage: 0'

//null assertion
function getVal(): string| undefined {
    return 'hello'
}
const str = getVal()
console.log('value length: ' + value!.length)

//array bounds handling
let arr: number[] = [1, 2, 3, 4]
let v = arr[0] // with `noUncheckedIndexedAccess` this has the type `number | undefined`