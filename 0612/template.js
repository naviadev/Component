const tagComponent = (content, tagT) => {
  return `<${tagT}>${content}<${tagT}>`
}

const divComponent = () => {
  return tagComponent('main', 'div')
}

const h1Component = () => {
  return tagComponent('header', 'h1')
}

const pComponent = () => {
  return tagComponent('p', 'p')
}

const timeFunc = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let years = date.getFullYear();
  let hours = date.getHours();
  let min = date.getMinutes();

  console.log(hours)
}

class TimeManager {
  constructor() {
    this.Time = new Date();
  }
  getTime(str) {
    let getter;

    switch (str) {
      case 'month':
        getter = () => { return this.Time.getMonth() + 1 }
        break;
      case 'day':
        getter = () => { return this.Time.getDate() }
        break;
      case 'years':
        getter = () => { return this.Time.getFullYear() }
        break;
      case 'hours':
        getter = () => { return this.Time.getHours() }
        break;
      case 'min':
        getter = () => { return this.Time.getMinutes() }
        break;

      case 'mm':
        getter = () => { return this.Time.getMilliseconds() }
        break;
    }
    return getter();
  }
}

let component = (tag, content) => {
  return `<${tag}>${content}</${tag}>`
}

let timeComponent = (tag, content, contentType) => {
  if (contentType === 'hours') {
    content > 18 ?
      (() => { document.body.style.backgroundColor = 'black'; document.body.style.color = 'white' })() :
      (() => { document.body.style.backgroundColor = 'white'; document.body.style.color = 'black' })() ;
  }
  return component(tag, content)
}


let controller = () => {
  const root = document.getElementById('main');
  let time = new TimeManager();
  let arr = ['h1,years', 'h2,month', 'h3,day', 'h4,hours', 'h5,min', 'h6,mm'];

  arr.forEach(ele => {
    let tag = ele.split(',')[0];
    let contentType = ele.split(',')[1];

    let timeText = time.getTime(contentType);
    root.innerHTML += timeComponent(tag, timeText, contentType);
  })
}

controller()

