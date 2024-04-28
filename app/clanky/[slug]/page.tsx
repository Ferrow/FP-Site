import { getAllArticles, getArticle } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
}

interface AssetUrls {
  [key: string]: string;
}

export default async function KnowledgeArticlePage({ params }: any) {
  const article = await getArticle(params.slug);
  const content = article.details?.links.assets.block[0].url;
  console.log(content);

  if (!article) {
    notFound();
  }

  const addEmptyLines = (content: any) => {
    const modifiedContent: any = [];
    content.forEach((node: any, index: number) => {
      modifiedContent.push(node);
      if (index < content.length - 1) {
        modifiedContent.push(<br key={`br-${index}`} />);
      }
    });
    return modifiedContent;
  };
  const assetUrls = article.details.links.assets.block.reduce(
    (acc: AssetUrls, asset: Asset) => {
      acc[asset.sys.id] = asset.url;
      return acc;
    },
    {}
  );

  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-10">
        <div className="space-y-12 px-4 md:px-6 max-w-[900px] mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {article.title}
            </h1>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              {article.summary}
            </p>
          </div>
          <div className="space-y-8 lg:space-y-10">
            <Image
              alt="Article Image"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              height="365"
              src={article.articleImage.url}
              width="650"
            />
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <div className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  {addEmptyLines(
                    documentToReactComponents(article.details.json, {
                      renderNode: {
                        "heading-2": (node, children) => (
                          <h3 className="text-3xl font-bold">{children}</h3>
                        ),
                        "heading-3": (node, children) => (
                          <h3 className="text-2xl font-bold">{children}</h3>
                        ),
                        "embedded-asset-block": (node) => {
                          // Assuming the node contains an asset ID that can be used to look up the URL
                          const assetId = node.data.target.sys.id;
                          const imageUrl = assetUrls[assetId];
                          return (
                            <>
                              <Image
                                alt="Article Image"
                                className="w-full overflow-hidden rounded-xl object-cover"
                                height="365"
                                src={imageUrl}
                                width="650"
                              />
                            </>
                          );
                        },
                      },
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
