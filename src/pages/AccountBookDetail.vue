<template>
    <!-- 单个账本的详情 -->
    <PageWithNavbar currentTab="account_book">
        <template #content>
            <!-- 该账本的概况 -->
            <h1>详情</h1>
            <TotalAsset :data="detail" />

            <a-divider />

            <!-- 该账本的详细投资记录 -->
            <h1 style="display: inline">投资记录</h1>
            <a-space :style="{ marginBottom: '10px', float: 'right' }">
                <a-button type="primary" @click="showUpdateAssetDlg">
                    更新总资产
                </a-button>
                <a-button @click="showAddRecordDlg">
                    添加买卖记录
                </a-button>
                <a-button>
                    <router-link to="edit" append>编辑</router-link>
                </a-button>
                <!-- 点击添加按钮后弹出的对话框，装有表单 -->
                <a-modal
                    title="添加买卖记录"
                    :visible="addRecordDlg.visible"
                    :confirm-loading="addRecordDlg.confirmLoading"
                    @ok="handleAddRecordDlgOk"
                    @cancel="handleAddRecordDlgCancel"
                >
                    <AddRecordForm ref="addRecordFormDlg" />
                </a-modal>
                <a-modal
                    title="更新总资产"
                    :visible="updateAssetDlg.visible"
                    :confirm-loading="updateAssetDlg.confirmLoading"
                    @ok="updateAssetDlg.handleOk"
                    @cancel="updateAssetDlg.handleCancel"
                >
                    
                </a-modal>
            </a-space>
            <InvestmentRecordTable :records="detail.records" />
        </template>
    </PageWithNavbar>
</template>

<script>
import PageWithNavbar from '../components/PageWithNavbarTemplate';
import TotalAsset from '../components/TotalAsset';
import InvestmentRecordTable from '../components/InvestmentRecordTable';
import AddRecordForm from '../components/AddRecordForm';

import { addRecord } from "../api/api";
export default {
    name: 'AccountBookDetail',
    components: {
        PageWithNavbar,
        TotalAsset,
        InvestmentRecordTable,
        AddRecordForm,
    },
    data () {
        return {
            detail: {},
            addRecordDlg: {
                // 添加记录的对话框
                visible: false,
                confirmLoading: false,
            },
        };
    },
    mounted () {
        this.detail = {
            totalAsset: 0,
            profit: 0,
            xirr: 1.11,
            sharpRatio: 1.14,
            maxDrawDown: 12345,
            records: [
                { date: 1530922314, cash: 839857 },
                { date: 1582906232, cash: -953875 },
                { date: 1541730076, cash: 942780 },
                { date: 1535293725, cash: -943824 },
                { date: 1598127323, cash: -708869 },
                { date: 1530677728, cash: -603113 },
                { date: 1596591251, cash: 259266 },
                { date: 1596146348, cash: -734180 },
                { date: 1541954965, cash: 772327 },
                { date: 1541159556, cash: 691501 },
                { date: 1577143872, cash: 882129 },
                { date: 1584284615, cash: -439047 },
                { date: 1610325204, cash: 579297 },
                { date: 1540749116, cash: -229341 },
                { date: 1591519986, cash: 388970 },
                { date: 1616514191, cash: 996494 },
                { date: 1547023882, cash: 964899 },
                { date: 1611845635, cash: 39370 },
                { date: 1620705175, cash: 610351 },
                { date: 1552344565, cash: -157186 },
            ],
        };
    },
    methods: {
        // 显示添加记录的对话框
        showAddRecordDlg () {
            this.addRecordDlg.visible = true;
        },
        // 隐藏添加记录的对话框
        hideAddRecordDlg () {
            this.addRecordDlg.visible = false;
        },
        // 点击对话框的确认按钮后，执行的回调函数
        handleAddRecordDlgOk () {
            const form = this.$refs.addRecordFormDlg.$refs.addRecordForm; // 表单组件的对象
            form.validate((valid) => {
                if (valid) {
                    // 准备请求的数据
                    const formData = { ...this.$refs.addRecordFormDlg.form };
                    formData.date = Math.trunc(formData.date.valueOf() / 1000); // 将moment对象转换为时间戳，并去除毫秒部分

                    // 发送请求
                    this.addRecordDlg.confirmLoading = true;

                    // 服务器返回成功
                    this.addRecordDlg.confirmLoading = false; // 结束加载状态
                    this.$message.success('添加成功！'); // 弹出顶部提示消息
                    form.resetFields(); // 重置表单
                    this.hideAddRecordDlg();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 点击对话框的确认按钮后，执行的回调函数
        handleAddRecordDlgCancel (e) {
            const form = this.$refs.addRecordFormDlg.$refs.addRecordForm; // 表单组件的对象
            form.resetFields();
            this.hideAddRecordDlg();
        },
    },
};
</script>
