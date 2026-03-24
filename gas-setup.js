// =================================================================
// Google Apps Script - スプレッドシート連携用コード
// =================================================================
//
// 【セットアップ手順】
//
// 1. Google スプレッドシートを新規作成
//    - 1行目（ヘッダー）に以下を入力：
//      A1: 日時 | B1: お名前 | C1: 年齢 | D1: 性別
//      E1: 食生活 | F1: 癖・習慣 | G1: 気になること | H1: 診断結果
//
// 2. メニュー「拡張機能」→「Apps Script」を開く
//
// 3. 下記のコードを貼り付けて保存
//
// 4. 「デプロイ」→「新しいデプロイ」
//    - 種類：「ウェブアプリ」
//    - 実行ユーザー：「自分」
//    - アクセス権：「全員」
//    - デプロイをクリック
//
// 5. 表示された URL をコピー
//
// 6. index.html の GAS_URL にその URL を貼り付け
//    例: const GAS_URL = 'https://script.google.com/macros/s/xxxxx/exec';
//
// =================================================================

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;

  sheet.appendRow([
    p.timestamp || '',
    p.name || '',
    p.age || '',
    p.gender || '',
    p.diet || '',
    p.habits || '',
    p.concerns || '',
    p.result || '',
  ]);

  return ContentService
    .createTextOutput('ok')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  return ContentService
    .createTextOutput('Dental Diagnosis API is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
