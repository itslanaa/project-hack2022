<template>
    <section class="team-section position-relative">
        <img class="pattern" src="/images/team/pattern.png" alt="images-not_found" />
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="section-title process text-center pb-90">
                        <div class="icon">
                            <img src="/images/icon/team.png" alt="Icon_not_found" />
                        </div>
                        <h3 class="title">Amazing Team Members</h3>
                        <span class="hr-secondary"></span>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div class="col-lg-3 col-sm-6 mt-30" v-for="(member, index) in teamMembers" :key="index">
                    <div class="team-card">
                        <div class="thumb">
                            <img :src="member.imgSrc" :alt="member.name" />
                            <img class="social-hover" src="/images/team/team-hover.png" alt="shape image" />
                            <ul class="team-social">
                                <li class="team-social-item" v-for="(list, index) in member.socialLink" :key="index">
                                    <a class="team-social-link" :href="list.url">
                                        <i :class="list.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="content">
                            <h3 class="title">{{ member.name }}</h3>
                            <p>{{ member.designation }}</p>
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
                teamMembers: [
                    {
                        imgSrc: "/images/team/1.png",
                        name: "Willie Mckenzie",
                        designation: "Digital Strategist",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/2.png",
                        name: "Rosie Greene",
                        designation: "Project Manager",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/3.png",
                        name: "Stacey Evans",
                        designation: "UI/UX designer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/4.png",
                        name: "Marian Adams",
                        designation: "seo specialist",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    }
                ]
            }
        },
    };
</script>