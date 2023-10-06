const validateDate = ({ day, month, year }) => {
  return {
    validDay: Math.abs(day) > 31 ? 1 : Math.abs(day),
    validMonth: Math.abs(month) > 12 ? 1 : Math.abs(month),
    validYear: Math.abs(year),
  };
};

const addDays = (numbDays) => numbDays * 24 * 60 * 60 * 1000;

const getDayOfWeek = (date) => {
  const dayWeek = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
  };
  return dayWeek[date.getDay()];
};

const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const findNextSunday = (date) => 7 - date.getDay();

const calcDaysBetweenDates = (...dates) {
  const originDate = Math.min(...dates)
  const toDate = Math.max(...dates)
  //en ms 
  //1 ms * 1s/1000ms * 1min/60s * 1h/60min * 1dia/24h
  const difference = toDate - originDate 
  return difference / (1000 * 60 * 60 * 24)
}

const getMonthsFirstDay = (date) =>
  new Date(date.getFullYear(), date.getMonth(), 0);


const calcDaysTillDate = (date, limitDate, cb) => {
  if (date.getMonth() > limitDate.getMonth()) {
    limitDate.setFullYear(date.getFullYear() + 1);
  } else {
    limitDate.setFullYear(date.getFullYear());
  }
  // calculate days remaining using the callback function
  return cb(date.getTime(), limitDate.getTime());
};

//Pedir al usuario un día, mes y año y :
const showDate = ({ day, month, year }) => {
  //Mostrar la fecha en castellano. Probar con fechas no válidas y con valores negativos.
  const { validDay, validMonth, validYear } = validateDate({
    day,
    month,
    year,
  });
  const date = new Date(validYear, validMonth - 1, validDay);
  //Mostrar qué fecha será transcurridos 15 días laborales (incluyendo sábados).
  //NOTA: no se pueden sumar días directamente, hay que emplear setTime y getTime para hacerlo
  const date2 = new Date(date.getTime() + addDays(15));
  //Indicar qué día de la semana cae (en texto)
  getDayOfWeek(date);
  //Indicar si el año de la fecha es bisiesto
  isLeapYear(date.getFullYear());
  //Mostrar cuándo será el próximo domingo
  findNextSunday(date);
  //Mostrar la fecha correspondiente al primer día del mes
  getMonthsFirstDay(date);
  //Indicar cuántos días quedan hasta vuestro cumpleaños
  calcDaysTillDate(date,  new Date(2002, 4, 19), calcDaysBetweenDates);
  //Indicar cuántos años han pasado / quedan desde / hasta la fecha y hoy (asumimos 365 días) ???
  //Indicar en qué día cae Navidad ese año
  calcDaysTillDate(date, new Date(date.getFullYear(), 11, 25), calcDaysBetweenDates)
  //Pedir al usuario una fecha en formato dd/mm/yyyy y convertirla a una fecha
};

showDate({
  day: -41,
  month: 16,
  year: -5002,
});
