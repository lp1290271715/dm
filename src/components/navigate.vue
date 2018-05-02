<template>
  <div class="navigate" v-bind:style="navStyle">
  	<ul>
  		<li><router-link to="/personMsg">查看个人信息</router-link></li>
  		<li>向辅导员请假</li>
  		<li>查看留言板</li>
  		<li>向楼管申请维修</li>	
  	</ul>
  </div>
</template>
<script>
export default {
	props:{
		width:{
			type:String,
			default:'100px'
		},
		height:{
			type:String,
			default:'160px'
		}
	},
  data () {
    return {
      navStyle:{
      	width:this.width,
      	height:this.height
      }
    }
  },
  created(){
  	
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
  margin: 0;
}
a {
	text-decoration: none;
  color: inherit;
}
.navigate{
	ul{
		width: 100%;
		height: 100%;
		margin-top: -1px;
		border-top: 1px solid gray;
		li{
			width: calc(100% - 2px);
			height: calc(25% - 1px);
			font-family: '幼圆';
   		font-weight: 400;
    	font-style: normal;
    	background: white;
    	border-left: 1px solid gray;
			border-right: 1px solid gray;
    	border-bottom: 1px solid gray;
			text-align: center;
			line-height: 4em;
			&:hover{
				background: gray;
				color: rgb(255,255,255);
				font-weight: bold;
			}
			a{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
