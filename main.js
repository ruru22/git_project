const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
//15.変数todosにJSON.parse(localStorage.getItem("todos"));を代入
//文字列で取得しちゃうからJSONでオブジェクトに変換

//16.もしtodosが空でなければ

    //17.todosにforEachで引数todoでadd関数を実行



//①formにsubmit時のaddEventListenerをadd関数で設定
form.addEventListener('submit',function(event){
    //②submitイベントのデフォルト設定を消す（.preventDefault();）※デフォルト：リロード
    event.preventDefault();
    add();
});

//18.add関数引数にtodoを設定
//add関数を設定
function add(){
    //③変数todoTextにinput.valueを入力
    let todoText = input.value;
    //19.もしtodoがあればtodoTextにtodoを入れる設定

    //⑧もしtodoText.length > 0 であれば（todoTextに何か入っていれば）
    if(todoText){
    //④変数liにli要素を作成して代入
    let li = document.createElement('li');
    //⑤作ったliのinnerTextを変数todoTextに設定
    li.innerText = todoText;
    //⑥作ったliのclassを.classList.addでlist-group-itemと設定
    li.classList.add("list-group-item");
    //20.liにaddEventListenerでcontextmenuイベントで 
    li.addEventListener('contextmenu',function(event){
    //21.event.preventDefault();でデフォルト消す
    event.preventDefault();
    //22.liを.remove();で消す
    li.remove();
    //23.ローカルステージに上書き

})//addEventListener('contextmenu')の締め
    //24.liにaddEventListenerでclickイベントで
    li.addEventListener('click',function(){
    //li要素の.classLisを"text-decoration-line-through"で.toggleする
    li.classList.toggle("text-decoration-line-through");
})//addEventListener('click')の締め
    //⑥作ったliをulの子要素としてappendChildで挿入
    ul.appendChild(li);
    //⑦input.valueの値を空にしておく
    input.value="";
    //⑨saveData関数を設定
    saveData();
    }//if(todoText)の締め
}//addの締め


    

    


//⑩saveData関数を設定
    function saveData(){
    //11.変数listsにquerySelectorAllでli要素を取得

    //12.変数todosにからの配列を設定

    //13.変数listsにforEachで引数listでtodosにlist.innerTextをpush

    //14.localStorageにsetItemでキーをtodos、値をJSON.stringify(todos)で設定


   }//saveDat締め







//余談
let h1 = document.querySelector('h1');
h1.addEventListener('click',function(){
    this.style.color='red';
})
