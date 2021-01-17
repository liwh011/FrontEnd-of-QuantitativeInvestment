<template>
    <!-- 单个账本的详情 -->
    <PageWithNavbar currentTab="account_book">
        <template #content>
            <h1>详情</h1>
            <TotalAsset :data="detail" />
            <a-divider />
            <h1>投资记录</h1>
            
        </template>
    </PageWithNavbar>
</template>

<script>
import PageWithNavbar from "../components/PageWithNavbarTemplate";
import TotalAsset from "../components/TotalAsset";

export default {
    name: "AccountBookDetail",
    components: { PageWithNavbar },
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
            records: [],
        };
    },
};
</script>