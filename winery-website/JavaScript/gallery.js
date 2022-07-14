/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('.grid-item a').on('click',function(e){
  e.preventDefault();
  var src = $(this).attr('href');
  var text = $(this).attr('data-text');
  var img = '<img src="' + src + '" class="pic"/>';
  var cat = $(this).attr('data-cat');

  //start of new code new code
  var index = $(this).parent('.grid-item').index();
  console.log(index);

  var html = '';
  var textHtml = '';
  var footer = '';
  html += img;
  html += '<div id="arrows">';
  html += '<a id="arrows_size" style="margin-right: 20px"  class="controls previous" href="' + (index) + '"><wraper id="fonte"><b>&#10092;</b></wraper></a>';
  html += '<a id="arrows_size" class="controls next" href="'+ (index+2) + '"><b>&#10093;</b></a>';
  html += '</div>';

  footer += '<div class="modal-footer '+cat+'">' + $(footer).css('z-index' , '999999');
  footer += '</div>';

  textHtml += '<div class="text" id="text">';
  textHtml += text;
  textHtml += '</div>';
  textHtml += '<i style=" text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.33);" id="i_fa-times" class="fa fa-times" data-dismiss="modal"></i>';

  $('#myModal').modal();
  $('#myModal').on('shown.bs.modal', function(){
    $(footer).appendTo('.modal-content');
    $('#myModal .modal-body').html(html);
    $('#myModal .modal-footer').html(textHtml);
    //new code
    $('a.controls').trigger('click');
  });
  $('#myModal').on('hidden.bs.modal', function(){
    $('#myModal .modal-body').html('');
    $('#myModal .modal-footer').html('');
  });
});

$(document).on('click', 'a.controls', function(){
  var index = $(this).attr('href');
  var src = $('.grid-item:nth-child('+ index +') a').attr('href');
  var text = $('.grid-item:nth-child('+ index +') a').attr('data-text');
  console.log(index);
  console.log(src);

  $('.modal-body img').attr('src', src);
  $('.modal-footer .text').html(text);

  var newPrevIndex = parseInt(index) - 1;
  var newNextIndex = parseInt(newPrevIndex) + 2;

  if($(this).hasClass('previous')){
    $(this).attr('href', newPrevIndex);
    $('a.next').attr('href', newNextIndex);
  }else{
    $(this).attr('href', newNextIndex);
    $('a.previous').attr('href', newPrevIndex);
  }

  var total = $('.grid-item').length + 1;
  //hide next button
  if(total === newNextIndex){
    $('a.previous').css('visibility','hidden');
  }else{
    $('a.previous').css('visibility','visible');
  }
  //hide previous button
  if(newPrevIndex === 0){
    $('a.previous').css('visibility','hidden');

  }else{
    $('a.previous').css('visibility','visible');
  }

  if(newPrevIndex === 46){
    $('a.next').css('visibility','hidden');
  }else{
    $('a.next').css('visibility','visible');
  }

  return false;
});


