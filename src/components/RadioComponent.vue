<template>
    <div class="flex flex-row">
        <input :id="label" type="radio" class="mx-2" :value="label" :checked="modelValue == label" @change="$emit('update:modelValue', $event.target.value)" v-bind="$attrs">
        <label :for="label">{{ label }}</label>
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
        value: {
            type: [String, Number],
            required: true,
        },
    },
};
</script>