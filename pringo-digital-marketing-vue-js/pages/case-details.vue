<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Digital Marketing" active-title="Case Details" />

        <CaseDetailsCarousel />

        <CaseDetailsContent />

        <CaseDetailsNavigation />

        <CommentFormWrapper />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            CaseDetailsCarousel: () => import('@/components/CaseDetailsCarousel'),
            CaseDetailsContent: () => import('@/components/CaseDetailsContent'),
            CaseDetailsNavigation: () => import('@/components/CaseDetailsNavigation'),
            CommentFormWrapper: () => import('@/components/CommentFormWrapper'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Case Details'
            }
        },
    };
</script>


