window.onload = function() { 
$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.jsdelivr.net/gh/niihen-dzg/template@master/new_release3.css') );
  
$('#rilis').each(function(){ 
var hasilrilis = "<div class='rlsn'><table class='rilisan'><tr>"+
"<td><a href='"+l1+"'><img src='"+g1+"' alt='"+j1+"'/><div class='judul-rilisan'>"+j1+"</div></a></td>"+
"<td><a href='"+l2+"'><img src='"+g2+"' alt='"+j2+"'/><div class='judul-rilisan'>"+j2+"</div></a></td>"+
"<td><a href='"+l3+"'><img src='"+g3+"' alt='"+j3+"'/><div class='judul-rilisan'>"+j3+"</div></a></td>"+
"<td><a href='"+l4+"'><img src='"+g4+"' alt='"+j4+"'/><div class='judul-rilisan'>"+j4+"</div></a></td>"+
"<td><a href='"+l5+"'><img src='"+g5+"' alt='"+j5+"'/><div class='judul-rilisan'>"+j5+"</div></a></td>"+
"</tr></table></div>";
$(this).attr("id", "card-release"); 
document.getElementById("card-release").innerHTML = hasilrilis;
});

$('#IKLAN_A-ADS').each(function(){ 
var w_a_ads = "<div class='a-ads'><table border='0' style='width:100%;'><tr><td data-header='pertama'><div class='st'>"+ad_a+
"</div></td><td data-header='kedua'><div class='st'>"+ad_b+
"</div></td></tr></table></div>";
$(this).attr("id", "anonads"); 
document.getElementById("anonads").innerHTML = w_a_ads;
});

};
