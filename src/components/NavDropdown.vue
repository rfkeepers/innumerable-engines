<template>
    <div
        class="navDropdown"
        @click="toggleDropdown"
    >{{ name }}</div>
    <div v-if="showDropdown" class="navPopover">
        <ul class="navPopover__list">
            <li
                v-for="l in links"
                :key="l.to"
                @click="routeTo(l.to)"
                class="navPopover__list__line"
            >
                <router-link :to="l.to" @click="$emit('routed')">
                    {{ l.text }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const navDropdown = {
    name: 'navDropdown',
    props: {
        name: {
            type: String,
            description: "The text of the dropdown display.",
        },
        links: {
            type: Array,
            description: "Array of objects containing 'to' and 'text', each will create a router-link.",
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
    routeTo(to) {
        this.$emit('routed');
        this.$router.push(to);
    },
    },
    computed: {
    caret() { return this.showDropdown ? faCaretRight : faCaretDown; },
    },
    watch: {},
    components: {FontAwesomeIcon},
};

export default navDropdown;
</script>

<style scoped lang="scss">
.navDropdown {
    cursor: pointer;
    text-indent: 1em;
    color: $color-text;
    @media screen and (max-width: 900px) {
        margin-top: 8px;
        &:first-child {
            margin-top: 16px;
        }
    }
}
.navPopover {
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
        &__line {
            cursor: pointer;
            margin: 4px 1.25em 4px 1em;
            z-index: 1;

            &:hover {
                background: $color-foreground-sunk;
            }

            @media screen and (max-width: 900px) {
                margin: 8px;
            }

            @media screen and (min-width: 900px) {
                &:first-child {
                    margin-top: 6px;
                    border-top-left-radius: 0.5em;
                    border-top-right-radius: 0.5em;
                }
                &:last-child {
                    margin-bottom: 6px;
                    border-bottom-left-radius: 0.5em;
                    border-bottom-right-radius: 0.5em;
                }
            }
        }
    }
}
</style>