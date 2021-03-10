<template>
    <!--
        更新总资产的表单
     -->
    <a-form-model
        ref="changeAssetForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
        <a-form-model-item label="日期" required prop="date">
            <a-date-picker
                v-model="form.date"
                type="date"
                style="width: 100%"
                :disabled-date="disabledDate"
            />
        </a-form-model-item>
        <a-form-model-item label="总资产" prop="asset">
            <a-input-number
                v-model="form.asset"
                :default-value="1000"
                :min="0"
                :formatter="
                    (value) =>
                        `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                "
                :parser="(value) => value.replace(/\￥\s?|(,*)/g, '')"
                style="width: 100%"
            />
        </a-form-model-item>
        <a-form-model-item ref="note" label="备注" prop="note">
            <a-input v-model="form.note" />
        </a-form-model-item>
    </a-form-model>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
            other: '',
            form: {
                asset: 0,
                date: moment(new Date(), 'YYYY-MM-DD'),
                note: '',
            },
            rules: {
                date: [
                    {
                        required: true,
                        message: '请选择日期。',
                        trigger: 'blur',
                    },
                ],
                asset: [
                    {
                        required: true,
                        message: '请输入总资产。',
                        trigger: 'blur',
                    },
                ],
            },
        };
    },
    methods: {
        moment,
        // 重置表单
        resetForm() {
            this.$refs.changeAssetForm.resetFields();
        },
        // 禁止选择今天以后的日期，供日期控件调用
        disabledDate(current) {
            return current && current > moment().endOf('day');
        },
    },
};
</script>
