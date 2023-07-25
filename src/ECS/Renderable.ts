import {Coordinate, Dot, Sprite} from "../Utility/Types";
import Vector2D from "../Movement/Vector2D";

export default interface Renderable {
    /* Purpose Outline: Determine how to render this thing;
    * */
    relativeOrigin : Vector2D;
    sprite : Dot | Sprite;
}