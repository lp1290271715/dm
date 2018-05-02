<template>
  <div class="perssonMsg-main">
 		<div class="perssonMsg-detail">
 			<!--左边内容-->
 			<div class="personMsg-left">
 				<div class="person-picture"><img src="../../build/logo.png" width="100%" height="100%" style="border-radius: 100%;"></div>
 				<h1>用户名</h1>
 				<button><router-link to="/index">返回</router-link></button>
 			</div>
 			<img class="y-line" src="../assets/y-line.png" />
 			<div class="white-ball"></div>
 			<img class="x-line" src="../assets/x-line.png" />
 			<!--右边表单-->
 			<div class="personMsg-right">
					<div class="personMsg-content">
							<p><label>院&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系：</label><span>{{message.college}}</span></p>
							<p><label>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</label><span>{{message.code}}</span></p>
							<p><label>宿舍楼号：</label><span>{{message.floorCode}}</span></p>
							<p><label>寝&nbsp;&nbsp;室&nbsp;&nbsp;号：</label><span>{{message.dormitoryCode}}</span></p>
							<p><label>联系电话：</label><span>{{message.phone}}</span></p>
					</div>
 			</div>
 		</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    	message:{
    		college:'计算机学院',
    		code:'5120152451',
    		floorCode:'东四',
    		dormitoryCode:'3-07',
    		phone:18281573992
    	}
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
a{
	text-decoration: none;
	color: inherit;
}
@keyframes run{
	0% {left: 42%;top: 10em;}
	30% {left: 2%;top: 2em;}
	55% {left: 8%;top: 3em;}
	80% {left: 2%;top: 2em;}
	90% {left: 3%;top: 2em;}
	100% {left: 2%;top: 2em;}
}
@-o-keyframes run{
	0% {left: 42%;top: 10em;}
	30% {left: 2%;top: 2em;}
	55% {left: 8%;top: 3em;}
	80% {left: 2%;top: 2em;}
	90% {left: 3%;top: 2em;}
	100% {left: 2%;top: 2em;}
}
@-webkit-keyframes run{
	0% {left: 42%;top: 10em;}
	30% {left: 2%;top: 2em;}
	55% {left: 8%;top: 3em;}
	80% {left: 2%;top: 2em;}
	90% {left: 3%;top: 2em;}
	100% {left: 2%;top: 2em;}
}
@-moz-keyframes run{
	0% {left: 42%;top: 10em;}
	30% {left: 2%;top: 2em;}
	55% {left: 8%;top: 3em;}
	80% {left: 2%;top: 2em;}
	90% {left: 3%;top: 2em;}
	100% {left: 2%;top: 2em;}
}
.perssonMsg-main{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .perssonMsg-detail{
  	height: 30em;
  	margin-top: .6em;
  	position: relative;
  	background: url(../assets/bg-personMsg.png) 0 0 no-repeat;
  	background-size: cover;
  	.personMsg-left{
  		width: 20%;
  		height: 100%;
  		float: left;
  		.person-picture{
  			position: absolute;
  			z-index: 100;
  			width: 16%;
  			height: 39%;	
  			border-radius: 100%;
  			left: 2%;
  			top: 2em;
  			background: white;
  			animation: run .5s;
				-moz-animation: run .5s;
				-webkit-animation: run .5s;
				-o-animation: run .5s;
  		}
  		h1{
  			position: absolute;
  			text-align: center;
  			width: 20%;
  			top: 7em;
  		}
  		button{
  			position: absolute;
  			border: 1px solid gray;
  			border-radius: 5px;
  			background: white;
  			width: 16%;
  			font-weight: bold;
  			height: 3em;
  			line-height: 3em;
  			left: 2%;
  			top: 28em;
  			a{
				display: block;
				width: 100%;
				height: 100%;
			}
  		}
  	}
  	.y-line{
  		position: absolute;
  		height: 80%;
  		top: 3%;
  	}
  	.x-line{
  		position: absolute;
  		width: 50%;
  		height: 1.5px;
  		left: calc(20% + 2em);
  		top: 90%;
  	}
  	.white-ball{
  		position: absolute;
  		background: white;
  		left: calc(20% - 1em);
  		top: 26em;
  		width: 2em;
  		height: 2em;
  		border-radius: 2em;
  	}
  	.personMsg-right{
  		width: 80%;
  		float: right;
  		height: 26em;
  		.personMsg-content{
  			margin-left: 10%;
  			margin-top: 3em;
  			p{
  				line-height: 3em;
  				font-family: "幼圆";
  				font-size: 1em;
  				label{
  					text-align: left;
  					font-weight: 700;
  				}
  			}
  		}
  	}
  }
  }
</style>
