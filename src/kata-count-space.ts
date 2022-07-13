/**
 * Counts number of space characters
 * @param inputString - the word, where space chasracter should be counted
 * @returns the number of space character
 */
 function countSpace(inputString: string): number {
    let spaceNumber = 0;
    for (let CHARACTER of inputString) {
      if (CHARACTER === ' ') {
        spaceNumber++;
      }
    }
    return spaceNumber
  }

  
  export default countSpace;
  