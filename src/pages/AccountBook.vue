<template>
    <PageWithNavbar currentTab="account_book">
        <template #content>
            <div>
                <h1>总资产</h1>
                <TotalAsset :data="summary" />
            </div>
            <a-divider />
            <div>
                <div style="display: flex; align-items: center">
                    <div style="display: inline-block; flex: 1;">
                        <h1>我的账户 ({{ summary.accounts.length }})</h1>
                    </div>
                    <div style="float: right; ">
                        <h1><a href="/account_book/manage">管理</a></h1>
                    </div>
                </div>
                <AccountSummary
                    style="margin-bottom: 30px"
                    v-for="account in summary.accounts"
                    :key="account.name"
                    :account="account"
                />
            </div>
        </template>
    </PageWithNavbar>
</template>


<script>
import PageWithNavbar from "../components/PageWithNavbarTemplate";
import TotalAsset from "../components/TotalAsset";
import AccountSummary from "../components/AccountSummary";

export default {
    name: "AccountBook",
    components: {
        PageWithNavbar,
        TotalAsset,
        AccountSummary,
    },
    data() {
        return {
            summary: {},
        };
    },
    mounted() {
        this.summary = {
            totalAsset: 0,
            profit: 0,
            xirr: 1.11,
            sharpRatio: 1.14,
            maxDrawDown: 12345,
            accounts: [
                {
                    name: "账本1",
                    totalAsset: 0,
                    profit: 0,
                    xirr: 1.11,
                    sharpRatio: 1.14,
                    maxDrawDown: 12345,
                },
                {
                    name: "账本2",
                    totalAsset: 0,
                    profit: 0,
                    xirr: 1.11,
                    sharpRatio: 1.14,
                    maxDrawDown: 12345,
                },
                {
                    name: "账本3",
                    totalAsset: 0,
                    profit: 0,
                    xirr: 1.11,
                    sharpRatio: 1.14,
                    maxDrawDown: 12345,
                },
            ],
        };
    },
};
</script>

<style scoped>
</style>