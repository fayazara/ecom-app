<template>
  <div>
    <p class="flex align-center">
      <span style="height: 22px;">
        <box-icon size="xs" name="chevron-left"></box-icon>
      </span>
      <span class="is-italic is-size-7 is-uppercase">{{msg}}</span>
    </p>
  </div>
</template>

<script>
export default {
    props: ["msg"]
}
</script>