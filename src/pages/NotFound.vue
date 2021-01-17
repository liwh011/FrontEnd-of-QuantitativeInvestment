<template>
    <PageWithNavbar currentTab="">
        <template #content>
            <h1>404</h1>
            <p>页面不存在</p>
        </template>
    </PageWithNavbar>
</template>

<script>
import PageWithNavbar from "../components/PageWithNavbarTemplate";

export default {
    name: "NotFound",
    components: { PageWithNavbar, },
};
</script>