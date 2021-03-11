<!--
Copyright (c) 2021 genshin.dev
Licensed under the Open Software License version 3.0
-->
<script lang="typescript">
  export let href: string;
  export let label: string;
</script>

<a {href} {label} target={href && !href.startsWith('/') ? '_blank' : undefined}>
  <slot />
</a>

<style>
  a {
    text-decoration: underline 1px #ffffff;
    color: #ffffff;
    cursor: pointer;
  }
</style>
