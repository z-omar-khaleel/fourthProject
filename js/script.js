$(function () {
    $('input').on({
		
		focus:function() { 
        
    // console.log($(this).siblings('span').text('s'));
     $(this).siblings('span').css({
            'top': '-10px',
       'font-size': '12px'
        })
    
    }, 
		blur:function(){
    

    var val= this.value;
 
    
    if(val !=""){
    $(this).siblings('span').css({
		 'top': '-10px',
    'font-size': '10px'
	 })
        
    }
    else{
       $(this).siblings('span').css({  
            'top': '10px',
    'font-size': '12px'
    })
}
   
		}
		
});

    
})
function passr(){
   var x= document.getElementById('pass');
 
   
   if (x.type === "password") {
    x.type = "text";
  } 
  else {
    x.type = "password";
  }

}
function passe(){
    var x= document.getElementById('re-pass');
    
    
    if (x.type === "password") {
     x.type = "text";
   } 
   else {
     x.type = "password";
   }
 }