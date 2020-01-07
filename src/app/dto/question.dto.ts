export interface Question {
    text: string;
    answers: {text: string, right: boolean}[];
}