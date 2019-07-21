<template>
  <div class="app">
    <Header />
  </div>
</template>


<script>
export default {
  name: 'app',
  components: {

    }
}
</script>

<style>
#header {
  margin: 0;
  padding: 0;
  max-width: 960px;
  min-height: 100vh;
  background: #f8f8f8
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
