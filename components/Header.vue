<template>
    <header class="header">
        <NuxtLink
            to="/"
            class="header__logo"
        >
            <img
                src="public/logo.svg"
                alt="Qtim Logo"
                class="header__logo-image"
            />
        </NuxtLink>
        <div class="spacer"></div>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li><NuxtLink to="/">Works</NuxtLink></li>
                <li><NuxtLink to="/">About</NuxtLink></li>
            </ul>
        </nav>

        <div class="header__buttons">
            <button class="header__language-button">
                <img
                    src="public/lang.svg"
                    alt="Сменить язык"
                />
            </button>
            <button class="header__lets-work-button">Let's Work</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
$primary-color: #007bff;
$text-color: #101010;
$padding: 20px;

.header {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    min-height: 121px;
    box-sizing: border-box;
    padding: 35px;
    align-items: center;

    &__nav-list {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 58px;
        margin-right: 91px;
        @media (max-width: 480px) {
            margin-right: 0;
        }

        a {
            text-decoration: none;
            color: $text-color;
            font-weight: 400;
        }
    }

    &__buttons {
        display: flex;
        justify-content: space-between;
        gap: 16px;
    }

    &__language-button {
        width: 52px;
        height: 52px;
        background: var(--color-white);
        border-radius: 50%;
        border: 2px solid #0000001a;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 24px;
            height: 24px;
        }
    }

    &__lets-work-button {
        padding: 10px 20px;
        border-radius: 999px;
        border: none;
        background-color: $text-color;
        color: #fff;
        cursor: pointer;
        font-weight: 500;
    }
}
</style>
