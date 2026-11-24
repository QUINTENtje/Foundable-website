import type { Metadata } from "next";
import DienstPaginaLayout from "@/components/DienstPaginaLayout";
import { getDienst, dienstMetadata } from "@/content/diensten";

const pagina = getDienst("geo-voor-coaches-en-trainers");

export const metadata: Metadata = dienstMetadata(pagina);

export default function Page() {
  return <DienstPaginaLayout pagina={pagina} />;
}
