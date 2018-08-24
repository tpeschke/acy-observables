import { Observable } from 'rxjs'

export default class NameService {
    constructor() {
        this.intervalId = null
    }

    getName = () => {
        return Observable.create( ( { destination } ) => {
            clearInterval(this.intervalId)
            this.intervalId = setInterval( _ => {
                let name = this.generateName();
                destination.next(name)
            }, 2000);
            return _ => clearInterval(this.intervalId)
        })
    }
    
    generateName = () => {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
        return [
          consonants[this.getRandomInt(consonants.length - 1)].toUpperCase(),
          vowels[this.getRandomInt(vowels.length - 1)],
          consonants[this.getRandomInt(consonants.length - 1)],
        ].join(''); 
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
}