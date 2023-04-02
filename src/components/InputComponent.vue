<template>
    <div class="mx-4 p-4 flex justify-between font-bold items-center">
        <label>{{ label }}</label>
        <input class="w-3/4 ml-4 rounded-md p-2" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        }, modelValue: {
            type: [String, Number],
            default: null,
        },
    },
    created() {
        console.log(this.$attrs);
    },
};
</script>