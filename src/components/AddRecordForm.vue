<template>
    <!-- 添加投资记录的表单 -->
    <a-form-model
        ref="addRecordForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
    >
        <a-form-model-item label="投资日期" required prop="date">
            <a-date-picker
                v-model="form.date"
                type="date"
                style="width: 100%"
                :disabled-date="disabledDate"
            />
        </a-form-model-item>
        <a-form-model-item label="投资类型" prop="type">
            <a-radio-group v-model="form.type" >
                <a-radio value="投入">投入</a-radio>
                <a-radio value="收回">收回</a-radio>
            </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="金额" prop="cash">
            <a-input-number
                v-model="form.cash"
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
        <a-form-model-item ref="source" label="记录来源" prop="source">
            <a-input v-model="form.source" />
        </a-form-model-item>
    </a-form-model>
</template>



<script>
import moment from "moment";
export default {
    data() {
        return {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
            other: "",
            form: {
                source: undefined,
                cash: 0,
                date: moment(new Date(), "YYYY-MM-DD"),
                type: "投入",
            },
            rules: {
                source: [
                    {
                        max: 20,
                        message: "长度不得超过20个字符",
                        trigger: "blur",
                    },
                ],
                date: [
                    {
                        required: true,
                        message: "请选择日期。",
                        trigger: "blur",
                    },
                ],
                type: [
                    {
                        required: true,
                        message: "请选择类型。",
                        trigger: "blur",
                    },
                ],
                cash: [
                    {
                        required: true,
                        message: "请输入金额。",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        moment,
        // 重置表单
        resetForm() {
            this.$refs.addRecordForm.resetFields();
        },
        // 禁止选择今天以后的日期，供日期控件调用
        disabledDate(current) {
            return current && current > moment().endOf("day");
        },
    },
};
</script>
