export interface Question {
    title: string;
    level?: number;
    answers: QuestionAnswer[];
}

export interface QuestionAnswer {
    description: string;
    isRight: boolean;
}