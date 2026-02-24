import oneLinerJoke from "one-liner-joke"

const Joke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(Joke.body);