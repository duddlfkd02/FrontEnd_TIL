/**
 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// type coloredAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog";

type coloredAnimal = `${Color}-${Animal}`;
