window.onload = function() { 
$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.jsdelivr.net/gh/niihen-dzg/template@master/new_release8.css') );
  
$('#rilis').each(function(){ 
var lzlod = "https://1.bp.blogspot.com/-8FaUdtZGvFM/XZzJNW-VG5I/AAAAAAAADIo/5520jWvYEqUQ_D8i_vva369pfT1iRtrhwCLcBGAsYHQ/w150-h200-n-l85-fSoften=10,30,0/NiiHen.png"+
"' class='lazy' data-src='";
var hasilrilis = "<div class='rlsn'><div class='lablrilis'>Hentai Yang Baru Rilis</div><table class='rilisan'><tr>"+
"<td><a href='"+l1+"'><img src='"+lzlod+g1+"' alt='"+j1+"' title='"+j1+"'/><div class='judul-rilisan'>"+j1+"</div></a></td>"+
"<td><a href='"+l2+"'><img src='"+lzlod+g2+"' alt='"+j2+"' title='"+j2+"'/><div class='judul-rilisan'>"+j2+"</div></a></td>"+
"<td><a href='"+l3+"'><img src='"+lzlod+g3+"' alt='"+j3+"' title='"+j3+"'/><div class='judul-rilisan'>"+j3+"</div></a></td>"+
"<td><a href='"+l4+"'><img src='"+lzlod+g4+"' alt='"+j4+"' title='"+j4+"'/><div class='judul-rilisan'>"+j4+"</div></a></td>"+
"<td><a href='"+l5+"'><img src='"+lzlod+g5+"' alt='"+j5+"' title='"+j5+"'/><div class='judul-rilisan'>"+j5+"</div></a></td>"+
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
