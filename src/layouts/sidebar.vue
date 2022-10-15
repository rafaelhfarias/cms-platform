<template>
    <main>
        <article class="sidebar">
            <p>Dashboard</p>
            <p>Settings</p>
        </article>
        <section>
            <slot />
        </section>
    </main>

</template>


<style>
.sidebar {
    display: flex;
    flex-direction: column;
}
</style>