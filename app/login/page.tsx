"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { company } from "@/content/company";

/**
 * MOCK LOGIN — UI ONLY
 * No authentication, no sessions, no API calls.
 * Approved as demo-only under Project Control (V1).
 * Real auth belongs in V2 admin.
 */
export default function MockLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Intentionally does nothing secure — demo UI only
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-parchment px-6 py-16">
      <div className="w-full max-w-md">
        {/* Demo banner — required so visitors never think this is real auth */}
        <div className="mb-6 rounded-sm border border-harvest/40 bg-harvest/15 px-4 py-3 text-center text-sm text-ink">
          <strong>Demo only.</strong> This is a mock login screen. No real
          accounts or authentication.
        </div>

        <div className="rounded-sm border border-stone/20 bg-paper p-8 shadow-sm">
          <div className="mb-8 flex flex-col items-center text-center">
            <span className="mb-4 flex items-center rounded-sm bg-paper px-2 py-1">
              <Image
                src="/images/logo-nav.png"
                alt={company.name}
                width={100}
                height={90}
                className="h-16 w-auto object-contain"
              />
            </span>
            <h1 className="font-serif text-2xl text-ink">Staff sign in</h1>
            <p className="mt-1 text-sm text-stone">
              {company.name} — internal access (preview)
            </p>
          </div>

          {submitted ? (
            <div className="space-y-4 text-center">
              <p className="rounded-sm border border-field/30 bg-field/5 px-4 py-4 text-sm text-field">
                Form received in demo mode.
                <br />
                <span className="text-stone">
                  No login was performed. Real authentication is planned for
                  V2.
                </span>
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setPassword("");
                }}
                className="text-sm text-clay underline underline-offset-4"
              >
                Try again
              </button>
              <div>
                <Link
                  href="/"
                  className="inline-block text-sm text-field underline underline-offset-4"
                >
                  ← Back to website
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide text-stone"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-sm border border-stone/30 bg-parchment px-3 py-2.5 text-sm text-ink outline-none focus:border-field focus:ring-1 focus:ring-field"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wide text-stone"
                >
                  Password
                </label>
                <div className="relative mt-1.5">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-sm border border-stone/30 bg-parchment px-3 py-2.5 pr-16 text-sm text-ink outline-none focus:border-field focus:ring-1 focus:ring-field"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-clay"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-sm bg-field px-6 py-3 text-sm font-medium text-paper transition hover:bg-ink"
              >
                Sign in (demo)
              </button>

              <p className="text-center text-xs text-stone">
                Any email and password will show the demo success message.
              </p>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-stone">
          <Link href="/" className="text-clay underline underline-offset-4">
            Return to public site
          </Link>
        </p>
      </div>
    </div>
  );
}
