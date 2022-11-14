function selectApps(){
  link_table = new Array(	// リンク先の登録
    "communication.html#witness",//人物推測ゲーム
    "communication.html#poem",//ことばをかたどる
    "communication.html#dialog",//対話リミット
    "langage_and_media.html#shopping",//買い物のものさし
    "langage_and_media.html#idioms",//らくわく慣用句
    "langage_and_media.html#language",//みるみるオノマトペ
    "learning_and_shikake.html#shikake",//「しかけ」をつくる
    "science_cognition.html#decision",//意思決定解析機
    "science_cognition.html#expert"//「専門家」を再考する
  );
  
  let t_rnd = Math.floor(Math.random()*link_table.length);
  let link_url = link_table[t_rnd];
  window.open(link_url);
}