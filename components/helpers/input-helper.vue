<template>
    <div v-show="control_type !== 'hidden'" :class="box_class">
        <input v-if="control_type === 'hidden'" :type="control_type" v-bind="attributes">
        <div :class="input_class" v-if="control_type !== 'hidden'">

            <!-- required -->
            <label class="d-block"><slot /> <span v-if="required" class="text-danger">*</span></label>

            <!-- input : 'hidden', 'text', 'email', 'number', 'tel', 'time', 'password', 'date' -->
            <input v-if="type_input_array.includes(control_type)" :type="control_type" v-bind="attributes" v-model="local_value" v-on:input="onChange" />

            <!-- file -->
            <input v-else-if="control_type === 'file'" :type="control_type" :ref="control_type" v-bind="attributes" @change="onChangeFile" v-model="local_value" data-fouc>
            <!--            <img v-if="control_type === 'file'" :id="id_image" class="preview_img" src="#" alt="Chưa có ảnh được chọn" width="120px" height="120px"/>-->

            <!-- textarea -->
            <textarea v-else-if="control_type === 'textarea'" v-bind="attributes" v-model="local_value" v-on:input="onChange" ></textarea>

            <!-- select2 -->
            <select2 v-else-if="control_type === 'select'" :options="options_arr" v-model="local_value" v-on:change="onChange"/>

            <!-- multiple-select -->
            <select v-else-if="control_type === 'multiple-select'" :data-placeholder="placeholder" v-bind="attributes" v-model="local_value" v-on:change="onChange" data-fouc >
                <option  v-for="(item, index) in options_arr" :value="item.id">{{item.text}}</option>
            </select>

            <!-- selection-select -->
            <select v-else-if="control_type === 'selection-select'" :data-placeholder="placeholder" v-bind="attributes" v-model="local_value" v-on:change="onChange" data-fouc >
                <optgroup  v-for="(item, index) in options_arr" :value="item.id" :label="item.text">
                    <option v-for="(item_option, index_option) in item.arr" :value="item_option.id">{{item_option.text}}</option>
                </optgroup>
            </select>

            <!-- status -->
            <div v-else-if="control_type === 'status'">
                <div class="form-check form-check-switchery">
                    <label class="form-check-label">
                        <input v-bind="attributes" @change="onChange" v-model="local_value" v-if="checked === true" checked data-fouc>
                        <input v-bind="attributes" @change="onChange" v-model="local_value" v-if="checked === false" data-fouc>
                    </label>
                </div>
            </div>

            <!-- checkbox -->
            <div v-else-if="control_type === 'checkbox'">
                <div class="form-check form-check-inline" v-for="(item, index) in options_arr" v-bind:key="index" >
                    <label class="xform-checker form-check-label">
                        <input type="checkbox" v-bind="attributes" :value="item.id" v-model="local_value" v-on:change="onChange" />
                        <span class="checkmark"></span>
                        {{ item.text }}
                    </label>
                </div>
            </div>

            <!-- radio -->
            <div v-else-if="control_type === 'radio'">
                <div class="form-check form-check-inline" v-for="(item, index) in options_arr" v-bind:key="index" >
                    <label class="xform-choice form-check-label">
                        <input type="radio" v-bind="attributes" :value="item.id" v-model="local_value" v-on:change="onChange" />
                        <span class="checkmark"></span>
                        {{ item.text }}
                    </label>
                </div>
            </div>

            <!-- icon -->
            <div v-if="icon !== ''" class="form-control-feedback">
                <i :class="icon"></i>
            </div>

            <!-- note -->
            <span v-if="note !== ''" class="form-text text-muted">{{note}}</span>

            <span class="form-text text-danger" v-if="validate">{{ validate }}</span>
        </div>
    </div>
</template>

<script>
    import select2 from 'v-select2-component'

    export default {
        components: {select2},
        name: 'input-helper',
        props: {
            control_type: {
                type: String,
                default: 'text'
            },
            id_image: {
                type: String,
                default: 'text'
            },
            box_class: {
                type: String,
                default: 'col-md-4 col-sm-6'
            },
            input_class: {
                type: String,
                default: 'form-group'
            },
            required: {
                type: Boolean,
                default: false
            },
            attributes: {
                type: Object,
                default: {class: 'form-control'}
            },
            placeholder : {
                type: String,
                default: '- Chọn -'
            },
            options_arr: {
                type: Array,
                default: function(){
                    return [];
                }
            },
            checked : {
                type: Boolean,
                default: true
            },
            validate: {
                type: String,
                default: ''
            },
            icon : {
                type: String,
                default: ''
            },
            note : {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                type_input_array: ['hidden', 'text', 'email', 'number', 'tel', 'time', 'password', 'date'],
                local_value: (this.control_type == 'checkbox') ? [] : this.attributes.value,
            }
        },
        methods: {
            onChange(){
                this.$emit('onChange', {name: this.attributes.name, value: this.local_value})
            },
            onChangeFile(){
                this.$emit('onChange', {name: this.attributes.name, value: this.$refs})
            },
        },
    }
</script>

<style>
    input[type=file] {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }
    .label_file {
        margin-top: 35px;
    }
</style>
