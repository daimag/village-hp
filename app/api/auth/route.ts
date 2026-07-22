import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Decap CMS（GitHubバックエンド）のOAuth入口。GitHubの認可ページへリダイレクトする。
export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse(
      "GITHUB_OAUTH_CLIENT_ID が未設定です。Vercel の環境変数を設定してください。",
      { status: 500 },
    );
  }
  const origin = new URL(req.url).origin;
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", `${origin}/api/callback`);
  authorize.searchParams.set("scope", "repo");
  return NextResponse.redirect(authorize.toString());
}
