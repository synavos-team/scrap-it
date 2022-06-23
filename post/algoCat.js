

const categories = ["https://www.google.com", "ahmad", "john", "burger", "cat", "dog", "eat", "shopping"];

mapCat = {

};

exports.find_and_calculate_catrgories = arrayFromArticle => {
  const objMap = {};

  let num = [];

  categories.forEach(e1 =>
    arrayFromArticle.forEach(e2 => {
      const e3 = e2.name.split(/[']/g);
      const e4 = !e3[1] ? e2.name : e3[1];
      if (e1.toLowerCase().trim() === e4.toLowerCase().trim()) {
        objMap[e1] = objMap[e1] + 1 || 1;
      }
    })
  );

  const arr = Object.keys(objMap).map(e => e);

  for (let key in mapCat) {
    arr.forEach(e => {
      if (key === e) {
        num.push(mapCat[key]);
      }
    });
  }
  return num;
};
