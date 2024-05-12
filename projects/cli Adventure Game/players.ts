class Play{

    name:string;
    fuel:number=100;
    
    constructor(name:string){
        this.name=name;
    }
    
    fuelDecrease(){
        this.fuel -=10
    }

    fuelIncrease(){
        this.fuel +=50;

        if(this.fuel > 100){
            this.fuel=100
        }
    }

}
export class Player extends Play{
        constructor(name:string){
            super(name)
        }
}
export class Opponent extends Play{
        constructor(name:string){
            super(name)
        }
}

