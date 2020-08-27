export class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        console.time('getFullName'); // novidade
        const fullName = `${this.name} ${this.surname}`;
        console.timeEnd('getFullName');
        return fullName;
    }

    speak(phrase) {
        console.time('speak'); // novidade
        const frase = `${this.name} esta falando... ${phrase}`;
        console.timeEnd('speak');
        return frase;
    }
}