# Action Game Frame Analysis Web

GitHub Pagesでそのまま公開できる、アクションゲームのフレーム分析用Webです。

## フレーム表記ルール

- パリィ対象攻撃：攻撃アニメーション開始と思われる地点を0Fとして数える
- 致命攻撃：致命開始を0Fとして別カウントで数える

## 使い方

1. このフォルダをGitHubリポジトリに入れる
2. `assets/images/ds3_gundyr_parry/` に分析画像を入れる
3. GitHub Pagesを有効化する
4. `index.html` から公開されます

## 今回必要な画像ファイル

`assets/images/ds3_gundyr_parry/` に、あなたが保存したPNGを入れてください。ファイル名はHTML内の名前と一致させてください。

## 新しい分析ページを増やす時

例：SEKIROの弾き分析を追加する場合

```txt
pages/sekiro/deflect.html
assets/images/sekiro_deflect/
```

を作り、`index.html` にカードを追加してください。

## 方針

- ゲームごとにページフォルダを分ける
- アニメーションごとに画像フォルダを分ける
- 画像は時系列で並べる
- 各画像に一言コメントを付ける
- ただのフレーム表ではなく、設計意図まで書く
