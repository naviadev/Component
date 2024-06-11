 const userInfo = (name, age, job) => {
  
  return {
    name : name,
    age : age ,
    job : job,
  }

};

const person = userInfo('배성빈', 1, '학생');

person.address = '대전'

console.log(person);

