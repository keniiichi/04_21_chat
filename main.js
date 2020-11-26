
$(function () {

    //1.save クリックイベント
    $("#save").on("click", function () {                  //saveボタンクリックイベント
        let title01 = $("#input01").val();             //.val()でinputの内容を取得
        let title02 = $("#input02").val();
        let title03 = $("#input03").val();
        // var title04 = $("#input04").val();
        // var title05 = $("#input05").val();
        // var title06 = $("#input06").val();
        // var title07 = $("#input07").val();
        // let title = $("#input"["01", "02", "03"]).val();
        // console.log(title);

        let text01 = $("#textarea01").val();               //.val()でtextareaの内容を取得
        let text02 = $("#textarea02").val();
        let text03 = $("#textarea03").val();



        let obj = {                                    //オブジェクト形式でタイトルと本文をまとめる
            // "title": title("#input"["01", "02", "03"]),
            "title01": title01,
            "title02": title02,
            "title03": title03,
            "text01": text01,
            "text02": text02,
            "text03": text03,

        };
        let json = JSON.stringify(obj);                 //データをJSON形式に変換
        localStorage.setItem("memo", json);             //localstorageに保存  

    });

    //2.clear クリックイベント
    $("#clear").on("click", function () {              //clearボタンイベント 
        localStorage.removeItem("memo")                //key名を指定して削除
        $("#input01").val("");
        $("#input02").val("");
        $("#input03").val("");
        $("#textarea01").val("");
        $("#textarea02").val("");
        $("#textarea03").val("");
    });

    //3. ページ読み込み：保存データ取得表示
    if (localStorage.getItem("memo")) {               //値が保存されていれば
        let json_get = localStorage.getItem("memo");  //jsonデータを取得
        let obj_get = JSON.parse(json_get);           //json形式をもとに戻す
        $("#input01").val(obj_get.title01);
        $("#input02").val(obj_get.title02);
        $("#input03").val(obj_get.title03);
        $("#textarea01").val(obj_get.text01);
        $("#textarea02").val(obj_get.text02);
        $("#textarea03").val(obj_get.text03);
    }



    // ハンバーガーメニュー
    function toggleNav() {
        var body = document.body;
        var hamburger = document.getElementById('js-hamburger');
        var blackBg = document.getElementById('js-black-bg');

        hamburger.addEventListener('click', function () {
            body.classList.toggle('nav-open');
        });
        blackBg.addEventListener('click', function () {
            body.classList.remove('nav-open');
        });
    }
    toggleNav();



    //付箋を追加する
    function getNewNote() {
        return '<div class="note">' +
            '<input type="text">' +
            '<input class="delete-button" type="button" value="削除する">' +
            '</div>';
    }

    $('#add-button').on('click', function () {
        let note = getNewNote();
        $('#sticky-note-container').append(note);
    });

    // function getNewNote() {
    //     return '<div class="note">' +
    //         '<input type="text">' +
    //         '</div>';
    // }

    // $('#add-button').on('click', function () {
    //     let $note = $(getNewNote());
    //     $note.draggable();    //$note=$()を追記 ドラッグアンドドロップできるようにする
    //     $('#sticky-note-container').append($note);
    // });


    //変数
    let unko = "hello";
    unko = "world"  //書き換えできる
    console.log(unko);

    // 定数
    const bigUnko = "hehehello";
    console.log(bigUnko); //書き換えできない

    //配列
    let inoki = ['1', '2', '3', 'ダー']
    console.log(inoki);
    console.log(inoki[3]);

    //ループ文
    // let index = 0;
    // while (index < 5) {
    //     //5より低かったら繰り返す
    //     console.log(index);
    //     index++; //これ忘れないように


    //ループ文＋配列
    // let index = 0;
    // while (index < inoki.length) {
    //     //繰り返したい命令
    //     console.log(inoki[index]);
    //     index++; //これ忘れないように

    //if / else
    // if (inoki.length > 5) {
    //     console.log("ボンバイエ！");
    // } //()に条件を書いて、{}の中を実行
    // else {
    //     console.log("ボンバ！");

    // }


    //関数
    // const test = () => {
    //     if (inoki.length > 5) {
    //         console.log("ボンバイエ！");
    //     } //()に条件を書いて、{}の中を実行
    //     else {
    //         console.log("ボンバ！");

    //     }
    // };

    // test();

    //関数(引数)
    const test = (hikisu) => {
        if (inoki.length > hikisu) {
            console.log("ボンバイエ！");
        } //()に条件を書いて、{}の中を実行
        else {
            console.log("ボンバ！");

        }
    };

    // test(3);
    // test(1);
    // test(5);
    // test(6);

    //オブジェクト
    // const unko2 = {
    //     color: 'pink',
    //     size: 'large',
    //     purfume: 'mint',
    //     goToilet: () => {
    //         console.log("hello");
    //     }
    // };
    // console.log(unko2);
    // console.log(unko2.color);
    // console.log(unko2.goToilet());

    //特種なオブジェクト
    //console.log(window);

    // window.alert('hello');

    // console.log(document);
    // console.log(document.getElementsByTagName('button')[0]);

    // document.getElementsByTagName('button')[0].addEventListener('click', () => {
    //     //命令を書く
    // });


});



