import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return (
    <main>
      <h1>Auth</h1>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
