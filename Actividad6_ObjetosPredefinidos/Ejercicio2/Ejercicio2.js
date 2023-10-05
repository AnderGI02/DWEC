const validateDate = ({ day, month, year }) => {
  return {
    validDay: Math.abs(day) > 31 ? 1 : Math.abs(day),
    validMonth: Math.abs(month) > 12 ? 1 : Math.abs(month),
    validYear: Math.abs(year),
  };
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
  //Indicar qué día de la semana cae (en texto)
  //Indicar si el año de la fecha es bisiesto
  //Mostrar cuándo será el próximo domingo
  //Mostrar la fecha correspondiente al primer día del mes
  //Indicar cuántos días quedan hasta vuestro cumpleaños
  //Indicar cuántos años han pasado / quedan desde / hasta la fecha y hoy (asumimos 365 días)
  //Indicar en qué día cae Navidad ese año
  //Pedir al usuario una fecha en formato dd/mm/yyyy y convertirla a una fecha
};

showDate({
  day: -41,
  month: 16,
  year: -5002,
});
