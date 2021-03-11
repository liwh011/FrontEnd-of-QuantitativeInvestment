<template>
    <PageWithNavbar currentTab="account_book">
        <template #content>
            <div>
                <h1>总资产</h1>
                <TotalAsset :data="summary" />
            </div>
            <a-divider />
            <div>
                <h1 style="display: inline;">我的账户 ({{ summary.accounts.length }})</h1>
                <a-button style="float: right;"><router-link to="manage" append>管理</router-link></a-button>
                <a-space
                    direction="vertical"
                    size="large"
                    :style="{ width: '100%' }"
                >
                    <AccountSummary
                        style=""
                        v-for="account in summary.accounts"
                        :key="account.name"
                        :account="account"
                    />
                </a-space>
            </div>
        </template>
    </PageWithNavbar>
</template>

<script>
import PageWithNavbar from '../components/PageWithNavbarTemplate';
import TotalAsset from '../components/TotalAsset';
import AccountSummary from '../components/AccountSummary';
import { queryAllAccountBook } from '../api/api';

export default {
    name: 'AccountBook',
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
                // {
                //     name: '账本1',
                //     id: 123,
                //     totalAsset: 0,
                //     profit: 0,
                //     xirr: 1.11,
                //     sharpRatio: 1.14,
                //     maxDrawDown: 12345,
                // },
                // {
                //     name: '账本2',
                //     id: 12345,
                //     totalAsset: 0,
                //     profit: 0,
                //     xirr: 1.11,
                //     sharpRatio: 1.14,
                //     maxDrawDown: 12345,
                // },
                // {
                //     name: '账本3',
                //     id: 1234,
                //     totalAsset: 0,
                //     profit: 0,
                //     xirr: 1.11,
                //     sharpRatio: 1.14,
                //     maxDrawDown: 12345,
                // },
            ],
        };
        queryAllAccountBook(1).then(data => {
            const accountBooks = data.data.account_books;
            this.summary.accounts = accountBooks;
        });
    },
};
</script>

<style scoped>
</style>
