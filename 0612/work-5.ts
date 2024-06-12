// interface, abstract 를 활용한 의존성 주입

interface animal {
  name: string;
  roar: () => void
}

interface ff {
  sound : string;
}


class Dog implements animal, ff{
  name: string;
  sound : string
  constructor(name: string, sound : string) {
    this.name = name;
    this.sound = sound
  }

  roar() {
    console.log(this.sound)
  }
}

abstract class beast {
  protected testString : string ;
  abstract test() :void
}


class Lion extends beast implements animal,ff  {
  name : string;
  sound : string; 

  constructor(name : string , sound : string, test : string) {
    super()
    this.name = name; 
    this.sound = sound;
    this.testString = test
  }

  roar(){
    console.log(this.sound)
  }
  test(){

  }
}