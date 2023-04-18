const fs = require('fs');

function getTexts(file) {
  const PATH = './src';
  return fs.readFileSync(`${PATH}/${file}`, 'utf-8');
}

// позволяет выбрать самого опытного капитана
function getRightCaptain() {
  let crewArray = getTexts('crew.txt').split('\n').slice(1);
  crewArray = crewArray.map((el) => el.split(', ')).filter((el) => el.includes('Капитан'));
  crewArray = crewArray.sort((a, b) => +b[b.length - 1] - +a[a.length - 1]);
  return crewArray[0].join(', ');
}

// позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  let crewArray = getTexts('crew.txt').split('\n').slice(1);
  crewArray = crewArray.map((el) => el.split(', ')).filter((el) => el.includes('Врач') && el.includes('ж'));
  crewArray = crewArray.sort((a, b) => +b[b.length - 1] - +a[a.length - 1]);
  return crewArray[0].join(', ');
}

// позволяет выбрать всех бортмехаников
function getAllEngineer() {
  let crewArray = getTexts('crew.txt').split('\n').slice(1);
  crewArray = crewArray.map((el) => el.split(', ')).filter((el) => el.includes('Бортмеханик')).map((el) => el.join(', '));
  return crewArray;
}

// Позволяет отобрать все марсоходы
function getAllRover() {
  let equipmentArray = getTexts('equipment.txt').split('\n').slice(1);
  equipmentArray = equipmentArray.map((el) => el.split(', ')).filter((el) => el.includes('марсоход')).map((el) => el.join(', '));
  return equipmentArray;
}

// позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers() {
  let equipmentArray = getTexts('equipment.txt').split('\n').slice(1);
  equipmentArray = equipmentArray.map((el) => el.split(', ')).filter((el) => el.includes('марсоход')).filter((arr) => +arr[arr.length - 1] > 3).map((el) => el.join(', '));
  return equipmentArray;
}

// позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket() {
  let rocketsArray = getTexts('rockets.txt').split('\n').slice(1);
  rocketsArray = rocketsArray.map((el) => el.split(', ')).sort((a, b) => +b[b.length - 1] - +a[a.length - 1]);
  return rocketsArray[0].join(', ');
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
