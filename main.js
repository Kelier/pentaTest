$(function () {
    $.ajax({
        //请求方式为get
        type: "GET",
        //json文件位置
        url: "json/content.json",
        //返回数据格式为json
        dataType: "json",
        //请求成功完成后要执行的方法
        success: function (data) {
            //description
            $(".intro").find("p")[0].innerHTML = data.content;
            //actor
            $.each(data.actor, function (i, n) {
                $(".movie-actbody").find(".card")[i].children[0].src = n.avatar;
                $(".movie-actbody").find(".card")[i].children[1].children[0].innerHTML = n.name;
                $(".movie-actbody").find(".card")[i].children[1].children[1].innerHTML = n.role;
            });


            $(".body-2")[0].children[0].children[0].innerHTML=data.movie[0].main;
            $(".body-2")[0].children[1].children[0].innerHTML=data.movie[1].book;
            $(".body-2")[0].children[2].children[0].innerHTML=data.movie[2].play;
            $(".body-2")[0].children[3].children[0].innerHTML=data.movie[3].type;
            $(".body-2")[0].children[4].children[0].innerHTML=data.movie[4].origin;
            $(".body-2")[0].children[5].children[0].innerHTML=data.movie[5].lang;
            $(".body-2")[0].children[6].children[0].innerHTML=data.movie[6].update;
            $(".body-2")[0].children[7].children[0].innerHTML=data.movie[7].len;
            $(".body-2")[0].children[8].children[0].innerHTML=data.movie[8].rect;


        }
    });
});
