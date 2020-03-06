$(() => {
  // console.log('Loaded');
  getGifs(); // calling the addGifs function
  $('form').on('submit', getGifs); // the submit event listener for requesting the girst 25 gifs.
  $('button').on('click', moreGifs); // the click even listener for requesting more gifs.
});

// var limit = 50;
var offset = 0; // new gifs set to 0 from the start.
// ------------------------------------------GET---------------------------------------- //
function getGifs() {
  event.preventDefault(); // prevents the submit button from submitting.
  $('#gifs').empty(); // empties the ajax request before the actual request.
  const search = $('#search').val();  // finds the value inside the search input.
  $.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`)
    .done((response) => {
      $.each(response.data, (index, gif) => {
        console.log(response.data);
        addGif(gif); // calling the addGif function here to get the gifs.
      });
    });
  offset+= 25; // 25 new gifs
}
// ------------------------------------------ADD---------------------------------------- //
function addGif(gif) {
  $('main#gifs').prepend(`<img src="${gif.images.fixed_height.url}">`); // gets image(s) from the images.fixed_hieght.url object.
}
// ----------------------------------------UPDATE--------------------------------------- //

function moreGifs() {
  const search = $('#search').val(); // finds the value inside the search input. In this function it gets more images of the search search.
  $.get(`http://api.giphy.com/v1/gifs/search?q=${search}&offset=${offset}&api_key=dc6zaTOxFJmzC`) // ajax gets the url from the data of objects in the array. This includes the offset of 25 new gifs.
    .done((response) => {
      $.each(response.data, (index, gif) => {
        addGif(gif); // calling the addGif function here to get the gifs.
      });
    });
  offset+= 25; // 25 new gifs
}
