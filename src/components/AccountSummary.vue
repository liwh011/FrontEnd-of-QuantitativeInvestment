<template>
    <!-- 用于显示单个账本概况的卡片 -->
    <a-card :title="account.name">
        <template #extra><router-link :to="String(account.id)" append>详情</router-link></template>
        <a-row>
            <a-col :span="12" v-for="(value, name) in account" :key="name">
                <a-statistic :title="name" :value="value">
                    <!-- <template #suffix>
                        <span>元</span>
                    </template> -->
                </a-statistic>
            </a-col>
        </a-row>
    </a-card>
</template>

<script>
export default {
    name: 'AccountSummary',
    components: { },
    props: ['account'],
};
</script>

<style scoped>
.card-content .row {
    margin-bottom: 0;
}
</style>
