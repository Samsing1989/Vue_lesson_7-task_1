import { createStore } from 'vuex'
import students from '../data/students.json'
import { getScoreIn5Category } from './helpers'
const store = createStore({
    state() {
        return {
            studentsList: [],
            currentCategory: undefined,
        }
    },
    getters: {
        getFilteredByStudentsCategoreyList: ({ studentsList, currentCategory }) => {
            if (!currentCategory) return studentsList
            else
                return studentsList.filter(
                    (student) => student.score >= currentCategory.minScore && student.score <= currentCategory.maxScore
                )
        },
        getCurrentCategory: ({ currentCategory }) => currentCategory,

        getStudentList: ({ studentsList }) => studentsList,

        getStudentListWithScoreCategory: (state, getters) => {
            return (scoreCategory) => {
                if (scoreCategory === 12) return getters.getFilteredByStudentsCategoreyList
                else {
                    const studentsListCopy = JSON.parse(JSON.stringify(getters.getFilteredByStudentsCategoreyList))
                    studentsListCopy.forEach((student) => {
                        student.score = getScoreIn5Category(student.score)
                    })
                    return studentsListCopy
                    //   return state.studentsList.map((student) => ({
                    //       ...student,
                    //       score: getScoreIn5Category(student.score),
                    //   }))
                }
            }
        },
    },
    mutations: {
        setStudenList(state, list) {
            state.studentsList = list
        },
        setCategory(state, category) {
            state.currentCategory = category
        },
    },
    actions: {
        loadStudentsList({ commit }) {
            commit('setStudenList', students)
        },
        setStudentCategory({ commit }, category) {
            commit('setCategory', category)
        },
    },
    modules: {},
})
export default store
