---
title: "Migrasi Server Kantor Pusat ke AWS"
date: "2025-11-10"
description: "Proyek migrasi file server dan aplikasi internal kantor dari server fisik tua ke AWS EC2 + S3."
tags: ["aws", "migration", "server"]
---

## Ringkasan Proyek

Kantor punya server fisik Dell PowerEdge yang udah umur 7 tahun. Hardisk udah bunyi-bunyi serem. Manajemen setuju buat pindah ke Cloud biar lebih aman dan scalable.

**Peran Saya**: Lead Migration.

## Arsitektur Baru

*   **Compute**: AWS EC2 t3.medium (Ubuntu 24.04).
*   **Storage**: Amazon S3 (buat file backup & arsip) + EBS (buat OS & App Data).
*   **Security**: Security Group cuma buka port 80/443 (Web) dan 22 (SSH - Restricted IP). VPN pake OpenVPN Access Server.

## Tantangan

Bandwidth internet kantor pas upload data 5TB ke S3 itu... lama banget. Akhirnya kita pake **AWS Snowball** (bohong deng, kita upgrade internet sementara wkwk).

## Hasil

*   Uptime meningkat 99.9%.
*   Biaya maintenance hardware jadi Rp 0.
*   Tidur nyenyak tanpa takut server meledak malem-malem.
