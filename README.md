# 第1回　福井支店コーディング勉強会
## デザイン
[link](https://www.figma.com/file/zcuMNPgTObLP1jnHv2YIec/%E8%AA%B2%E9%A1%8C?type=design&node-id=0-1&mode=design&t=a6AcqJFIPXlMvVXx-0){:target="_blank"}
## コーディングルール
・gitで管理―それぞれ自分の名前のフォルダ内にhtmlとcss（必要であればjs）を入れてください。<br>
・cssの命名規則はFLOCSS（template/scssを使う）<br>
・セマンティックHTMLを意識（section内にhタグを入れる、カード形式のコンテンツはarticleを使用する等）<br>
・画像はwebp化・Retinaディスプレイ対応まで行う（pictureタグで囲み、webp対応でないデバイスでも見れるように）<br>
・npm、node.js等は今回使わない<br>
・フォントはgoogle fontsからの読み込み<br>
・デザインにないアニメーションの実装を行いたい場合は、下記からアニメーションをご確認下さい。（希望者のみでOKです）<br>
[link](https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/1-1/1-1.html){:target="_blank"}
# 福井支店勉強会のリポジトリ
## 使用するブランチ
※基本的にmainブランチとdevelopブランチは触らないでください。<br>
developブランチからfeatureブランチを切ってそこで作業を行います。

### ■developブランチからfeatureブランチを作成する方法
#### ①ソースツリーの右上にあるGit Flowボタンを押す
![スクリーンショット 2023-03-22 193151](https://user-images.githubusercontent.com/97645631/226876439-260e1dbf-437d-4bc7-a8ff-b188c7737aa6.png)

#### ②Git Flowボタンを押すと表示されるダイアログの中にある「新規フィーチャーを開始」ボタンを押す

![スクリーンショット 2023-03-22 193438](https://user-images.githubusercontent.com/97645631/226877070-489ecc17-d3ae-46d6-baa2-8073f92ee548.png)

#### ③featureブランチを作成する
フィーチャー名に作業するブランチ名を記述する。<br>
今回は平井のバナー画像を追加したいので「add_banner_hirai_20230322」を入れました。<br>
フィーチャー名を記述したらOKボタンを押してください。

![スクリーンショット 2023-03-22 193643](https://user-images.githubusercontent.com/97645631/226877600-99cc39b7-b32e-4514-af9e-e02012ac9ead.png)

#### ④左のサイドバーに自分が設定したブランチが表示されていたら完了

![スクリーンショット 2023-03-22 193946](https://user-images.githubusercontent.com/97645631/226878363-7a2b6299-b793-4853-9fcc-593f65b354ed.png)
