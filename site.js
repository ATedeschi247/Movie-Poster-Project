/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            trueMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            title: "Albert Tedeschi's Top Movies",
            owner: " Albert Tedeschi",
            github: "https://github.com/ATedeschi247/Movie-Poster-Project",
         
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText(dateArray) {                 //converts array of the date into month, day, year format
                  var year = dateArray[0];
                  var month = this.trueMonths[dateArray[1] - 1];
                  var day = dateArray[2];

                  return month + ' ' + day + ', ' + year;
            },
            like(index) {                             //increases movie's number of likes on click
                  this.movies[index].likes++;
            },
            dislike(index) {                          //increases movie's dislikes on click
                  this.movies[index].dislikes++;
            },
            posterClick(index) {                      //changes the movie's poster on click
                  if(this.movies[index].posterindex < this.movies[index].posters.length) {
                        this.movies[index].posterindex++;
                  };
                  if(this.movies[index].posterindex >= this.movies[index].posters.length) {
                        this.movies[index].posterindex = 0;
                  }
            },
            timeText(minutes) {                       //converts a string of minutes into the form hours, minutes
                  var hours = Math.floor(minutes/60);
                  var minute = minutes % 60;
                  return hours + ' hours ' + minute + ' minutes';
            },
      }
})

vue_app.mount("#vue_app")
