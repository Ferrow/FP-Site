const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  summary
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  articleImage {
    url
  }
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse: any) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items;
}

export async function getArticlesForHomepage(
  // For this demo set the default limit to always return 3 articles.
  limit = 6,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
}

export async function getAllArticles(limit = 9, skip = 0, isDraftMode = false) {
  try {
    const articles = await fetchGraphQL(
      `query {
              knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, skip: ${skip}, preview: ${
        isDraftMode ? "true" : "false"
      }) {
              items {
                  ${ARTICLE_GRAPHQL_FIELDS}
              }
          }
          }`,
      isDraftMode
    );
    return extractArticleEntries(articles);
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    throw new Error("Failed to fetch articles");
  }
}

export async function getAllArticlesTwo(
  limit = 9,
  skip = 9,
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
         knowledgeArticleCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, skip: ${skip}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
           items {
             ${ARTICLE_GRAPHQL_FIELDS}
           }
         }
       }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
}

export async function getArticle(slug: string, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
}
