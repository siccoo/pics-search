<template>
    <div class="container">
      <form class="mb-5">
        <div class="input-group">
          <input type="text" v-model="searchStr" placeholder="Search..." required>
          <input type="submit" value="">
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: SearchForm
};
</script>

<style lang="scss">

</style>



