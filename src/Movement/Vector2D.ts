
export default class Vector2D {
    private x : number;
    private y : number;

    constructor (x : number, y : number) { this.x = x; this.y = y; };
    public normalize() : void {
        let magnitude = this.magnitude;
        this.x = this.x / magnitude;
        this.y = this.y / magnitude;
    }
    public splitVector() : Vector2D[] {
        return [new Vector2D(this.x, 0), new Vector2D(0, this.y)];
    }
    public round() : void  {
        this.x = this.roundNumber(this.x);
        this.y = this.roundNumber(this.y);
    }
    public equals(vectorB : Vector2D) : boolean {
        return (vectorB.y == this.y && this.x == vectorB.x);
    }
    public set setX(x : number) {
        this.x = x;
    }
    public set setY(y : number) {
        this.y = y;
    }
    get magnitude() : number {
        return Math.sqrt(this.x^2+this.y^2);
    }
    get sqMagnitude() : number {
        return this.x^2 + this.y^2;
    }
    get normalized() : Vector2D {
        let magnitude = this.magnitude;
        return new Vector2D(this.x / magnitude, this.y / magnitude);
    }
    static intersection (vectorA : Vector2D, vectorB : Vector2D) : boolean {
        return !(vectorA.x > vectorB.x && vectorA.y > vectorB.y);
    }
    static direction (vectorA : Vector2D, vectorB : Vector2D) : Vector2D {
        let direction : Vector2D;

        direction = Vector2D.subtract(vectorB, vectorA);
        direction.normalize();
        direction.round();

        return direction;
    }
    static scale (vectorA : Vector2D, vectorB : Vector2D) : Vector2D {
        return new Vector2D(vectorA.x * vectorB.x, vectorA.y * vectorB.y);
    }
    static square (vectorA : Vector2D) : boolean {
        return (vectorA.x == vectorA.y);
    }
    static dot (vectorA : Vector2D, vectorB : Vector2D) : number {
        return (vectorA.y * vectorB.y) + (vectorA.x * vectorB.x);
    }
    static add (vectorA : Vector2D, vectorB : Vector2D) : Vector2D {
        return new Vector2D(vectorA.x + vectorB.x, vectorA.y + vectorB.y);
    }
    static subtract (vectorA : Vector2D, vectorB : Vector2D) : Vector2D {
        return new Vector2D(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
    }
    static distance (vectorA : Vector2D, vectorB : Vector2D) : number {
        return Math.sqrt(this.dot(vectorA, vectorB));
    }
    static one () : Vector2D {
        return new Vector2D(1,1);
    }
    static down () : Vector2D {
        return new Vector2D(0,-1);
    }
    static up () : Vector2D {
        return new Vector2D(0,1);
    }
    static right () : Vector2D {
        return new Vector2D(1,0);
    }
    static left () : Vector2D {
        return new Vector2D(-1,0);
    }
    static zero () : Vector2D {
        return new Vector2D(0,0);
    }
    private roundNumber (x : number) : number {
        if (x > 0) { x = 1}
        if (x < 0) { x = -1}
        return x;
    }
}
