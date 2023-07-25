import CollisionComponent from "./CollisionComponent";
import {Game2D} from "../Game2D";

class CollisionManager {
    collisionComponents : CollisionComponent[];
    gameObject : Game2D;
    constructor(gameObject : Game2D) {
        this.gameObject = gameObject;
        this.collisionComponents = [];
    }
    addCollisionComponent(component : CollisionComponent) : void {
        this.collisionComponents.push(component);
    }
    tickComponents() : void {
        let compClone = [...this.collisionComponents];
        this.collisionComponents.forEach((current : CollisionComponent) => {
            compClone.slice(compClone.indexOf(current));
            current.onTick(compClone); // Should provide a unique & efficient collision check ;
        })
    }
}