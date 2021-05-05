// görev 1
$("h2:lt(3)").each(function(){
    var gorev1=$(this).text();
    var gorev1li= "<li>" + gorev1 + "</li>"
    // $(this).before("<li></li>");
    $("#gorev1 > ul  ").append(gorev1li+ "\n");
});

// // görev 2
var gorev2 = $("article > div > h2").length;
$("#gorev2 > :input").val (gorev2);

// görev 3
//Tamam
var h1 = $("article > h1").text();
$("#gorev3 > :input").val(h1);

// görev 4
//TAMAM
 $("article > div ").each(function(index,element) {
     var uwu = $(this).find("p").text();
     var uwuleng = uwu.length
    
     $(this).find("h2").append(" (" + uwuleng + " karakter)");
     
 });



// // görev 5
// Mavi ve turuncu dendi ben rgb değerleriyle birebir yapmadım direk mavi turuncu verdim
$("article > div > h2:odd").css("color","blue");
$("article > div > h2:even").css("color","orange");
$("h1").css("color","red");
// görev 6
// 6 fade out
$("article > div:first").fadeOut(3000)
// görev 7
// TAMAM
$("article > div > h2").each(function(){
    var can = $(this).text();
    var canicl = can.includes("can");
    if (canicl){
        var gorev7 = $(this).text();
        var gorev7li = "<li>" + gorev7 + "</li>"
        $("#gorev7 > ul  ").append(gorev7li+ "\n");
    }
});


// görev 8
//TAMAM
// Ben divi fadeout yaptım fakat silmedim o yüzden lorem sonradan gözükmesi için fade in yapıyorum altta içeriği 
// değiştikten sonra fakat bunu silipte yapabilirim.
$.ajax({
    url: "lorem.html",
    type: "get",
    success: function(result) {
        $("article > div >h2:first").text("Lorem")
        $("article > div >h2:first").css("color" , "black")
        $("article > div >p:first").text(result);
    }
});
$("article > div:first").fadeIn("slow")
// // görev 9
// TAMAM

$("h1").hover(function(){
var gorev9 = $(this).text();
$("#gorev9 > :input").val(gorev9);
});
$("h2").hover(function(){
    var gorev9 = $(this).text();
    $("#gorev9 > :input").val(gorev9);
});

// // görev 10
// Ben sonuctakine benzer olsun diye böyle yapıtm
// Hemde sayfa aşağı yukarı gezerken sabit kalsın diye ayarladım 
// tam olarak boşluklar belirtilmedi ben %3 verdim
$("body").prepend("<img id='check' src='check.png'/>");
$("#check").css("width","100px");
$("#check").css("height","100px");
$("#check").css("position","fixed");
$("#check").css("right","3%");
$("#check").css("bottom","3%");
// resmi çizdir