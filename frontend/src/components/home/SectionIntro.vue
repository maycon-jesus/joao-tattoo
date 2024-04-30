<template>
    <section class="container">
        <div class="left">
            <div class="text-wrapper">
                <h1><span class="primary-text">Especialista</span> em Geek & BlackWork</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.</p>
            </div>
        </div>
        <div class="right"></div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.left {
    display: flex;
    justify-content: flex-end;
    padding-left: 70px;

    h1 {
        font-family: "Raleway", sans-serif;
        font-size: 46px;
        color: white;
        font-weight: 800;
    }

    .text-wrapper {
        max-width: 700px;
    }

    .primary-text {
        color: var(--theme-primary);
    }
}
</style>