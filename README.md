# 残心 / Zanshin

> 書いたあとにも、心がそこに残るメモ帳。  
> A note-taking app where the heart lingers, even after the writing ends.

---

## アプリ概要

「残心」は、和の美意識・間・余白・静けさを大切にした、iPhone-firstのWebメモアプリです。まずはローカル保存のMVPとして、静かに書けて、静かに残る最小体験を整えます。

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

## Cloudflare Pages方針

Phase 3のMVP完成後のみ、必要に応じてCloudflare Pagesの設定を行います。

- Build command: `npm run build`
- Build output directory: `dist`

Phase 3の途中ではデプロイしません。

---

## ディレクトリ

- `src/types/note.ts` — Note型
- `src/lib/storage.ts` — localStorage永続化
- `src/lib/date.ts` — 日付表示
- `src/lib/i18n.ts` — 主要文言
- `src/components/` — UIコンポーネント
