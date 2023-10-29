import { createRouter, createWebHistory } from "vue-router"
import QuizesView from "@/views/QuizesView.vue"
import QuizView from "@/views/QuizView.vue"

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'quizes',
    component: QuizesView
    },
    {
      path: "/quizes",
      redirect: "/"
    },
    {
      path: "/quiz/:quizId",
      name: "quiz",
      component: QuizView
    }

  ]
})