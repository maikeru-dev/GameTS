import Component from "../ECS/Component";

class Transform2D extends Component {
    tickLifetime : typeof Infinity | number;
    onTick(args: any[]) : void {};

    constructor(func : (...args : any[]) => void);
    constructor (func : (...args : any[]) => void, tickLifetime? : number) {
        super();
        this.onTick = func;
        this.name = "Transform2D";
        if (tickLifetime != null) {
            this.tickLifetime = tickLifetime;
        }
    }

    onStart(args: any[]): void {
    }

    onUpdate(args: any[]): void {
    }
}