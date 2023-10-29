// import q from "../assets/data.json"
// export type TQuiz = typeof q[0]

export type TQuiz = {
  id: number;
  img: string;
  name: string;
  questions: TQuestion[]
}

export type TQuestionOption = {
  id: number;
  label: string;
  text: string;
  isCorrect: boolean
}

export type TQuestion = {
  id: number;
  text: string;
  options: TQuestionOption[]
}