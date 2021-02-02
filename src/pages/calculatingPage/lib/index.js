function calcTotal({gender, height, weight, age, activity}) {
  if (gender === 'female') {
    return Math.round((447.6 + (9.2 * +weight) + (3.1 * +height) - (4.3 * +age)) * +activity);
  } else {
      return Math.round((88.36 + (13.4 * +weight) + (4.8 * +height) - (5.7 * +age)) * +activity);
  }
}

export{
  calcTotal
}