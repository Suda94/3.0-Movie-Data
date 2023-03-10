let movieData = {
    "The Darjeeling Limited": {
        plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
        cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
        runtime: 151,
        rating: 7.2,
        year: 2007,
    },
    "The Royal Tenenbaums": {
        plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
        rating: 7.6,
        year: 2001,
        cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
        runtime: 170,
    },
    "Fantastic Mr. Fox": {
        year: 2009,
        plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
        cast: [
            "George Clooney",
            "Meryl Streep",
            "Bill Murray",
            "Jason Schwartzman",
        ],
        runtime: 147,
        rating: 7.9,
    },
    "The Grand Budapest Hotel": {
        rating: 8.1,
        runtime: 159,
        year: 2014,
        plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
};


//movie data variables: taking the key value from movie data value.
const movieLength = Object.keys(movieData).length;
const movieName = Object.keys(movieData);
let movieInfo = Object.values(movieData);
let movieEntry = Object.entries(movieData);


//checking for varable to display the variable:
// console.log(movieLength);
// console.log(movieName);
// console.log(movieInfo);
// console.log(movieEntry);

//used for rendering Movie's data on the page using the Movie container from index page. 
const movieContainer = document.querySelector(".movie-Container");
const sortBtn = document.querySelector(".sort-btn");

for (let i = 0; i < movieEntry.length; i++) {


    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-wrapper");
    movieCard.innerHTML = `
      <img class="movie-poster" src="./images/${movieName[i]}.jpg" alt="an image of ${movieName[i]} poster" >
      <h2 class="movie-name">${movieName[i]} (${movieInfo[i].year})</h2>
      <details><h3>Plot:</h3><br>
      <p class="movie-plot">${movieInfo[i].plot}</p>
      <br>
      <h3>Cast:</h3><br>
      <p class="movie-cast"><em>${movieInfo[i].cast}</em></p>
      <br>
      <h3>Info:</h3><br>
    <p>(<strong>Rating:</strong> ${movieInfo[i].rating}) <span>(<strong>RUNTIME:</strong>${movieInfo[i].runtime} Minutes)</span></p></details>
    `;
    console.log(movieCard)
    movieContainer.appendChild(movieCard);
}



//take the sort button from the index to link with function to 
document.getElementById("sort-btnID").onclick = function () {
    // Sorted Data
    movieEntry = movieEntry.sort(byName);
    movieContainer.innerHTML = "";

    for (i = 0; i < movieEntry.length; i++) {
        const sortedMovieCard = document.createElement("div");
        sortedMovieCard.classList.add("movie-wrapper");

        sortedMovieCard.innerHTML = `
      <img class="movie-poster" src="./images/${movieEntry[i][0]}.jpg" alt="an image of ${movieEntry[i][0]} poster" onerror="if (this.src != '${movieEntry[i][0]}.jpg') this.src = './images/poster_default.png';">
    
      <h2 class="movie-name">${movieEntry[i][0]} (${movieEntry[i][1].year})</h2>
    
      <details><h3>Plot</h3><br>
      <p class="movie-plot">${movieEntry[i][1].plot}</p>
      <br>
        
      <h3>Cast</h3><br>
      <p class="movie-cast"><em>${movieEntry[i][1].cast}</em></p>
      <br>
    
      <h3>Info</h3><br>
      <p>(<strong>${movieEntry[i][1].rating}</strong> Rating) <span>(${movieEntry[i][1].runtime} Minutes)</span></p></details>
      `;
        movieContainer.append(sortedMovieCard);
    }
    console.log(movieEntry);
};

// here is the fuction to returning sort by Name:

function byName(a,b){
    if(a > b){
        return 1;
    } else if(b > a){
        return -1;
    }else{
        return 0;
    }
    }

// 
// Allow the user to update the data stored in the object by interacting with the webpage ✅ ------------------------------------------

function inputMovie() {
    const inputMovieName = document.getElementById("inputMovieName").value;
    const inputMovieYear = document.getElementById("inputMovieYear").value;
    const inputMovieRating = document.getElementById("inputMovieRating").value;
    const inputMoviePlot = document.getElementById("inputMoviePlot").value;
    const inputMovieCast = document.getElementById("inputMovieCast").value;
    const inputMovieRunTime = document.getElementById("inputMovieRunTime").value;

    // Adds New Data to movieData
    movieEntry.push([
        inputMovieName,
        {
            cast: inputMovieCast,
            plot: inputMoviePlot,
            rating: inputMovieRating,
            runtime: inputMovieRunTime,
            year: inputMovieYear,
        },
    ]);

    const inputMovieCard = document.createElement("div");
    inputMovieCard.classList.add("movie-wrapper");

    inputMovieCard.innerHTML = `
        <img class="movie-poster" src="./images/poster_default.png" alt="an image of ${inputMovieName} poster" >
        <h2 class="movie-name">${inputMovieName} (${inputMovieYear})</h2>
        <details><h3>Plot</h3><br>
        <p class="movie-plot">${inputMoviePlot}</p>
        <br>
        <h3>Cast</h3><br>
        <p class="movie-cast"><em>${inputMovieCast}</em></p>
        <br>
        <h3>Info</h3><br>
        <p>(<strong>${inputMovieRating}</strong> Rating) <span>(${inputMovieRunTime} Minutes)</span></p></details>
      `;

    movieContainer.append(inputMovieCard);
    console.log(movieEntry);
}
