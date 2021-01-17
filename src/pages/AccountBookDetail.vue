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
                <a-button>添加</a-button>
                <a-button>
                    <router-link to="edit" append>编辑</router-link>
                </a-button>
            </a-space>
            <InvestmentRecordTable :records="detail.records" />
        </template>
    </PageWithNavbar>
</template>

<script>
import PageWithNavbar from "../components/PageWithNavbarTemplate";
import TotalAsset from "../components/TotalAsset";
import InvestmentRecordTable from "../components/InvestmentRecordTable";

export default {
    name: "AccountBookDetail",
    components: { PageWithNavbar, TotalAsset, InvestmentRecordTable },
    data() {
        return {
            detail: {},
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
};
</script>