import starwars from"starwars-names"
import color from "random-color"

var name = starwars.random();
var randcol = color.apply();
console.log(`${name} ${randcol}`);