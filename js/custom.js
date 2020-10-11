$(document).ready(function(){
    $(".menu-open").click(function(){
        $(".open-menu").addClass("on");
    })

    $(".close-btn").click(function(){
        $(".open-menu").removeClass("on");
    })
    

    

    $(".tab ul li a").click(function(e){

        var index = $(".tab ul li a").index(this);

        e.preventDefault();
       if(index == 0){
        $(".media-con.two").css('display','none');
           $(".media-con.one").css('display','flex');
       }else if(index == 1){
        $(".media-con.one").css('display','none');
        $(".media-con.two").css('display','flex');
       }
    })
    // $(".tab ul").on('click','li', 'a',function(e){
    //     e.preventdefault()
    //     if($(this).eq(0)){
           
    //     }else if($(this).eq(1)){
    //         alert("1")
    //     }
      
    // })


})