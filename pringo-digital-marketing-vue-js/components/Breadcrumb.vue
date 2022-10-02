<template>
    <section class="bread-crumb-section bg-cover">
        <img class="shape shape1" src="/images/bread/1.png" alt="images_not_found">
        <img class="shape shape2" src="/images/bread/2.png" alt="images_not_found">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="title text-center">{{ title }}</h2>
                    <nav aria-label="breadcrumb">
                        <ul class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item">
                                <n-link to="/">Home</n-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page"><span>{{ activeTitle }}</span></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ["title", "activeTitle"]
    };
</script>