<template>
    <div>
        <label class="lable">
            Система оцінювання
            <select v-model="currentCategory">
                <option :value="12">12</option>
                <option :value="5">5</option>
            </select>
        </label>
    </div>
</template>

<script>
export default {
    name: 'ScoreCategory',
    props: {
        modelValue: {
            type: Number,
            default: null,
        },
    },
    emits: ['update:modelValue'],
    computed: {
        currentCategory: {
            get() {
                return this.modelValue
            },
            set(val) {
                this.$emit('update:modelValue', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped>
.lable {
    display: flex;
    flex-direction: column;
}
</style>
