<template>
  <div class="indexPage-main">
    <!--<h1>学生宿舍管理系统</h1>
    <div class="underline"></div>
    <img class="indexPage-logo" src="../assets/logo.jpg" alt="logo" width="100%" height="100%" />-->
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
  			<!--导航栏组件-->
  			<Navigate class="tree" :width="width" :height="height"></Navigate>
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
  			<div class="detail-box1 box">
  				<img class="content" src="../assets/content01.jpg" alt="view" width="100%" height="100%" />
  				<div class="content-desc">
  					<h3>查看个人信息</h3>
  					<p>在这里您可以查看自己的账号信息，包括学号、院系、联系方式等，也可以打印自己的信息</p>
  				</div>
  			</div>
  			<div class="detail-box2 box">
  				<img class="content" src="../assets/content02.jpg" alt="askForLeave" width="100%" height="100%" />
  				<div class="content-desc">
  					<h3>请假</h3>
  					<p>在这里可以完成请假申请，需要提供您的部分信息</p>
  				</div>
  			</div>
  			<div class="detail-box3 box">
  				<img class="content" src="../assets/content03.jpg" alt="warranty" width="100%" height="100%" />
  				<div class="content-desc">
  					<h3>报修</h3>
  					<p>在这里您可以对宿舍里的电器、水管、沐浴设备等申请报修</p>
  				</div>
  			</div>
  			<div class="detail-box4 box">
  				<img class="content" src="../assets/content04.jpg" alt="leaveMessage" width="100%" height="100%" />
  				<div class="content-desc">
  					<h3>留言板</h3>
  					<p>在这里您可以查看来自辅导员、楼管的消息</p>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
import Navigate from '../components/navigate'
export default {
	components:{
		Navigate
	},
  data () {
    return {
    	width:'80%',
    	height:'15em'
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
@keyframes changeBg{
	from{opacity: 0.2;}
	to{opacity: 0.55;}
}
@-moz-keyframes changeBg{ /*firefox*/
	from{opacity: 0.2;}
	to{opacity: 0.55;}
}
@-webkit-keyframes changeBg{/*Safari和chrome*/
	from{opacity: 0.2;}
	to{opacity: 0.55;}
}
@-o-keyframes changeBg{ /*opera*/
	from{opacity: 0.2;}
	to{opacity: 0.55;}
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
  /*width: 80%;
  margin: 0 auto;*/
	
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
			float:left;
			.tree{
				/*width: 80%;
				height: 15em;*/
				margin: 0 auto;
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
				left: calc(2% - 0.4em);
				top: 1em;
			}
			.white-ball2{
				width: 1.2em;
				left: 30%;
				top: 0.8em;
			}
			.white-ball3{
				width: .8em;
				left: calc(46% - 0.4em);
				top: 1.8em;
			}
			.white-ball4{
				width: .8em;
				left: calc(75% - 0.4em);
				top: 1.5em;
			}
			.white-ball5{
				width: .8em;
				left: 97%;
				top: 2.5em;
			}
			.white-ball6{
				width: .8em;
				left: calc(2% - 0.4em);
				top: 17.6em;
			}
			.white-ball7{
				width: .8em;
				left: calc(46% - 0.4em);
				top: 17.6em;
			}
			.white-ball8{
				width: .8em;
				left: calc(75% - 0.4em);
				top: 17.6em;
			}
			.white-ball9{
				width: .8em;
				left: calc(2% - 0.4em);
				top: 28.5em;
			}
			.white-ball10{
				width: .8em;
				left: calc(44% - 0.8em);
				top: 28.6em;
			}
			.white-ball11{
				width: .8em;
				left: calc(75% - 0.4em);
				top: 28.6em;
			}
			.black-line1{
				width:calc(28% - 0.4em);
				left: calc(2% + 0.4em);
				top: 1.4em;
			}
			.black-line2{
				height:15.8em;
				left: 2%;
				top: 1.8em;
			}
			.black-line3{
				width:calc(44% - 0.8em);
				/*height: 1px;*/
				left: calc(2% + 0.4em);
				top: 18em;
			}
			.black-line4{
				height:15em;
				/*height: 1px;*/
				left: 46%;
				top: 2.6em;
			}
			.black-line5{
				width:calc(29% - 0.8em);
				/*height: 1px;*/
				left: calc(46% + 0.4em);
				top: 18em;
			}
			.black-line6{
				height:15.3em;
				/*height: 1px;*/
				left: 75%;
				top: 2.3em;
			}
			.black-line7{
				height:10.1em;
				width: 1px;
				left: 2%;
				top: 18.4em;
			}
			.black-line8{
				height:10.2em;
				width: 1px;
				left: 75%;
				top: 18.4em;
			}
			.black-line9{
				width:calc(31% - 0.4em);
				left: 44%;
				top: 29em;
			}
			.black-line10{
				width:1em;
				left: calc(75% + 0.4em);
				top: 18em;
			}
			.detail-box1{
				width:40%;
				background: white;
				height: 14em;
				left: 4%;
				top: 3em;
				
				&:hover .content-desc{
					display: block;
					animation: changeBg 2s;
					-moz-animation: changeBg 2s;
					-webkit-animation: changeBg 2s;
					-o-animation: changeBg 2s;
				}
				/*border: 1px solid gray;*/
			}
			.detail-box2{
				width:25%;
				background: white;
				height: 14em;
				left: 48%;
				top: 3em;
				&:hover .content-desc{
					display: block;
					animation: changeBg 2s;
					-moz-animation: changeBg 2s;
					-webkit-animation: changeBg 2s;
					-o-animation: changeBg 2s;
				}
				/*border: 1px solid gray;*/
			}
			.detail-box3{
				width:69%;
				background: white;
				height: 9em;
				left: 4%;
				top: 19em;
				&:hover .content-desc{
					display: block;
					animation: changeBg 2s;
					-moz-animation: changeBg 2s;
					-webkit-animation: changeBg 2s;
					-o-animation: changeBg 2s;
				}
				/*border: 1px solid gray;*/
			}
			.detail-box4{
				width:20%;
				background: white;
				height: 25em;
				left: 77%;
				top: 3em;
				&:hover .content-desc{
					display: block;
					animation: changeBg 2s;
					-moz-animation: changeBg 2s;
					-webkit-animation: changeBg 2s;
					-o-animation: changeBg 2s;
				}
			}
			.content{
				border-radius: 0;
			}
			.content-desc{
					display: none;
					height: 100%;
					opacity: 0.55;
					color: #FFFFFF;
					background: #000;
					margin: 0 auto;
					text-align: center;
					font-family: "幼圆 Bold", "幼圆 Regular", 幼圆;
    			font-weight: 700;
   				font-style: normal;
   				z-index:10000;
   				h3{
   					line-height: 4.5em;
   				}
   				p{
   					font-size: 1em;
   				}
				}
		}
	}
	
}

</style>
