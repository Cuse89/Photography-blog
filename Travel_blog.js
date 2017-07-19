var photos = {}

photos['iceland'] = [
  'http://i.imgur.com/vYFyEfB.jpg',
  'http://i.imgur.com/zNetDQA.jpg',
  'http://i.imgur.com/PTxJoh4.jpg',
  'http://i.imgur.com/3q3hcVp.jpg',
  'http://i.imgur.com/rKfqQvG.jpg',
  'http://i.imgur.com/zx08vsx.jpg',
  'http://i.imgur.com/u8veGtF.jpg',
  'http://i.imgur.com/sV9xIwO.jpg',
  'http://i.imgur.com/JrFPwVV.jpg',
  'http://i.imgur.com/6QV5zEJ.jpg',
  'http://i.imgur.com/fMB4EJv.jpg',
  'http://i.imgur.com/4lNedKC.jpg',
  'http://i.imgur.com/N6Oq3VS.jpg',
  'http://i.imgur.com/3Tk3gGE.jpg',
  'http://i.imgur.com/kXL99iw.jpg',
  'http://i.imgur.com/xWLNaiD.jpg',
  'http://i.imgur.com/srR2osT.jpg',
  'http://i.imgur.com/2WBWisE.jpg',
  'http://i.imgur.com/ePNYl65.jpg',
  'http://i.imgur.com/dm1IChp.jpg',
  'http://i.imgur.com/DWyYZjw.jpg'
  ];

photos['indonesia'] = [
  'http://i.imgur.com/jj4fzPn.jpg',
  'http://i.imgur.com/4D77CcT.jpg',
  'http://i.imgur.com/41VvcOe.jpg',
  'http://i.imgur.com/K3TM4Cc.jpg',
  'http://i.imgur.com/SLPsspj.jpg',
  'http://i.imgur.com/Z6hT1ci.jpg',
  'http://i.imgur.com/9eCsaXC.jpg',
  'http://i.imgur.com/3Aqm8Jo.jpg',
  'http://i.imgur.com/zHkBIzT.jpg',
  'http://i.imgur.com/6lky7gj.jpg',
  'http://i.imgur.com/gmtJzyf.jpg',
  'http://i.imgur.com/0AfjKyW.jpg',
  'http://i.imgur.com/TAHJudf.jpg',
  'http://i.imgur.com/DqLf20S.jpg',
  'http://i.imgur.com/qQOK4bd.jpg',
  'http://i.imgur.com/Dkn0KaW.jpg',
  'http://i.imgur.com/RodPFYI.jpg',
  'http://i.imgur.com/JEVu73V.jpg',
  'http://i.imgur.com/RQXF3pX.jpg',
  'http://i.imgur.com/o9nyp8o.jpg',
  'http://i.imgur.com/2MDUg9t.jpg',
];

photos['austria'] = [
  'http://i.imgur.com/6l8XnEI.jpg',
  'http://i.imgur.com/HPUO8ST.jpg',
  'http://i.imgur.com/Ye84GIQ.jpg',
  'http://i.imgur.com/O8BG2NI.jpg',
  'http://i.imgur.com/H42s9Sr.jpg',
  'http://i.imgur.com/4GLX3DU.jpg',
  'http://i.imgur.com/42gu75H.jpg',
  'http://i.imgur.com/SQq3Fxr.jpg',
  'http://i.imgur.com/Y9GZKAq.jpg',
  'http://i.imgur.com/gJ459h3.jpg',
  'http://i.imgur.com/gYxfDHy.jpg',
  'http://i.imgur.com/ru0e1lg.jpg',
  'http://i.imgur.com/UUxSYYF.jpg',
  'http://i.imgur.com/hg9e12k.jpg',
  'http://i.imgur.com/ZIvjNMF.jpg',
];

photos['nzaus'] = [
  'http://i.imgur.com/RQyPVN1.jpg',
  'http://i.imgur.com/2aYpLju.jpg',
  'http://i.imgur.com/2WiyXCY.jpg',
  'http://i.imgur.com/CNMspQK.jpg',
  'http://i.imgur.com/vLZUG26.jpg',
  'http://i.imgur.com/4Oxzgn3.jpg',
  'http://i.imgur.com/w3QZVZY.jpg',
  'http://i.imgur.com/dcPtSq4.jpg',
  'http://i.imgur.com/TKdRnq4.jpg',
  'http://i.imgur.com/JcuOdbe.jpg',
  'http://i.imgur.com/COoHCrS.jpg',
  'http://i.imgur.com/zd1vzS0.jpg',
  'http://i.imgur.com/r3MhH7x.jpg',
  'http://i.imgur.com/HjwwcUk.jpg',
  'http://i.imgur.com/2IwHloh.jpg',
  'http://i.imgur.com/Cf2a993.jpg',
  'http://i.imgur.com/qV4nZz3.jpg',
  'http://i.imgur.com/l22yQRZ.jpg',
];

/*Initialising variables for more reliable performance*/
var homepage = true
var gallery_location = ''

$(document).ready(function(){
  $('#menu').css('margin-left', '-' + $('#menu').width()/2 + 'px');
});


$('#home').click(function(){
  $('.parallax_image').show();
  $('#content').hide();
  homepage = true;
});


$('.menu_button a').click(function(){
  $('#content').show();
  $('#grid').empty();
  $('.parallax_image').show();
  /*Each 'menu_button a' is assigned a html data attribute according to its array name, which the gallery_location variable collects once clicked*/
  gallery_location = $(this).parent().data('location');
  $('.parallax_image').not($('#parallax_image_' + gallery_location)).hide();
  $('.blog_listing').hide();
  if (gallery_location == 'iceland') {
    $('#content').insertAfter($('#parallax_image_iceland'));
    $('#country').html('Iceland');
    $('#blog_listing_iceland').show();
  } else if (gallery_location == 'indonesia') {
    $('#content').insertAfter($('#parallax_image_indonesia'));
    $('#country').html('Indonesia');
    $('#blog_listing_indonesia').show();
  } else if (gallery_location == 'austria') {
    $('#content').insertAfter($('#parallax_image_austria'));
    $('#country').html('Austria');
    $('#blog_listing_austria').show();
  } else if (gallery_location == 'nzaus') {
    $('#content').insertAfter($('#parallax_image_nzaus'));
    $('#country').html('NZ/Aus');
    $('#blog_listing_nzaus').show();
  };
  $('body').css('overflow-y', 'auto');
  homepage = false;
  grid_load();
});


function grid_load() {
  $('.thumbnail').fadeOut(1000);
  $('#buttons').fadeOut(1000);
  $('#grid').empty();
  $('#grid_photo_big_wrapper').empty();
  /*loops through the relevant photo array and appends the images to the grid*/
  for(var i = 0; i < photos[gallery_location].length; i++) {
    $('#grid').append(`<li class='grid_list'><div class='image_holder'><img class='grid_photo' id='grid_photo${i+1}' src='${photos[gallery_location][i]}'/></div></li>`);
    $('#grid_photo_big_wrapper').append(`<img class= 'grid_photo_big' id='grid_photo_big${i+1}' src='${photos[gallery_location][i]}'/>`);
  see_grid_photo_big(i+1);
  };
  $('#grid_photo_big_wrapper').append(`<span id='close'>&times;</span>`);
  $('#grid').fadeIn(1000);
  $('#country_info').fadeIn(1000);
  };


/*Function to fix the country_info in position as the page is scrolled further. This is where the homepage variable comes into use - to fix a problem that caused the country_info to stay fixed (until you scrolled) when navigatiing from the homepage to a country page*/
$(window).scroll(function(){
  if ($(window).scrollTop() >= ($('#content').offset().top - 70) && homepage === false) {
      $('#country_info').css({'position': 'fixed', 'top': '80px', 'left': '0'});
  } else {
    $('#country_info').css({'position': 'absolute', 'top': '10px'});
  };
});


function see_grid_photo_big(big_photo_num) {
  $('#grid_photo' + big_photo_num).click(function(){
    $('#grid_photo_big_wrapper').show();
    $('#grid_photo_big' + big_photo_num).show();
/*centering the main photo*/
    $('.grid_photo_big').css('margin-left', '-' + $('#grid_photo_big' + big_photo_num).width()/2 + 'px');
    $('.grid_photo_big').css('margin-top', '-' + $('#grid_photo_big' + big_photo_num).height()/2 + 'px');
    $('body').css('overflow-y', 'hidden');
  });
/*Using 'event delegation', as the span ('#close') is added dynamically*/
  $(document).on('click', '#close', function(){
    $('.grid_photo_big').hide();
    $('#grid_photo_big_wrapper').hide();
    $('body').css('overflow-y', 'auto');
  })
};
