<template>
    <section class="testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="section-title primary text-center pb-100">
                        <div class="icon">
                            <img src="/images/icon/testimonial.png" alt="Icon_not_found" />
                        </div>
                        <h3 class="title">From Happy Customer</h3>
                        <span class="hr-secondary"></span>
                    </div>
                </div>
            </div>
            <div class="row position-relative">
                <div class="clients">
                    <img src="/images/testimonial/2.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/3.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/4.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/5.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/6.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/7.png" alt="images-not_found" class="client" />
                </div>
                <div class="col-12 mx-auto">
                    <div class="testimonial-content position-relative">
                        <img class="shape" src="/images/testimonial/shape.png" alt="images-not_found" />
                        <div class="testimonial-carousel">
                            <swiper :options="testimonialCarousel">
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-1.png" alt="images-not_found" />
                                        <span class="quote">“</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Georgia Jones</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-2.png" alt="images-not_found" />
                                        <span class="quote">“</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Kenneth M. Aguiar</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-3.png" alt="images-not_found" />
                                        <span class="quote">“</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Wendy W Jones</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-4.png" alt="images-not_found" />
                                        <span class="quote">“</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Barbara K. Griffin</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-5.png" alt="images-not_found" />
                                        <span class="quote">“</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Judith M. Burnett</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-6.png" alt="images-not_found" />
                                        <span class="quote">“</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Doreen E. Prince</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                            </swiper>
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
                testimonialCarousel: {
                    loop: true,
                    speed: 1000,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: {
                        delay: 2000,
                    },
                }
            }
        },
    };
</script>