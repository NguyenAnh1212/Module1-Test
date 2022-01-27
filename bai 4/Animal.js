class Animal {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newName){
        this.name = newName;
    }
	setWeight(newWeight){
        this.weight = newWeight;
    }
	getName(){
        return this.name;
    }
	getWeight(){
        return this.weight;
    }
	toString(){
        return "Con vật có tên là "+ this.name+" cân nặng "+this.weight;
    }
}
let objAnimal1 = new Animal("Elephant",45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("Cat",30);
objAnimal2.setName("Mouse");






