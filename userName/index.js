import inquirer from 'inquirer'
import fs from 'fs'

inquirer.prompt([
    {
        type: "input",
        name: "ime",
        message: "Unesi ime:"
    },
    {
        type:"input",
        name: "prezime",
        message: "Unesi prezime:"
    }
]).then((answers) => {
    const ime = answers.ime.toLowerCase();
    const prezime = answers.prezime.toUpperCase();
    const tekst = "username: " + ime + prezime + "\n"
    fs.appendFileSync("users.txt", tekst)
    console.log("Podaci su spremljeni u datoteku");
});