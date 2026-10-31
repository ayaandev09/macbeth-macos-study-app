"use client";

import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { X, Smartphone, Copy, Check, ExternalLink } from "lucide-react";

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  networkUrl?: string;
}

export function QrCodeModal({
  isOpen,
  onClose,
  networkUrl = "http://192.168.178.83:3086",
}: QrCodeModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(networkUrl, {
        width: 260,
        margin: 1.5,
        color: {
          dark: "#05070f",
          light: "#f8fafc",
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error(err));
    }
  }, [isOpen, networkUrl]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(networkUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="liquid-glass-bento rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 p-2 rounded-xl liquid-glass-pill text-slate-300 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 block">
              Direct Phone Access
            </span>
            <h3 className="text-base font-bold text-white">
              Open on your iPhone 16e
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
          Connect your iPhone to the same Wi-Fi network, then scan with your
          Camera app or visit the link below in Safari:
        </p>

        {/* QR Code Canvas Frame */}
        <div className="p-3 bg-white rounded-2xl flex items-center justify-center shadow-inner mx-auto mb-4 w-[210px] h-[210px]">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="Scan to open on iPhone"
              className="w-full h-full rounded-xl"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 font-mono">
              Generating QR...
            </div>
          )}
        </div>

        {/* Copyable Link Pill */}
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-950/70 border border-white/10 mb-3">
          <span className="font-mono text-xs text-amber-300 truncate select-all px-1">
            {networkUrl}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg liquid-glass-pill text-slate-300 hover:text-white shrink-0 cursor-pointer flex items-center gap-1 text-[11px]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <a
            href={networkUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-200 transition-colors"
          >
            <span>Open in new tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
