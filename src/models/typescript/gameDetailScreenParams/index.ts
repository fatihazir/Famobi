import { GameModel } from "../game"

export interface GameDetailParamsModel {
    route: {
        params: {
            game: GameModel
        }
    }
}