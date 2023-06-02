<template>
    <div class="flex flex-row">
        <input :id="label" type="radio" class="mx-2" :value="label" :checked="modelValue == label"
            @change="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" :class="{ 'is-invalid': getError }">
        <label :for="label">{{ label }}</label>
        <div class="mx-6 px-4 transform translate-y-[28px] translate-x-[-168px] absolute text-[12px] text-red-600 z-105 pl-40 font-medium"
            v-if="getError()">{{ getError() }}
        </div>
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
        error: {
            type: [Array, String],
            default: null,
        }
    },
    methods: {
        getError() {
            if (!this.modelValue && this.error) {
                return Array.isArray(this.error) ? this.error.join(", ") : this.error;
            }
            return false;
        }
    }
};
</script>