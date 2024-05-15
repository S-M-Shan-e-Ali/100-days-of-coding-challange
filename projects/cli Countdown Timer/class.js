export class CountdownTimer {
    constructor(endTime) {
        this.endTime = endTime;
        this.remainingTime = endTime.getTime() - new Date().getTime();
        this.intervalId = null;
        this.isRunning = false;
    }
    getTimeRemaining() {
        const t = this.remainingTime;
        const total = t > 0 ? t : 0;
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total: total,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }
    start() {
        if (!this.isRunning && this.remainingTime > 0) {
            this.endTime = new Date(new Date().getTime() + this.remainingTime);
            this.intervalId = setInterval(() => {
                this.remainingTime = this.endTime.getTime() - new Date().getTime();
                const t = this.getTimeRemaining();
                console.clear();
                console.log(`\n\n\n\t\t\t\t  ${t.days}     :     ${('0' + t.hours).slice(-2)}      :      ${('0' + t.minutes).slice(-2)}      :     ${('0' + t.seconds).slice(-2)}    `);
                console.log(`\t\t\t\t    Days        Hours          Minutes       Seconds   `);
                if (t.total <= 0) {
                    this.stop();
                    console.log("\t\t\t\tTimer has ended!");
                }
            }, 1000);
            this.isRunning = true;
        }
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.isRunning = false;
            this.remainingTime = this.endTime.getTime() - new Date().getTime();
        }
    }
}
