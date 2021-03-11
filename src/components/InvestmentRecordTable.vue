<template>
    <a-table v-if="records" :columns="columns" :data-source="tableData">
        <template #type="text">
            <span v-if="!text">--</span>
            <span v-else>
                <a-tag :color="text === '投入' ? 'volcano' : 'green'">
                    {{ text }}
                </a-tag>
            </span>
        </template>
        <template #src="text">
            <span v-if="text">{{ text }}</span>
            <span v-else>--</span>
        </template>
    </a-table>
</template>

<script>
import { queryBookRecords } from '../api/api.js';
import { recordType } from '../common/enum.js';

const columns = [
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        customRender: (date, row, index) => date.format('yyyy-MM-dd'),
        defaultSortOrder: 'descend',
        sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        width: 80,
        scopedSlots: { customRender: 'type' },
        filters: [
            {
                text: '投入',
                value: '投入',
            },
            {
                text: '收回',
                value: '收回',
            },
        ],
        onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
        title: '金额',
        dataIndex: 'cash',
        key: 'cash',
    },
    {
        title: '来源',
        dataIndex: 'src',
        key: 'src',
        scopedSlots: { customRender: 'src' },
    },
];

export default {
    name: 'InvestmentRecordTable',
    props: ['records'],
    data() {
        return {
            columns,
        };
    },
    mounted() {
        // const bookName = "aaaa";
        // queryBookRecords(bookName).then((data) => {
        //     data.sort((a, b) => a.date > b.date);
        //     this.records = data;
        // });
    },
    computed: {
        tableData() {
            const result = [...this.records];
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                element.date = new Date(element.date * 1000);
                element.type = element.type === recordType.transferIn ? '投入' : '收回';
                element.key = index;
            }
            return result;
        },
    },
};
</script>

<style scoped>
</style>
