export const state = () => ({
  app: {
    containerClass: 'container page__container',
    navbarContainerClass: 'd-flex w-100 align-items-center'
  },
  fixed: {
    containerClass: 'container page__container',
    navbarContainerClass: 'container-fluid'
  },
  sticky: {
    containerClass: 'container-fluid page__container',
    navbarContainerClass: 'd-flex w-100 align-items-center'
  },
  boxed: {
    containerClass: 'container-fluid page__container',
    navbarContainerClass: 'd-flex w-100 align-items-center'
  },
  blank: {
    containerClass: 'container page__container',
    navbarContainerClass: 'container-fluid'
  }
})

export default {
  namespaced: true,
  state
}