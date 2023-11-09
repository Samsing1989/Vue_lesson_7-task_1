<template>
    <h2>Список студентів:</h2>
    <div class="title">
        <h2>ПІБ</h2>
        <h2>Середній бал</h2>
    </div>
    <div v-for="student in studentsData" :key="student.id" class="student-container">
        <div class="name">{{ student.name }}</div>
        <div class="score">{{ student.score }}</div>
    </div>
</template>

<script>
export default {
    name: 'StudentsList',

    props: {
        studentsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.student-container {
    width: 300px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
}
.title {
    width: 300px;
    display: flex;
    justify-content: space-between;
}
.name {
    margin-bottom: 10px;
}
.score {
}
</style>
