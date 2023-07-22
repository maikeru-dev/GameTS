import { Dimension, Colour, Coordinate, Dot } from './Types';
import Configuration from "./Configuration";
import Board2D from "./Board2D";

export default class Renderer {
    protected _CTX: CanvasRenderingContext2D;
    protected _board: Board2D;
    protected _DIM: Dimension;
    protected _backgroundColour: Colour = new Colour(0, 0, 0); // This could also be called the outline.
    protected _gapSize: number;
    protected _DOT_DIM: Dimension; // This is the size of the square that is defined to be a pixel/dot.
    protected _blank_colour: Colour = new Colour(255, 255, 255); // White???
    protected _offset: Coordinate = {x: 1.5, y: 1.5}; // This may get overwritten in constructor!
    constructor(CTX: CanvasRenderingContext2D | null, board: Board2D, CONFIG: Configuration) { // board should be passed by reference!
        if (CTX == null) throw new Error("CTX is null!");
        this._CTX = CTX;
        this._board = board;
        this._DIM = {width: CTX.canvas.width, height: CTX.canvas.height};

        let boardDIM = this._board.getDIM;

        if (Configuration.has(["render_gap"], CONFIG)) {
            this._gapSize = CONFIG.getValue("render_gap")
        } else this._gapSize = 0.8; // 1 pxl

        this._DOT_DIM = {
            width: (this._DIM.width / boardDIM.width) - this._gapSize,
            height: (this._DIM.height / boardDIM.height) - this._gapSize
        }

        this._offset = {x: this._gapSize, y: this._gapSize};
    }

    get getCTX(): CanvasRenderingContext2D {
        return this._CTX;
    }

    public generateColour(red: number, blue: number, green: number): Colour {
        if ((red > 255 || red < 0) || (blue > 255 || blue < 0) || (green > 255 || green < 0)) {
            throw new Error("generateColour is producing an out of range colour!");
        }
        return new Colour(red, blue, green);
    }

    public update(): void { // big draw!
        let x: number;
        let y: number;
        let boardDIM = this._board.getDIM;
        const width: number = boardDIM.width;
        const height: number = boardDIM.height;

        this._CTX.fillStyle = `rgb(${this._backgroundColour.red},
                                   ${this._backgroundColour.blue}, 
                                   ${this._backgroundColour.green})`;

        this._CTX.fillRect(0, 0, this._DIM.width, this._DIM.height);

        for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
                this.draw(this._board.getDots[x + y * width]);
            }
        }

    }

    private draw(dot: Dot): void {
        // TODO : CANVAS SIZE MUST BE DETERMINED : DONE
        // TODO : DOT SIZE MUST BE DEFINED : DONE
        // TODO : CREATE AND UTILIZE A JSON CONFIG : ALMOST DONE, HAS DEFAULTS
        let coords = dot.coords;
        let colour = `rgb(
                                ${dot.colour.red},
                                ${dot.colour.blue},
                                ${dot.colour.green})`
        let gap = this._gapSize;
        let dotDIM = this._DOT_DIM;
        let ctx = this._CTX;
        // Draw at coordinate, converted to a rectangle on the canvas

        ctx.fillStyle = colour;
        ctx.fillRect(
            gap * (coords.x) + (coords.x * dotDIM.width) + this._offset.x,
            gap * (coords.y) + (coords.y * dotDIM.height) + this._offset.y,
            dotDIM.width - gap,
            dotDIM.height - gap
        )
    }

    public clearDot(dot: Dot) {
        dot.colour = this._blank_colour
        this.drawDot(dot);
    }

    public drawDot(dot: Dot): void {
        this.draw(dot); // skip updating, only necessary when drawing big!
    }
}