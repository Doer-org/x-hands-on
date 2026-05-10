# X作ってみようの会

Webアプリ開発入門のハンズオン用リポジトリです。HTML/CSSで画面を作り、JavaScriptで投稿を自動生成し、最後にReactのテンプレートを動かします。

## 必要なもの

- Visual Studio Code
- ブラウザ
- Node.js LTS

`1_html` から `3_x-template` までは、基本的に `index.html` をブラウザで開けば確認できます。Reactの章ではNode.jsを使います。

## フォルダ

- `1_html/`: HTMLだけで最小構成のWebアプリを作る
- `2_styled-html/`: HTMLにCSSを読み込んで見た目をつける
- `3_x-template/`: X風の投稿、タイムライン、投稿フォームを作る
- `3_x-template/answers/`: 各ステップの完成例
- `4_x-template-react/`: React + Vite のテンプレート

## 進め方

### 1. HTMLのみのWebアプリ

`1_html/index.html` を開きます。

HTMLのタグで文章や見出しを表現し、ブラウザに表示される内容を確認します。

### 2. HTML + CSSのWebアプリ

`2_styled-html/index.html` と `2_styled-html/style.css` を開きます。

HTMLで内容を作り、CSSで色、背景、フォントなどの見た目を調整します。

### 3. X風の画面を作る

作業フォルダは `3_x-template/` です。

最初はHTMLで1つの投稿を作り、CSSでレイアウトを整えます。その後、複数の投稿を並べ、JavaScriptで投稿データからタイムラインを自動生成します。

主なファイルは以下です。

- `index.html`: 画面の土台
- `style.css`: 投稿、タイムライン、投稿フォームの見た目
- `script.js`: 投稿データ、投稿DOMの生成、投稿フォームの処理
- `images/`: アイコンとプロフィール画像

各段階の完成例は `3_x-template/answers/` に入っています。

- `1-flat_index.html`: 要素を縦に並べた状態
- `2-html-layout_index.html`: HTMLで構造を整理した状態
- `3-css-layout_*`: CSSで横並びを作る状態
- `4-css-refined_*`: 見た目を調整した1投稿
- `5-power-timeline_*`: 投稿を手で複数並べたタイムライン
- `6-js-timeline_*`: JavaScriptで投稿を自動生成するタイムライン
- `7-post_*`: 投稿フォームつきの完成形

## 3_x-template の表示方法

`3_x-template/index.html` をブラウザで開きます。

ローカルサーバーで確認する場合は、以下を実行します。

```bash
cd 3_x-template
python3 -m http.server 8765
```

ブラウザで `http://127.0.0.1:8765/` を開きます。

## Reactテンプレート

Reactの章では `4_x-template-react/` を使います。

```bash
cd 4_x-template-react
npm install
npm run dev
```

ターミナルに表示されたURLをブラウザで開きます。

主に触るファイルは以下です。

- `src/App.tsx`
- `src/App.css`
- `src/index.css`

`node_modules/` は `npm install` で作られるため、配布物には含めません。
