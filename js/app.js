$(document).foundation()
$('.new_remediation').on('click', function () {
  var
    this_list = $(this).siblings('ul')[0],
    time = new Date().getTime()
  ;
  $(this_list).append(`
    <li class='accordion-item' data-accordion-item id='new${time}'>
      <a href='#' class='accordion-title'>Wonderful Stuff or Thing</a>
      <div class='accordion-content' data-tab-content>
        Stuff or things that are wonderful.
      </div>
     </li>
  `);
  Foundation.reInit($(this_list));  
  // nope
  //$('#new' + time).trigger('click');
  // nope, nor does toggle work
  //$(this_list).foundation('down', $('#new' + time));
  //Foundation.reInit($(this_list));
});