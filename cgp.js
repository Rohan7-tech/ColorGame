var numSquares=6;
var colors=generateRandomcolor(numSquares);
var squares=document.querySelectorAll(".square"); /*This is for linking the HTML with the javascript*/
var abc=document.querySelector("#rp");
var h1=document.querySelector("h1");
var pickedcolor=pickcolor();
var easybtn=document.querySelector("#afg");
var hardbtn=document.querySelector("#afl");
var resetbutton=document.querySelector("#reset");
easybtn.addEventListener("click",function(){
    easybtn.classList.add("selectedc");
    hardbtn.classList.remove("selectedc");
    numSquares=3;
    colors=generateRandomcolor(3);
    pickedcolor=pickcolor();
    abc.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    	squares[i].style.backgroundColor=colors[i];
    }
    else{
          squares[i].style.display="none";
    }
}
	});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selectedc");
	easybtn.classList.remove("selectedc");
	numSquares=6;
	colors=generateRandomcolor(6);
    pickedcolor=pickcolor();
    abc.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++){
    	squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block";
    }
	});


resetbutton.addEventListener("click", function(){
   colors=generateRandomcolor(numSquares);
   pickedcolor=pickcolor();
   abc.textContent=pickedcolor;
   for(var i=0;i<squares.length;i++){
   	squares[i].style.backgroundColor=colors[i];
   }
   h1.style.backgroundColor="steelblue";
   messageDis.textContent="";
   this.textContent="New Colors";
});
abc.textContent=pickedcolor;
var messageDis=document.querySelector("#message");
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	 squares[i].addEventListener("click",function(){
	    var poi=this.style.backgroundColor;
         if(poi===pickedcolor){
         	messageDis.textContent="Correct";
         	resetbutton.textContent="Play Again ?";
         	changecolors(poi);
           	h1.style.backgroundColor=poi;
         } else{
            this.style.backgroundColor="#232323";
         	messageDis.textContent="Try Again";
         }
	 });
	 
	}
	function changecolors(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=color;
		}
	}
   function pickcolor(){
   	 var random=Math.floor(Math.random()*colors.length);
   	 return colors[random];
   }
   function generateRandomcolor(num){
       var arr=[]
      for(var i=0;i<num;i++){
          arr.push(randomcolor());
      }
       return arr;
   }
   function randomcolor(){
   	var r=Math.floor(Math.random()*256);
   	var g=Math.floor(Math.random()*256);
   	var b=Math.floor(Math.random()*256);
   	return "rgb(" + r + ", " + g + ", " + b + ")";
   }
