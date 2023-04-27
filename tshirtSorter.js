// Write your solution below:

function sortTShirts(string) {
    // Convert the string to an array of characters.
    const characters = string.split('')
  
    // Create an object to store the count of each character.
    const counts = {}
    for (const character of characters) {
      counts[character] = (counts[character] || 0) + 1
    }
  
    // Create an array to store the sorted characters.
    const sortedCharacters = []
    for (const [character, count] of Object.entries(counts)) {
      for (let i = 0; i < count; i++) {
        sortedCharacters.push(character)
      }
    }
  
    // Return the sorted array of characters.
    return sortedCharacters.join('')
  }

// second option to solve
function sortTShirts(tShirts) {
    let sCount = 0
    let mCount = 0
    let lCount = 0
  
    // Count the number of each t-shirt size
    for (let i = 0; i < tShirts.length; i++) {
      if (tShirts[i] === 's') {
        sCount++;
      } else if (tShirts[i] === 'm') {
        mCount++
      } else {
        lCount++
      }
    }
  
    // Build the sorted string by adding the right number of each size
    let sortedTShirts = ''
    for (let i = 0; i < sCount; i++) {
      sortedTShirts += 's'
    }
    for (let i = 0; i < mCount; i++) {
      sortedTShirts += 'm'
    }
    for (let i = 0; i < lCount; i++) {
      sortedTShirts += 'l'
    }
  
    return sortedTShirts
  }


const unsortedTShirts = 'slsmmsllsmsmlmsls';
const sortedTShirts = sortTShirts(unsortedTShirts);
console.log(sortedTShirts); // sssssssmmmmmlllll


  // another option to solve
 /* function sortTShirts(sizes) {
    let sCount = 0
    let mCount = 0
    let lCount = 0
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i] === 's') {
        sCount++
      } else if (sizes[i] === 'm') {
        mCount++;
      } else if (sizes[i] === 'l') {
        lCount++
      }
    }
    return 's'.repeat(sCount) + 'm'.repeat(mCount) + 'l'.repeat(lCount)
  }

    let tShirts = 'slsmmsllsmsmlmsls'
    let sortedTShirts = sortTShirts(tShirts)
    console.log(sortedTShirts); // outputs "sssssssmmmmmlllll"*/