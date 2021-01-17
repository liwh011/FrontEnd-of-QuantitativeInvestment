<template>
    <a-layout>
        <TopNavBar :currentTab="currentTab" />
        <a-layout-content :style="{ padding: '0 50px', paddingTop: '100px', minHeight: '100vh'  }">
            <a-row type="flex" justify="center">
                <a-col :span="18">
                    <div :style="{ backgroundColor: '#fff', padding: '40px'}">
                        <slot name="content"></slot>
                    </div>
                </a-col>
            </a-row>
        </a-layout-content>
        <a-layout-footer>
            <slot name="footer"></slot>
        </a-layout-footer>
    </a-layout>
</template>


<script>
import TopNavBar from "./TopNavBar";
export default {
    name: "PageWithNavbar",
    components: { TopNavBar },
    props: ["currentTab"],
    data(){
        return{
            
        }
    }
};
</script>