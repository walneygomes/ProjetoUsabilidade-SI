*{
margin: 0;
padding: 0;

}
body{
	background-color: #f9f9f9;
	}
	#check{
		display:none;
	
	}
	#icone{
		cursor: pointer;
		padding: 15px;
		position: absolute;
		z-index: 1;
	}
	.barra{
	background-color:#333;
	height: 100%;
	width: 300px;
	position: absolute;
	transition: all .2s linear;
	}
	nav{
		width:100%;
		position:absolute;
		top:60px;
		
	}
	nav a{
		text-decoration: none;
		
	
	}

	.link{
		background-color: #494950;
		padding: 20px;
		font-family: 'Arial';
		font-size: 12 pt;
		transition: all .2s linear;
		color: #f4f4f9;
		border-bottom: 2px solid #222;
		opacity: 0;
		margin-top:200px;
		
	}
	.link:hover{
		backgound-color: #050542;
		
	}
	#check:checked ~ .barra{
		transform: translateX( 300px );
	
	}
