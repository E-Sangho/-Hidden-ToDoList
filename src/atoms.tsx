import { atom, selector } from "recoil";

export enum Category {
	ToDo = "ToDo",
	Doing = "Doing",
	Done = "Done",
}

export interface IToDos {
	text: string;
	id: number;
	category: Category;
}

export const toDoState = atom<IToDos[]>({
	key: "toDo",
	default: [],
});

export const categoryState = atom<Category>({
	key: "category",
	default: Category.ToDo,
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const category = get(categoryState);
		const toDos = get(toDoState);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
