import { atom } from "recoil";

export interface ToDo {
	id: number;
	text: string;
}

interface IToDoState {
	[key: string]: ToDo[];
}

export const toDoState = atom<IToDoState>({
	key: "toDo",
	default: {
		ToDo: [],
		Doing: [],
		Done: [],
	},
});
