<template>
    <div class="accordion">
        <div class="title cursor-pointer px-4 py-6 text-lg font-bold flex items-center block" @click="open = !open">
            <p class="flex-1">How long does it take to make a tattoo on my arm?</p>
            <Icon name="mdi:plus" class="icon-open-close text-2xl float-right primary--text"
                :class="{ 'rotate-45': open }"></Icon>
        </div>
        <div class="answer block overflow-hidden" ref="answer">
            <div class="answer-content pa-6 text-base text-secondary" ref="answerContent">
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
                <div>aaa</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { MotionVariants } from '@vueuse/motion';

const open = ref(false)
const answer = ref<HTMLElement | null>(null)
const answerContent = ref<HTMLElement | null>(null)

const animationVariants = ref<MotionVariants<'opened'>>({
    initial: {
        height: '0px',
        opacity: 0,
        marginTop: '16px',
        transition: {
            bounce: 0,
            duration: 800,
        }
    },
    opened: {
        height: '0px',
        opacity: 1,
        marginTop: '0px',
        transition: {
            bounce: 0,
            duration: 800
        }
    }
})
const animation = useMotion(answer, animationVariants)

onNuxtReady(() => {
    watch([answerContent, () => window.innerWidth], (val) => {
        if (answerContent.value?.clientHeight) {
            console.log(`${answerContent.value?.clientHeight}px`)
            animationVariants.value.opened.height = `${answerContent.value?.clientHeight}px`
        }
    }, {
        immediate: true
    })
})

watch(open, (val) => {
    if (val) {
        animation.variant.value = 'opened'
    } else {
        animation.variant.value = 'initial'
    }
})
</script>

<style lang="scss" scoped>
.primary--text {
    color: var(--theme-primary);
}

.text-secondary {
    color: var(--theme-background2-text);
}

.accordion {
    box-sizing: border-box;
    width: 100%;
    grid-template-rows: auto auto;
    transition: all 3s;
}

.title {
    border: 1px solid white;

    .icon-open-close {
        transition: all 1s;
    }
}
</style>