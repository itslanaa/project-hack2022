<template>
    <section class="section-pt-150 section-pb-150">
        <div class="container">
            <div class="row mtn-35">
                <div class="col-lg-8 mt-35">
                    <div class="row mtn-35">
                        <div class="col-12 col-md-6 mt-35" v-for="(blog, index) in blogs" :key="index">
                            <div class="blog-grid-card">
                                <n-link to="/blog-details" class="blog-grid-thumb">
                                    <img :src="blog.imgSrc" :alt="blog.title" />
                                </n-link>
                                <div class="blog-grid-content">
                                    <ul>
                                        <li class="date">
                                            <i class="icofont-ui-calendar"></i>
                                            {{ blog.date }}
                                        </li>
                                        <li>
                                            <button class="comments">{{ blog.comment }} Comments</button>
                                            <button class="link-share">Share</button>
                                        </li>
                                    </ul>
                                    <h5 class="title mb-3">
                                        <n-link to="/blog-details">{{ blog.title }}</n-link>
                                    </h5>
                                    <p class="mb-4">
                                        {{ blog.excerpt }}
                                    </p>
                                    <n-link to="/blog-details" class="btn btn-warning">read more</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-35">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="icofont-rounded-double-left"></i></a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="icofont-rounded-double-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-35" :class="orderClass">
                    <aside class="sidebar">
                        <WidgetProfileCard />
                        
                        <WidgetSearchCard />

                        <WidgetPostCategoryCard />

                        <AboutBanner />

                        <WidgetTagCard />
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ["orderClass"],

        components: {
            WidgetProfileCard: () => import('@/components/WidgetProfileCard'),
            WidgetSearchCard: () => import('@/components/WidgetSearchCard'),
            WidgetPostCategoryCard: () => import('@/components/WidgetPostCategoryCard'),
            AboutBanner: () => import('@/components/AboutBanner'),
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },

        data() {
            return {
                blogs: [
                    {
                        date: "May 21, 2021",
                        comment: 15,
                        imgSrc: "/images/blog-grid/1.png",
                        title: "Guide to Improving Your Google Rankings.",
                        excerpt: "Lorem ipsum dolor sit amet, consectet adipi elit, sed doeius tempor incididunt ut labore gthydolore magna aliqua.",
                    },
                    {
                        date: "Mar 16, 2021",
                        comment: 21,
                        imgSrc: "/images/blog-grid/2.png",
                        title: "What's The Current Job Market For Seo Professionals Like?",
                        excerpt: "Lorem ipsum dolor sit amet, consectet adipi elit, sed doeius tempor incididunt ut labore gthydolore magna aliqua.",
                    },
                    {
                        date: "Apr 08, 2021",
                        comment: 36,
                        imgSrc: "/images/blog-grid/3.png",
                        title: "Addicted To Seo? Us Too. 6 Reasons We Just Can't Stop.",
                        excerpt: "Lorem ipsum dolor sit amet, consectet adipi elit, sed doeius tempor incididunt ut labore gthydolore magna aliqua.",
                    },
                    {
                        date: "Sep 24, 2021",
                        comment: 24,
                        imgSrc: "/images/blog-grid/4.png",
                        title: "Why You Should Spend More Time Thinking About Seo.",
                        excerpt: "Lorem ipsum dolor sit amet, consectet adipi elit, sed doeius tempor incididunt ut labore gthydolore magna aliqua.",
                    },
                    {
                        date: "Jun 25, 2021",
                        comment: 16,
                        imgSrc: "/images/blog-grid/5.png",
                        title: "Why Is SEO Important For Marketing?",
                        excerpt: "Lorem ipsum dolor sit amet, consectet adipi elit, sed doeius tempor incididunt ut labore gthydolore magna aliqua.",
                    },
                    {
                        date: "Feb 16, 2021",
                        comment: 9,
                        imgSrc: "/images/blog-grid/6.png",
                        title: "How Can I Start SEO Marketing SEO Consultancy?",
                        excerpt: "Lorem ipsum dolor sit amet, consectet adipi elit, sed doeius tempor incididunt ut labore gthydolore magna aliqua.",
                    },
                ]
            }
        },
    };
</script>