<template>
    <div class="table">
        <table>
            <tr>
                <th>序号</th>
                <th>日期</th>
                <th>资金流</th>
            </tr>
            <tr v-for="(record, id) in records" :key="id">
                <td>{{ id }}</td>
                <td>{{ record.date }}</td>
                <td>{{ record.cash }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { QueryBookRecords } from "../api/api.js";

export default {
    name: "InvestmentRecordTable",
    props: [
        "records"
    ],
    data() {
        return {
            records: [],
        };
    },
    mounted() {
        const bookName = "aaaa";
        QueryBookRecords(bookName).then((data) => {
            data.sort((a, b) => a.date > b.date);
            this.records = data;
        });
    },
};
</script>


<style scoped>

</style>
