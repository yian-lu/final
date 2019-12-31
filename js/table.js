$(document).ready(function () {
    // Canvas
    $('.text-container')
        .on('click', '.text-editor', function (e) {
            var $canvas = $('.image-container');
            var popupX = $('.text-popup').outerWidth(true)
            var popupY = $('.text-popup').outerHeight(true)
            var x = Math.max(e.pageX - 10, $canvas.offset().left)
            var x = Math.min(x, $canvas.offset().left + $canvas.outerHeight(true) * 1.5 - popupX);
            var y = Math.max(e.pageY - 10, $canvas.offset().top)
            var y = Math.min(y, $canvas.offset().top + $canvas.outerHeight(true) - popupY);
            $('.text-popup').css({ 'display': 'grid', 'top': y, 'left': x })
        })

        .on('hover', '.text-popup', function () {
            $('.text-popup').css({ 'display': 'grid' })
        })

    // .on('active', '.text-popup', function () {
    //     $('.text-popup').css({ 'display': 'grid' })
    // })

    // Toolbar
    $('.text-container').on('click', '.text-editor', function (e) {
        const activeText = document.activeElement.id
        if ($(activeText).hasClass('ft-kai')) {
            $('#btn001').addClass('active');
        }
    })

    // Buttons
    $('.reset-btn').click(function () {
        $('.image-container').css("background-image", "url('img/bg001.jpg')")
        $('.text-editor').remove()
    });

    var counter = 2;
    $('.text-btn').click(function () {
        var $newDiv = $("<div>請輸入文字</div>")
        $newDiv.attr("class", "text-editor ft-kai ft-md")
        $newDiv.attr("id", "text" + counter++)
        $newDiv.attr("contentEditable", "true")
        $('.text-container').append($newDiv)
    });

    $('.download-btn').click(function () {
        // html2canvas(document.querySelector("#bg")).then(canvas => {
        //     canvas.toBlob(function (blob) {
        //         saveAs(blob, 'elder.png')
        //     })
        // });
    })

    // Sidebar
    $('.bg').each(function (index) {
        var bg = index + 1
        $('#bg00' + bg).click(function () {
            $('.image-container').css("background-image", "url('img/bg00" + bg + ".jpg')")
        })
    })
})
