// ▼ここにコードを書いていきましょう！
// 画像のセットを用意
var images = ['guu.svg', 'choki.svg', 'paa.svg'];

// 乱数を作る
var rand = Math.floor( Math.random() * 2);

// 画像セットからランダムで、いずれかの画像のurlをセットする
$(function(){
	$('#imageMain').attr('src', 'images/' + images[rand]);
});

// もう一度振るボタン
$('.control-again').on('click', function(){
	location.reload();
});