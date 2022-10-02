<template>
    <section class="about-us-section pb-0">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-6 col-xl-4 mt-30">
                    <div class="about-thumb">
                        <img src="/images/about/2.png" alt="images_not_found" />
                    </div>
                </div>
                <div class="col-md-6 col-xl-5 mt-30">
                    <div class="about-cards">
                        <div class="about-card-list">
                            <span class="sub-title text-gradient">Since: 1987</span>
                            <h4 class="title">Welcome To Seolly</h4>
                            <p>
                                Lorem Ipsum simply dummy text of the printing typesetting sum has been the industry's standard dummy... 
                                <a class="read-more" href="#">Read More</a> 
                            </p>
                        </div>
                        <div class="about-card-list">
                            <span class="sub-title text-gradient">Company History</span>
                            <h4 class="title">Mission And Vission</h4>
                            <p>
                                Lorem Ipsum simply dummy text of the printing typesetting sum has been the industry's standard dummy... 
                                <a class="read-more" href="#">Read More</a> 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2 offset-xl-0 col-xl-3 mt-30">
                    <AboutBanner />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            AboutBanner: () => import('@/components/AboutBanner'),
        },
    };
</script>