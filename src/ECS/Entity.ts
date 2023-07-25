import Renderable from "./Renderable";
import {Coordinate, Dot, Sprite} from "../Utility/Types";
import ComponentManager from "./ComponentManager";
import CollisionComponent from "./CollisionComponent";
import Vector2D from "../Movement/Vector2D";

export default abstract class Entity extends ComponentManager implements Renderable {
    velocityVector : Vector2D;
    relativeOrigin : Vector2D; // Where is the center point on your sprite?
    sprite : Sprite | Dot;
    position : Vector2D;
    collisionComponent : CollisionComponent | null;

    // constructor == onStart func;

    abstract tick() : void;
    abstract update(...args: any[]) : void;

}