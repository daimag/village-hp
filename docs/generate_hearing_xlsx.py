# -*- coding: utf-8 -*-
"""
株式会社ヴィレッジ HP ヒアリングシート生成スクリプト（1シート版）
1枚のシートに、あいさつ〜各項目〜写真〜デザイン〜ドメインまでを縦に収める。
"""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

wb = Workbook()
ws = wb.active
ws.title = "ヒアリングシート"

# --- スタイル定義（ブランドカラー：青×緑） ---
THIN = Side(border_style="thin", color="C7CDD4")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)

TITLE_FONT = Font(name="游ゴシック", size=18, bold=True, color="FFFFFF")
TITLE_FILL = PatternFill("solid", fgColor="0369A1")   # sky-700
SECTION_FONT = Font(name="游ゴシック", size=12, bold=True, color="FFFFFF")
SECTION_FILL = PatternFill("solid", fgColor="334155")  # slate-700
LABEL_FONT = Font(name="游ゴシック", size=11, bold=True, color="1E293B")
LABEL_FILL = PatternFill("solid", fgColor="E2E8F0")    # slate-200
CURRENT_FONT = Font(name="游ゴシック", size=10, color="475569")
CURRENT_FILL = PatternFill("solid", fgColor="F1F5F9")  # slate-100
INPUT_FONT = Font(name="游ゴシック", size=11, color="0F172A")
INPUT_FILL = PatternFill("solid", fgColor="FFFFFF")
NOTE_FONT = Font(name="游ゴシック", size=9, color="64748B", italic=True)
CENTER = Alignment(horizontal="center", vertical="center", wrap_text=True)
LEFT_WRAP = Alignment(horizontal="left", vertical="top", wrap_text=True)

# 列幅
ws.column_dimensions["A"].width = 3
ws.column_dimensions["B"].width = 24
ws.column_dimensions["C"].width = 52
ws.column_dimensions["D"].width = 52
ws.column_dimensions["E"].width = 3


def merged(row, text, font, fill=None, height=24, align=None):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    c = ws.cell(row=row, column=2, value=text)
    c.font = font
    if fill:
        c.fill = fill
    c.alignment = align or Alignment(horizontal="left", vertical="center", indent=1, wrap_text=True)
    ws.row_dimensions[row].height = height
    return row + 1


def section(row, title):
    return merged(row, f"■ {title}", SECTION_FONT, SECTION_FILL, 24)


def add_row(row, label, current, height=None):
    lc = ws.cell(row=row, column=2, value=label)
    lc.font = LABEL_FONT; lc.fill = LABEL_FILL; lc.alignment = LEFT_WRAP; lc.border = BORDER
    cc = ws.cell(row=row, column=3, value=current)
    cc.font = CURRENT_FONT; cc.fill = CURRENT_FILL; cc.alignment = LEFT_WRAP; cc.border = BORDER
    ic = ws.cell(row=row, column=4, value="")
    ic.font = INPUT_FONT; ic.fill = INPUT_FILL; ic.alignment = LEFT_WRAP; ic.border = BORDER
    if height:
        ws.row_dimensions[row].height = height
    else:
        lines = max(1, len(str(current)) // 30) + str(current).count("\n")
        ws.row_dimensions[row].height = max(22, min(180, 18 + lines * 14))
    return row + 1


def photo_row(row, name, detail):
    lc = ws.cell(row=row, column=2, value=name)
    lc.font = LABEL_FONT; lc.fill = LABEL_FILL; lc.alignment = LEFT_WRAP; lc.border = BORDER
    cc = ws.cell(row=row, column=3, value=detail)
    cc.font = CURRENT_FONT; cc.fill = CURRENT_FILL; cc.alignment = LEFT_WRAP; cc.border = BORDER
    ic = ws.cell(row=row, column=4, value="□ 提供できる　／　□ 後日用意　／　□ 撮影してほしい　／　□ 不要")
    ic.font = INPUT_FONT; ic.fill = INPUT_FILL; ic.alignment = LEFT_WRAP; ic.border = BORDER
    ws.row_dimensions[row].height = 32
    return row + 1


def spacer(row):
    ws.row_dimensions[row].height = 6
    return row + 1


# ===========================================
# タイトル
# ===========================================
row = 2
row = merged(row, "株式会社ヴィレッジ 様　ホームページ ヒアリングシート",
             TITLE_FONT, TITLE_FILL, 40, CENTER)

# あいさつ文
greeting = (
    "この度はホームページ制作のご依頼をいただき、誠にありがとうございます。\n"
    "お預かりしたお名刺をもとに、まずはサイトのたたき台（ドラフト）を作成いたしました。\n"
    "中央の「現在の制作内容」をご覧いただき、直したい点・追加したい点を右の記入欄にご記入ください。\n"
    "そのままでOKな項目は空欄で結構です。ご記入後、本ファイルをメールにてご返信ください。"
)
row = merged(row, greeting, Font(name="游ゴシック", size=11, color="0F172A"), None, 88,
             Alignment(horizontal="left", vertical="top", indent=1, wrap_text=True))

# 列見出し
for cell, val in [("B", "項目"), ("C", "現在の制作内容（ドラフト）"), ("D", "ヒアリング記入欄")]:
    c = ws.cell(row=row, column={"B": 2, "C": 3, "D": 4}[cell], value=val)
    c.font = SECTION_FONT; c.fill = SECTION_FILL; c.alignment = CENTER; c.border = BORDER
ws.row_dimensions[row].height = 24
row += 1
HEADER_ROW = row - 1

# ===========================================
# TOPページ
# ===========================================
row = section(row, "TOPページ（一番最初に表示される画面）")
row = add_row(row, "キャッチコピー", "解体から、まちの未来をつくる。")
row = add_row(row, "紹介文",
    "北九州市門司区を拠点に、建物解体工事・土地開発・不動産・リフォームまでをワンストップでご提供。"
    "安全・丁寧・スピーディーな施工で、地域の暮らしと未来を支えます。")
row = add_row(row, "背景写真", "（現状：仮のデザイン背景）\n※ 実際の現場・重機などの写真に差し替え可能です")

# ===========================================
# 事業内容
# ===========================================
row = spacer(row)
row = section(row, "事業内容（6つの事業）")
services = [
    ("建物解体工事", "戸建住宅から店舗・ビルまで、木造・鉄骨・RC造に対応。近隣に配慮した安全管理と適正な分別解体を徹底します。"),
    ("解体業コンサルタント", "解体計画の立案から届出・許認可、見積の精査まで。一級土木施工管理技士が最適なプランをご提案します。"),
    ("土地開発", "造成・整地・インフラ整備まで、土地の価値を最大化する開発をトータルでサポートします。"),
    ("不動産売買", "解体後の土地活用や売却、物件の買取までワンストップ。地域に精通したスタッフが親身に対応します。"),
    ("リフォーム事業", "水回りから外装・内装まで、住まいの困りごとを解決。暮らしやすさと資産価値の向上をお手伝いします。"),
    ("リノベーション事業", "中古住宅を新たな価値へ。ライフスタイルに合わせた空間づくりをデザインから施工まで一貫して行います。"),
]
for title, desc in services:
    row = add_row(row, title, desc)
row = add_row(row, "追加したい事業・対応エリア", "※ 追加事業や対応可能な市区町村があればご記入ください", height=34)
row = add_row(row, "保有資格・許可番号",
    "一級土木施工管理技士\n※ 建設業許可番号・解体工事業登録番号などあればご記入ください", height=44)

# ===========================================
# 選ばれる理由
# ===========================================
row = spacer(row)
row = section(row, "選ばれる理由（会社の強み）")
row = add_row(row, "強み①", "有資格者による確かな品質：一級土木施工管理技士が現場を管理し、計画から施工まで責任を持って対応。")
row = add_row(row, "強み②", "解体から活用までワンストップ：解体・土地開発・不動産・リフォームを自社で一貫対応。")
row = add_row(row, "強み③", "地域密着・スピード対応：北九州エリアを中心にフットワーク軽く対応。見積り無料。")
row = add_row(row, "他社に負けない点・実績", "※ アピールしたいことがあればご記入ください", height=40)

# ===========================================
# 会社概要
# ===========================================
row = spacer(row)
row = section(row, "会社概要（名刺の情報。ご確認ください）")
row = add_row(row, "会社名", "株式会社ヴィレッジ")
row = add_row(row, "代表者", "代表取締役　中川 基次（一級土木施工管理技士）")
row = add_row(row, "所在地", "〒800-0042　福岡県北九州市門司区上馬寄1丁目8-1-1203")
row = add_row(row, "電話番号", "090-9566-9563")
row = add_row(row, "メール", "village2024@outlook.jp")
row = add_row(row, "営業時間・定休日", "（ドラフト）8:00〜19:00／日曜・祝日休み　※ 実際の時間をご記入ください")
row = add_row(row, "設立・資本金・従業員数", "※ 掲載したい場合のみご記入ください（未記入なら省略します）", height=34)
row = add_row(row, "建設業許可／宅建免許 番号", "※ あればご記入ください（信頼感アップに繋がります）", height=34)

# ===========================================
# 写真
# ===========================================
row = spacer(row)
row = section(row, "ご提供いただきたい写真（右欄にチェック・メモ）")
photos = [
    ("トップ背景（目立つ写真）", "解体現場・重機・整地後の土地など、迫力のある横長写真がおすすめ"),
    ("代表者の写真", "中川様のお顔写真（スーツ・作業着どちらでも）※任意"),
    ("会社ロゴのデータ", "名刺のVマーク。画像データ(PNG/AI等)があれば高画質で掲載できます"),
    ("解体工事の写真", "施工前・施工中・施工後など（あるだけ）"),
    ("重機・車両／不動産・土地", "自社の重機・トラック、取扱物件・造成地など"),
    ("リフォーム・リノベ事例", "ビフォーアフターがあると効果的"),
    ("スタッフ・作業風景／会社外観", "働く様子・外観・看板など"),
]
for name, detail in photos:
    row = photo_row(row, name, detail)
row = merged(row, "※ スマホ撮影の写真でも構いません。データはメール添付やギガファイル便等でお送りください。",
             NOTE_FONT, None, 20, LEFT_WRAP)

# ===========================================
# デザイン・参考URL
# ===========================================
row = spacer(row)
row = section(row, "デザインのご希望・参考サイト")
row = add_row(row, "サイトの色（ドラフト）", "青 × 緑（名刺のVマークの色に合わせています）")
row = add_row(row, "色・雰囲気のご希望",
    "※ 目指したい印象をご記入ください（例：信頼感／誠実／力強い／清潔感／親しみやすい／シンプル 等）", height=40)
row = add_row(row, "参考にしたいサイト①", "URL：\n良いと思った点：", height=44)
row = add_row(row, "参考にしたいサイト②", "URL：\n良いと思った点：", height=44)

# ===========================================
# お問い合わせ・ドメイン
# ===========================================
row = spacer(row)
row = section(row, "お問い合わせ・ホームページのアドレス")
row = add_row(row, "問い合わせフォーム", "※ サイトから直接送信できる入力フォームを設置しますか？（はい / いいえ）", height=32)
row = add_row(row, "地図の表示", "※ Googleマップ（所在地）を掲載しますか？（はい / いいえ）", height=32)
row = add_row(row, "ご希望のドメイン（URL）",
    "※ ホームページのアドレスに使いたい文字列の希望があればご記入ください。\n"
    "　（例：village-kitakyushu.jp / village-kaitai.com 等。末尾は .jp / .com など）\n"
    "　取得可否を確認して手続きします。特に希望が無ければお任せでも大丈夫です。", height=60)

# ===========================================
# 仕上げ（記入欄D列を目立たせる／ウィンドウ枠固定）
# ===========================================
ws.freeze_panes = f"B{HEADER_ROW + 1}"
ws.sheet_view.showGridLines = False

out = r"c:\Users\user\Desktop\village\docs\ヴィレッジHP_ヒアリングシート.xlsx"
wb.save(out)
print(f"OK: {out}")
