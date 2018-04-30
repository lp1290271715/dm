<template>
  <div class="indexPage-main">
    <h1>学生宿舍管理系统</h1>
    <div class="underline"></div>
    <img class="indexPage-logo" src="../assets/logo.jpg" alt="logo" width="100%" />
  	<div class="indexPage-userShow">
  		<div class="userMsg">
  			<div class="ball"></div>
  			<p><span>李鹏，您好</span></p>
  		</div>
  	</div>
  	<div class="clearFloat"></div>
  	<div class="indexPage-detail">
  		<div class="nav-tree">
  			<div class="space"></div>
  			<div class="tree">
  			</div>
  			<button>已登陆</button>
  		</div>
  		<div class="detail-right">
  			<img class="white-ball1" src="../assets/ball.png">
  			<img class="white-ball2" src="../assets/ball.png">
  			<img class="white-ball3" src="../assets/ball.png">
  			<img class="white-ball4" src="../assets/ball.png">
  			<img class="white-ball5" src="../assets/ball.png">
  			<img class="white-ball6" src="../assets/ball.png">
  			<img class="white-ball7" src="../assets/ball.png">
  			<img class="white-ball8" src="../assets/ball.png">
  			<img class="white-ball9" src="../assets/ball.png">
  			<img class="white-ball10" src="../assets/ball.png">
  			<img class="white-ball11" src="../assets/ball.png">
  			<img class="black-line1" src="../assets/x-line.png">
  			<img class="black-line2" src="../assets/y-line.png">
  			<img class="black-line3" src="../assets/x-line.png">
  			<img class="black-line4" src="../assets/y-line.png">
  			<img class="black-line5" src="../assets/x-line.png">
  			<img class="black-line6" src="../assets/y-line.png">
  			<img class="black-line7" src="../assets/y-line.png">
  			<img class="black-line8" src="../assets/y-line.png">
  			<img class="black-line9" src="../assets/x-line.png">
  			<img class="black-line10" src="../assets/x-line.png">
  			<div class="detail-box1 box"></div>
  			<div class="detail-box2 box"></div>
  			<div class="detail-box3 box"></div>
  			<div class="detail-box4 box"></div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.clearFloat{
		clear: both;
	}
	.space{
		height: .5em;
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
	
	.indexPage-userShow{
		background: #D7D7D7;
		height: 3em;
		.userMsg{
			width: 25%;
			float: right;
			.ball{
				width: 2em;
				height: 2em;
				border-radius: 2em;
				margin-top: .5em;
				float: left;
				background: white;
			}
			p{
				float: right;
				font-size: 1.4em;
				width: calc(100% - 2.2em);
				line-height: 2.5em;
			}
		}
	}
	.indexPage-detail{
		height: 30em;
		margin-top: .6em;
		background: #F2F2F2;
		.nav-tree{
			width: 20%;
			height: 100%;
			background: white;
			float:left;
			.tree{
				width: 80%;
				height: 15em;
				margin: 0 auto;
				background: red;
			}
			button{
				border-style: none;
				color: white;
				display: block;
				width: 80%;
				height: 3.5em;
				margin: 0 auto;
				margin-top: 10em;
				background: #169BD5;
				border-radius: 10px;
			}
		}
		.detail-right{
			width: 80%;
			float: right;
			position: relative;
			img{
				border-radius: 100%;
				position: absolute;
			}
			.box{
				position: absolute;
			}
			.white-ball1{
				width: .8em;
				left: 1em;
				top: 1em;
			}
			.white-ball2{
				width: 1.2em;
				left: 30%;
				top: 0.8em;
			}
			.white-ball3{
				width: .8em;
				left: calc(40% + 3.2em);
				top: 1.8em;
			}
			.white-ball4{
				width: .8em;
				left: calc(65% + 5.2em);
				top: 1.5em;
			}
			.white-ball5{
				width: .8em;
				left: calc(85% + 7em);
				top: 2.5em;
			}
			.white-ball6{
				width: .8em;
				left: 1em;
				top: 17.6em;
			}
			.white-ball7{
				width: .8em;
				left: calc(40% + 3.2em);
				top: 17.6em;
			}
			.white-ball8{
				width: .8em;
				left: calc(65% + 5.2em);
				top: 17.6em;
			}
			.white-ball9{
				width: .8em;
				left: 1.0em;
				top: 28.5em;
			}
			.white-ball10{
				width: .8em;
				left: calc(40% + 2.6em);
				top: 28.6em;
			}
			.white-ball11{
				width: .8em;
				left: calc(65% + 5.2em);
				top: 28.6em;
			}
			.black-line1{
				width:calc(30% - 1.8em);
				left: 1.8em;
				top: 1.4em;
			}
			.black-line2{
				height:15.8em;
				left: 1.4em;
				top: 1.8em;
			}
			.black-line3{
				width:calc(40% + 1.4em);
				/*height: 1px;*/
				left: 1.8em;
				top: 18em;
			}
			.black-line4{
				height:15em;
				/*height: 1px;*/
				left: calc(40% + 3.6em);
				top: 2.6em;
			}
			.black-line5{
				width:calc(25% + 1.2em);
				/*height: 1px;*/
				left: calc(40% + 4em);
				top: 18em;
			}
			.black-line6{
				height:15.3em;
				/*height: 1px;*/
				left: calc(65% + 5.6em);
				top: 2.3em;
			}
			.black-line7{
				height:10.1em;
				width: 1px;
				left: 1.4em;
				top: 18.4em;
			}
			.black-line8{
				height:10.2em;
				width: 1px;
				left: calc(65% + 5.6em);
				top: 18.4em;
			}
			.black-line9{
				width:calc(25% + 1.8em);
				left: calc(40% + 3.4em);
				top: 29em;
			}
			.black-line10{
				width:1em;
				left: calc(65% + 6em);
				top: 18em;
			}
			.detail-box1{
				width:40%;
				background: white;
				height: 14em;
				left: 2.4em;
				top: 3em;
				border: 1px solid gray;
			}
			.detail-box2{
				width:25%;
				background: white;
				height: 14em;
				left: calc(40% + 4.4em);
				top: 3em;
				border: 1px solid gray;
			}
			.detail-box3{
				width:calc(65% + 2em);
				background: white;
				height: 9em;
				left: 2.4em;
				top: 19em;
				border: 1px solid gray;
			}
			.detail-box4{
				width:20%;
				background: white;
				height: 25em;
				left: calc(65% + 7em);
				top: 3em;
				border: 1px solid gray;
			}
		}
	}
	
}

</style>
