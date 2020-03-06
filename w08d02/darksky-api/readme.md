![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Dark Skies API

For this assignment you'll need to consume another public API: Dark Skies.

Start by having a look at the [documentation](https://darksky.net/dev/) and testing some of the API's endpoints with insomnia.

Unfortnately Dark Skies does not allow Cross Origin Resource Sharing (CORS), which means you'll need to make a proxy request using `request-promise` in a controller in your server.

Once you've set up your proxy request, you should be able to make a `GET` request to your API. Something similar to this:

```
http://localhost:7000/api/weather?lat=51.515559&lng=-0.071746
```

Now it's time to consume your API with Anglar.

Build out a controller and make a request to your API using `$http` to display the weather based on latitude and longitude.

Once you've got some data on the page, create a service with a `getForecast` method which takes two arguments: `lat` and `lng`.

## Requirements

- Make a proxy request to a public API using `request-promise`.
- Consume the data with an Angular App.
- Refactor your code to use a service.

## Deliverables

- A single page MEAN stack App which displays weather data.

## Bonus

Think about ways in which to visualise the data you get from the API. Using the topics already covered in this module, see how far you can go with it!

Some things you might like to try:

- Add a map
- Add icons, images, different colors depending on the current temperature
- Display a weekly forecast
- Style, style, style