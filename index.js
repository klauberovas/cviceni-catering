//CATERING

const justFood = (number) => {
  return `catering od Flavour Haven pro ${number} lidí za ${number * 350} Kč.`;
};

const yourMama = (number) => {
  return `catering od Your Mama pro ${number} lidí za ${number * 400} Kč.`;
};

const flavourHaven = (number) => {
  return `catering od Flavour Haven pro ${number} lidí za ${number * 450} Kč.`;
};

console.log(justFood(100));
console.log(yourMama(100));
console.log(flavourHaven(100));

const createEvent = (nameEvent, number, message) => {
  return `Událost ${nameEvent} s ${message(number)}`;
};
console.log(createEvent('Inaugurace', 100, justFood));
console.log(createEvent('Dětská oslava', 100, yourMama));
console.log(createEvent('Vánoční párty', 100, flavourHaven));
