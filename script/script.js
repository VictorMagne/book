$(document).ready(function(){
  $(".legende").hide()
  $(".vignette").hover(hoverVignetteIn,hoverVignetteOut)
  // $(".filtre-illu").hover(hoverFiltrIlluIn,hoverFiltrIlluOut)
  $(".filtre-illu").click(clickFiltrIllu)
  $(".filtre-num").click(clickFiltrNum)
  $(".filtre-print").click(clickFiltrPrint)
  $(".img2").hide()


  $(".filtre-num").click(deselectFiltrNum)
  $(".filtre-print").click(deselectFiltrPrint)


  $(".vignette-orchestra").click(hoverVignetteOrIn)

//  $(window).scroll(headerScroll)
  //$(window).off("scroll",headerNoScroll)

});

function headerNoScroll(){
  $(".header").addClass("header").fadeOut(100)
}

function headerScroll(){
  $(".header").addClass("mini-header").fadeIn(100)
}

function hoverVignetteIn(){
  $(".legende",this).show()
  $(".cover",this).hide()
  $(".img2",this).show()


}

function hoverVignetteOut(){
  $(".legende",this).hide()
  $(".cover",this).show()
  $(".img2").hide()

}

// function hoverFiltrIlluIn(){
//   $("#image2,#image3,#image4,#image5,#image7,#image8,#image9,#image10").show()
// }
//
// function hoverFiltrIlluOut(){
//   $("#image2,#image3,#image4,#image5,#image7,#image8,#image9,#image10").show()
// }

function clickFiltrIllu(){
  $("#image2,#image3,#image4,#image5,#image7,#image8,#image9,#image10").hide()
  $(".filtre-illu").addClass("filtre-illu-select");
  $(".filtre-illu").click(deselectFiltrIllu)
}

function clickFiltrNum(){
  $("#image1,#image2,#image5,#image6,#image7,#image8,#image9,#image11,#image12,#image13,#image14").hide()
  $(".filtre-num").addClass("filtre-num-select")
  $(".filtre-num").click(deselectFiltrNum)
}

function clickFiltrPrint(){
  $("#image1,#image3,#image4,#image6,#image10,#image11,#image12,#image13,#image14").hide()
  $(".filtre-print").addClass("filtre-print-select");
  $(".filtre-print").click(deselectFiltrPrint)
}


function deselectFiltrIllu(){
  $(".filtre-illu-select").removeClass("filtre-illu-select");
  $(".filtre-illu").click(clickFiltrIllu)
  $("#image2,#image3,#image4,#image5,#image7,#image8,#image9,#image10").show()

}

function deselectFiltrNum(){
  $(".filtre-num-select").removeClass("filtre-num-select");
  $(".filtre-num").click(clickFiltrNum)
  $("#image1,#image2,#image5,#image6,#image7,#image8,#image9,#image11,#image12,#image13,#image14").show()

}

function deselectFiltrPrint(){
  $(".filtre-print-select").removeClass("filtre-print-select");
  $(".filtre-print").click(clickFiltrPrint)
  $("#image1,#image3,#image4,#image6,#image10,#image11,#image12,#image13,#image14").show()

}

// function clickFiltrIlluOut(){
//   $("#image2,#image3,#image4,#image5,#image7,#image8,#image9,#image10").show()
// }

function hoverFiltrWebIn(){
  $("#image1").hide()
}

function hoverFiltrWebOut(){
  $("#image1").show()
}

function hoverVignetteOrIn(){
 $(".vignette-orchestra").removeClass(".vignette-orchestra").addClass(".vignette-orchestra-zoom");
}

// function hoverVignetteOrOut(){
//   $(".vignette-orchestra-zoom").addClass("vignette-orchestra")
// }
