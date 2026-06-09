# Action Game Frame Analysis Web

GitHub Pagesでそのまま公開できる、アクションゲームのフレーム分析用Webです。

## 使い方

1. このフォルダをGitHubリポジトリに入れる
2. `assets/images/ds3_gundyr_parry/` に分析画像を入れる
3. GitHub Pagesを有効化する
4. `index.html` から公開されます

## 今回必要な画像ファイル

`assets/images/ds3_gundyr_parry/` に以下のPNGを入れてください。

### パリィ成立

- Gundyr_041F_WindupStart.png
- Gundyr_062F_WindupPeak.png
- Gundyr_078F_ThreatFrame.png
- Gundyr_080F_WeaponContact.png
- Gundyr_085F_ParryVFX.png
- Gundyr_092F_RecoilStart.png
- Gundyr_135F_ControlReturn.png
- Gundyr_150F_KneelState.png
- Gundyr_157F_RiposteStart.png

### 致命の一撃

- critical_charge_start.png
- critical_camera_zoom_begin.png
- critical_camera_dive_blur.png
- critical_stab_impact.png
- critical_damage_display_first.png
- critical_blood_vfx_start.png
- critical_blood_vfx_spread.png
- critical_second_strike_prepare.png
- critical_sword_pull_start.png
- critical_camera_shake_begin.png
- critical_damage_display_second.png
- critical_sword_pull_impact.png
- critical_boss_knockback.png
- critical_blood_vfx_second.png
- critical_shield_return.png
- critical_lockon_recover.png
- critical_control_return.png
- critical_boss_standup_complete.png

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
