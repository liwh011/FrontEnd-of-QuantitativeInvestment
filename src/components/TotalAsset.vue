<template>
    <!-- 总资产信息，在总帐本及各个账本的详情页面里显示 -->
    <div class="total-asset">
        <a-card :style="{boxShadow: '0 2px 8px #f0f1f2', marginBottom: '10px'}">
            <a-row>
                <a-col :span="12">
                    <a-statistic title="总资产" :value="data.totalAsset">
                        <template #suffix>
                            <span>元</span>
                        </template>
                    </a-statistic>
                </a-col>
                <a-col :span="12">
                    <a-statistic title="利润" :value="data.profit">
                        <template #suffix>
                            <span>元</span>
                        </template>
                    </a-statistic>
                </a-col>
            </a-row>
        </a-card>
        <a-row>
            <a-col
                :span="12"
                v-for="(value, name, index) in indicators"
                :key="index"
            >
                <a-statistic :title="name" :value="value">
                    <!-- <template #suffix>
                        <span>元</span>
                    </template> -->
                </a-statistic>
            </a-col>
        </a-row>
    </div>
</template>


<script>
export default {
    name: "TotalAsset",
    components: { },
    props: ["data"],
    data() {
        return {
            totalAsset: {
                asset: {
                    name: "总资产",
                    value: 0.0,
                    unit: "元",
                },
            },
        };
    },
    computed: {
        indicators() {
            let res = {};
            for (let key in this.data) {
                if (key != "accounts") {
                    res[key] = this.data[key];
                }
            }
            return res;
        },
    },
};
</script>

<style scoped>
.darken-1 {
    color: #fff;
}
.card-panel .row {
    margin-bottom: 0;
}
</style>