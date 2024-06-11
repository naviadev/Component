function formatHTML(title, titleTwo, h1, p, language = "Korean") {

  let htmlData = {
    title: title,
    titleTwo: titleTwo,
    h1: h1,
    p: p
  }

  let decision = () => {
    if (language === 'Korean') {
      return htmlData.title;

    } else if (language === 'English') {
      return htmlData.titleTwo;
    }
  };

  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${decision()}</title>
  </head>
  <body>
    <h1>${htmlData.h1}</h1>
    <p>${htmlData.p}</p> 
  </body>
  </html>
  `
  return html
};

console.log(formatHTML('개', 'dog', 'h1태그', 'p태그', 'English'));


