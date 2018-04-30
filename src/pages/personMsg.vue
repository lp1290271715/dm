<template>
  <div class="indexPage-main">
    <h1>学生宿舍管理系统</h1>
    <div class="underline"></div>
    <img class="indexPage-logo" src="../assets/logo.jpg" alt="logo" width="100%" height="100%" />
  </div>
</template>
<script>
export default {
  data () {
    return {
    	
    }
  },
  created(){
  	console.log(1);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
	padding: 0;
	margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.indexPage-main{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 80%;
  margin: 0 auto;
  .underline{
		background: #2C3E50;
		height: .1em;
	}
	.indexPage-logo{
		padding: .6em 0;
	}
  }
</style>
