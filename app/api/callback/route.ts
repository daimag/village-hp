import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GitHub から戻ってきた code を access_token に交換し、
// Decap CMS のポップアップへ postMessage で受け渡す。
export async function GET(req: NextRequest) {
  const code = new URL(req.url).searchParams.get("code");
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  let message: string;
  if (!code || !clientId || !clientSecret) {
    message = `authorization:github:error:${JSON.stringify({ error: "設定不足または認可コードがありません" })}`;
  } else {
    try {
      const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
      });
      const data = (await res.json()) as { access_token?: string; error_description?: string };
      message = data.access_token
        ? `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: "github" })}`
        : `authorization:github:error:${JSON.stringify({ error: data.error_description || "トークン取得に失敗しました" })}`;
    } catch {
      message = `authorization:github:error:${JSON.stringify({ error: "GitHubとの通信に失敗しました" })}`;
    }
  }

  const html = `<!doctype html><html><head><meta charset="utf-8" /></head><body>
<script>
(function () {
  var message = ${JSON.stringify(message)};
  function receive(e) {
    if (!window.opener) return;
    window.opener.postMessage(message, e.origin);
    window.removeEventListener("message", receive, false);
  }
  window.addEventListener("message", receive, false);
  if (window.opener) window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>認証処理が完了しました。このウィンドウは自動的に閉じます。</p>
</body></html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
