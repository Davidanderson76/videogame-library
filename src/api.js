require("dotenv").config();

//Base URL
const base_url = "https://api.rawg.io/api/";
//API KEY
const apiKey = process.env.REACT_APP_API_KEY;

// Getting the date

// MONTH
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// DAY
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// current day / month / year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Exporting to bring into app
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${apiKey}`;

//GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${apiKey}`;

//SEARCHED GAME
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${apiKey}&search=${game_name}`;
