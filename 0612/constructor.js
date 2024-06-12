class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  set name(value) {
    if(typeof(value) ==="string") {
      this._name = value;
    } else {
      throw new Error("이름은 문자열이어야 합니다.");
    }
  }

  get name() {
    return this._name;
  }

  set age(value) {
    if(typeof(value) ==="number") {
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }

  set job(value) {
    if(typeof(value) ==="string") {
      this._job = value;
    }
  }

  get job() {
    return this._job;
  }
}

const component = () => {
  let obj = new BasicData("공욱재", 26, "미남");

  const decision = () => {
    if (obj instanceof BasicData) {
      
      return `
      <html>
      <body>
      <h1>이름: ${obj.name}</h1>
      <h2>나이: ${obj.age}</h2>
      <h3>직업: ${obj.job}</h3>
      </body>
      </html>
      
      `;
    } else {
      console.error('규격 미달');
    }

  };

  return decision();
}

console.log(component());