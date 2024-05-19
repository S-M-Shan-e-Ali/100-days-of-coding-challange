
export class Person {
    // Declare a field to represent the personality
    private personality: string;

    constructor() {
        this.personality = 'Mystery';
    }

    public askQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = 'Extravert';
        } else if (answer === 2) {
            this.personality = 'Introvert';
        } else {
            this.personality = 'You are still a Mystery';
        }
    }

    // This method returns the value of personality
    public getPersonality(): string {
        return this.personality;
    }
}
