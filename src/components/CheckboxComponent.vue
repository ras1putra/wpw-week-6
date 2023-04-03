<template>
    <div class="mx-4 p-4 flex justify-between font-bold items-center">
        <label>{{ label }}</label>
            <div class="rounded-md p-2 flex-col space-x-2" v-for="option in options" :key="`checkbox-${option.value}`">
                <input :id="option.text" type="checkbox" :value="option.text" :checked="isChecked(option.value)" @change="handleChange"/>
                <label :for="option.text">{{ option.text }}</label>
            </div>
    </div>
</template>
<script>
export default {
    methods: {
        isChecked(value) {
            return this.modelValue.includes(value);
        },
        handleChange(event) {
            const checked = event.target.checked;
            let value = event.target.value;
            if (!isNaN(value)) {
                value = Number(value);
            }
            const newValues = [...this.modelValue];
            if (checked) {
                newValues.push(value);
            } else {
                const index = newValues.indexOf(value);
                newValues.splice(index, 1);
            }
            this.$emit("update:modelValue", newValues);
        },
    },
    props: {
        modelValue: {
            type: Array,
            default: () => ({}),
        },
        options: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        inline: {
            type: Boolean,
            default: false,
        },
    },
    inheritAttrs: false,
    computed: {
        classes() {
            return ["form-check", this.inline ? "form-check-inline" : ""];
        },
    },
};
</script>
    