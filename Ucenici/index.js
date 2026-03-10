import inquirer from 'inquirer'
import fs from 'fs'
import { type } from 'os'

inquirer.prompt([
    {
        type: "input",
        name: "ime",
        message: "Unesi ime učenika:"
    },
    {
        type:"number",
        name: "ocjena",
        message: "Unesi ocjenu:"
    }
]).then((answers) => {
    const tekst = `Ime: $(answers.ime), Ocjena: $(answers.ocjena)\n`;
    fs.appendFileSync("ucenici.txt", tekst)
    console.log("Podaci su spremljeni u datoteku;");
});