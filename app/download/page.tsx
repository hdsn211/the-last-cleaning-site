
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Play in Browser",
  description:
    "Play THE LAST CLEANING directly in your browser. No Windows download required.",
};

export default function DownloadPage() {
  redirect("/play");
}
