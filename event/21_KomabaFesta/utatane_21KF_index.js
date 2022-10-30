function selectApps(){
  link_table = new Array(	// リンク先の登録
    "https://script.google.com/macros/s/AKfycby_76qqXFDuToeichwpKTaOxQFuR4qjhsp5Bc8yok8vL1z_vrVHLk7xnhtxu__EkNo/exec", //数の表現事典
    "https://script.google.com/macros/s/AKfycbzdS3tt7ademzYOsst_FncgkjU_8mHWQ4MAzJdCXiiFLrHxJIsv34gZk_VXNR4emcSDpA/exec", //すれ違い絵描き
    "https://script.google.com/macros/s/AKfycbzp02e8d-_7clcF57aWkX8iZe3b9VRqgKeCur5JQGKgyXuvUxZEypcq2wdTdf818f2Z6w/exec", //みるみるオノマトペ
    "https://script.google.com/macros/s/AKfycbwj5E-o-JdNoohh5JW0LgSNW_KG40Yy-joLga7nCZjX_Nl3nsuf0YZfh00YnxWAgV56/exec", //ねじまげ見出し
    "http://utatane.info/apps/KF21/science_creator/", //科学をつくる
    "https://script.google.com/macros/s/AKfycbwsyY8PtO5dapSgORyy3BwFNKkWzSrKyL654DPbO2us7Iobj4NEyPftP4faUuTdRila/exec?p=index" //ポリフォニックスケープ
  );
  
  let t_rnd = Math.floor(Math.random()*link_table.length);
  let link_url = link_table[t_rnd];
  window.open(link_url);
}