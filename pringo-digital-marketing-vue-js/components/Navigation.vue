<template>
    <ul class="main-menu">
        <li>
            <n-link to="/">Home</n-link>
        </li>
        <li>
            <n-link to="/about">About</n-link>
        </li>
        <li>
            <n-link to="/service-details">Service</n-link>
        </li>
        <li>
            <n-link to="/case-details">Case Details</n-link>
        </li>
        <li class="has-children">
            <n-link to="/blog-left-sidebar">Blog</n-link>
            <ul class="sub-menu">
                <li>
                    <n-link to="/blog-left-sidebar">Blog Left Sidebar</n-link>
                </li>
                <li>
                    <n-link to="/blog-right-sidebar">Blog Right Sidebar</n-link>
                </li>
                <li>
                    <n-link to="/blog-details">Blog Details</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">Contact</n-link>
        </li>
    </ul>
</template>