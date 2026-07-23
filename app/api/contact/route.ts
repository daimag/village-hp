import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// お問い合わせフォームの送信（コアサーバーのSMTPでメール送信）。
// 必要な環境変数（Vercel）：
//   SMTP_HOST  例: v2008.coreserver.jp
//   SMTP_PORT  例: 465
//   SMTP_USER  送信元アカウント（例: info@pqhpyqqt.v2008.coreserver.jp）
//   SMTP_PASS  上記アカウントのパスワード
//   MAIL_TO    受信先（省略時は SMTP_USER 宛）
export async function POST(req: NextRequest) {
  let data: { name?: string; email?: string; tel?: string; message?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "不正なリクエストです。" }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const tel = (data.tel || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "必須項目が未入力です。" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO || user;

  if (!host || !user || !pass) {
    return NextResponse.json(
      { ok: false, error: "送信設定が未完了です。お手数ですがお電話にてご連絡ください。" },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465はSSL、587はSTARTTLS
      auth: { user, pass },
    });

    const text = [
      `お名前：${name}`,
      `メール：${email}`,
      `電話番号：${tel || "（未記入）"}`,
      "",
      "お問い合わせ内容：",
      message,
      "",
      "――――――――",
      "ヴィレッジHP お問い合わせフォームより送信",
    ].join("\n");

    await transporter.sendMail({
      from: `"ヴィレッジHP お問い合わせ" <${user}>`,
      to,
      replyTo: email,
      subject: `【お問い合わせ】${name} 様`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] send failed", e);
    return NextResponse.json(
      { ok: false, error: "送信に失敗しました。時間をおいて再度お試しいただくか、お電話ください。" },
      { status: 502 },
    );
  }
}
