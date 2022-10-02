<template>
    <div class="service-carousel-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="service-carousel position-relative">
                        <swiper :options="serviceCarousel">
                            <div class="swiper-slide">
                                <div class="service-carousel-content">
                                    <img class="service-img" src="/images/service/1.jpg" alt="images-not_found" />
                                </div>
                            </div>
                        </swiper>
                        <!-- If we need navigation buttons -->
                        <div class="d-none d-md-block">
                            <div class="service-carousel swiper-button-prev">
                                <i class="icofont-double-left"></i>
                            </div>
                            <div class="service-carousel swiper-button-next">
                                <i class="icofont-double-right"></i>
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
                serviceCarousel: {
                    loop: true,
                    speed: 800,
                    autoplay: true,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: ".service-carousel .swiper-button-next",
                        prevEl: ".service-carousel .swiper-button-prev",
                    },
                }
            }
        },
    };
</script>