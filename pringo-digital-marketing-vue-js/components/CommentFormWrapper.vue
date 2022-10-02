<template>
    <section class="comment-card-section comment-form-space1 section-pb-150">
        <div class="container">
            <div class="row g-0">
                <div class="col-12">
                    <div class="comment-card">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="title">Leave A Comment</h3>
                                <span class="comment-hr"></span>
                            </div>
                        </div>
                        <div class="row mtn-35">
                            <div class="col-lg-6 mt-35">
                                <CommentForm />
                            </div>
                            <div class="col-lg-6 mt-35">
                                <img src="/images/comment-form/1.png" alt="images-not_found" />
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
        components: {
            CommentForm: () => import('@/components/CommentForm'),
        },
    }
</script>
