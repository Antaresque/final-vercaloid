import type { HintData } from "$lib/types";

export function makeid(str: string) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < str.length) {
      if(str[counter] === ' ')
        result += ' ';
      else 
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      
      counter += 1;
    }
    return result;
}

export const shuffleLetters = (songInfoHints: HintData[]) => {
    return songInfoHints.map(_ => {
        const name = makeid(_.name);
        const solution = makeid(_.solution);

        return {
            name: name, hint: '', solution: solution
        }
    })
}