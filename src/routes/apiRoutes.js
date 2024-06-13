export const API_ROUTES = {
  // Auth
  FORGOT_PASSWORD: '/auth/forgotPassword',
  LOGIN: '/auth/login',
  REGISTER_OTP_VERIFY: '/auth/verify/otp',
  RESET_PASSWORD: '/auth/resetPassword',
  REGISTER: '/auth/signup',
  RESEND_OTP: '/auth/resend/otp',

  // Content
  PREFERENCES: '/user-preferences',
  TOPICS: (paperId) => `/topics/${paperId}`,

  // Quiz
  SUBMIT_QUESTION: (quizId) => `/quiz/submit-question/${quizId}`,
  FINISH_QUIZ: (quizId) => `/quiz/finishQuiz/${quizId}`,
  REPORT_QUESTION: '/reported-questions/reported-questions',
  GET_QUESTION: (quizId) => `/quiz/get-quiz/${quizId}`,
  CREATE_QUIZ: '/quiz/create-quiz',

  // Dashboard
  QUALIFICATIONS: '/qualifications',
  SUBJECTS: '/subject',
  BOARDS: '/boards',
  CREATE_PREFERENCES: '/user-preferences/create',
};
