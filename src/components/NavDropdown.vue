<!-- ============================== Template ============================== -->
<template>
<div
    class="navDropdown"
    @click="toggleDropdown"
>
    {{ name }}
</div>
<div
    v-if="showDropdown"
    class="navPopover"
>
    <ul class="navPopover__list">
        <li
            v-for="l in links"
            :key="l.to"
            @click="routeTo(l)"
            class="navPopover__list__line"
        >
            <a
                v-if="l.external"
                :href="l.to"
            >
                {{ l.text }}
            </a>
            <router-link
                v-else
                :to="l.to"
                @click="$emit('routed')"
            >
                {{ l.text }}
            </router-link>
        </li>
    </ul>
</div>
</template>

<!-- ============================== Script ============================== -->
<script>
const navDropdown = {
    name: 'navDropdown',
    props: {
        name: {
            type: String,
            description: "The text of the dropdown display.",
        },
        links: {
            type: Array,
            description: "Array of objects containing 'to', 'text', and 'external', each will create a router-link.",
        },
    },
    data() { return {
        showDropdown: false,
    }; },
    methods: {
        toggleDropdown(e) {
            const offclick = (e2) => {
                if (e !== e2) {
                    this.showDropdown = !this.showDropdown;
                    document.removeEventListener('click', offclick);
                }
            }
            if (!this.showDropdown) {
                this.showDropdown = !this.showDropdown;
                document.addEventListener('click', offclick);
            }
        },
        routeTo(link) {
            if (link.external) { window.location.href = link.to; }
            this.$emit('routed');
            this.$router.push(link.to);
        },
    },
};

export default navDropdown;
</script>

<!-- ============================== Style ============================== -->
<style scoped lang="scss">

.navDropdown {
    cursor: pointer;
    text-indent: 1em;
    color: $color-text;

    @media screen and (max-width: 900px) {
        padding-top: 8px;
        background: $color-background-sink;
        z-index: 100;

        &:first-child {
            padding-top: 12px;
        }

        &:last-child {
            padding-bottom: 12px;
            border-bottom: 2px solid $color-foreground-sink;
        }
    }
}

.navPopover {
    background: $color-background;
    z-index: 100;

    @media screen and (min-width: 900px) {
        position: relative;
    }

    &__list {
        z-index: 100;

        @media screen and (min-width: 900px) {
            position: absolute;
            width: max-content;
            right: 1em;
            top: 1.75em;
            background: $color-background;
            border: 2px solid $color-foreground-sink;
            border-radius: 0.5em;
            padding: 0;

            &:after {
                content: "";
                position: absolute;
                top: -0.4em;
                right: 5px;
                border-style: solid;
                border-width: 0 6px 6px;
                border-color: $color-foreground-sink transparent;
                display: block;
                width: 0;
                z-index: 1;
            }
        }

        @media screen and (max-width: 900px) {
            background: $color-background-sink;
        }

        &__line {
            cursor: pointer;
            padding: 4px 1.25em 4px 1em;
            z-index: 1;

            &:hover {
                background: $color-foreground-sunk;
            }

            @media screen and (max-width: 900px) {
                padding: 8px;
            }

            @media screen and (min-width: 900px) {
                &:first-child {
                    padding-top: 6px;
                    border-top-left-radius: 0.5em;
                    border-top-right-radius: 0.5em;
                }

                &:last-child {
                    padding-bottom: 6px;
                    border-bottom-left-radius: 0.5em;
                    border-bottom-right-radius: 0.5em;
                }
            }
        }
    }
}
</style>