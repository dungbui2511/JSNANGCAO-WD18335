// Lab 3.2
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1); 
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach(function(dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`); 
      } else {
        console.log(`Dog number ${i+1} is still a puppy`);
      }
    });
  }
  // TEST DATA 1: 
  const dogsJulia = [3, 5, 2, 12, 7];
  const dogsKate = [4, 1, 15, 8, 3];
  checkDogs(dogsJulia, dogsKate);
  
  // TEST DATA 2:
  const dogsJulia2 = [9, 16, 6, 8, 3];
  const dogsKate2 = [10, 5, 6, 1, 4];
  checkDogs(dogsJulia2, dogsKate2);
//   Lab 3.3
const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    
    const adults = humanAges.filter(age => age >= 18);
    
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  
    return average;
  }
  
  const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  
  console.log(avg1, avg2);
//   Lab 3.4
  const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    { weight: 8, curFood: 200, owners: ['Matilda']},
    { weight: 13, curFood: 275, owners: ['Sarah', 'John']},  
    { weight: 32, curFood: 340, owners: ['Michael']}
  ];
  
  // 1. Add recommendedFood property
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28); 
  });
  
  // 2. Find Sarah's dog
  const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(dogSarah);
  console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'} `);
  
  // 3. Create arrays containing owners of overeating and underrating dogs
  const ownersEatTooMuch = [];
  const ownersEatTooLittle = [];
  dogs.forEach(dog => {
    if(dog.curFood > dog.recommendedFood) {
      ownersEatTooMuch.push(...dog.owners);
    } else if(dog.curFood < dog.recommendedFood) {
      ownersEatTooLittle.push(...dog.owners);
    }
  });
  
  // 4. Log strings about overeating/undereating dogs
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`); 
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // 5. Any dogs eating an exact amount?
  console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
  
  // 6. Any dogs eating an okay amount? 
  // current > (recommended * 0.90) && current < (recommended * 1.10)
  const checkEatingOkay = dog => 
    dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
    
  console.log(dogs.some(checkEatingOkay));
  
  // 7. Log dogs eating an okay amount
  console.log(dogs.filter(checkEatingOkay));
  
  // 8. Sort dogs by recommended food portion
  const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSorted);