<template>
    <div class="mx-4 p-4 flex justify-between font-bold items-center">
        <label>{{ label }}</label>
        <input class="w-3/4 ml-4 rounded-md p-2" v-bind="$attrs" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" :class="{ 'is-invalid': getError }" />
    </div>
    <div class="mx-6 px-4 transform translate-y-[-6px] absolute text-[12px] text-red-600 z-105 ml-[25%]" v-if="getError()">
        {{ getError() }}</div>
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
        error: {
            type: [Array, String],
            default: null,
        }
    },
    created() {
        console.log(this.$attrs);
    },
    methods: {
        getError() {
            if (this.modelValue == "") {
                return Array.isArray(this.error) ? this.error.join(", ") : this.error;
            }
            return false;
        }
    }
};
</script>