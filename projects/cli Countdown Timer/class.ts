
interface TimeRemaining {
    total   : number;
    days    : number;
    hours   : number;
    minutes : number;
    seconds : number;
}


export class CountdownTimer {
    private endTime         : Date | null;
    private remainingTime   : number;
    private intervalId      : NodeJS.Timeout | null;
    private isRunning       : boolean;

    constructor(endTime: Date) {
        this.endTime        = endTime;
        this.remainingTime  = endTime.getTime() - new Date().getTime();
        this.intervalId     = null;
        this.isRunning      = false;
    }


    getTimeRemaining(): TimeRemaining {
        const t: number = this.remainingTime;
        const total = t > 0 ? t : 0;
        const seconds: number = Math.floor((total / 1000) % 60);
        const minutes: number = Math.floor((total / 1000 / 60) % 60);
        const hours: number = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days: number = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            total   : total,
            days    : days,
            hours   : hours,
            minutes : minutes,
            seconds : seconds
        };
    }


    start():void{
        if (!this.isRunning && this.remainingTime > 0) {
            this.endTime = new Date(new Date().getTime() + this.remainingTime);
            this.intervalId = setInterval(() => {
                this.remainingTime = (this.endTime as Date).getTime() - new Date().getTime();
                const t: TimeRemaining = this.getTimeRemaining();
                
             
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

    stop(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.isRunning = false;
            this.remainingTime = (this.endTime as Date).getTime() - new Date().getTime();
        }
    }

}


        


    
