"use client";

import { useState } from "react";
import { company } from "@/app/lib/company";

// ※ 送信は暫定でメールソフトを起動する mailto 方式。
//    独自ドメイン取得・メール設定後に、サーバー送信フォームへ差し替え予定。
export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", tel: "", message: "" });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `【お問い合わせ】${form.name} 様`;
    const body = [
      `お名前：${form.name}`,
      `メール：${form.email}`,
      `電話番号：${form.tel || "（未記入）"}`,
      "",
      "お問い合わせ内容：",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="card" onSubmit={onSubmit}>
      <h3>フォームでのお問い合わせ</h3>
      <div className="field">
        <label htmlFor="cf-name">
          お名前 <span className="req">*</span>
        </label>
        <input id="cf-name" type="text" required value={form.name} onChange={update("name")} placeholder="山田 太郎" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">
          メールアドレス <span className="req">*</span>
        </label>
        <input id="cf-email" type="email" required value={form.email} onChange={update("email")} placeholder="example@email.com" />
      </div>
      <div className="field">
        <label htmlFor="cf-tel">電話番号</label>
        <input id="cf-tel" type="tel" value={form.tel} onChange={update("tel")} placeholder="090-0000-0000" />
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
        />
      </div>
      <button className="btn-fill" type="submit" style={{ width: "100%" }}>
        送信する
      </button>
    </form>
  );
}
