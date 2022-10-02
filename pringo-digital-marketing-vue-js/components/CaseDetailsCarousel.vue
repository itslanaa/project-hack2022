<template>
    <section class="case-details-section section-pt-150">
        <div class="container">
            <div class="case-details-carousel position-relative">
                <swiper :options="caseCarousel">
                    <div class="swiper-slide">
                        <div class="row mtn-35">
                            <div class="col-12 col-sm-4 mt-35">
                                <div class="case-details-card">
                                    <img src="/images/case-details/4.png" alt="images-not_found" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-8 mt-35">
                                <div class="case-details-carousel-content">
                                    <img src="/images/case-details/5.png" alt="images-not_found" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="row mtn-35">
                            <div class="col-12 col-sm-4 mt-35">
                                <div class="case-details-card">
                                    <img src="/images/case-details/4.png" alt="images-not_found" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-8 mt-35">
                                <div class="case-details-carousel-content">
                                    <img src="/images/case-details/5.png" alt="images-not_found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>
                <!-- If we need navigation buttons -->
                <div class="d-none d-md-block">
                    <div class="case-details-carousel swiper-button-prev">
                        <i class="icofont-double-left"></i>
                    </div>
                    <div class="case-details-carousel swiper-button-next">
                        <i class="icofont-double-right"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="case-clients-card">
                        <div class="case-clients-card-inner">
                            <div class="case-details-row">
                                <div class="case-details-col">
                                    <h3 class="title">Category:</h3>
                                    <span class="clients-hr"></span>
                                    <p>Digital Marketing</p>
                                </div>
                                <div class="case-details-col">
                                    <h3 class="title">Clients:</h3>
                                    <span class="clients-hr"></span>
                                    <p>Margaret Porter</p>
                                </div>
                                <div class="case-details-col">
                                    <h3 class="title">Date:</h3>
                                    <span class="clients-hr"></span>
                                    <p>18 January, 2021</p>
                                </div>
                                <div class="case-details-col">
                                    <h3 class="title">Budget:</h3>
                                    <span class="clients-hr"></span>
                                    <p>$5,894.00</p>
                                </div>
                                <div class="case-details-col">
                                    <h3 class="title">Location:</h3>
                                    <span class="clients-hr"></span>
                                    <p>1032 Macdonald Rd.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                caseCarousel: {
                    loop: true,
                    speed: 1000,
                    autoplay: true,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: ".case-details-carousel .swiper-button-next",
                        prevEl: ".case-details-carousel .swiper-button-prev",
                    },
                }
            }
        },
    };
</script>