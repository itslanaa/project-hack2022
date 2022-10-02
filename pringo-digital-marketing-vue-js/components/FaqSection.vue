<template>
    <section class="faq-section">
        <img src="/images/faq/bg.png" alt="images-not_found" class="faq-bg" />
        <div class="container">
            <div class="row mtn-30">
                <div class="col-xl-6 mt-30">
                    <div class="faq-image" data-aos="zoom-in" data-aos-delay="100">
                        <img src="/images/faq/1.png" alt="images_not_found" />
                    </div>
                </div>
                <div class="col-xl-6 mt-30">
                    <div class="faq-content">
                        <div class="section-title primary">
                            <h5 class="sub-title">// FAQ.</h5>
                            <h3 class="title">Frequently Asked Questions.</h3>
                            <span class="hr-primary mt-4"></span>
                        </div>

                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            Accordion: () => import('@/components/Accordion'),
        },
    };
</script>
