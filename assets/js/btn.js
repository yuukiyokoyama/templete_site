$(document).ready(function () {
  // SPデバイスかどうかを判定する関数
  function isSP() {
    return window.innerWidth <= 767; // 例: 767px以下をSPとする
  }

  function showTabContent(tabSelector, itemSelector, hashIDName) {
    if (isSP() && hashIDName) {
      console.log("SPデバイスでタブコンテンツを表示:", hashIDName);

      // タブのアクティブ状態を管理
      $(tabSelector).find("li").removeClass("active");
      $(itemSelector).removeClass("is-active");

      // アクティブなタブを設定
      $(tabSelector)
        .find("a[href='" + hashIDName + "']")
        .parent()
        .addClass("active");

      // 対応するアイテムを表示
      $(itemSelector).filter(hashIDName).addClass("is-active");
    }
  }

  // フルーツタブのクリックイベント
  $(".top__introduction .tab--fruit a").on("click", function (event) {
    if (isSP()) {
      event.preventDefault(); // デフォルトのリンク動作をキャンセル
      var idName = $(this).attr("href"); // ハッシュ値を取得
      console.log("フルーツタブがクリックされました:", idName);
      showTabContent(
        ".top__introduction .tab--fruit",
        ".top__introduction .items--fruit .item",
        idName
      );
    }
  });

  // ジュースタブのクリックイベント
  $(".top__introduction .tab--juice a").on("click", function (event) {
    if (isSP()) {
      event.preventDefault(); // デフォルトのリンク動作をキャンセル
      var idName = $(this).attr("href"); // ハッシュ値を取得
      console.log("ジュースタブがクリックされました:", idName);
      showTabContent(
        ".top__introduction .tab--juice",
        ".top__introduction .items--juice .item",
        idName
      );
    }
  });

  // ページロード時の初期設定
  $(window).on("load", function () {
    if (isSP()) {
      console.log("SPデバイスでページが読み込まれました");
      var hashName = location.hash; // URLのハッシュ値を取得

      // 初期表示: フルーツタブ
      $(".top__introduction .tab--fruit li:first-of-type").addClass("active");
      $(".top__introduction .items--fruit .item:first-of-type").addClass(
        "is-active"
      );

      // 初期表示: ジュースタブ
      $(".top__introduction .tab--juice li:first-of-type").addClass("active");
      $(".top__introduction .items--juice .item:first-of-type").addClass(
        "is-active"
      );

      // ハッシュ値があれば、それに対応するタブとアイテムを表示
      if (hashName) {
        console.log("ハッシュ値が見つかりました:", hashName);
        showTabContent(
          ".top__introduction .tab--fruit",
          ".top__introduction .items--fruit .item",
          hashName
        );
        showTabContent(
          ".top__introduction .tab--juice",
          ".top__introduction .items--juice .item",
          hashName
        );
      }
    } else {
      console.log("PCデバイスでページが読み込まれました。タブ機能は無効です。");
    }
  });
});
