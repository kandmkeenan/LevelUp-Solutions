"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = "/login";
      } else {
        setEmail(data.user.email ?? null);
      }
    });
  }, []);

  if (!email) return null;

  return (
    <div className="max-w-3xl mx-auto py-24">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-4 text-gray-600">Signed in as {email}</p>
    </div>
  );
}
