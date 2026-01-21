---
title: "Mengatasi Printer Sharing Error 0x0000011b di Windows"
date: "2025-12-15"
description: "Panduan cepat fix error sharing printer yang sering muncul gara-gara update keamanan Windows."
tags: ["troubleshooting", "printer", "windows"]
---

## Masalah

Pas mau connect ke printer yang di-share di jaringan (via hostname atau IP), muncul error `0x0000011b`.

## Penyebab

Biasanya gara-gara update Windows Security (PrintNightmare mitigation) yang nge-block RPC over TCP.

## Solusi (Registry Fix)

> **Warning**: Hati-hati mainan Registry. Backup dulu kalo ragu.

1. Buka `regedit` (Run as Administrator) di komputer yang **nge-share** printer (Host).
2. Masuk ke path: 
   `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print`
3. Klik kanan di area kosong -> **New** -> **DWORD (32-bit) Value**.
4. Kasih nama: `RpcAuthnLevelPrivacyEnabled`.
5. Set value data jadi `0`.
6. **Restart Print Spooler** service atau restart komputer.

## Cara Restart Print Spooler (CMD)

```bash
net stop spooler
net start spooler
```

Sekarang coba connect lagi dari komputer client. Harusnya aman!
