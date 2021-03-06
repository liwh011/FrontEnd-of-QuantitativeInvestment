<template>
    <PageWithNavbar currentTab="main">
        <template #content>
            <h1>主页</h1>
            <p>啥玩意都没有现在</p>
        </template>
    </PageWithNavbar>
</template>

<script>
import PageWithNavbar from '../components/PageWithNavbarTemplate';

export default {
    name: 'MainPage',
    components: { PageWithNavbar },
};
</script>
