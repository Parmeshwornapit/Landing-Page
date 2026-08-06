import Image from "next/image";

export default function Header() {
  return <header className="relative z-10 border-b border-blue-500/20 bg-ink px-5 py-5"><div className="mx-auto flex max-w-6xl justify-center"><Image src="/parmeshwar-napit-ai-marketing-transparent.png" alt="Parmeshwar Napit AI Marketing" width={300} height={120} priority className="h-14 w-auto object-contain" /></div></header>;
}
