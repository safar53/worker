$(document)
    .ready(function () {

        $(window)
            .bind('scroll', function () {
                if ($(window).scrollTop() > 40) {
                    $('.header-bottom-fixed').addClass('fixed');
                } else {
                    $('.header-bottom-fixed').removeClass('fixed');
                }
            });

        $("#avatar").change(function(e){
            var reader = new FileReader();
            reader.addEventListener("load",function() {
                $("#profile-image").attr("src",reader.result);
                console.log(reader.result)
            });

            reader.readAsDataURL(e.target.files[0]);
        });

        $(function () {
            var navMain = $("#navbarSupportedContent");
            navMain.on("click", "a", null, function () {
                navMain.collapse('hide');
            });
        });

        var items = $(".slider-item");
        var item_caption = $(".slider-item-caption");
        var main_caption = $(".slider-main-caption");
        var size = $(".slider-item").length;
        var i = 0;
        var sliderInterval = 3000;

        items.click(function (e) {
            e.stopPropagation();
            var index = $(".slider-item").index($(this));
            i = index;
            goToIndex(index);
            var links = $(this).find(".slider-item-text").find(".slider-item-link");
            var href = links.attr('href');
            $(".slider-main-link").attr('href', href)
        });

        function goToIndex(index) {
            var src = $(".slider-item-image")
                .eq(index)
                .attr("src");
            var caption = $(".slider-item-caption")
                .eq(index)
                .text();
            $(".slider-main-image").attr("src", src);
            $(".slider-main-caption").text(caption);
        };

        var timer = createTimer(sliderInterval);

        function createTimer(interval) {
            return setInterval(function () {
                goToIndex(i);
                if (i < size - 1) {
                    i++;
                } else {
                    i = 0;
                };
            }, interval);
        };

        var mouseEnter = function () {
            clearInterval(timer);
        };
        var mouseLeave = function () {
            timer = createTimer(sliderInterval);
        };
        $(".slider-main").hover(mouseEnter, mouseLeave);

        $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            autoplay: true,
            loop: true,
            navElement: "span",
            navText: ['<div class="arrow"><i class="fas fa-arrow-left"></i></div>', '<div class="arrow"><i class="fas fa-arrow-right"></i></div>']
        });

        $("#l").click(function () {
            var size = $('#s option').size();
            if (size != $("#s").prop('size')) {
                $("#s").prop('size', size);
            } else {
                $("#s").prop('size', 1);
            }
        });

        var subCat = $(".i-container");
            subCat.click(function () {
            $(this)
                .next(".options")
                .toggleClass("d-block");

            var staticClass = "fas fa-chevron-down";
            var className = $(this)
                .find(".i-container")
                .find("i")
                .attr('class');
            if (className == staticClass) {
                $(".i-container")
                    .find("i")
                    .attr("class", "fas fa-chevron-down");
                $(this)
                    .find(".i-container")
                    .find("i")
                    .attr("class", "fas fa-chevron-up")
            } else {
                $(this)
                    .find(".i-container")
                    .find("i")
                    .attr("class", "fas fa-chevron-down");
            }
        });

        var input1 = $("#browse1");
        input2 = $("#browse2");
        idBrowse1 = $("#cv_file1");
        idBrowse2 = $("#cv_file2");
        function preview(par1, par2) {
            $(par1)
                .change(function (e) {
                    var nameImage = e.target.files[0].name;
                    $(par2).val(nameImage);
                })
        };
        preview(idBrowse1, input1);
        preview(idBrowse2, input2);

        var infoFAQ = $(".infoFAQ");
        infoFAQ.click(function () {
            $(this)
                .find(".additional-info")
                .toggleClass("d-block");
            $(this)
                .siblings()
                .find(".additional-info")
                .removeClass("d-block");

            var staticClass = "fas fa-plus";
            var className = $(this)
                .find(".question")
                .find("span")
                .find("i")
                .attr('class');
            if (className == staticClass) {
                $(".question")
                    .find("span")
                    .find("i")
                    .attr("class", "fas fa-plus");
                $(this)
                    .find(".question")
                    .find("span")
                    .find("i")
                    .attr("class", "fas fa-minus");
            } else {
                $(this)
                    .find(".question")
                    .find("span")
                    .find("i")
                    .attr("class", "fas fa-plus");
            }
        });


        var filterData = [];
        $(".filter").on("change", function (e) {
            var id = e.target.getAttribute("data-cat_id");
            if (e.target.checked) {
                filterData = addFilter(id,filterData)
            } else {
                filterData = removeFilter(id,filterData)
            }
            getData(filterData)
        })

        function addFilter(id,arr) {
            arr.push(id);
            return arr
        }
        function removeFilter(id,arr) {
            var newFilterData = arr.filter(function (value) {
                return id !== value
            })
            return newFilterData
        }
        function getData(filter = []) {
            console.log(filter)
            // $.ajax({
            //     url: "",
            //     type: "GET",
            //     dataType: "json",
            //     data: filter,

            //     success: function (res) {
            //         console.log(res)
            //     },
            //     error: function (err) {
            //         console.log(err)
            //     }
            // })
        }       
        var filterData2 = [];
        $(".workHours").on("change", function (e) {
            var val = e.target.value;
            filterData2 = [];
            filterData2.push(val);
            getData2(filterData2)
        })
        function getData2(filter2= []) {
            console.log(filter2)
            // $.ajax({
            //     url: "",
            //     type: "GET",
            //     dataType: "json",
            //     data: filter2,

            //     success: function (res) {
            //         console.log(res)
            //     },
            //     error: function (err) {
            //         console.log(err)
            //     }
            // })

        }
         var filterData34 = {};
         var filterData3 = [];
        $(".salary").on("change", function (e) {
            var val = e.target.value;
            var id = e.target.id;
            filterData34[id]=val
            filterData3 = [];
            filterData3.push(filterData34)
            getData2(filterData3)
        })
        function getData3(filter3= []) {
            console.log(filter3)
            // $.ajax({
            //     url: "",
            //     type: "GET",
            //     dataType: "json",
            //     data: filter3,

            //     success: function (res) {
            //         console.log(res)
            //     },
            //     error: function (err) {
            //         console.log(err)
            //     }
            // })
        }
    var openClose = $(".open-close");    
    $(".show-hide").click(function (e) {
        var dNone = e.target.nextElementSibling.nextElementSibling;
        var others = openClose.not(dNone);
        $(others).removeClass("d-block");
        $(dNone).toggleClass("d-block");
    });


    var progressPercent = $(".progressbar");
    progressPercent.click(function(e){
        var fill = $(this).find(".stop-propagation");
        var percentSpan = e.target.nextElementSibling;
        var percent = Math.round((e.clientX-(this.offsetLeft))/150*100);
        var percentResult = (percent.toPrecision(1))*10/10;
        percentSpan.innerHTML = percentResult + " %";
        fill.css("width",percentResult + "%");
        var color
        if (percentResult < 31) {
            color = "red";
        }
        else if (percentResult > 30 && percentResult < 70) {
            color = "#0000FF";
        }

        else{
            color = "#228B22";
        }

        fill.css("background-color",color);
    });    


    
    var btn = $(".myBtn");
    var span = $(".close");
    var myModal = $(".myModal");
    btn.click(function(e){
        var modal = (e.currentTarget.nextElementSibling);
        modal.style.display = "block"
    });
    span.click(function(e){
        var modal = (e.currentTarget.parentElement.parentElement);
        modal.style.display = "none";
    });
});