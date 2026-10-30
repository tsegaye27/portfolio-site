"use client";

import { useState, type FormEvent } from "react";

import { chips, greeting, MAX_LEN, reply, type Msg } from "@/lib/chatty";

const X = (
  <path d="M6 6l12 12M18 6L6 18" />
);

export function Chatty() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([greeting]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);

  async function ask(q: string) {
    const text = q.trim().slice(0, MAX_LEN);
    if (!text || typing) return;
    const next: Msg[] = [...msgs, { from: "me", text }];
    setMsgs(next);
    setDraft("");
    setTyping(true);
    let answer: string;
    try {
      const res = await fetch("/api/chatty", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      answer = (await res.json()).text || reply(text);
    } catch {
      answer = reply(text);
    }
    setMsgs((m) => [...m, { from: "bot", text: answer }]);
    setTyping(false);
  }

  function send(e: FormEvent) {
    e.preventDefault();
    ask(draft);
  }

  const label = open ? "Close Chatty" : "Ask Chatty";

  return (
    <>
      {open && (
        <section
          aria-label="Chat with Chatty"
          className="fixed right-6 bottom-24 z-50 flex h-[540px] max-h-[calc(100vh-130px)] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border-[1.5px] border-ink bg-card shadow-[0_24px_48px_-24px_rgba(26,26,23,0.45)] max-[480px]:right-4"
        >
          <header className="flex items-center gap-3 border-b-[1.5px] border-ink bg-folder py-3.5 pr-3.5 pl-[18px]">
            <span
              aria-hidden="true"
              className="flex size-[38px] items-center justify-center rounded-full bg-ink text-xl font-extrabold text-paper"
            >
              C
            </span>
            <div className="flex grow flex-col">
              <span className="text-[22px] leading-[1.1] font-bold">Chatty</span>
              <span className="font-mono text-[11px] text-muted-ink">Answers questions about Tsegaye&apos;s work</span>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="flex size-11 items-center justify-center rounded-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {X}
              </svg>
            </button>
          </header>

          {/* column-reverse keeps the newest message pinned to the bottom. */}
          <div aria-live="polite" className="flex min-h-0 grow flex-col-reverse gap-2.5 overflow-y-auto p-4">
            {typing && (
              <div className="self-start rounded-[4px_14px_14px_14px] border border-ink bg-paper px-3.5 py-2.5 font-mono text-xs text-muted-ink">
                Chatty is typing…
              </div>
            )}
            {[...msgs].reverse().map((m, i) =>
              m.from === "me" ? (
                <div
                  key={msgs.length - i}
                  className="max-w-[82%] self-end rounded-[14px_4px_14px_14px] bg-ink px-3.5 py-2.5 text-[17px] leading-[1.4] whitespace-pre-wrap text-paper"
                >
                  {m.text}
                </div>
              ) : (
                <div
                  key={msgs.length - i}
                  className="max-w-[86%] self-start rounded-[4px_14px_14px_14px] border border-ink bg-paper px-3.5 py-2.5 text-[17px] leading-[1.4] whitespace-pre-wrap"
                >
                  {m.text}
                </div>
              ),
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 pb-2.5 [scrollbar-width:none]">
            {chips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => ask(c)}
                disabled={typing}
                className="min-h-9 shrink-0 rounded-full border border-ink px-3 font-mono text-xs whitespace-nowrap disabled:opacity-50"
              >
                {c}
              </button>
            ))}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t-[1.5px] border-ink p-3">
            <label htmlFor="chatty-input" className="sr-only">
              Ask Chatty a question
            </label>
            <input
              id="chatty-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={MAX_LEN}
              placeholder="Ask about services, stack, availability…"
              autoComplete="off"
              autoFocus
              className="min-h-11 min-w-0 grow rounded-full border border-ink bg-white px-3.5 text-[17px]"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={typing}
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper disabled:opacity-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={label}
        title={label}
        className="fixed right-6 bottom-6 z-50 flex size-[60px] items-center justify-center rounded-full border-[1.5px] border-ink bg-ink text-paper shadow-[0_12px_24px_-12px_rgba(26,26,23,0.5)] max-[480px]:right-4"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {X}
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 5h16v11H9l-5 4z" />
            <path d="M8 10h8M8 13h5" />
          </svg>
        )}
      </button>
    </>
  );
}
