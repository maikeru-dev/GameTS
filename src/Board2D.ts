import {Colour, Coordinate, Dimension, Dot} from "./Utility/Types";
import Configuration from "./Utility/Configuration";
export default class Board2D {
    protected _dots : Dot[];
    protected _DIM : Dimension;
    constructor(CONFIG : Configuration) {
        if (Configuration.has(["dots_width", "dots_height"], CONFIG)) {
            this._DIM = {
                width: CONFIG.getValue("dots_width"),
                height: CONFIG.getValue("dots_height")
            }
        } else {
            this._DIM = {width:31, height:31};
                // Define default to have 31 by 31 pixels/dots. We need a "center" dot.
        }
        this._dots = new Array(this._DIM.width*this._DIM.height) as Dot[];
        this.preFill();
    }
    private preFill() {
        let y : number;
        let x : number;
        for (y = 0; y < this._DIM.height; y++) {
            for (x = 0; x < this._DIM.width; x++) {
                this._dots[x + y*this._DIM.width] = {
                    colour: new Colour(255, 255, 255),
                    coords: {x : x, y : y}
                }
            }
        }
    }
    public fetchDot(coords : Coordinate) : Dot | null {
        let index = coords.x + coords.y*this._DIM.width;
        if (index <= this._DIM.width*this._DIM.height) {
            return this._dots[index];
        }
        return null;
    }
    public updateDot(coords : Coordinate, colour : Colour) : boolean {
        let index = coords.x + coords.y*this._DIM.width;
        if (index <= this._DIM.width*this._DIM.height) {
            this._dots[index].colour = colour;
            return true;
        }
        return false;
    }
    get getDIM() : Dimension {
        return this._DIM;
    }
    get getDots() : Dot[] {
        return this._dots;
    }
}