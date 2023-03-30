$(document).ready(function(){
  // волны и колыхание
  $(".stones_1").click(function(){
    setTimeout(function(){
      $(".stones_1").toggleClass("stones_1_anim");
    },100);
  });

  $(".grass_1").click(function(){
    setTimeout(function(){
      $(".grass_1").toggleClass("grass_1_anim");
    },100);
  });

  $(".grass_2").click(function(){
    setTimeout(function(){
      $(".grass_2").toggleClass("grass_2_anim");
    },100);
  });

  $(".stones_2").click(function(){
    setTimeout(function(){
      $(".stones_2").toggleClass("stones_2_anim");
    },100);
  });

  $(".stones_3").click(function(){
    setTimeout(function(){
      $(".stones_3").toggleClass("stones_3_anim");
    },100);
  });

  $(".leftkamysh").click(function(){
    setTimeout(function(){
      $(".leftkamysh").toggleClass("leftkamysh_anim");
    },100);
  });

  $(".rightkamysh").click(function(){
    setTimeout(function(){
      $(".rightkamysh").toggleClass("rightkamysh_anim");
    },100);
  });

  $(".kuvsh_1").click(function(){
    setTimeout(function(){
      $(".kuvsh_1").toggleClass("kuvsh_1_anim");
    },100);
  });

  $(".kuvsh_2").click(function(){
    setTimeout(function(){
      $(".kuvsh_2").toggleClass("kuvsh_2_anim");
    },100);
  });

  $(".lepestok_1").click(function(){
    setTimeout(function(){
      $(".lepestok_1").toggleClass("lepestok_1_anim");
    },100);
  });

  $(".kuvsh_3").click(function(){
    setTimeout(function(){
      $(".kuvsh_3").toggleClass("kuvsh_3_anim");
    },100);
  });

  $(".kuvsh_4").click(function(){
    setTimeout(function(){
      $(".kuvsh_4").toggleClass("kuvsh_4_anim");
    },100);
  });

  $(".kuvsh_5").click(function(){
    setTimeout(function(){
      $(".kuvsh_5").toggleClass("kuvsh_5_anim");
    },100);
  });

  $(".kuvsh_6").click(function(){
    setTimeout(function(){
      $(".kuvsh_6").toggleClass("kuvsh_6_anim");
    },100);
  });

  $(".kuvsh_7").click(function(){
    setTimeout(function(){
      $(".kuvsh_7").toggleClass("kuvsh_7_anim");
    },100);
  });

  $(".lepestok_2").click(function(){
    setTimeout(function(){
      $(".lepestok_2").toggleClass("lepestok_2_anim");
    },100);
  });

  $(".lepestok_3").click(function(){
    setTimeout(function(){
      $(".lepestok_3").toggleClass("lepestok_3_anim");
    },100);
  });

  $(".lepestok_4").click(function(){
    setTimeout(function(){
      $(".lepestok_4").toggleClass("lepestok_4_anim");
    },100);
  });

  // водомерка
  $(".insect").click(function(){
    setTimeout(function(){
      $(".insect").toggleClass("insect_anim");
    },100);
  });

  // лягушки
  $(".frog_1").click(function(){
      if ($(".frog_1").hasClass("close1")) {
          $(".frog_1").removeClass("close1");
          $(".frog_1").addClass("open1");
          }
      else if ($(".frog_1").hasClass("open1")) {
              $(".frog_1").removeClass("open1");
              $(".frog_1").addClass("close1");
          }
  });

  $(".frog_1").click(function(){
      if ($(".frog_1").hasClass("open1")) {
          $(".kva1").removeClass("none");
          }
      else if ($(".frog_1").hasClass("close1")) {
              $(".kva1").addClass("none");
          }
  });

  $(".kva1").click(function(){
      if ($(".frog_1").hasClass("open1")) {
          $(".kva1").addClass("none");
          $(".frog_1").removeClass("open1");
          $(".frog_1").addClass("close1");
          }
  });

  $(".frog_2").click(function(){
      if ($(".frog_2").hasClass("close2")) {
          $(".frog_2").removeClass("close2");
          $(".frog_2").addClass("open2");
          }
      else if ($(".frog_2").hasClass("open2")) {
              $(".frog_2").removeClass("open2");
              $(".frog_2").addClass("close2");
          }
  });

  $(".frog_2").click(function(){
      if ($(".frog_2").hasClass("open2")) {
          $(".kva2").removeClass("none");
          }
      else if ($(".frog_2").hasClass("close2")) {
              $(".kva2").addClass("none");
          }
  });

  $(".kva2").click(function(){
      if ($(".frog_2").hasClass("open2")) {
          $(".kva2").addClass("none");
          $(".frog_2").removeClass("open2");
          $(".frog_2").addClass("close2");
          }
  });

  $(".frog_3").click(function(){
      if ($(".frog_3").hasClass("close3")) {
          $(".frog_3").removeClass("close3");
          $(".frog_3").addClass("open3");
          }
      else if ($(".frog_3").hasClass("open3")) {
              $(".frog_3").removeClass("open3");
              $(".frog_3").addClass("close3");
          }
  });

  $(".frog_3").click(function(){
      if ($(".frog_3").hasClass("open3")) {
          $(".kva3").removeClass("none");
          }
      else if ($(".frog_3").hasClass("close3")) {
              $(".kva3").addClass("none");
          }
  });

  $(".kva3").click(function(){
      if ($(".frog_3").hasClass("open3")) {
          $(".kva3").addClass("none");
          $(".frog_3").removeClass("open3");
          $(".frog_3").addClass("close3");
          }
  });

  // лотосы
  $(".lotos_1").click(function(){
      $(this).toggleClass('l1_2')
  });

  $(".lotos_2").click(function(){
      $(this).toggleClass('l2_2')
  });

  // глаза
  $(document).mousemove(function(event) {
    let eye = $(".eye");
    let x = (eye.offset().left) + (eye.width() / 2);
    let y = (eye.offset().top) + (eye.height() / 2);
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  $(document).mousemove(function(event) {
    let eye2 = $(".eye2");
    let x = (eye2.offset().left) + (eye2.width() / 2);
    let y = (eye2.offset().top) + (eye2.height() / 2);
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1) + 180;
    eye2.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  $(document).mousemove(function(event) {
    let eye3 = $(".eye3");
    let x = (eye3.offset().left) + (eye3.width() / 2);
    let y = (eye3.offset().top) + (eye3.height() / 2);
    let rad = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (rad * (180 / Math.PI) * -1) + 180;
    eye3.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  // насекомые
  $(".fly_1").click(function(){
      $(this).toggleClass('stop1')
  });

  // $(".fly_1").click(function(){
  //     if ($(".fly_1").hasClass("play1")) {
  //         $(".fly_1").removeClass("play1");
  //         $(".fly_1").addClass("stop1");
  //         }
  //     else if ($(".fly_1").hasClass("stop1")) {
  //             $(".fly_1").removeClass("stop1");
  //             $(".fly_1").addClass("play1");
  //         }
  // });
  //
  // $(".fly_1").click(function(){
  //     if ($(".fly_1").hasClass("stop1")) {
  //         $(".zh1").removeClass("none");
  //         $(".zh1").addClass("stop1");
  //         }
  //     else if ($(".fly_1").hasClass("play1")) {
  //             $(".zh1").addClass("none");
  //
  //         }
  // });
  //
  // $(".zh1").click(function(){
  //     if ($(".fly_1").hasClass("stop1")) {
  //         $(".zh1").removeClass("stop1");
  //         $(".zh1").addClass("none");
  //         }
  // });

  $(".fly_2").click(function(){
      $(this).toggleClass('stop2')
  });

  $(".dragonfly").click(function(){
      $(this).toggleClass('stop3')
  });
});
