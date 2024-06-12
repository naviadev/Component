type objectA = {
  name: string, age: number, job: string
}


const component_ = (name : string , age : number , job : string ): string | number => {
  let obj: objectA = {
    name: name,
    age: age,
    job: job,
  }

  let innerFunc = (): string => {
    let i: string;

    obj.age >= 20 ?
      i = '여름엔 역시 맥주' :
      i = '여름엔 역시 콜라';

    return i;
  }

  let anotherFunc = (): string => {
    let i : string; 
    obj.job === '무직' ?  
    i = '백수' : 
    i = '자택 경비'
    return i;
  }

  return `
    <h1>${obj.name}</h1>
    <h2>${innerFunc()}</h2>
    <p>${anotherFunc()}</p>
  `
}
