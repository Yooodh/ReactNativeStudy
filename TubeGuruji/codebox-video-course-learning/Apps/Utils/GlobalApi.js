import { request, gql } from 'graphql-request';

const MASTER_URL =
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clr70cdhd000008l7ge9bg613/master';

const getCategory = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategory,
};
