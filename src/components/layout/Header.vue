<template>
  <section class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12 justify-center">
          <div class="search">
            <form method="post">
              <input type="search" v-model="searchStr" placeholder="Search for photo" required />
              <input type="submit" value />
            </form>
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

<style>
.header {
  background-color: #f5f5f5;
  border-radius: none !important;
}

.search {
  padding: 50px;
}

.search input[type="search"] {
    outline: none;
    padding: 8px 0px 8px 8px;
    background: none;
    width: 100%;
    border: none;
    font-size: 14px;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.search input[type="submit"] {
    border: none;
    cursor: pointer;
    position: absolute;
    outline: none;
    top: 9px;
    /* background: url(./assets/search2.png)no-repeat 0px 0px; */
    width: 25px;
    height: 25px;
    padding: 0;
    right: 10px;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>




