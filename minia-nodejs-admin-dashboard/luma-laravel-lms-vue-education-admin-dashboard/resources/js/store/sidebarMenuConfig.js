export const authRoutes = ({routes, isLoggedIn}) => {
  let authRoutes = []
  if (isLoggedIn) {
    authRoutes.push({
      label: 'Logout',
      click: (ctx, event, item) => {
        event.preventDefault()
        ctx.$root.$emit('logout')
      }
    })
  }
  else {
    authRoutes = [{
      label: 'Login',
      route: routes.login,
      active: () => route().current('login')
    }, {
      label: 'Sign Up',
      route: routes.signup,
      active: () => route().current('register')
    }, {
      label: 'Forgot Password',
      route: routes.forgotPassword,
      active: () => route().current('password.request')
    }]
  }
  return authRoutes
}

export const studentRoutes = ({routes}) => [{
  label: 'Home',
  route: routes.home,
  active: () => route().current('home'),
  icon: {
    type: 'md-icon',
    id: 'home'
  }
}, {
  label: 'Browse Courses',
  route: routes.studentCourses,
  active: () => route().current('student-courses'),
  icon: {
    type: 'md-icon',
    id: 'local_library'
  }
}, {
  label: 'Browse Paths',
  route: routes.studentPaths,
  active: () => route().current('student-paths'),
  icon: {
    type: 'md-icon',
    id: 'style'
  }
}, {
  label: 'Student Dashboard',
  route: routes.studentDashboard,
  active: () => route().current('student-dashboard'),
  icon: {
    type: 'md-icon',
    id: 'account_box'
  }
}, {
  label: 'My Courses',
  route: routes.studentMyCourses,
  active: () => route().current('student-my-courses'),
  icon: {
    type: 'md-icon',
    id: 'search'
  }
}, {
  label: 'My Paths',
  route: routes.studentMyPaths,
  active: () => route().current('student-my-paths'),
  icon: {
    type: 'md-icon',
    id: 'timeline'
  }
}, {
  label: 'Path Details',
  route: routes.studentPath,
  active: () => route().current('student-path'),
  icon: {
    type: 'md-icon',
    id: 'change_history'
  }
}, {
  label: 'View Course',
  route: routes.studentCourse,
  active: () => route().current('student-course'),
  icon: {
    type: 'md-icon',
    id: 'face'
  }
}, {
  label: 'View Lesson',
  route: routes.studentLesson,
  active: () => route().current('student-lesson'),
  icon: {
    type: 'md-icon',
    id: 'panorama_fish_eye'
  }
}, {
  label: 'Take Course',
  route: routes.studentTakeCourse,
  active: () => route().current('student-take-course'),
  icon: {
    type: 'md-icon',
    id: 'class'
  },
  badge: {
    label: 'PRO',
    variant: 'accent badge-notifications'
  }
}, {
  label: 'Take Lesson',
  route: routes.studentTakeLesson,
  active: () => route().current('student-take-lesson'),
  icon: {
    type: 'md-icon',
    id: 'import_contacts'
  }
}, {
  label: 'Take Quiz',
  route: routes.studentTakeQuiz,
  active: () => route().current('student-take-quiz'),
  icon: {
    type: 'md-icon',
    id: 'dvr'
  }
}, {
  label: 'My Quizzes',
  route: routes.studentMyQuizzes,
  active: () => route().current('student-my-quizzes'),
  icon: {
    type: 'md-icon',
    id: 'poll'
  }
}, {
  label: 'Quiz Result',
  route: routes.studentQuizResult,
  active: () => route().current('student-quiz-result'),
  icon: {
    type: 'md-icon',
    id: 'live_help'
  }
}, {
  label: 'Skill Assessment',
  route: routes.studentSkillAssessment,
  active: () => route().current('student-skill-assessment'),
  icon: {
    type: 'md-icon',
    id: 'layers'
  }
}, {
  label: 'Skill Result',
  route: routes.studentSkillResult,
  active: () => route().current('student-skill-result'),
  icon: {
    type: 'md-icon',
    id: 'assignment_turned_in'
  }
}]

export const instructorRoutes = ({routes}) => [{
  label: 'Instructor Dashboard',
  route: routes.instructorDashboard,
  active: () => route().current('instructor-dashboard'),
  icon: {
    type: 'md-icon',
    id: 'school'
  }
}, {
  label: 'Manage Courses',
  route: routes.instructorCourses,
  active: () => route().current('instructor-courses'),
  icon: {
    type: 'md-icon',
    id: 'import_contacts'
  }
}, {
  label: 'Manage Quizzes',
  route: routes.instructorQuizzes,
  active: () => route().current('instructor-quizzes'),
  icon: {
    type: 'md-icon',
    id: 'help'
  }
}, {
  label: 'Earnings',
  route: routes.instructorEarnings,
  active: () => route().current('instructor-earnings'),
  icon: {
    type: 'md-icon',
    id: 'trending_up'
  }
}, {
  label: 'Statement',
  route: routes.instructorStatement,
  active: () => route().current('instructor-statement'),
  icon: {
    type: 'md-icon',
    id: 'receipt'
  }
}, {
  label: 'Edit Course',
  route: routes.instructorEditCourse,
  active: () => route().current('instructor-edit-course'),
  icon: {
    type: 'md-icon',
    id: 'post_add'
  }
}, {
  label: 'Edit Quiz',
  route: routes.instructorEditQuiz,
  active: () => route().current('instructor-edit-quiz'),
  icon: {
    type: 'md-icon',
    id: 'format_shapes'
  }
}]

export const accountRoutes = ({routes}) => [{
  label: 'Pricing',
  route: routes.pricing,
  active: () => route().current('pricing'),
}, {
  label: 'Change Password',
  route: routes.changePassword,
  active: () => route().current('change-password'),
}, {
  label: 'Edit Account',
  route: routes.editAccount,
  active: () => route().current('edit-account'),
}, {
  label: 'Profile & Privacy',
  route: routes.editAccountProfile,
  active: () => route().current('edit-account-profile'),
}, {
  label: 'Email Notifications',
  route: routes.editAccountNotifications,
  active: () => route().current('edit-account-notifications'),
}, {
  label: 'Subscription',
  route: routes.billing,
  active: () => route().current('billing'),
}, {
  label: 'Upgrade Account',
  route: routes.billingUpgrade,
  active: () => route().current('billing-upgrade'),
}, {
  label: 'Payment Information',
  route: routes.billingPayment,
  active: () => route().current('billing-payment'),
}, {
  label: 'Payment History',
  route: routes.billingHistory,
  active: () => route().current('billing-history'),
}, {
  label: 'Invoice',
  route: routes.billingInvoice,
  active: () => route().current('billing-invoice'),
}]

export const communityRoutes = ({routes}) => [{
  label: 'Browse Teachers',
  route: routes.teachers,
  active: () => route().current('teachers'),
}, {
  label: 'Student Profile',
  route: routes.studentProfile,
  active: () => route().current('student-profile'),
}, {
  label: 'Instructor Profile',
  route: routes.instructorProfile,
  active: () => route().current('instructor-profile'),
}, {
  label: 'Blog',
  route: routes.blog,
  active: () => route().current('blog'),
}, {
  label: 'Blog Post',
  route: routes.blogPost,
  active: () => route().current('blog-post'),
}, {
  label: 'FAQ',
  route: routes.faq,
  active: () => route().current('faq'),
}, {
  label: 'Help Center',
  route: routes.helpCenter,
  active: () => route().current('help-center'),
}, {
  label: 'Discussions',
  route: routes.discussions,
  active: () => route().current('discussions'),
}, {
  label: 'Discussion Details',
  route: routes.discussion,
  active: () => route().current('discussion'),
}, {
  label: 'Ask Question',
  route: routes.askQuestion,
  active: () => route().current('discussions-ask'),
}]

export const studentMenu = (...args) => {
  return {
    id: 'studentMenu',
    label: 'Student',
    icon: {
      type: 'md-icon',
      id: 'account_box'
    },
    children: studentRoutes(...args)
  }
}

export const instructorMenu = (...args) => {
  return {
    id: 'instructorMenu',
    label: 'Instructor',
    icon: {
      type: 'md-icon',
      id: 'school'
    },
    children: instructorRoutes(...args)
  }
}

export const communityMenu = (...args) => {
  return {
    id: 'communityMenu',
    label: 'Community',
    icon: {
      type: 'md-icon',
      id: 'people_outline'
    },
    children: communityRoutes(...args)
  }
}

export const authMenu = (...args) => {
  return {
    id: 'auth',
    label: 'Auth',
    icon: {
      type: 'md-icon',
      id: 'lock_open'
    },
    children: authRoutes(...args)
  }
}

export const accountMenu = (...args) => {
  return {
    id: 'account',
    label: 'Account',
    icon: {
      type: 'md-icon',
      id: 'person_outline'
    },
    children: accountRoutes(...args)
  }
}

export const messagingMenu = ({routes}) => {
  return {
    label: 'Messages',
    route: routes.messages,
    active: () => route().current('messages'),
    icon: {
      type: 'md-icon',
      id: 'comment'
    },
    badge: {
      label: '3',
      variant: 'accent badge-notifications'
    }
  }
}

export const layoutMenu = (state, getters, rootState, rootGetters) => {
  const layout = rootState.settings.state.layout.layout
  const routes = rootGetters['settings/routes']
  const isLoggedIn = !!rootState.auth.user

  return {

    // auth: authRoutes({routes, isLoggedIn}),
    student: studentRoutes({routes}),
    instructor: instructorRoutes({routes}),

    apps: [
      // studentMenu({routes}),
      // instructorMenu({routes}),
      messagingMenu({routes}),
      authMenu({routes, isLoggedIn}),
      accountMenu({routes}),
      communityMenu({routes})
    ],

    components: [
      {
        id: 'appComponents',
        label: 'Application',
        icon: {
          type: 'md-icon',
          id: 'tune'
        },
        children: [
          {
            label: 'App Layout',
            route: routes.uiAppLayout,
            active: () => route().current('ui-app-layout')
          },
          {
            label: 'Fixed Layout',
            route: routes.uiFixedLayout,
            active: () => route().current('ui-fixed-layout')
          }
        ]
      },
      {
        id: 'uiComponents',
        label: 'User Interface',
        icon: {
          type: 'md-icon',
          id: 'tune'
        },
        children: [
          {
            label: 'Avatar',
            route: routes.uiAvatar,
            active: () => route().current('ui-avatar')
          },
          {
            label: 'Forms',
            route: routes.uiForms,
            active: () => route().current('ui-forms')
          },
          {
            label: 'Form Image Group',
            route: routes.uiFormImageGroup,
            active: () => route().current('ui-form-image-group')
          },
          {
            label: 'Input Group Merge',
            route: routes.uiInputGroupMerge,
            active: () => route().current('ui-input-group-merge')
          },
          {
            label: 'Cards',
            route: routes.uiCards,
            active: () => route().current('ui-cards')
          },
          {
            label: 'Tabs',
            route: routes.uiTabs,
            active: () => route().current('ui-tabs')
          },
          {
            label: 'Icons',
            route: routes.uiIcons,
            active: () => route().current('ui-icons')
          },
          {
            label: 'Alerts',
            route: routes.uiAlerts,
            active: () => route().current('ui-alerts'),
          }
        ]
      },
      {
        id: 'layoutComponents',
        label: 'Layout',
        icon: {
          type: 'md-icon',
          id: 'tune'
        },
        children: [
          {
            label: 'Drawer',
            route: routes.uiDrawer,
            active: () => route().current('ui-drawer')
          },
          {
            label: 'Sidebar',
            route: routes.uiSidebar,
            active: () => route().current('ui-sidebar')
          },
          {
            label: 'Sidebar Menu',
            route: routes.uiSidebarMenu,
            active: () => route().current('ui-sidebar-menu')
          },
          {
            label: 'Drawer Layout',
            route: routes.uiDrawerLayout,
            active: () => route().current('ui-drawer-layout')
          },
          {
            label: 'Header',
            route: routes.uiHeader,
            active: () => route().current('ui-header')
          },
          {
            label: 'Header Layout',
            route: routes.uiHeaderLayout,
            active: () => route().current('ui-header-layout')
          },
          {
            label: 'Perfect Scrollbar',
            route: routes.uiPerfectScrollbar,
            active: () => route().current('ui-perfect-scrollbar'),
          }
        ]
      },
      {
        id: 'pluginComponents',
        label: 'Plugins',
        icon: {
          type: 'md-icon',
          id: 'folder'
        },
        children: [
          {
            label: 'Syntax Highlight',
            route: routes.uiSyntaxHighlight,
            active: () => route().current('ui-syntax-highlight')
          },
          {
            label: 'Line Chart',
            route: routes.uiChartLine,
            active: () => route().current('ui-chart-line')
          },
          {
            label: 'Area Chart',
            route: routes.uiChartArea,
            active: () => route().current('ui-chart-area')
          },
          {
            label: 'Bar Chart',
            route: routes.uiChartBar,
            active: () => route().current('ui-chart-bar')
          },
          {
            label: 'Doughnut Chart',
            route: routes.uiChartDoughnut,
            active: () => route().current('ui-chart-doughnut')
          },
          {
            label: 'Radar Chart',
            route: routes.uiChartRadar,
            active: () => route().current('ui-chart-radar'),
          }
        ]
      }
    ]
  }  
}

export const getters = {
  layoutMenu
}

export const state = () => ({})

export default {
  namespaced: true,
  state,
  getters,
}
