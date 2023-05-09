function selectApps(){
  link_table = new Array(	// リンク先の登録
    "witness.html",//「人物像」を見つめる
    "color.html",//科学のパッチワーク
    "technology.html",//技術をさぐる
    "objects.html",//ねじねじモノづくり
    "standard.html",//「当たり前」は誰のもの？
    "objectivity.html",//わたしの「客観」、みんなの「客観」
    "wording.html",//言葉の裏側
    "expression.html",//思ったことが言えない
    "poem.html"//ことばをかたどる
  );
  
  let t_rnd = Math.floor(Math.random()*link_table.length);
  let link_url = link_table[t_rnd];
  window.open(link_url);
}
