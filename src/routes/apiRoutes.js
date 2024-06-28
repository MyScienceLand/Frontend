export const API_ROUTES = {
  // Auth
  FORGOT_PASSWORD: '/auth/forgotPassword',
  LOGIN: '/auth/login',
  REGISTER_OTP_VERIFY: '/auth/verify/otp',
  RESET_PASSWORD: '/auth/resetPassword',
  REGISTER: '/auth/signup',
  RESEND_OTP: '/auth/resend/otp',
  VERIFY_FORGET_OTP: '/auth/verifyForgetPassword/otp',

  // Content
  PREFERENCES: '/user-preferences',
  TOPICS: (paperId) => `/topics/${paperId}`,

  // Quiz
  SUBMIT_QUESTION: (quizId) => `/quiz/submit-question/${quizId}`,
  FINISH_QUIZ: (quizId) => `/quiz/finishQuiz/${quizId}`,
  REPORT_QUESTION: '/reported-questions/reported-questions',
  GET_QUESTION: (quizId) => `/quiz/get-quiz/${quizId}`,
  CREATE_QUIZ: '/quiz/create-quiz',
  CREATE_PRELIMINARY_QUIZ: '/quiz/create-primilary-quiz',
  QUIZ_SUMMARY: (quizId) => `/user-quiz/quiz-summary/${quizId}`,

  // Dashboard
  QUALIFICATIONS: '/qualifications',
  SUBJECTS: '/subject',
  BOARDS: '/boards',
  TOPICS_FIND_BY_SUBJECT_ID: (subjectId) =>
    `/topics/find-by-subject-id/${subjectId}`,
  CREATE_PREFERENCES: '/user-preferences/create',
  CONTINUE_STUDY: '/user-dashboard/continue-study',
  COMPLETED_QUIZ: '/user-dashboard/completed-quiz-count/',
  CONTINUE_QUIZ: '/quiz/countinue/quiz',
  PROGRESS: '/user-dashboard/progress',
  SPENT_TIME_GRAPH: '/user-dashboard/learning-spent-time-graph',
  SUBJECTS_GRAPH: '/user-dashboard/subjects-graph',
  FEEDBACK: '/user-dashboard/feedback',

  // Users
  USER: '/user',
  ALL_STUDENTS: '/user/all-students',
  ALL_TEACHERS: '/user/all-teachers',
  EXCLUDED_STUDENTS: '/user/all-students-excluded-class',

  // Management
  CREATE_CLASS: '/management/create-class',
  CREATE_TEACHER: '/management/create-teacher',
  CREATE_STUDENT: '/management/create-student',
  ALL_CLASSES: '/management/classes',

  // DASHBOARD
  YEAR_ONE_GRAPH: '/management/managementDashboard-year1',
  YEAR_TWO_GRAPH: '/management/managementDashboard-year2',
  YEAR_TEN_GRAPH: '/management/managementDashboard-year10',
  YEAR_ELEVEN_GRAPH: '/management/managementDashboard-year11',

  // CLASSES
  CLASS_PERCENTAGE_AND_REVIEW: (id) => `/management/classPercentage/${id}`,
  STUDENT_PERCENTAGE_AND_SCORE: (id) => `/management/studentPercentage/${id}`,

  ASSIGN_CLASS_TO_STUDENTS: '/management/create-multipleStudent',

  DELETE_STUDENT: '/management/delete-student',
};
