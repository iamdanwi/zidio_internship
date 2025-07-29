import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 space-y-5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your
              <span className="text-primary"> Excel Data</span> into
              <span className="text-primary"> Stunning Insights</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              A powerful platform for uploading Excel files, analyzing data, and
              generating interactive 2D and 3D charts. Get AI-powered insights
              and keep track of all your analysis history in one place.
            </p>

            <Link href="/admin-auth/register">
              <Button className="cursor-pointer py-5 px-8">Get Started</Button>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/hero.svg"
              height={600}
              width={700}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
