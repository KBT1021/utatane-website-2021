function selectApps(){
  link_table = new Array(	// リンク先の登録
    "./index.html#apps-list",
    "./index.html#apps-list",
    "./index.html#apps-list"
  );
  
  let t_rnd = Math.floor(Math.random()*link_table.length);
  let link_url = link_table[t_rnd];
  window.open(link_url);
}