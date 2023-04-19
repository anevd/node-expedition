const {
  getRightEngineer, getRightDoctor, getRightCaptain, getAllMoonRover, getRightMoonRovers, getRightRocket,
} = require('../src/functions');

describe('Экспедиция на Марс', () => {
  describe('Отбор кандидатов', () => {
    let crew;
    beforeEach(() => {
      crew = [
        'Гарри Поттер, м, Капитан, 10',
        'Гермиона Грейнджер, ж, Врач, 12',
        'Рон Уизли, м, Бортмеханик, 11',
        'Джинни Уизли, ж, Бортмеханик, 8',
        'Полумна Лавгуд, ж, Врач, 7',
        'Альбус Дамблдор, м, Капитан, 95',
        'Поппи Помфри, ж, Врач, 46',
        'Джордж Уизли, м, Бортмеханик, 15',
        'Падма Патил, ж, Бортмеханик, 10',
      ];
    });
    it('позволяет выбрать всех бортмехаников женщин', () => {
      const rightEngineer = getRightEngineer();
      expect(rightEngineer).toEqual([crew[3], crew[8]]);
    });
    it('позволяет выбрать всех врачей со стажем более 10 лет', () => {
      const rightDoctor = getRightDoctor();
      expect(rightDoctor).toEqual([crew[1], crew[6]]);
    });
    it('позволяет выбрать всех капитанов со стажем более 30 лет', () => {
      const bestCaptain = getRightCaptain();
      expect(bestCaptain).toEqual([crew[5]]);
    });
  });
  describe('Отбор оборудования', () => {
    let equipment;
    beforeEach(() => {
      equipment = ['Бомбардо-2, марсоход, 4', 'Инсендио‑4, луноход, 7', 'Акцио-3, луноход, 6', 'Депульсо-1, марсоход, 7', 'Люмос-3, луноход, 3', 'Протего-5, марсоход, 5'];
    });
    it('Позволяет отобрать все луноходы', () => {
      const allMoonRover = getAllMoonRover();
      expect(allMoonRover).toEqual([equipment[1], equipment[2], equipment[4]]);
    });
    it('позволяет выбрать только те луноходы, которые смогут прослужить больше 5 лет', () => {
      const rightMoonRovers = getRightMoonRovers();
      expect(rightMoonRovers).toEqual([equipment[1], equipment[2]]);
    });
  });
  describe('Выбор ракеты', () => {
    let rockets;
    beforeEach(() => {
      rockets = ['Силенцио, орбитальная, 34', 'Репаро, межзвездная, 7652', 'Ревелио, орбитальная, 25', 'Обливиэйт, межзвездная, 27843'];
    });
    it('позволяет выбрать межзвездную ракету с максимальной дальностью полёта', () => {
      const rocket = getRightRocket();
      expect(rocket).toBe(rockets[3]);
    });
  });
});
