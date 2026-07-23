"use client";

import { useState } from "react";

// 送信はサーバー（/api/contact → コアサーバーSMTP）経由。メーラーは起動しません。
export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", tel: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [err, setErr] = useState("");

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErr("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", tel: "", message: "" });
      } else {
        setStatus("error");
        setErr(data.error || "送信に失敗しました。お手数ですがお電話ください。");
      }
    } catch {
      setStatus("error");
      setErr("通信エラーが発生しました。時間をおいて再度お試しください。");
    }
  };

  const sending = status === "sending";

  return (
    <form className="card" onSubmit={onSubmit}>
      <h3>フォームでのお問い合わせ</h3>
      <div className="field">
        <label htmlFor="cf-name">
          お名前 <span className="req">*</span>
        </label>
        <input id="cf-name" type="text" required value={form.name} onChange={update("name")} placeholder="山田 太郎" disabled={sending} />
      </div>
      <div className="field">
        <label htmlFor="cf-email">
          メールアドレス <span className="req">*</span>
        </label>
        <input id="cf-email" type="email" required value={form.email} onChange={update("email")} placeholder="example@email.com" disabled={sending} />
      </div>
      <div className="field">
        <label htmlFor="cf-tel">電話番号</label>
        <input id="cf-tel" type="tel" value={form.tel} onChange={update("tel")} placeholder="090-0000-0000" disabled={sending} />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">
          お問い合わせ内容 <span className="req">*</span>
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          required
          value={form.message}
          onChange={update("message")}
          placeholder="解体をご検討の建物の所在地・種類などをご記入ください。"
          disabled={sending}
        />
      </div>

      {status === "ok" && (
        <p className="form-msg ok">送信しました。担当者より追ってご連絡いたします。ありがとうございます。</p>
      )}
      {status === "error" && <p className="form-msg err">{err}</p>}

      <button className="btn-fill" type="submit" style={{ width: "100%" }} disabled={sending}>
        {sending ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
