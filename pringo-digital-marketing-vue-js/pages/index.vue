<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Hero />

        <BrandLogoCarousel />

        <ServiceOne />

        <WorkingProcess />

        <AboutOne />

        <CaseStudies />

        <TeamSection />

        <FaqSection />

        <TestimonialOne />

        <BlogOne />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Hero: () => import('@/components/Hero'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            ServiceOne: () => import('@/components/ServiceOne'),
            WorkingProcess: () => import('@/components/WorkingProcess'),
            AboutOne: () => import('@/components/AboutOne'),
            CaseStudies: () => import('@/components/CaseStudies'),
            TeamSection: () => import('@/components/TeamSection'),
            FaqSection: () => import('@/components/FaqSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BlogOne: () => import('@/components/BlogOne'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Home'
            }
        },
    };
</script>


