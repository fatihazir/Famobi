import { GameModel } from "../game";

export interface UseNavigationModel {
    navigate: (arg0: string, arg1?: { game: GameModel }) => void,
    goBack: () => void
}