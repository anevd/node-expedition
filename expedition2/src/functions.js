const fs = require('fs');

function getTexts(file) {
  const PATH = './src';
  return fs.readFileSync(`${PATH}/${file}`, 'utf-8');
}

// позволяет выбрать всех бортмехаников женщин
function getRightEngineer() {
  let crewArray = getTexts('crew.txt').split('\n').slice(1);
  crewArray = crewArray.map((el) => el.split(', ')).filter((el) => el.includes('Бортмеханик') && el.includes('ж')).map((el) => el.join(', '));
  return crewArray;
}

// позволяет выбрать всех врачей со стажем более 10 лет
function getRightDoctor() {
  let crewArray = getTexts('crew.txt').split('\n').slice(1);
  crewArray = crewArray.map((el) => el.split(', ')).filter((el) => el.includes('Врач')).filter((arr) => +arr[arr.length - 1] > 10).map((el) => el.join(', '));
  return crewArray;
}

// позволяет выбрать всех капитанов со стажем более 30 лет
function getRightCaptain() {
  let crewArray = getTexts('crew.txt').split('\n').slice(1);
  crewArray = crewArray.map((el) => el.split(', ')).filter((el) => el.includes('Капитан')).filter((arr) => +arr[arr.length - 1] > 30).map((el) => el.join(', '));
  return crewArray;
}

// Позволяет отобрать все луноходы
function getAllMoonRover() {
  let equipmentArray = getTexts('equipment.txt').split('\n').slice(1);
  equipmentArray = equipmentArray.map((el) => el.split(', ')).filter((el) => el.includes('луноход')).map((el) => el.join(', '));
  return equipmentArray;
}

// позволяет выбрать только те луноходы, которые смогут прослужить больше 5 лет
function getRightMoonRovers() {
  let equipmentArray = getTexts('equipment.txt').split('\n').slice(1);
  equipmentArray = equipmentArray.map((el) => el.split(', ')).filter((el) => el.includes('луноход')).filter((arr) => +arr[arr.length - 1] > 5).map((el) => el.join(', '));
  return equipmentArray;
}

// позволяет выбрать межзвездную ракету с максимальной дальностью полёта
function getRightRocket() {
  let rocketsArray = getTexts('rockets.txt').split('\n').slice(1);
  rocketsArray = rocketsArray.map((el) => el.split(', ')).filter((el) => el.includes('межзвездная')).sort((a, b) => +b[b.length - 1] - +a[a.length - 1]);
  return rocketsArray[0].join(', ');
}

module.exports = {
  getRightEngineer,
  getRightDoctor,
  getRightCaptain,
  getAllMoonRover,
  getRightMoonRovers,
  getRightRocket,
};
