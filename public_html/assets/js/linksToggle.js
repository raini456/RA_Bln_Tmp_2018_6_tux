function linkAnzeigen(){
	document.getElementById("miete").innerHTML="<a href='../kanzlei/taetigkeitsschwerpunkte_mietrecht.html'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>";
//   document.getElementById("miete").style.textDecoration="none";
}

$(document).ready(function(){
	$('#menuebar').click(function(){	    		        
		$('.navSmall').slideToggle('slow');
		$('.navTop').css({
		 	display:'none'
		});		
	});	
	$('.liNavSmall').click(function(){
		$(this).slideUp('slow');
	});
});