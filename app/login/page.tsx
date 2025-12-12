"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function signIn() {
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="max-w-sm mx-auto py-24">
      <h1 className="text-2xl font-semibold mb-6">Sign in</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <button
        className="bg-blue-600 text-white w-full py-2"
        onClick={signIn}
      >
        Sign in
      </button>
    </div>
  );
}
