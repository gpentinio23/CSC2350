import Snake from "./Snake";
import WorldModel from "./Worldmodel";
class SnakeController {
    private snakeWorld: WorldModel;
    private slitherer: Snake;
    constructor(worldModel: WorldModel, snake: Snake) {
        this.snakeWorld = worldModel;
        this.slitherer = snake;
    }

    turnSnakeLeft(): void {
        this.slitherer.turnLeft();
    }

    turnSnakeRight(): void {
        this.slitherer.turnRight();
    }

}
