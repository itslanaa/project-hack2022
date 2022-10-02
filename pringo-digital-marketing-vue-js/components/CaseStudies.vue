<template>
    <div class="case-studies-section">
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="section-title primary text-center pb-100">
                        <div class="icon">
                            <img src="/images/icon/webpack.png" alt="Icon_not_found" />
                        </div>
                        <h3 class="title">Some Case Studies</h3>
                        <span class="hr-secondary"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="case-carousel" data-aos="fade-up" data-aos-delay="900">
                        <swiper :options="caseCarousel">
                            <div class="swiper-slide" v-for="(caseStudy, index) in caseStudies" :key="index">
                                <div class="case-card">
                                    <div class="thumb">
                                        <n-link to="/case-details">
                                            <img class="case-shap case-shape1" src="/images/case/shape1.png" alt="shape image" />
                                            <img class="case-shape case-shape2" src="/images/case/shape2.png" alt="shape image" />
                                            <img class="case-image" :src="caseStudy.imgSrc" :alt="caseStudy.title" />
                                        </n-link>
                                    </div>
                                    <div class="case-content">
                                        <h3 class="title">
                                            <n-link to="/case-details">{{ caseStudy.title }}</n-link>
                                        </h3>
                                        <p>{{ caseStudy.category }}</p>
                                    </div>
                                </div>
                            </div>
                        </swiper>
                        <!-- If we need navigation buttons -->
                        <div class="case-carousel-navigation">
                            <div class="case-carousel swiper-button-prev">
                                <i class="icofont-rounded-double-left"></i>
                            </div>
                            <div class="case-carousel swiper-button-next">
                                <i class="icofont-rounded-double-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                caseCarousel: {
                    loop: true,
                    speed: 800,
                    spaceBetween: 30,
                    centeredSlides: true,
                    navigation: {
                        nextEl: ".case-carousel .swiper-button-next",
                        prevEl: ".case-carousel .swiper-button-prev",
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    },
                },

                caseStudies: [
                    {
                        imgSrc: "/images/case/1.png",
                        title: "Marketing Automation",
                        category: "Marketing / Automation",
                    },
                    {
                        imgSrc: "/images/case/2.png",
                        title: "Digital Consulting",
                        category: "Digital Strategy / Consulting",
                    },
                    {
                        imgSrc: "/images/case/3.png",
                        title: "Digital Consulting",
                        category: "Digital Strategy / Consulting",
                    },
                ]
            }
        },
    };
</script>
