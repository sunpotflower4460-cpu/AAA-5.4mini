# 残心 / Zanshin

> 書いたあとにも、心がそこに残るメモ帖。  
> A note-taking app where the heart lingers, even after the writing ends.

---

## アプリ概要

「残心」は、和の美意識・間・余白・静けさを大切にした、iPhone-firstのWebメモ帖です。Phase 4 までの最終調整を完了し、公開前の静かなMVPとして整えています。

---

## MVP機能

- メモ一覧
- メモ作成
- メモ編集
- メモ削除
- 自動保存
- 検索
- お気に入り
- localStorage保存
- iPhone向けレスポンシブUI
- 日本語/英語を意識した文言

---

## 技術構成

- Vite
- React + TypeScript
- Tailwind CSS
- localStorage

将来のCapacitor/iOS化を邪魔しない構成にしています。

---

## セットアップ

```bash
npm install
```

## 開発起動

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

---

## Cloudflare Pages設定

```txt
Build command: npm run build
Build output directory: dist
```

環境変数は基本不要です。Cloudflare Pages に手動接続する場合は、上記設定で十分です。

---

## Phase 4 最終調整

Phase 4 では以下を調整しました。

- 基本機能のデバッグ確認
- iPhone幅を中心に余白・文字サイズ・ボタン配置を微調整
- 自動保存の安定性を改善
- 公開前の最終ビルド確認

---

## 備考

- localStorage に保存されたメモが起動時に復元されます
- 不正なJSONが保存されていても、読み込みで落ちない設計です
- Cloudflare Pages へ接続済みの場合は、`npm run build` 後に `dist` を公開してください

---

## ディレクトリ

- `src/types/note.ts` — Note型
- `src/lib/storage.ts` — localStorage永続化
- `src/lib/date.ts` — 日付表示
- `src/lib/i18n.ts` — 主要文言
- `src/components/` — UIコンポーネント
