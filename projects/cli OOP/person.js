export class Person {
    constructor() {
        this.personality = 'Mystery';
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = 'Extravert';
        }
        else if (answer === 2) {
            this.personality = 'Introvert';
        }
        else {
            this.personality = 'You are still a Mystery';
        }
    }
    // This method returns the value of personality
    getPersonality() {
        return this.personality;
    }
}
