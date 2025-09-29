

/* ------------------왼쪽에서 나왔다가 왼쪽으로 돌아가기 */

/* $(".login a").click(function(){
    
    $(".login_xp").animate({ left: "50%" }, 500); 
});


$(".login_xp .x_btn").click(function(){
    $(".login_xp").fadeOut(500);
}) */


    
/* -----------제자리에서 나왔다가 사라짐 (근데 첫 클릭은 애니메이트가 안됨) */
    
/* $(".login a").click(function(){
    $(".login_xp")
        .animate(500)
        .fadeIn(500)         
        .css({ left: "50%" })  
        
});


$(".login_xp .x_btn").click(function(){
    $(".login_xp").fadeOut(500); 
}); 

 */

/* ----왼쪽에서 왔다가 그 자리에서 사라지는 코드 */







$(".login a").click(function(){
   
    $(".modal_login").fadeIn(500)
     $(".login_xp")
     .fadeIn(500)
     .animate({ left: "50%" }, 300)            
                                
        
});



$(".login_xp .x_btn").click(function(){
    $(".modal_login").fadeOut(500)
    $(".login_xp").fadeOut(500, function(){
        $(".login_xp").css({ left: "" });                        
    });
     
     return false   
}); 


$('.prv_0').mouseenter(function(){
    $('.rline').addClass('on')
})
$('.prv_0').mouseleave(function(){
    $('.rline').removeClass('on')
})


$('.prv_1').click(function(){
    $('.s3vd1 ').show();
    $('.s3vd2, .s3vd3').hide();
    $('.s3tb1').show();
    $('.s3tb2, .s3tb3').hide();
    $('.prv_2, .prv_3').css({opacity:"0.5"})
    $('.prv_1').css({opacity:"1"})
})
$('.prv_2').click(function(){
    $('.s3vd2 ').show();
    $('.s3vd1, .s3vd3').hide();
    $('.s3tb2').show();
    $('.s3tb1, .s3tb3').hide();
    $('.prv_1, .prv_3').css({opacity:"0.5"})
    $('.prv_2').css({opacity:"1"})
})
$('.prv_3').click(function(){
    $('.s3vd3 ').show();
    $('.s3vd1, .s3vd2').hide();
    $('.s3tb3').show();
    $('.s3tb2, .s3tb1').hide();
    $('.prv_1, .prv_2').css({opacity:"0.5"})
    $('.prv_3').css({opacity:"1"})
})



/* $('.cont1_1').mouseenter(function(){
    $('.cont1_1 figure .s4scr').show();
    $('.cont1_1 .iconbox').show()
        $('.haeart').click(function(){
          
        })

    $('.cont1_1').mouseleave(function(){
        $('.cont1_1 figure .s4scr').hide()
        $('.cont1_1 .iconbox').hide(); 
    })
})
$('.cont1_2').mouseenter(function(){
    $('.cont1_2 figure .s4scr').show(); 
    $('.cont1_2 .iconbox').show(); 


    $('.cont1_2').mouseleave(function(){
        $('.cont1_2 figure .s4scr').hide()
        $('.cont1_2 .iconbox').hide(); 
    })
})
$('.cont1_3').mouseenter(function(){
    $('.cont1_3 figure .s4scr').show(); 
    $('.cont1_3 .iconbox').show(); 


    $('.cont1_3').mouseleave(function(){
        $('.cont1_3 figure .s4scr').hide()
        $('.cont1_3 .iconbox').hide(); 
    })
})
 */

/* $('.cont1_1, .cont1_2, .cont1_3').mouseenter(function () {
    let $this = $(this);

    $this.find('figure .s4scr').show();
    $this.find('.iconbox').show();

    // 하트 토글 (한 번 누르면 빨간 하트, 다시 누르면 원래대로)
    $this.find('.haeart').off('click').on('click', function () {
        let $heart = $this.find('.haeart');
        let $redHeart = $this.find('.redhaeart');

        if ($redHeart.is(':visible')) {
            
            $redHeart.hide();
            $heart.show();
        } else {
            // 기본 하트일 경우 빨간 하트로 변경
            $redHeart.show().css({ display: "flex" });
            $heart.hide();
        }
    });

    $this.mouseleave(function () {
        $this.find('figure .s4scr').hide();
        $this.find('.iconbox').hide();
    });
}); */




