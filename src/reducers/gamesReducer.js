const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

//ACTION
//object that has a type that describes what you wanna do

//ACTION CREATOR
//
// const fetchGames = (userData) => {
//   return {
//     type: "FETCH_GAMES",
//     payload: userData,
//   };
// };

// fetchGames();

export default gamesReducer;
