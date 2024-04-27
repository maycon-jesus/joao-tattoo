<template>
    <footer>
        <div>
            Parte esquerda
        </div>
        <!-- Coluna 2 -->
        <div class="column">
            <!-- Linha dos links -->
            <div class="nav-links">
                a
            </div>
            <!-- Linha de sobre -->
            <div class="about-links">
                <div>
                    <span class="before-link-text">Criado por&nbsp;</span>
                    <a class="link" href="https://mayconjesus.dev" target="_blank">Maycon Jesus</a>
                </div>
                <div>
                    <a class="link" href="#">Política de Privacidade</a>
                </div>
                <div>
                    <a class="link" href="#">Termos e Condições</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
footer {
    border-top: 1px solid white;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 2fr;

    .column {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        border-left: 1px solid white;
    }

    .nav-links {
        display: flex;
        flex-flow: row wrap;
        padding: 48px;
        border-bottom: 1px solid white;
    }

    .about-links {
        display: flex;
        flex-flow: row wrap;
        padding: 48px;

        &>*:not(:last-child)::after {
            content: "\25CF";
            font-size: 12px;
            margin: 10px;
            vertical-align: middle;
        }
    }

    .before-link-text {
        color: #999;
    }

    .link {
        color: white;
        text-decoration: none;
        transition: color .3s;
        text-decoration: none;

        &:hover {
            color: var(--theme-primary);
        }
    }
}
</style>