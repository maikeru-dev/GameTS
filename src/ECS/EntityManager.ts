import Entity from "./Entity";

export default class EntityManager {
    entities : Entity[];
    addEntity(entity : Entity) : void {
        this.entities.push(entity);
    }
    tickEntities() : void {
        this.entities.forEach((entity): void => {
            entity.tick();
        })
    }
    updateEntity(entity : Entity, ...args : any[]): void {
        this.entities[this.entities.indexOf(entity)].update(args);
    }
    filterEntities(filter : (entity : Entity, ...others: any[]) => boolean) {
        this.entities.filter(filter);
    }
    destroy(...args : Entity[]) {
        args.forEach((entity) => {
            let index = this.entities.indexOf(entity);
            if (index != -1) {
                this.entities.splice(index, 1);
                // remove the entity; gc removes it from memory; Does it leave a hole in the heap?
            }
        })
    }
}