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

const getCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 50, orderBy: createdAt_DESC) {
        author
        description
        semoUrl
        free
        id
        name
        slug
        sourceCode
        tag
        youtubeUrl
        banner {
          url
        }
        chapter(first: 50) {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserCourseEnrollment = async (slug, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(
        where: {
          courseId: "` +
    slug +
    `"
          userEmail: "` +
    email +
    `"
        }
      ) {
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseId
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getCategory,
  getCourseList,
  checkUserCourseEnrollment,
};
