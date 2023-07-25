export interface Dot {
    colour : Colour;
}
export interface Sprite {
    imageRef : typeof Image;
}
export class Colour {
    red : number;
    blue : number;
    green : number;
    constructor(red : number, blue : number, green : number) {
        if (red > 255 || red < 0) throw new Error("Invalid colour size red");
        if (blue > 255 || blue < 0) throw new Error("Invalid colour size blue");
        if (green > 255 || green < 0) throw new Error("Invalid colour size green");

        this.red = red;
        this.blue = blue;
        this.green = green;
    }
    static CompareExact(ColourA : Colour, ColourB : Colour) : boolean {
        if (ColourA.red == ColourB.red) {
            if (ColourA.blue == ColourB.blue) {
                if (ColourA.green == ColourB.green) {
                    return true;
                }
            }
        }
        return false;
    }
}
