# Xを作ってみよう 配布用テンプレート

Do'er の「顔合わせ会 & Xを作ってみようの会」で使う、React + Vite の空プロジェクトです。

## 事前に入れるもの

- Visual Studio Code
- Node.js LTS

Git、Homebrew、追加の CLI ツールは使いません。

## 起動方法

このフォルダを VSCode で開き、ターミナルで以下を実行します。

```bash
npm install
npm run dev
```

ターミナルに表示された URL をブラウザで開きます。

## バージョン確認

うまく動かない場合は、まず以下を確認します。

```bash
node -v
npm -v
```

## 配布時の注意

zip に `node_modules` は入れません。

配布に含める主なファイルは以下です。

- `package.json`
- `package-lock.json`
- `index.html`
- `src/`
- `public/`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `eslint.config.js`

`node_modules` は参加者の PC で `npm install` を実行すると作られます。
