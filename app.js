

// const question = "ゲーム史上、最も売れたゲーム機は次のうちどれ？";

// const answers =[
//     "スーパーファミコン",
//     "プレイステーション２",
//     "ニンテンドースイッチ",
//     "ニンテンドーDS"
// ];

// const correct = "ニンテンドーDS";

//クイズを１問だけ出すなら、上記で良かったが、２問３問複数問題を出すのには適していない。
//下記に記載する。配列の中に複数オブジェクトを用意できる。さらにその中のプロパティも配列を要素として持てる。
const quiz =[//配列を用意
    {   //1問目
        question: "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
        answers: [
            "スーパーファミコン",
            "プレイステーション２",
            "ニンテンドースイッチ",
            "ニンテンドーDS"
         ],
         correct: "ニンテンドーDS"
    },
    {
        //2問目
        question: "ジョジョの奇妙な冒険のサブタイトルで正しいものは？",
        answers: [
            "その血の定め",
            "ゴールドレクイエム",
            "ダイヤモンドは壊れない",
            "ストーンオーシャン"
         ],
         correct: "ストーンオーシャン"
    },
    {
        //3問目
        question: "ドラえもんが苦手なものは?",
        answers: [
            "どら焼き",
            "ネズミ",
            "のび太",
            "ジャイアン"
         ],
         correct: "ネズミ"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//documentオブジェクトのgetElementsByTagNameを使用して、HTMLに反映させる。

//これじゃあdivタグの複数が取れちゃう。
//console.log(document.getElementsByTagName("div"));
//Id属性をHTMLに振っているので、Id属性から要素を取得する。

//何度も出てくるような長い処理を定数にする。
//HTMLのオブジェクトを取ってくる場合、暗黙の了解で$をつける。
//buttonオブジェクトを取得。$buttonとして以降扱える。
let $button = document.getElementsByTagName("button");
const $buttonLength = $button.length;


//定数の文字列を、HTMLに反映させる
//クイズの問題文、選択肢ボタンを定義
const setupQuiz = () => {

    //問題文エリア
    //console.log(document.getElementById("js-question"));
    //これは一つのオブジェクトなので、プロパティや関数を呼ぶことができる。
    document.getElementById("js-question").textContent = quiz[quizIndex].question;//テキスト情報の書き換え(問題文に差し替え)


    //ボタン表示
    let buttonindex = 0;
    //let buttonlength = $button.length;//ボタンタグのレングス＝個数
    while( buttonindex < $buttonLength ){
        $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex];
        //インクリメント
        buttonindex ++;
    }
}

//クイズセットアップ関数呼び出し
setupQuiz();


//イベントは色々な情報を持っている。
//クリックイベントなら、どこがクリックされたか、など。
//クリックされた要素に対して何かしたい時は、「e.target」で書くことが可能


//各ボタンがクリックされた際に、実行したい処理（回答と正解の比較）
const clickHandler = (e) => {
    //文字列の比較で一致するかの確認はJSでは＝＝＝を使用する。
    if( quiz[quizIndex].correct === e.target.textContent){
         window.alert("正解！");
         
         score ++;
    }else{
           window.alert("不正解...");
    }

    //正誤判定の後、次の問題に進む必要がある。
    //グローバル引数
    quizIndex ++;

    if(quizIndex < quizLength){
        //次問題へ
        setupQuiz();

    }
    else{
        //問題数がもうなければ
        window.alert("終了 あなたの正解数は、" + score + "/" + quizLength + "です！！　お疲れ様でした。");

    }
}

//whilループを使用して、各ボタンに対するハンドラー処理を設定する。
let handlerindex = 0;
//let buttonlength = $button.length;
while( handlerindex < $buttonLength){
    $button[handlerindex].addEventListener("click", (e) => {
        //ボタンが押されたら、どう振る舞うかのイベントを設定。
        clickHandler(e);
    });
    //インクリメント
    handlerindex ++;
}




