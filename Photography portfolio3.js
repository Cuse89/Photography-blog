// Script amended from Photography portfolio1.js so new photo albums can be uploaded as arrays
var photos = {}

photos['iceland'] = [
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14601054_10153928625106088_185953656696770950_n.jpg?oh=acf7caa31c93595ab28a310d3d27eb5f&oe=59A7D433',
  'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14522766_10153928628386088_1602606012884796857_n.jpg?oh=8dfd705d2711b62142e27c1346c168c9&oe=59E89716',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14601090_10153928625776088_8806464417718742860_n.jpg?oh=9a1d5c41e833bfa1e5cb8cc01bfed820&oe=59DA2EEE',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14470612_10153928625336088_6887612966314907502_n.jpg?oh=fb3aa8354f73d8f9fa11000a94c09e3c&oe=59E1755A',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14633072_10153928627046088_6521791342279978767_n.jpg?oh=58d4076a4463d2fc22850d152089fc4c&oe=59AA8903',
  'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14568169_10153928625571088_5477394597281546128_n.jpg?oh=438f096705f29077aeb4f2666bb7effd&oe=59AE16E3',
  'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14485031_10153928626711088_3598351380268711549_n.jpg?oh=e8589083dc450e3c00f64babbd3f6be8&oe=59B8D5DF',
  'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/14520379_10153928628251088_2725880073294164163_n.jpg?oh=8b0486ff7eae0d957cb50d4d9aaa76e5&oe=59BBBD23',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14570503_10153928625831088_1461215065005952752_n.jpg?oh=6584a358531b9c0382feab853c347b3d&oe=59A3D31C',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14484893_10153928626366088_7702573184195432359_n.jpg?oh=5748a550af5c23b7bef011e9bb68b662&oe=59D70787',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14520552_10153928626461088_5071825502106045258_n.jpg?oh=780e2bf44e728d3fcdb32e4d31a8d67d&oe=59A60988',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14484623_10153928627211088_1672783401717776495_n.jpg?oh=579416b43ab57fedee63a4110df5f79d&oe=59A253A2',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14572222_10153928627451088_54949441077537433_n.jpg?oh=7e892df28723c0bd99c413aa0178fea0&oe=59D64640',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14470626_10153928627551088_3333663753936816455_n.jpg?oh=49964cd936884d0b54e85a7531b64e1a&oe=59D6F37B',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14568218_10153928627681088_4691436904202218369_n.jpg?oh=97f26583873870a14bedcf377ba6f13e&oe=59D6D97F',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14494726_10153928627776088_124634162593241085_n.jpg?oh=29580e6ed8a3b96551e49f2017fac4be&oe=599F85F8',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14601112_10153928627961088_1329948127232212228_n.jpg?oh=f003fba6ef6c4587cddd26d9615c17a2&oe=59DF7520',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14494807_10153928628096088_5704970143888508819_n.jpg?oh=c38e0af35e325847845d08b91fcec329&oe=59D17D67',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14470505_10153928628551088_501650544096908355_n.jpg?oh=922cc53f11eb6edb525f819f1a8d4146&oe=59D3CD7D',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14485079_10153928625396088_1313510254542210929_n.jpg?oh=ebb7a3f883802472df9f5c5bd97696c0&oe=59DF000E'
  ];

photos['indonesia'] = [
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10615342_10152410614321088_7795944754476777199_n.jpg?oh=3a3cca6b64d96df603e29dd918726ede&oe=59D621BD',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10153754_10152410605551088_1638235473519526449_n.jpg?oh=c7f9e15f6d7e9e7bd72b01b555cabf56&oe=59D5BD18',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10006317_10152410628346088_4911320649985496708_n.jpg?oh=13fdb06fca652044e6607df02b50e104&oe=599C6A6B',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10701999_10152410629391088_2395660397331511912_n.jpg?oh=7c8b7b7614793b9bffad558779c62bf5&oe=59DE2C64',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10447617_10152410629541088_6920331244402209997_n.jpg?oh=8bf23a79407dbd3d7a16c99263a6ce6a&oe=59A1B440',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10733972_10152410604501088_869942677540484109_n.jpg?oh=47f8923c6a54b6d2b3c4b0ef2b7fb6a7&oe=59A09476',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10387545_10152410614501088_5263927830380158572_n.jpg?oh=686ad74621aa7114ad4eea754f8dbf72&oe=59A1D1F5',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/485529_10152410615626088_4860200016375072244_n.jpg?oh=29ef3b7d735ef9976f82f89d21054767&oe=59D93241',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/1903999_10152410627851088_2663380340478797555_n.jpg?oh=4f8cc2862a00bfee27f267dd06173614&oe=59AC04AD',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10395197_10152410629466088_5230197281575697337_n.jpg?oh=954fb18fbd9e12fc3f350322a53fcff3&oe=59E2A616',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10422961_10152410603471088_6828122409380235999_n.jpg?oh=af176e14ef2e8eb97de9d0424878aa15&oe=59DCD3DF',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/934859_10152410603596088_1301397185474629790_n.jpg?oh=d1ff824d3a012c1820ab186c3d63d314&oe=59DC6984',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10626819_10152410604671088_8389572094933664723_n.jpg?oh=95b25489ea8d0078ff61a8307b8a2738&oe=59D9A0A8',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10678841_10152410615931088_5222331783053210994_n.jpg?oh=b1cca7da7245d97435d982a808a467d9&oe=59D871BF',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/1901770_10152410616176088_1568551232554945962_n.jpg?oh=346fd1c2d017df5866f20fbbc70f84de&oe=59DA3195',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/1779313_10152410616676088_3759563130038539790_n.jpg?oh=552b71c82e2eca144c6e782e4756f1aa&oe=59D4D553',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10177340_10152410616956088_7532500511301856663_n.jpg?oh=f9a252ebfd1ab38ea6813f7bca64877c&oe=59A60642',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10410869_10152410603871088_4189547883557950413_n.jpg?oh=0c2ed90d1e2f6145b58aa57b09bbb6e8&oe=59DC1B5C',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10441479_10152410628651088_1540153633939476213_n.jpg?oh=8d150c8dbeb25f859707040fd5f1c8f4&oe=59A477CA',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10521098_10152410628716088_28562933432059794_n.jpg?oh=5138d77da4531b33a5d3ed4bb1af87bc&oe=59E669FF',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10711095_10152410628776088_321169828224763478_n.jpg?oh=7235df14cf428db2f4281fe634ecd8d1&oe=59D7EB2A',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/10606252_10152410629306088_6560813151367979326_n.jpg?oh=36a24d7ee166197e0414d064091fc081&oe=59D2FA77'

];

photos['ischgl'] = [
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16649044_10154306675496088_4333845503618331548_n.jpg?oh=62cd6d1df095159adcf5ac628cd23ad6&oe=599E6C0E',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16649493_10154306675501088_590633381964069124_n.jpg?oh=a9ced996baf48e811499035cb6bac48d&oe=59A1724C',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/17953023_10155219476696060_1081870876440962685_n.jpg?oh=40ce2d8d572be8ecd0fa2a35ade31115&oe=59A84814',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/17951637_10155228468586060_946631726911993222_n.jpg?oh=ace5c18013bf7a29e8f747b1f76027cf&oe=59E01A71',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16806968_10154306675626088_6021730974303922989_n.jpg?oh=959f38a7c346c359e713db944d359164&oe=59E8F8CC',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/18033175_10154477085791088_8641022345877420501_n.jpg?oh=ba93402dd7a2389861e1e5c08352f3dc&oe=59A6CBB3',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16807443_10154306675576088_4856398176455365940_n.jpg?oh=afd7ccf612c9b86e9b8ecc01571a6746&oe=59E829FA',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15492355_10154134747456088_3806568136049855096_n.jpg?oh=f9aa945626c61f73dcb3923aac8c8a68&oe=599E6F01',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15977827_10154195260911088_1607500532143613460_n.jpg?oh=a8a8abace87279574ca591a76483d0ad&oe=59E5EA09',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15665731_10154140306356088_2440751436058426817_n.jpg?oh=f55134e05841786bd7c8fd13fb32739c&oe=599C9790',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16681566_10154306675821088_8523687978782458213_n.jpg?oh=3e5ea314d001e08ad6ba875fe892e8e4&oe=599CA68D',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16830927_10154306675971088_2530215352470280992_n.jpg?oh=41c9e369adb74e178fece6f2e3fb88ab&oe=59DD313F',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16864399_10154306721631088_2559832524122094837_n.jpg?oh=45285f360b6707633dc41cef829770e9&oe=59A32F06',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16730172_10154306676076088_8969242644137485314_n.jpg?oh=063d78136cb1ef3b04414f55fc2d3c3c&oe=59E177D9',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16684119_10154306676096088_76351378792347239_n.jpg?oh=695ed0ded186d2bdc9518741d212a685&oe=59DF3D73',
  'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16807315_10154306676031088_7552508042207002906_n.jpg?oh=c9c6464939394a61b54df2d365d26503&oe=59A8AC46',
];


$(document).ready(function(){
  divcontentload();
});

function divcontentload() {
  $('#divcontent').fadeIn(5000);
};



$('.menu li a').hover (function(){
  $(this).css('color', '#99ddd8');   //#99ddd8 is lighter
}, function() {
  $(this).css('color', 'white');
  $('.photographyplaces li a').css('color', '#00827d');   //#00827d is darker
});

$('.photographyplaces li a').hover(function() {
  $('#photography a').css('color', '#99ddd8');
  $('.photographyplaces li a').not($(this)).css('color','#00827d');
}, function() {
  $('#photography a').css('color', 'white');
  $('.photographyplaces li a').css('color','#00827d');
}
);



var thumbnailsTotalWidth = 0;                      // variable is outside of click function in order for the right button click to use it.
var gridicontype = '';
var gallery_location = '';

$("ul.photographyplaces li a").click(function(){
  gallery_location = $(this).parent()[0].id;
  if (gridicontype === 'grid') {
    scroller_load();
  } else if (gridicontype === 'scroller') {
    grid_load();
  } else {
    scroller_load();
  }
});


$('#gridicon').click(function(){
  if (gridicontype === 'grid') {
    grid_load();
  }
    else if (gridicontype === 'scroller') {
      scroller_load();
  }
});


  function scroller_load() {
  thumbnailsTotalWidth = 0;
    /* if gridicon type = 'scroller', grid should change its images to its country (its gallery_id)*/
  $('#gridul').fadeOut(1000);
  $('#mainphotodiv').empty();
  $('#inner').empty();
  $('#inner').css("left", 0);
  $('#mainphotodiv').empty();
  $("#buttons").hide();
  /*$('#inner').css('width', 0);           deleted code - used to dynamically change the inners width (doesnt work too well) */

  for(var i = 0; i < photos[gallery_location].length; i++) {
    $('#mainphotodiv').append(`<img class='mainphoto' id='mainphoto${i+1}' src='${photos[gallery_location][i]}' /></div>`);
    $('#inner').append(`<img class='thumbnail' id='thumbnail${i+1}' src='${photos[gallery_location][i]}' />`);

  /*$('#inner').css('width', + thumbnailsTotalWidth + 'px');     deleted code - used to dynamically change the inners width (doesnt work too well)*/
  seePhoto(i+1);
  };

  $(document).ready(function(){
  $('.thumbnail').each(function(){
    thumbnailsTotalWidth +=($(this).width());
  });
});
  $('.thumbnail').fadeIn(2000);
  $("#buttons").fadeIn(2000);
  $('#window').fadeIn(1000);
  $('#rightbutton').show();
  $('#gridicon').fadeIn(1000);
  $('#gridicon').css('width', '50px');
  gridicontype = 'grid';
};


function seePhoto(photoNum) {
  $('#thumbnail' + photoNum).mouseover(function(){
    $(this).addClass('opacity');
    $('#mainphoto' + photoNum).show();
    $('.mainphoto').css('margin-left', '-' + $('#mainphoto' + photoNum).width()/2 + 'px'); //centering the main photo
    $('.mainphoto').css('margin-top', '-' + $('#mainphoto' + photoNum).height()/2 + 'px');

});
      $('#thumbnail' + photoNum).mouseout(function(){
      $(this).removeClass('opacity');
    $('#mainphoto' + photoNum).hide();
  });
}

function grid_load() {
  $('.thumbnail').fadeOut(1000);
  $('#buttons').fadeOut(1000);
  $('#gridul').empty();
  $('#gridphotobigdiv').empty();
          // $(this).parent()[0].id  =  the id of what was clicked e.g either 'iceland' or 'indonesia' (taken the word from the id)
  for(var i = 0; i < photos[gallery_location].length; i++) {
    $('#gridul').append(`<li class='list'><div class='imageholder'><img class='gridphoto' id='gridphoto${i+1}' src='${photos[gallery_location][i]}' /></div></li>`);
    $('#gridphotobigdiv').append(`<img class= 'gridphotobig' id='gridphotobig${i+1}' src='${photos[gallery_location][i]}'/>`);
  seeGridPhotoBig(i+1);
  };
  $('#gridul').fadeIn(1000);
  $('#gridicon').css('width', '100px');
  gridicontype = 'scroller';

  };

function seeGridPhotoBig(bigPhotoNum) {
  $('#gridphoto' + bigPhotoNum).click(function(){
    $('#gridphotobigdiv').show();
    $('#gridphotobig' + bigPhotoNum).show();
    $('.gridphotobig').css('margin-left', '-' + $('#gridphotobig' + bigPhotoNum).width()/2 + 'px'); //centering the main photo
    $('.gridphotobig').css('margin-top', '-' + $('#gridphotobig' + bigPhotoNum).height()/2 + 'px');
  });
  $('.gridphotobig').click(function(){
    $('.gridphotobig').hide();
    $('#gridphotobigdiv').hide();
  })
}




$('#worldmapicon').click(function(){
  $('#worldmap').fadeIn(2000);
});

$('#worldmapdiv').mouseout(function(){
  $('#worldmap').hide();
});

$('#rightbutton').on('click', function() {   //NEW IDEA TO DO- when the (.thumbnail: last) is <60% of screen width, OR make thumbnails loop around screen (no need for arrows to fade out)
    $("#inner").animate({
      left:'-=300px'
    }, 1000);
    if (parseInt($('#inner').css('left')) <= -(thumbnailsTotalWidth-($('#window').width()))+200) {    // since the window size is dynamic, this is now ineffective
      $('#rightbutton').fadeOut();
    }
    if (parseInt($('#inner').css('left')) <= -0) {
      $('#leftbutton').fadeIn();
    }
});


$('#leftbutton').on('click', function() {
    $("#inner").animate({
      left:'+=300px'
    }, 1000);
    if (parseInt($('#inner').css('left')) >= -300) {
      $('#leftbutton').fadeOut();
    }
    if (parseInt($('#inner').css('left')) <= -600) {
      $('#rightbutton').fadeIn();
    }
});









/*
TO DO:
COMPLETED BUT FADED IT OUT - make each main photo append to mainphotodiv each time thumbnail is hovered or clicked, rather than all being there at once.
COMPLETED - make main photos centred. need to add width to each photo in the array, so i can change the css attributes - see bottom of webpage https://stackoverflow.com/questions/5734199/auto-margins-dont-center-image-in-page
COMPLETED BUT FADED IT OUT - make #inner dynamic, so that each time a thumbnail is added, it adds the exact width needed onto the #inner.
COMPLETED - make it that when a new place is opened e.g indonesia, the photos are REPLACED, or deleted before next bunch are added
*/
