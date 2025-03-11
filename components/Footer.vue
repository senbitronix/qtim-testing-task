<script setup lang="ts"></script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-content__left">
                    <p class="footer__question">Is there a project?</p>
                    <h2 class="footer__suggestion">Let’s work together</h2>
                </div>
                <div class="footer-content__right">
                    <div class="wrapper">
                        <section class="info">
                            <h3 class="info__subtitle">For all questions</h3>
                            <div>
                                <a
                                    class="info__link"
                                    href="tel:+7 (920) 278—00—68"
                                    >+7 (920) 278-00-68</a
                                >
                                <a
                                    class="info__link"
                                    href="mailto:qtim@agency.com"
                                    >qtim@agency.com</a
                                >
                            </div>
                        </section>
                        <section class="info">
                            <h3 class="info__subtitle">Office in Russia</h3>
                            <address>139 Ruben Station Lake Drew, NM 52678</address>
                            <button class="info__location">
                                <img
                                    src="public/location.svg"
                                    alt="location"
                                />
                            </button>
                        </section>
                        <section class="info">
                            <h3 class="info__subtitle">Office in Dubai</h3>
                            <address>139 Ruben Station Lake Drew, NM 52678</address>
                            <button class="info__location">
                                <img
                                    src="public/location.svg"
                                    alt="location"
                                />
                            </button>
                        </section>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom__left footer-bottom__block">
                    <div>
                        <a
                            href="#"
                            class="footer-bottom__link"
                            >Facebook</a
                        >
                    </div>
                    <div>
                        <a
                            href="#"
                            class="footer-bottom__link"
                            >Telegram</a
                        >
                    </div>
                    <div>
                        <a
                            href="#"
                            class="footer-bottom__link"
                            >Instagram</a
                        >
                    </div>
                </div>
                <button class="go-button">Go</button>
                <div class="footer-bottom__right footer-bottom__block">
                    <div>
                        <a
                            href="#"
                            class="footer-bottom__link"
                            >Behance</a
                        >
                    </div>
                    <div>
                        <a
                            href="#"
                            class="footer-bottom__link"
                            >LinkedIn</a
                        >
                    </div>
                    <div>
                        <a
                            href="#"
                            class="footer-bottom__link"
                            >Privacy Policy</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
$location-size: 32px;
$location-image-size: 9px;
$go-button-width: 358px;
$go-button-width-768: 158px;

.footer {
    padding-top: 140px;
    background: var(--violet-color);

    .footer-content {
        display: flex;
        justify-content: space-between;
        gap: 30px;

        @media (max-width: 768px) {
            flex-wrap: wrap;
        }

        &__left {
            @media (max-width: 768px) {
                text-align: center;
            }
        }

        &__right {
            margin-top: 75px;
            flex-basis: 50%;
            display: flex;
            justify-content: center;

            @media (max-width: 768px) {
                flex-basis: 100%;
            }

            .wrapper {
                display: flex;
                flex-direction: column;
                gap: 36px;

                font-weight: 400;
                font-size: 16px;

                @media (max-width: 768px) {
                    flex-direction: row;
                    justify-content: center;
                }
            }
        }
    }

    &__question {
        font-weight: 400;
        font-size: 16px;
    }

    &__suggestion {
        font-weight: 400;
        font-size: 112px;

        @media (max-width: 480px) {
            font-size: 72px;
        }
    }

    .info {
        max-width: 152px;

        &__subtitle {
            margin-bottom: 12px;
            font-weight: 400;
        }

        address {
            text-decoration: none;
            font-style: normal;
        }

        &__location {
            margin-top: 8px;
            width: $location-size;
            height: $location-size;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--black-color);
            border: none;
            cursor: pointer;

            img {
                width: $location-image-size;
                height: $location-image-size;
            }
        }

        &__link {
            margin-top: 4px;
            display: block;
        }

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 10px;
        margin-top: 143px;

        .go-button {
            width: $go-button-width;
            height: calc($go-button-width / 2);
            border-radius: 1000px 1000px 0 0;
            background-color: var(--black-color);
            color: var(--light-grey-color);
            cursor: pointer;
            font-size: 32px;
            outline: none;

            display: flex;
            justify-content: center;
            align-items: flex-end;
            padding-bottom: 30px;

            @media (max-width: 768px) {
                width: $go-button-width-768;
                height: calc($go-button-width-768 / 2);
            }
        }

        .go-button:hover {
            opacity: 0.8;
        }

        &__block {
            padding-bottom: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 32px;

            font-weight: 400;
            font-size: 16px;

            @media (max-width: 992px) {
                flex-direction: column;
                font-size: 12px;
            }
        }

        &__link {
            display: inline;
            padding-bottom: 1px;
            border-bottom: 1px solid var(--black-color);
        }
    }
}
</style>
