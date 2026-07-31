# -*- coding: utf-8 -*-
"""ヴィレッジ メール設定マニュアル（iPhone / Android / パソコン）の DOCX 生成

方針：やさしい日本語・短い一文・表は最小限。
  - 覚える値は冒頭の「これだけ表」に集約し、各手順では繰り返さない
  - 1手順＝1行。専門用語は初出のみカッコで補足
  - パスワードは本文に書かない（別紙「メール設定一覧」で管理）
出力：メール設定マニュアル_iPhone_Android_PC.docx
"""
from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

NAVY = RGBColor(0x0F, 0x35, 0x6E)
GRAY = RGBColor(0x66, 0x66, 0x66)
FONT = "Meiryo UI"

MAIL = "info@village2024.jp"
SERVER = "v2008.coreserver.jp"


def set_font(run, size=10.5, bold=False, color=None, font=FONT):
    run.font.name = font
    run.font.size = Pt(size)
    run.font.bold = bold
    if color is not None:
        run.font.color.rgb = color
    rpr = run._element.get_or_add_rPr()
    rfonts = rpr.find(qn('w:rFonts'))
    if rfonts is None:
        rfonts = OxmlElement('w:rFonts'); rpr.append(rfonts)
    rfonts.set(qn('w:eastAsia'), font)


def para(doc, text="", size=10.5, bold=False, color=None, align=None, space_after=4):
    p = doc.add_paragraph()
    if align is not None:
        p.alignment = align
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(0)
    if text:
        set_font(p.add_run(text), size, bold, color)
    return p


def heading(doc, text, size=14):
    p = para(doc, text, size=size, bold=True, color=NAVY, space_after=6)
    p.paragraph_format.space_before = Pt(10)
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement('w:pBdr'); bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single'); bottom.set(qn('w:sz'), '12')
    bottom.set(qn('w:space'), '2'); bottom.set(qn('w:color'), 'F5A623')
    pbdr.append(bottom); pPr.append(pbdr)
    return p


def shade(cell, hexcolor):
    tcPr = cell._tc.get_or_add_tcPr()
    sh = OxmlElement('w:shd')
    sh.set(qn('w:val'), 'clear'); sh.set(qn('w:fill'), hexcolor)
    tcPr.append(sh)


def make_table(doc, headers, rows, widths=None, head_fill='0F356E'):
    t = doc.add_table(rows=1, cols=len(headers))
    t.style = 'Table Grid'
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    hdr = t.rows[0].cells
    for i, h in enumerate(headers):
        hdr[i].paragraphs[0].clear()
        set_font(hdr[i].paragraphs[0].add_run(h), 10, True, RGBColor(0xFF, 0xFF, 0xFF))
        shade(hdr[i], head_fill)
    for row in rows:
        cells = t.add_row().cells
        for i, val in enumerate(row):
            cells[i].paragraphs[0].clear()
            set_font(cells[i].paragraphs[0].add_run(str(val)), 9.5, False)
    if widths:
        for i, w in enumerate(widths):
            for row in t.rows:
                row.cells[i].width = Cm(w)
    return t


def note(doc, text):
    return para(doc, text, size=9, color=GRAY, space_after=2)


def steps(doc, items):
    for i, s in enumerate(items, 1):
        para(doc, f"{i}. {s}", size=10.5, space_after=2)


def build():
    doc = Document()
    st = doc.styles['Normal']; st.font.name = FONT; st.font.size = Pt(10.5)
    st.element.rPr.rFonts.set(qn('w:eastAsia'), FONT)

    para(doc, "メール設定マニュアル", size=18, bold=True, color=NAVY,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)
    para(doc, "iPhone ／ Android ／ パソコン", size=12, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)
    para(doc, "株式会社ヴィレッジ　御中", size=11, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=1)
    para(doc, f"対象メール：@village2024.jp（CoreServer） ／ 作成 2026-07-07・改訂 2026-07-31",
         size=9.5, color=GRAY, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6)

    para(doc, "会社のメールを、お使いの端末で送受信できるようにする手順書です。", size=10.5, space_after=2)
    para(doc, "設定は 5〜10分で終わります。まず①の表を見て、②〜④のうち"
              "お使いの端末のページだけ進めてください。", size=10.5, space_after=2)

    # ---------------------------------------------------------------- ①
    heading(doc, "① 入力するのは、この5つだけ")
    make_table(doc, ["項目", "入力する値"], [
        ["メールアドレス", MAIL],
        ["パスワード", "メールのパスワード（別紙「メール設定一覧」をご覧ください）"],
        ["サーバー名", f"{SERVER}　★受信・送信とも同じ"],
        ["ユーザー名", f"{MAIL}　★メールアドレスをそのまま入れます"],
        ["メールの種類", "IMAP（アイマップ）を選びます"],
    ], widths=[3.6, 11.6])
    note(doc, f"★サーバー名は {SERVER} です。village2024.jp ではありません。ここが一番の間違いポイントです。")
    note(doc, "★IMAP は、メールをサーバー側に置いておく方式です。スマホとパソコンで同じ受信トレイが見られ、"
              "機種を変えても過去のメールが消えません。")

    para(doc, "")
    para(doc, "番号（ポート）と暗号化 ― 下の値をそのまま入れてください", size=11, bold=True,
         color=NAVY, space_after=3)
    make_table(doc, ["", "ポート番号", "暗号化", "認証（ログイン）"], [
        ["受信", "993", "SSL/TLS＝オン", "あり"],
        ["送信", "465", "SSL/TLS＝オン", "あり（受信と同じID・パスワード）"],
    ], widths=[2.2, 3.4, 4.4, 5.2])
    note(doc, "つながらないときだけ：受信を 143、送信を 587 に変え、暗号化は STARTTLS を選びます。"
              "（143 と SSL/TLS の組み合わせは、つながりません）")

    # ---------------------------------------------------------------- ②
    heading(doc, "② iPhone・iPad の設定")
    para(doc, "iPhone に最初から入っている「メール」アプリで受信できるようにします。",
         size=10.5, space_after=3)
    steps(doc, [
        "「設定」（歯車のマーク）を開きます。",
        "下へスクロールし「アプリ」→「メール」を選びます。（機種により「メール」が直接ある場合も）",
        "「メールアカウント」→「アカウントを追加」を押します。",
        "「その他」→「メールアカウントを追加」を押します。",
        "名前（例：ヴィレッジ）・メール・パスワード・説明（例：会社メール）を入れて「次へ」。",
        "上のタブが「IMAP」になっているか確認します。",
        "「受信メールサーバ」「送信メールサーバ」の両方に、①の サーバー名・ユーザ名・パスワード を入れます。",
        "右上の「次へ」→「保存」で完了です。（確認に少し時間がかかります）",
    ])
    note(doc, "送信側は「オプション」と書かれていても、ユーザ名とパスワードを必ず入れてください。"
              "ここが空だと、受信はできても送信できません。")
    note(doc, "「サーバの識別情報を検証できません」と出たら「続ける」を押して進めてください。")

    # ---------------------------------------------------------------- ③
    heading(doc, "③ Android の設定")
    para(doc, "機種による違いが少ない「Gmail」アプリを使います。"
              "（普段 Gmail を使っていなくても設定できます）", size=10.5, space_after=3)
    steps(doc, [
        "「Gmail」アプリを開きます。",
        "右上の丸いアイコン →「別のアカウントを追加」を押します。",
        "「その他」を選び、メールアドレスを入れて「次へ」。",
        "「個人用（IMAP）」を選び、パスワードを入れて「次へ」。",
        "「受信サーバーの設定」に、①の ユーザー名・パスワード・サーバー名 を入れ、ポート993／SSL にして「次へ」。",
        "「送信サーバーの設定」で「ログインが必要」をオンにし、同じ値を入れ、ポート465／SSL にして「次へ」。",
        "同期の確認画面はそのまま「次へ」。",
        "名前（例：ヴィレッジ）を入れて「次へ」で完了です。",
    ])
    note(doc, "機種によって「個人用（IMAP）」が「IMAP」だけの表示になることがあります。同じ意味です。")

    # ---------------------------------------------------------------- ④
    heading(doc, "④ パソコン（Windows）の設定")
    para(doc, "無料のメールソフト「Thunderbird（サンダーバード）」を使う方法です。"
              "Outlook をお使いの場合は、この下の「Outlook の場合」へ。", size=10.5, space_after=3)

    para(doc, "はじめに（Thunderbird を入れていない場合）", size=10.5, bold=True, color=NAVY, space_after=2)
    steps(doc, [
        "Edge などで「Thunderbird ダウンロード」と検索します。",
        "公式サイト（thunderbird.net）から「無料ダウンロード」を押します。",
        "ダウンロードしたファイルを開き、画面の案内どおりに進めます（数分で終わります）。",
    ])

    para(doc, "アカウントの追加", size=10.5, bold=True, color=NAVY, space_after=2)
    steps(doc, [
        "Thunderbird を開きます。",
        "「新しいアカウントを作成」→「メール」を選びます。",
        "名前（例：ヴィレッジ）・メールアドレス・パスワードを入れて「続ける」。",
        "自動では正しく入らないため「手動設定」を押し、下の表のとおり入れます。",
        "「再テスト」→「完了」を押します。受信トレイが出れば完了です。",
    ])
    make_table(doc, ["項目", "受信サーバー", "送信サーバー"], [
        ["方式", "IMAP", "SMTP"],
        ["サーバー名", SERVER, f"{SERVER}（受信と同じ）"],
        ["ポート", "993", "465"],
        ["接続の保護", "SSL/TLS", "SSL/TLS"],
        ["認証方式", "通常のパスワード認証", "通常のパスワード認証"],
        ["ユーザー名", MAIL, MAIL],
    ], widths=[3.2, 6.0, 6.0])
    note(doc, "2台目のパソコンも同じ手順です。IMAP なので受信トレイは全端末で共有されます。")

    para(doc, "Outlook の場合", size=10.5, bold=True, color=NAVY, space_after=2)
    steps(doc, [
        "「ファイル」→「アカウントの追加」を押します。",
        "メールアドレスを入れ、「詳細オプション」→「自分で自分のアカウントを手動で設定」にチェックして「接続」。",
        "種類は「IMAP」を選びます。",
        f"受信・送信とも サーバー {SERVER}／受信993・送信465／暗号化 SSL/TLS を入れます。",
        "パスワードを入れて「接続」。受信トレイが出れば完了です。",
    ])

    # ---------------------------------------------------------------- ⑤
    heading(doc, "⑤ 最後に、送受信テスト")
    para(doc, "1. 受信：個人のメール（Gmail など）から会社アドレス宛に送り、届くか見ます。",
         size=10.5, space_after=2)
    para(doc, "2. 送信：会社アドレスから個人のメール宛に送り、届くか見ます。",
         size=10.5, space_after=2)
    note(doc, "両方届けば設定完了です。片方だけ失敗する場合は、次の表をご覧ください。")

    # ---------------------------------------------------------------- ⑥
    heading(doc, "⑥ 困ったときは")
    make_table(doc, ["こんなとき", "ここを見てください"], [
        ["受信できるが、送信できない", "送信の「認証（ログインが必要）」がオフ。または送信ポートを 465 ⇔ 587 に変える。"],
        ["送信できるが、受信できない", "受信のサーバー名・ポート993・暗号化オン・パスワードを見直す。"],
        ["「接続できません」と出る", f"サーバー名の打ち間違いが多いです。{SERVER} で合っているか確認。"],
        ["ポート143 でつながらない", "143 は暗号化を STARTTLS に。おすすめは 993＋SSL/TLS。"],
        ["パスワードが分からない", "CoreServer の管理画面で再設定できます。"],
        ["スマホとパソコンで同じメールを見たい", "本書どおり IMAP で設定すれば、そのまま共有されます。"],
        ["機種を変えるとメールは消える？", "消えません。新しい端末で同じ設定をすれば、過去のメールも見られます。"],
    ], widths=[5.4, 9.8])

    para(doc, "")
    para(doc, "作成：株式会社ヴィレッジ コーポレートサイト制作チーム（ダイマグ）", size=9,
         color=GRAY, align=WD_ALIGN_PARAGRAPH.RIGHT, space_after=0)
    para(doc, "CoreServer の標準設定に基づいています。仕様変更で項目名が変わる場合があります。", size=9,
         color=GRAY, align=WD_ALIGN_PARAGRAPH.RIGHT)

    out = __file__.replace("generate_mail_manual_docx.py",
                           "メール設定マニュアル_iPhone_Android_PC.docx")
    doc.save(out)
    print("saved:", out)


if __name__ == "__main__":
    build()
