# 残心 / Zanshin Phase 2 Audit
## 監査日
2026-05-17
## 監査対象
- README.md
- docs/concept.md
- docs/design-system.md
- docs/mvp-spec.md
- docs/development-phases.md
- .github/copilot-instructions.md
---
## 1. コンセプト監査
判定: OK
確認内容:
- アプリ名「残心 / Zanshin」と一言コンセプトが明記されている
- 「残心」「間」「余白」をUI/UXの中核として扱っている
- 単なる和風メモ帳ではなく、書く体験の余韻を重視している
修正した内容:
- 海外向け補足として Japanese minimalism / Zen-inspired writing / Wabi-sabi / Mindful notes / Calm journaling / Write with stillness / Saved in stillness を整理した
- README の対象読者に iPhone幅で静かに書きたい人を追加した
---
## 2. デザイン監査
判定: OK
確認内容:
- 和風要素が装飾ではなく意味として整理されている
- 黄金比スケール、カラーパレット、タイポグラフィ方針が定義されている
- iPhone幅で窮屈にならないよう、タップ領域とキーボード時の配慮がある
修正した内容:
- iPhone幅での最小タップ領域 44px とキーボード時の崩れ回避を明記した
---
## 3. MVP範囲監査
判定: OK
確認内容:
- メモ一覧 / 作成 / 編集 / 削除 / 自動保存 / 検索 / お気に入り / ローカル保存 / iPhone向けUI / 日英文言が含まれている
- ログイン、同期、AI、課金、Markdown完全対応、複雑なタグ管理、共同編集、App Store申請、途中デプロイは含めていない
- localStorage開始と将来のIndexedDB移行方針が明確
修正した内容:
- MVPをWebアプリとして始め、将来のCapacitor/iOS化を邪魔しない方針を追記した
- キーボード表示時のレイアウト配慮を追記した
---
## 4. 開発フェーズ監査
判定: OK
確認内容:
- Phase 1で設計を入れる方針が明記されている
- Phase 2は監査のみで、Cloudflare Pagesへデプロイしない方針がある
- Phase 3で初めてMVP実装する流れが明確
- Phase 4以降の拡張候補がPhase 3に混ざっていない
修正した内容:
- Phase 3を「ここから初めて実装開始」と明記した
- Phase 4以降をPhase 3に混ぜないルールを追加した
---
## 5. Cloud Agent指示監査
判定: OK
確認内容:
- 目的、静けさ、iPhone-first、多機能化しすぎないルールが明確
- Phase 1 / Phase 2 / Phase 3 の作業範囲が明確
- Cloudflare Pages の扱いが明確
- AI、ログイン、同期、課金を勝手に追加しない方針がある
修正した内容:
- Cloudflare Pages へのデプロイは MVP 完成後に限定する表現へ調整した
- web-first / Capacitor-ready と MVP範囲制限を追記した
---
## 6. Phase 3 実装前の最終方針
Phase 3では以下を守ること。
- Vite + React + TypeScript + TailwindでMVPを作る
- localStorage保存から開始する
- メモ一覧、作成、編集、削除、自動保存、検索、お気に入りを実装する
- iPhone-firstで設計する
- 余白と行間を大切にする
- 機能を増やしすぎない
- Cloudflare PagesへのデプロイはMVP完成後のみ行う
---
## 7. MVPでまだ作らないもの
- ログイン
- クラウド同期
- AI機能
- 課金
- Markdown完全対応
- 複雑なタグ管理
- 共同編集
- App Store申請
---
## 8. 総合判定
```txt
Phase 3に進んでよい

理由:
- コンセプト、デザイン、MVP範囲、開発フェーズ、Cloud Agent指示の整合が取れている
- 途中デプロイや過剰機能の混入を防ぐルールが明確になっている
- Phase 3の実装開始条件と範囲が整理されている
```
---
# 修正ルール
監査中に不足や矛盾があった場合は、該当する設計ファイルを修正してください。
ただし、以下は禁止です。
- MVP範囲を勝手に拡大する
- AI機能を追加する
- ログイン機能を追加する
- Cloud同期を追加する
- 課金設計を追加する
- 実装を開始する
- Cloudflareへデプロイする
---
# Phase 2 完了条件
以下を満たしたらPhase 2完了です。
- `docs/audit-phase-2.md` が作成されている
- Phase 1で作成した設計ファイルをすべて確認している
- 不足や矛盾があれば修正している
- MVP範囲が明確になっている
- Cloudflareへデプロイしていない
- MVP実装を開始していない
- Phase 3に進むための最終方針が明記されている
---
# 期待する最終報告
作業完了後、以下の形式で報告してください。
```txt
Phase 2 完了報告
作成/更新したファイル:
- docs/audit-phase-2.md
- 必要に応じて修正したREADME/docs
監査結果:
- コンセプト: OK
- デザイン: OK
- MVP範囲: OK
- 開発フェーズ: OK
- Cloud Agent指示: OK
主な修正:
- READMEに iPhone-first / web-first の方針を補強
- design-system に iPhone幅・タップ領域の方針を追加
- mvp-spec と development-phases に Phase 3 開始条件を明記
Cloudflareデプロイ:
- していません
MVP実装:
- まだ開始していません
Phase 3へ:
- 進行可能
```
このPhase 2は、「いざ作る前に刀を研ぐ」段階です。  
ここでズレを消しておくと、Phase 3で一気に作っても“AIが作った感”が出にくくなります。
