$(document).ready(function () {

    // Adjust font size based on canvas
    function adjustFontSize() {
        canvasY = $('.image-container').outerHeight(true)
        console.log(canvasY)
        $('.ft-sm').css({ 'font-size': canvasY * 0.1 })
        $('.ft-md').css({ 'font-size': canvasY * 0.15 })
        $('.ft-lg').css({ 'font-size': canvasY * 0.2 })
    }

    $(document).ready(adjustFontSize)

    $(window).resize(adjustFontSize)

    // Toolbar
    $('.text-container')
        .on('click', '.text-editor', function (e) {
            activeTextarea = e.target.id
            var $canvas = $('.image-container');
            var popupX = $('.text-popup').outerWidth(true)
            var popupY = $('.text-popup').outerHeight(true)
            var x = Math.max(e.pageX - 10, $canvas.offset().left)
            var x = Math.min(x, $canvas.offset().left + $canvas.outerHeight(true) * 1.5 - popupX);
            var y = Math.max(e.pageY - 10, $canvas.offset().top)
            var y = Math.min(y, $canvas.offset().top + $canvas.outerHeight(true) - popupY);
            $('.text-popup').css({ 'display': 'grid', 'top': y, 'left': x })
        })

    $(document).mouseup(function (e) {
        if (!$('.text-popup').is(e.target) && $('.text-popup').has(e.target).length === 0) {
            $('.text-popup').css({ 'display': 'none' })
        }
    })

    $('.text-popup')
        .on('click', '#btn001', function () {
            $('#btn001').addClass('pressed')
            $('#btn002').removeClass('pressed')
            $('#' + activeTextarea).addClass('ft-kai')
            $('#' + activeTextarea).removeClass('ft-ming')
        })

        .on('click', '#btn002', function () {
            $('#btn002').addClass('pressed')
            $('#btn001').removeClass('pressed')
            $('#' + activeTextarea).addClass('ft-ming')
            $('#' + activeTextarea).removeClass('ft-kai')
        })

        .on('click', '#btn003', function () {
            $('#btn003').addClass('pressed')
            $('#btn004').removeClass('pressed')
            $('#btn005').removeClass('pressed')
            $('#' + activeTextarea).addClass('ft-sm')
            $('.ft-sm').css({ 'font-size': canvasY * 0.1 })
            $('#' + activeTextarea).removeClass('ft-md')
            $('#' + activeTextarea).removeClass('ft-lg')
        })

        .on('click', '#btn004', function () {
            $('#btn004').addClass('pressed')
            $('#btn003').removeClass('pressed')
            $('#btn005').removeClass('pressed')
            $('#' + activeTextarea).addClass('ft-md')
            $('.ft-md').css({ 'font-size': canvasY * 0.15 })
            $('#' + activeTextarea).removeClass('ft-sm')
            $('#' + activeTextarea).removeClass('ft-lg')
        })

        .on('click', '#btn005', function () {
            $('#btn005').addClass('pressed')
            $('#btn003').removeClass('pressed')
            $('#btn004').removeClass('pressed')
            $('#' + activeTextarea).addClass('ft-lg')
            $('.ft-lg').css({ 'font-size': canvasY * 0.2 })
            $('#' + activeTextarea).removeClass('ft-sm')
            $('#' + activeTextarea).removeClass('ft-md')
        })

        .on('click', '#btn006', function () {
            if ($(this).hasClass('pressed')) {
                $(this).removeClass('pressed')
                $('#' + activeTextarea).removeClass('ft-bd')
            }
            else {
                $(this).addClass('pressed')
                $('#' + activeTextarea).addClass('ft-bd')
            }
        })

        .on('click', '#btn007', function () {
            if ($(this).hasClass('pressed')) {
                $(this).removeClass('pressed')
                $('#' + activeTextarea).removeClass('ft-it')
            }
            else {
                $(this).addClass('pressed')
                $('#' + activeTextarea).addClass('ft-it')
            }
        })

        .on('click', '#btn008', function () {
            if ($(this).hasClass('pressed')) {
                $(this).removeClass('pressed')
                $('#' + activeTextarea).removeClass('ft-ul')
            }
            else {
                $(this).addClass('pressed')
                $('#' + activeTextarea).addClass('ft-ul')
            }
        })

        .on('click', '#btn009', function () {
            $('#' + activeTextarea).addClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn010', function () {
            $('#' + activeTextarea).addClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn011', function () {
            $('#' + activeTextarea).addClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn012', function () {
            $('#' + activeTextarea).addClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn013', function () {
            $('#' + activeTextarea).addClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn014', function () {
            $('#' + activeTextarea).addClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn015', function () {
            $('#' + activeTextarea).addClass('ft-blue')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-magenta')
        })

        .on('click', '#btn016', function () {
            $('#' + activeTextarea).addClass('ft-magenta')
            $('#' + activeTextarea).removeClass('ft-white')
            $('#' + activeTextarea).removeClass('ft-black')
            $('#' + activeTextarea).removeClass('ft-red')
            $('#' + activeTextarea).removeClass('ft-yellow')
            $('#' + activeTextarea).removeClass('ft-green')
            $('#' + activeTextarea).removeClass('ft-cyan')
            $('#' + activeTextarea).removeClass('ft-blue')
        })

        .on('click', '.toolbar-btn', function () {
            $('.text-popup').css({ 'display': 'none' })
        })

    // Buttons
    $('.reset-btn').click(function () {
        $('.image-container').css("background-image", "url('img/bg001.jpg')")
        $('.text-editor').remove()
        $('.text-popup').css({ 'display': 'none' })
    })

    var counter = 2;
    $('.text-btn').click(function () {
        var $newDiv = $("<div>請輸入文字</div>")
        $newDiv.attr("class", "text-editor ft-kai ft-md")
        $newDiv.attr("id", "text" + counter++)
        $newDiv.attr("contentEditable", "true")
        $('.text-container').append($newDiv)
    })

    $('.btn').on('click', '.download-btn', function () {
        // html2canvas($('#bg'), {
        //     onrendered: function (canvas) {
        //         var a = document.createElement('a');
        //         a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        //         a.download = 'somefilename.jpg';
        //         a.click();
        //     }
        // })
        html2canvas($('#bg')[0], { useCORS: true }).then(function (canvas) {
            document.body.appendChild(canvas)
            console.log(canvas)
            // onrendered: function (canvas) {
            // var a = document.createElement('a');
            // a.setAttribute("crossOrigin", 'Anonymous')
            canvas.toDataURL("image/png")
            // a.download = 'somefilename.jpg';
            // a.click();
            // }
        })
    })

    // Sidebar
    $('.bg').each(function (index) {
        var bg = index + 1
        $('#bg00' + bg).click(function () {
            $('.image-container').css("background-image", "url('img/bg00" + bg + ".jpg')")
        })
    })
})
