const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
//15.変数todosにJSON.parse(localStorage.getItem("todos"));を代入
//文字列で取得しちゃうからJSONでオブジェクトに変換

//16.もしtodosが空でなければ

    //17.todosにforEachで引数todoでadd関数を実行



//①formにsubmit時のaddEventListenerをadd関数で設定

    //②submitイベントのデフォルト設定を消す（.preventDefault();）※デフォルト：リロード
    //add関数を実行の記述

//18.add関数引数にtodoを設定
//add関数を設定

    //③変数todoTextにinput.valueを入力

    //19.もしtodoがあればtodoTextにtodoを入れる設定

    //⑧もしtodoText.length > 0 であれば（todoTextに何か入っていれば）

    //④変数liにli要素を作成して代入

    //⑤作ったliのinnerTextを変数todoTextに設定

    //⑥作ったliのclassを.classList.addでlist-group-itemと設定

    //20.liにaddEventListenerでcontextmenuイベントで 

    //21.event.preventDefault();でデフォルト消す

    //22.liを.remove();で消す

    //23.ローカルステージに上書き

    //24.liにaddEventListenerでclickイベントで

    //li要素の.classLisを"text-decoration-line-through"で.toggleする

    //⑥作ったliをulの子要素としてappendChildで挿入

    //⑦input.valueの値を空にしておく

    //⑨saveData関数を設定

//⑩saveData関数を設定

    //11.変数listsにquerySelectorAllでli要素を取得

    //12.変数todosにからの配列を設定

    //13.変数listsにforEachで引数listでtodosにlist.innerTextをpush

    //14.localStorageにsetItemでキーをtodos、値をJSON.stringify(todos)で設定










//余談
let h1 = document.querySelector('h1');
h1.addEventListener('click',function(){
    this.style.color='red';
})
