const _ = require('lodash')

export const state = () => ({
  ui: true,
  state: {
    layout: {
      layout: 'app',
      rtl: false
    },
    'app::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'fixed::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'sticky::mainDrawer': {
      align: 'start',
      sidebar: 'dark'
    },
    'boxed::mainDrawer': {
      align: 'start',
      sidebar: 'light'
    },
    'app::mainNavbar': {
      navbar: 'light'
    },
    'fixed::mainNavbar': {
      navbar: 'dark'
    },
    'sticky::mainNavbar': {
      navbar: 'light'
    },
    'boxed::mainNavbar': {
      navbar: 'dark'
    }
  }
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    if (settings) {
      state.state = _.merge({}, state.state, settings)
    }
  }
}

export const actions = {
  setSettings({ commit }, settings) {
    commit('SET_SETTINGS', settings)
  }
}

export const getters = {
  layout: state => state.state.layout.layout,
  routes: (state, getters, rootState) => {
    const layout = getters.layout
    return {
      billingHistory: route('billing-history', {layout}).url(),
      billingInvoice: route('billing-invoice', {layout}).url(),
      billingPayment: route('billing-payment', {layout}).url(),
      billingUpgrade: route('billing-upgrade', {layout}).url(),
      billing: route('billing', {layout}).url(),
      blogPost: route('blog-post', {layout}).url(),
      blog: route('blog', {layout}).url(),
      changePassword: route('change-password', {layout}).url(),
      discussion: route('discussion', {layout}).url(),
      askQuestion: route('discussions-ask', {layout}).url(),
      discussions: route('discussions', {layout}).url(),
      editAccountNotifications: route('edit-account-notifications', {layout}).url(),
      editAccountProfile: route('edit-account-profile', {layout}).url(),
      editAccount: route('edit-account', {layout}).url(),
      faq: route('faq', {layout}).url(),
      forgotPassword: route('password.request').url(),
      helpCenter: route('help-center', {layout}).url(),
      home: route('home', {layout}).url(),
      instructorCourses: route('instructor-courses', {layout}).url(),
      instructorDashboard: route('instructor-dashboard', {layout}).url(),
      instructorEarnings: route('instructor-earnings', {layout}).url(),
      instructorEditCourse: route('instructor-edit-course', {layout}).url(),
      instructorEditQuiz: route('instructor-edit-quiz', {layout}).url(),
      instructorProfile: route('instructor-profile', {layout}).url(),
      instructorQuizzes: route('instructor-quizzes', {layout}).url(),
      instructorStatement: route('instructor-statement', {layout}).url(),
      login: route('login').url(),
      logout: route('inertia.logout', {layout}).url(),
      messages: route('messages', {layout}).url(),
      pricing: route('pricing', {layout}).url(),
      signup: route('register').url(),
      studentCourse: route('student-course', {layout}).url(),
      studentCourses: route('student-courses', {layout}).url(),
      studentDashboard: route('student-dashboard', {layout}).url(),
      studentLesson: route('student-lesson', {layout}).url(),
      studentMyCourses: route('student-my-courses', {layout}).url(),
      studentMyPaths: route('student-my-paths', {layout}).url(),
      studentMyQuizzes: route('student-my-quizzes', {layout}).url(),
      studentPath: route('student-path', {layout}).url(),
      studentPaths: route('student-paths', {layout}).url(),
      studentProfile: route('student-profile', {layout}).url(),
      studentQuizResult: route('student-quiz-result', {layout}).url(),
      studentSkillAssessment: route('student-skill-assessment', {layout}).url(),
      studentSkillResult: route('student-skill-result', {layout}).url(),
      studentTakeCourse: route('student-take-course', {layout}).url(),
      studentTakeLesson: route('student-take-lesson', {layout}).url(),
      studentTakeQuiz: route('student-take-quiz', {layout}).url(),
      teachers: route('teachers', {layout}).url(),
      uiAlerts: route('ui-alerts', {layout}).url(),
      uiAvatar: route('ui-avatar', {layout}).url(),
      uiCards: route('ui-cards', {layout}).url(),
      uiChartArea: route('ui-chart-area', {layout}).url(),
      uiChartBar: route('ui-chart-bar', {layout}).url(),
      uiChartDoughnut: route('ui-chart-doughnut', {layout}).url(),
      uiChartLine: route('ui-chart-line', {layout}).url(),
      uiChartRadar: route('ui-chart-radar', {layout}).url(),
      uiDrawerLayout: route('ui-drawer-layout', {layout}).url(),
      uiDrawer: route('ui-drawer', {layout}).url(),
      uiFixedLayout: route('ui-fixed-layout', {layout}).url(),
      uiFormImageGroup: route('ui-form-image-group', {layout}).url(),
      uiForms: route('ui-forms', {layout}).url(),
      uiHeaderLayout: route('ui-header-layout', {layout}).url(),
      uiHeader: route('ui-header', {layout}).url(),
      uiIcons: route('ui-icons', {layout}).url(),
      uiInputGroupMerge: route('ui-input-group-merge', {layout}).url(),
      uiPerfectScrollbar: route('ui-perfect-scrollbar', {layout}).url(),
      uiSidebarMenu: route('ui-sidebar-menu', {layout}).url(),
      uiSidebar: route('ui-sidebar', {layout}).url(),
      uiSyntaxHighlight: route('ui-syntax-highlight', {layout}).url(),
      uiTabs: route('ui-tabs', {layout}).url(),
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
