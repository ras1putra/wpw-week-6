<template>
    <div class="mx-4 p-4 flex justify-between font-bold items-center">
        <label>{{ label }}</label>
        <select class="w-3/4 rounded-md px-4 py-2 text-violet-700" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" v-bind="$attrs">
            <option value="" v-if="placeholder">{{ placeholder }}</option>
            <option v-for="option in options" :key="`option-${option.value}`" :value="option.text">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>        
<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: [String, Number],
            default: null,
        },
        options: {
            type: Array,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
};
</script>