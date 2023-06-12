$(function(){


    //animate input label on focus
    $('input').on('focusin',function(){
        var forValue = $(this).attr('name')
        var label = $('label[for='+forValue+']')
        var enlargeClass = 'label-enlarge'
        label.addClass(enlargeClass)
    }).on('focusout',function(){
        var forValue = $(this).attr('name')
        var label = $('label[for='+forValue+']')
        var enlargeClass = 'label-enlarge'
        label.removeClass(enlargeClass)
    })  
})