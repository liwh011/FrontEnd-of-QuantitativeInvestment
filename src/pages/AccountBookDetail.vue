<template>
    <!-- 单个账本的详情 -->
    <page-with-navbar-template currentTab="account_book">
        <template #content>
            <!-- 该账本的概况 -->
            <h1>详情</h1>
            <total-asset :data="detail" />

            <a-divider />

            <!-- 该账本的详细投资记录 -->
            <h1 style="display: inline">投资记录</h1>
            <a-space :style="{ marginBottom: '10px', float: 'right' }">
                <a-button type="primary" @click="showChangeAssetDlg">
                    更新总资产
                </a-button>
                <a-button @click="showAddRecordDlg"> 添加买卖记录 </a-button>
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
                    <add-record-form ref="addRecordFormDlg" />
                </a-modal>
                <a-modal
                    title="更新总资产"
                    :visible="changeAssetDlg.visible"
                    :confirm-loading="changeAssetDlg.confirmLoading"
                    @ok="handleChangeAssetDlgOk"
                    @cancel="handleChangeAssetDlgCancel"
                >
                    <change-asset-form ref="changeAssetDlg" />
                </a-modal>
            </a-space>
            <investment-record-table :records="detail.records" />
        </template>
    </page-with-navbar-template>
</template>

<script>
import PageWithNavbarTemplate from "../components/PageWithNavbarTemplate.vue";
import ChangeAssetForm from "../components/ChangeAssetForm.vue";
import TotalAsset from "../components/TotalAsset";
import InvestmentRecordTable from "../components/InvestmentRecordTable";
import AddRecordForm from "../components/AddRecordForm";

import { addRecord, changeTotalAsset, queryBookRecords } from "../api/api";

export default {
    name: "AccountBookDetail",
    components: {
        TotalAsset,
        InvestmentRecordTable,
        AddRecordForm,
        ChangeAssetForm,
        PageWithNavbarTemplate,
    },
    data() {
        return {
            detail: {},
            addRecordDlg: {
                // 添加记录的对话框
                visible: false,
                confirmLoading: false,
            },
            changeAssetDlg: {
                // 添加记录的对话框
                visible: false,
                confirmLoading: false,
            },
        };
    },
    mounted() {
        this.detail = {
            totalAsset: 0,
            profit: 0,
            xirr: 1.11,
            sharpRatio: 1.14,
            maxDrawDown: 12345,
            records: [

            ],
        };
        queryBookRecords(this.$route.params.bookID, 0).then((data) => {
            this.detail.records = data.data.records;
        });
    },
    methods: {
        /**
         * 添加投资记录对话框部分
         */
        // 显示添加记录的对话框
        showAddRecordDlg() {
            this.addRecordDlg.visible = true;
        },
        // 隐藏添加记录的对话框
        hideAddRecordDlg() {
            this.addRecordDlg.visible = false;
        },
        // 点击【添加记录对话框】的确认按钮后，执行的回调函数
        handleAddRecordDlgOk() {
            const form = this.$refs.addRecordFormDlg.$refs.addRecordForm; // 表单组件的对象
            form.validate((valid) => {
                if (valid) {
                    // 准备请求的数据
                    const formData = { ...this.$refs.addRecordFormDlg.form };
                    formData.date = Math.trunc(formData.date.valueOf() / 1000); // 将moment对象转换为时间戳，并去除毫秒部分

                    // 发送请求
                    this.addRecordDlg.confirmLoading = true;
                    addRecord(
                        this.$route.params.bookID,
                        formData.cash,
                        formData.date,
                        formData.type,
                        formData.note
                    )
                        .then((data) => {
                            // 服务器返回成功
                            this.addRecordDlg.confirmLoading = false; // 结束加载状态
                            this.$message.success("添加成功！"); // 弹出顶部提示消息
                            form.resetFields(); // 重置表单
                            this.hideAddRecordDlg();
                        })
                        .catch(() => {
                            this.$message.error("添加记录失败！");
                            this.addRecordDlg.confirmLoading = false;
                        });
                } else {
                    console.log("提交表单时未通过校验。");
                    return false;
                }
            });
        },
        // 点击【添加记录对话框】的取消按钮后，执行的回调函数
        handleAddRecordDlgCancel(e) {
            const form = this.$refs.addRecordFormDlg.$refs.addRecordForm; // 表单组件的对象
            form.resetFields();
            this.hideAddRecordDlg();
        },

        /**
         * 改变（更新）总资产对话框部分
         */
        // 显示更改总资产的对话框
        showChangeAssetDlg() {
            this.changeAssetDlg.visible = true;
        },
        // 隐藏更改总资产的对话框
        hideChangeAssetDlg() {
            this.changeAssetDlg.visible = false;
        },
        // 点击【更改总资产对话框】的确认按钮后，执行的回调函数
        handleChangeAssetDlgOk() {
            const form = this.$refs.changeAssetDlg.$refs.changeAssetForm; // 表单组件的对象
            form.validate((valid) => {
                if (valid) {
                    // 准备请求的数据
                    const formData = { ...this.$refs.changeAssetDlg.form };
                    formData.date = Math.trunc(formData.date.valueOf() / 1000); // 将moment对象转换为时间戳，并去除毫秒部分

                    // 发送请求
                    this.changeAssetDlg.confirmLoading = true;

                    changeTotalAsset(
                        this.$route.params.bookID,
                        formData.asset,
                        formData.date,
                        formData.note
                    )
                        .then((data) => {
                            // 服务器返回成功
                            this.changeAssetDlg.confirmLoading = false; // 结束加载状态
                            this.$message.success("添加成功！"); // 弹出顶部提示消息
                            form.resetFields(); // 重置表单
                            this.hideChangeAssetDlg();
                        })
                        .catch(() => {
                            this.changeAssetDlg.confirmLoading = false; // 结束加载状态
                        })
                } else {
                    console.log("提交表单时未通过校验。");
                    return false;
                }
            });
        },
        // 点击【更改总资产对话框】的取消按钮后，执行的回调函数
        handleChangeAssetDlgCancel(e) {
            const form = this.$refs.changeAssetDlg.$refs.changeAssetForm; // 表单组件的对象
            form.resetFields();
            this.hideChangeAssetDlg();
        },
    },
};
</script>
