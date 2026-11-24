import type { Metadata } from "next";
import DienstPaginaLayout from "@/components/DienstPaginaLayout";
import { getDienst, dienstMetadata } from "@/content/diensten";

const pagina = getDienst("geo-bureau-amsterdam");

export const metadata: Metadata = dienstMetadata(pagina);

export default function Page() {
  return <DienstPaginaLayout pagina={pagina} />;
}
