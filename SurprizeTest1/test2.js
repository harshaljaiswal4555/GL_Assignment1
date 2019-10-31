function colorMath() {
  let data = [{
    "product": "Truffle",
    "color": "Violet"
  }, {
    "product": "Extract-Hazelnut",
    "color": "Indigo"
  }, {
    "product": "Halibut-Steaks",
    "color": "Indigo"
  }, {
    "product": "Periguita Fonseca",
    "color": "Mauv"
  }, {
    "product": "Nut-Hazelnut, Whole",
    "color": "Indigo"
  }, {
    "product": "Pork-Smoked Kassler",
    "color": "Green"
  }, {
    "product": "Jack Daniels",
    "color": "Mauv"
  }, {
    "product": "Touraine Azay-Le-Rideau",
    "color": "Violet"
  }, {
    "product": "Cake-Sheet Strawberry",
    "color": "Khaki"
  }, {
    "product": "Pie Pecan",
    "color": "Violet"
  }, {
    "product": "Cotes Du Rhone",
    "color": "Violet"
  }, {
    "product": "Beer-Sleemans Honey Brown",
    "color": "Blue"
  }, {
    "product": "Peach-Halves",
    "color": "Teal"
  }, {
    "product": "Tio Pepe Sherry Fino",
    "color": "Goldenrod"
  }, {
    "product": "Coffee-Beans, Whole",
    "color": "Violet"
  }, {
    "product": "Doilies-10, Paper",
    "color": "Goldenrod"
  }, {
    "product": "Tequila-Sauza Silver",
    "color": "Pink"
  }, {
    "product": "Salad Dressing",
    "color": "Goldenrod"
  }, {
    "product": "Red Snapper-Fresh, Whole",
    "color": "Red"
  }, {
    "product": "Chinese Foods-Plain Fried Rice",
    "color": "Mauv"
  }, {
    "product": "Carrots-Mini, Stem On",
    "color": "Purple"
  }, {
    "product": "Straw-Regular",
    "color": "Khaki"
  }, {
    "product": "Turkey-Breast, Boneless Sk On",
    "color": "Green"
  }, {
    "product": "Pastry-Chocolate Marble Tea",
    "color": "Indigo"
  }, {
    "product": "Pepper-Green",
    "color": "Mauv"
  }];

  var temp = [];
  var dataCopy = data;
  var result = [];

  data.forEach(element => {
    let res = dataCopy.filter((el) => el.color === element.color);
    dataCopy = dataCopy.filter((el) => el.color != element.color);

    if (res.length > 0) {
      for (let i = 0; i < res.length; i++) {
        temp.push(res[i].product);
      }
      result.push({
        product: temp,
        count: res.length
      });

      temp = [];
    }

  });

  result.forEach(element => {
    console.log(element);
    document.getElementById("test2").innerHTML+=JSON.stringify(element);
  });
}