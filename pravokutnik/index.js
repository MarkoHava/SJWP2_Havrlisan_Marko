import inquirer from 'inquirer'
import fs from 'fs'
import { type } from 'os'

inquirer.prompt([
    {
        type: "number",
        name: "a",
        message: "Unesi stranicu a:"
    },
    {
        type:"number",
        name: "b",
        message: "Unesi stranicu b:"
    }
]).then((answers) => {
    const res = answers.a * answers.b;
    const tekst = `Povrsina: ${res}`
    fs.appendFileSync("pravokutnik.txt", tekst)
    console.log("Podaci su spremljeni u datoteku;");
});