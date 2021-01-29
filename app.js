
class Producto {
    constructor(numerSerie){
        this.numerSerie = numerSerie;  
        this.garantia = 1000;      
    }

    static get INfo(){
        console.log('StoreLand')
    }

    set GaraDis(variable){
        this.garantia = this.garantia -  variable
    }

    get SetGa() {
        return this.garantia 
    }
}


class Pantalla  extends Producto{
    constructor(numerSerie,color, brand, height){
        super(numerSerie)
        this.color = color;
        this.brand = brand;
        this.height = height;
    }

    TurnOnTv(){
        console.log(`The Tv ${this.brand} is starting`)
        setTimeout(() => {     
            this.GaraDis = 1       
            console.log(`The TV ${this.brand} is On`)
        }, 1000)
    }

    TurnOffTv(){
        console.log(`The TV ${this.brand} is Closing`);
        setTimeout(()=> {   
            this.GaraDis = 1       
            console.log(`The Tv ${this.brand} Shutdown ... Bye!`)
        }, 1000);
    }

    set cost(cost){
        this.lowCost = cost
    }

    get (){
        return this.lowCost
    }


}

const Samsung = new Pantalla(100,'Black', 'Samsung', '25');
const LG = new Pantalla(100,'Black', 'LG','45')

class Person {
    constructor(name, hair, eyes, weight, typeOfperson){
        this.name =  name;
        this.hair = hair;
        this.eyes = eyes;
        this.weight = weight;
        this.typeOfperson = typeOfperson;
    }
    
    CompleteName(){
        return `${this.name}`
    }

    talk(){
        if(this.typeOfperson === 'M'){
            return 'Not Talking'
        }else{
            return "Yes I talk a lot"
        }
    }

    Hello(){
        return `Hello my name is ${this.name} :)`
    }

    
    set full(variable) {
        this.fullname = variable
    }
    get FullName(){
        return `${this.fullname}`
    }
}

class Actor extends Person{
    constructor(profesional, bestMovie ,name, hair, eyes, weight, typeOfperson){
        super(name, hair, eyes, weight, typeOfperson)        
        this.profesional = profesional;
        this.bestMovie = bestMovie
    }

    Hi(){
        return `Hi I'm ${this.profesional} Actor and ${super.Hello()} And My best movie was ${this.bestMovie}`  
    }
}

const ANNA_SOPHIA_ROBB = new Actor(
        'Professional', 
        'Bridge To Terabithia', 
        'AnnaSophia Robb', 
        'Blonde', 
        'Green eyes', 'perfect', 'Female');