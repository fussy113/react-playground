# react-playground

React + TypeScript の実験・学習用 playground。

## 技術スタック

| 領域 | 採用 |
| --- | --- |
| ビルドツール | [Vite](https://vite.dev/) + `@vitejs/plugin-react` |
| 言語 | TypeScript |
| UI | React 19 |
| スタイリング | [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite`） |
| テスト | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)（jsdom） |
| Lint | [oxlint](https://oxc.rs/docs/guide/usage/linter)（Oxc） |
| Format | [oxfmt](https://oxc.rs/docs/guide/usage/formatter)（Oxc, beta） |
| ランタイム管理 | [mise](https://mise.jdx.dev/)（node / pnpm をバージョン固定） |

## 必要なもの

- [mise](https://mise.jdx.dev/) がインストールされていること

node / pnpm のバージョンは `mise.toml` で固定しています。

## セットアップ

```bash
mise install     # mise.toml の node / pnpm を導入
pnpm install     # 依存をインストール
```

> 初回は `mise trust` で `mise.toml` の信頼が必要になる場合があります。

## コマンド

```bash
pnpm dev          # 開発サーバー起動（http://localhost:5173）
pnpm build        # 本番ビルド（tsc -b && vite build）
pnpm preview      # ビルド結果のプレビュー

pnpm test         # テスト（watch モード）
pnpm test:run     # テスト（1 回実行）
pnpm coverage     # カバレッジ計測

pnpm lint         # oxlint
pnpm lint:fix     # oxlint --fix
pnpm fmt          # oxfmt で整形
pnpm fmt:check    # 整形差分のチェック（CI 向け）
```

## ディレクトリ構成

```
src/
  main.tsx        # エントリーポイント
  App.tsx         # ルートコンポーネント
  index.css       # Tailwind のエントリ（@import "tailwindcss"）
  test/
    setup.ts      # Vitest セットアップ（jest-dom マッチャ + cleanup）
  App.test.tsx    # サンプルテスト
```

## メモ

- Tailwind v4 は設定ファイル（`tailwind.config.js`）不要。カスタマイズは `src/index.css` の `@theme` で行う。
- Lint / Format は ESLint / Prettier ではなく Oxc ツールチェーン（oxlint + oxfmt）を採用。
