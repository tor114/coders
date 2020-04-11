const data = {
  userID: 504,
  name: "Joe",
  surname: "Doe",
  lastLogged: "12:30:45 1 November 2019"
};

/**
 * Poniżej pisz swój kod!
 */

const printObject = ({userID, name, lastLogged}) => {
  console.log(userID, name, lastLogged);
  return [userID, name, lastLogged];
};

/**
 * Nie modyfikuj tego kodu!
 */
export {
  printObject
};