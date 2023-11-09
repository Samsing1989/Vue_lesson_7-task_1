<template>
    <div class="container">
        <div><students-list :students-data="filteredStudentsList" /></div>
        <div class="select">
            <students-category />
            <score-category v-model="scoreCategory" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StudentsCategory from './StudentsCategory'
import ScoreCategory from './ScoreCategory.vue'
import StudentsList from './StudentsList.vue'
export default {
    name: 'StudentsManager',
    components: {
        StudentsCategory,
        ScoreCategory,
        StudentsList,
    },
    data() {
        return {
            scoreCategory: 12,
        }
    },
    computed: {
        ...mapGetters(['getStudentList', 'getStudentListWithScoreCategory', 'getFilteredByStudentsCategoreyList']),

        filteredStudentsList() {
            if (this.scoreCategory) return this.getStudentListWithScoreCategory(this.scoreCategory)
            else return this.getFilteredByStudentsCategoreyList
        },
    },
    methods: {
        ...mapActions(['loadStudentsList']),
    },
    created() {
        this.loadStudentsList()
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    gap: 50px;
    align-items: start;
}
.select {
    padding-top: 50px;
    display: flex;
    gap: 50px;
}
</style>
