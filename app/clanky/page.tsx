import { getAllArticles, getAllArticlesTwo } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";

export default async function ClankyPage() {
  const articles = await getAllArticles();
  const articles_two = await getAllArticlesTwo();

  return (
    <div className="space-y-12 flex flex-col py-24 items-center container">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl border-b-2 border-b-slate-600 pb-6">
        Články
      </h1>
      <div className="grid grid-rows-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles &&
          articles.map((article: any) => (
            <article
              key={article.sys.id}
              className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                alt="placeholder"
                className="aspect-[4/3] object-cover w-full"
                height="263"
                src={article.articleImage.url}
                width="350"
              />
              <div className="flex-1 p-6">
                <Link href={`/clanky/${article.slug}`}>
                  <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                    {article.title}
                  </h3>
                </Link>
                <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                  {article.categoryName}
                </div>
                <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                  {article.summary}
                </p>
                {/* <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
                  Written by: {article.authorName}
                </p> */}
                <div className="flex justify-end">
                  <Link
                    className="inline-flex h-10 items-center justify-center text-sm font-medium"
                    href={`/clanky/${article.slug}`}
                  >
                    Čítaj Viac →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        {articles_two &&
          articles_two.map((article: any) => (
            <article
              key={article.sys.id}
              className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                alt="placeholder"
                className="aspect-[4/3] object-cover w-full"
                height="263"
                src={article.articleImage.url}
                width="350"
              />
              <div className="flex-1 p-6">
                <Link href={`/clanky/${article.slug}`}>
                  <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                    {article.title}
                  </h3>
                </Link>
                <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                  {article.categoryName}
                </div>
                <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">
                  {article.summary}
                </p>
                {/* <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
                  Written by: {article.authorName}
                </p> */}
                <div className="flex justify-end">
                  <Link
                    className="inline-flex h-10 items-center justify-center text-sm font-medium"
                    href={`/clanky/${article.slug}`}
                  >
                    Čítaj Viac →
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
