require("dotenv").config();

//Base URL
const base_url = "https://api.rawg.io/api/";

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

export const popularGamesURL = () => `${base_url}${popular_games}`;

