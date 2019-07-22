<template>
    <section class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-12 justify-center">
                    <div class="search">
                        <input type="text" v-model="searchStr" placeholder="Search..." required>
                        <input type="submit" value="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import Bootstrap from 'bootstrap';
// import fontawesome from 'font-awesome';


export default {
    name: Header
};
</script>

<style lang="scss">
.header {
    background-color: #c4cdf1;
    border-radius: none !important;
}

.search {
    padding: 50px;
}
</style>




