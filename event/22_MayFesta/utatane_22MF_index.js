function selectApps(){
  link_table = new Array(	// リンク先の登録
    "https://script.google.com/macros/s/AKfycbz-uO_l2VYsOfR-RyAt2c2qtz8D2eB1lApdEwRSTk-E1up66PXwNIKq4DcmNEU2kYRjYA/exec", //ねじ曲げ
    "https://utatane.info/apps/MF22/science_patchwork/index.html", //科学のパッチワーク
    "https://utatane.info/apps/MF22/science_creator/index.html", //科学をつくる
    "https://utatane.info/apps/MF22/miscom_ranking/index.html", //すれ違いランキング
  );
  
  let t_rnd = Math.floor(Math.random()*link_table.length);
  let link_url = link_table[t_rnd];
  window.open(link_url);
}