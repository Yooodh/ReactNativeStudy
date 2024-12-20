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

const saveUserCouseEnrollment = async (slug, email) => {
  const query =
    gql`
    mutation MyMutation {
      createUserEnrollCourse(
        data: {
          courseId: "` +
    slug +
    `"
          courseList: { connect: { slug: "` +
    slug +
    `" } }
          userEmail: "` +
    email +
    `"
        }
      ) {
        id
      }
      publishManyUserEnrollCourses {
          count
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

// Check Membership
const checkUserMembership = async () => {
  const query =
    gql`
    query myQuery {
    memberships(where: {email: "` +
    email +
    `",active: true}) {
      id
      createdAt
      email
      }
    }
    `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewMembership = async (email) => {
  const query =
    gql`
  mutation MyMutation {
  createMembership(data: {active: true, email:"` +
    email +
    `",paymentId:"12345"}){
      id
    }
    publishManyMemberships {
      count
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const markChapterCompleted = async (recordId, chapterId) => {
  const query =
    gql`
  mutation MyMutation {
  updateUserEnrollCourse(
  data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "` +
    chapterId +
    `"}}}}}
    where: {id: "` +
    recordId +
    `"}
    )
    {
      id
    }
    publishManyUserEnrollCourses {
      count
    }
  }
    
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getAllUserEnrollCourses = async (email) => {
  const query =
    gql`
      query MyQuery {
      userEnrollCourses(where: {userEmail:"` +
    email +
    `"}){
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      courseList {
      author
      banner {
        url
      }
      chapter (first: 50) {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      totalChapters
      tag
      }
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
  saveUserCouseEnrollment,
  checkUserMembership,
  createNewMembership,
  markChapterCompleted,
  getAllUserEnrollCourses,
};
