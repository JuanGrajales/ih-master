/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
  // concat() method combines two arrays
  let sortedArr = [...arr]; // ... spread operator - we make a copy of the arr https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

  return sortedArr.sort((a, b) => {
    if (a.year === b.year) {
      if(!a.title){return}
      return a.title.localeCompare(b.title); // localeCompare - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    } else {
      return a.year - b.year;
    }
  });

  // return sortedArr.sort((a,b) => {
  //   if(a.year === b.year){      // if the year is the same then order by title
  //     if(a.title < b.title){
  //       return -1     // the position of the values do not change
  //     } else if(a.title > b.title){
  //       return 1      // the position of the values are swapped
  //     } else {
  //       return 0      // the values are the same, no changes
  //     }
  //   } else {
  //     return a.year - b.year
  //   }
  // })

  // return sortedArr
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (movies) => {
  // let totalCount = 0;
  // for(let i=0; i<movies.length; i++){
  //     let bothConditions = movies[i].genre.includes('Drama') && movies[i].director.includes('Steven Spielberg')
  //     if(bothConditions){
  //         totalCount++
  //     }
  // }
  // return totalCount;

  let filteredMovies = movies.filter((obj) => {
    if (obj.director === "Steven Spielberg" && obj.genre.includes("Drama")) {
      return obj;
    }
  });
  return filteredMovies.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  // map, filter, reduce -> make a copy of the array
  // sort -> mutates the original array
  let copyOfTheArray = [...arr];

  copyOfTheArray.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  }); // sort the entire 250 movies
  let firstTwenty = copyOfTheArray.slice(0, 20); // get the first 20 movies
  let firstTwentyTitles = firstTwenty.map((movie) => {
    return movie.title;
  }); // get the array of first 20 titles
  return firstTwentyTitles; // return the array of titles

  // return [...arr]
  //   .sort(function(a, b) {
  //     return a.title.localeCompare(b.title);
  //   })
  //   .slice(0, 20)
  //   .map(movie => {
  //     return movie.title;
  //   });

  // return [...arr]
  //   .sort((a, b) => a.title.localeCompare(b.title))
  //   .slice(0, 20)
  //   .map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// solution 1
const ratesAverage = (arr) => {
  let sum = 0;
  if (!arr.length) {
    // if arr.length is = 0 = false                !false = true
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].rate) {
      // check if the rate of the movie exists
      sum += arr[i].rate;
    }
  }

  let avg = sum / arr.length;
  return Number(avg.toFixed(2)); // could also use parseFloat
};

// solution 2
// const ratesAverage = (arr) => {
//   // return Number((arr.reduce((sum, curr) => sum + Number(curr.rate), 0)/arr.length).toFixed(2)) || 0;
//     if(!arr.length) {     // if arr.length is = 0 = false                !false = true
//     return 0
//   }

//   let sum = arr.reduce((accum, currentMovie) => {
//     if(currentMovie.rate){
//       return accum + currentMovie.rate
//     }
//   }, 0)

//   let avg = sum/arr.length
//   return Number(avg.toFixed(2))
// }

// Iteration 5: Drama movies - Get the average of Drama Movies
// const dramaMoviesRate = (arr) => {
//  let dramaArr =[]
//   for(let i=0; i<arr.length; i++){
//     if(arr[i].genre.includes("Drama")){
//       dramaArr.push(arr[i])
//     }
//   }
//   return ratesAverage(dramaArr);
// }

const dramaMoviesRate = (arr) => {
  // return ratesAverage(arr.filter(curr => curr.genre.indexOf("Drama") >= 0)) || 0;}
    let dramaArr = arr.filter(function(eachMovie) {
      return eachMovie.genre.indexOf("Drama") >= 0
    })

  return ratesAverage(dramaArr);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function timeConverter(duration) {
  // '2h 5m' '2h' '36m'
  let minutes = 0;
  // for (let i = 0; i < duration.length; i++) {
  //   if (duration[i] === "h") {
  //     minutes += Number(duration[i - 1]) * 60;
  //   } else if (duration[i] === "m") {
  //     minutes +=
  //       duration[i - 2] === " "
  //         ? Number(duration[i - 1])
  //         : Number(duration[i - 2] + duration[i - 1]);
  //     // if (duration[i - 2] === " ") {
  //     //   minutes += Number(duration[i - 1]);
  //     // } else {
  //     //   minutes += Number(duration[i - 2] + duration[i - 1]);
  //     // }
  //   }
  // }
  let array = duration.split("h");
  if (array.length === 1) {
    minutes += parseInt(array[0]);
  } else if (array[1] === "") {
    minutes += array[0] * 60;
  } else {
    minutes += array[0] * 60 + parseInt(array[1]);
  }
  return minutes;
}

function turnHoursToMinutes(movies) {
  return movies.map(function (movie) {
    let copyOfMovie = { ...movie };
    copyOfMovie.duration = timeConverter(movie.duration);
    return copyOfMovie;
  });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average


// const bestYearAvg = (movies) => {
//   if(movies.length === 0){
//     return null
//   }
//   let orderedMovies = orderByYear(movies)
//   console.log(orderedMovies)

//   let bestYear = orderedMovies[0].year
//   let bestRate = 0
//   let year = orderedMovies[0].year
//   let total = 0
//   let howMany = 0; 


//   console.log(orderedMovies, ' ordered in here')

//   for(let i=0; i<orderedMovies.length; i++){
//     if(year != orderedMovies[i].year){ //We have a change in year, so we want to calculate the average 
//       console.log(howMany, ' movies in this year : ',year, ' and the total rating is', total, ' and the average is ', total/howMany)

//       if( (total/howMany) > bestRate ){
//         bestRate = total/howMany
//         bestYear = year
//       }

//       year = orderedMovies[i].year;
//       howMany = 1; 
//       total = orderedMovies[i].rate; 

//     } else { //We are not changing years so we dont' want to calucalate average yet.  
//       howMany++
//       total += orderedMovies[i].rate
//     }

//   }
//   console.log(`The best year was ${bestYear} with an average rate of ${bestRate}`)

//   return `The best year was ${bestYear} with an average rate of ${bestRate}`
// }

const bestYearAvg = (arr) => {
  if(!arr.length){
    return null
  }

  let bestAvg = '';
  let averageRate = 0;

  arrOfMovies.forEach(eachMovie => {
    let counter = 0;
    let averageRateForYear = arrOfMovies.reduce((avRate, movieYear) => {
        if(movieYear.year == movie.year) {
            avRate += movieYear.rate;
            counter++;
        }
        return avRate;
    }, 0)
    averageRateForYear = averageRateForYear/counter;
    if(averageRate <= averageRateForYear && (bestAvg > eachMovie.year || bestAvg === '')) {
        bestAvg = eachMovie.year;
        averageRate = averageRateForYear;
    }
  });
  
  return `The best year was ${bestAvg} with an average rate of ${averageRate}`//bestAvg;
}