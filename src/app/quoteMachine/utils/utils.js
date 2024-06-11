let objectArray = [];
export function randomQuote(obj) {  
  const objectLength = Object.keys(obj).length - 1;
  
  if (objectArray.length === 0) {
    for(let i = 0; i <= objectLength; i++) {
      objectArray.push(i);
    }
  }
  const randomQuoteKey = Math.floor(Math.random() * objectArray.length);
  objectArray.splice(randomQuoteKey, 1);
  
  return obj[randomQuoteKey];
};


export function randomObjectColor(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    throw new Error("Invalid argument. Expected an object.");
  }
  if(!randomObjectColor.values) {
    randomObjectColor.values = [];
  }
  if(randomObjectColor.values.length === 0) {
    randomObjectColor.values = Object.values(obj);
  }
  const randomIndex = Math.floor(Math.random() * randomObjectColor.values.length);
  const randomValue = randomObjectColor.values[randomIndex];
  randomObjectColor.values.splice(randomIndex, 1);
  return randomValue;
}