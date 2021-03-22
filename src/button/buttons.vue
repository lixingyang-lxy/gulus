<template>
  <button
    class="g-button"
    @click="handleClick"
    :class="{ [`i-${iconPosition}`]: true }"
  >
    <g-icon class="icon" :name="name"></g-icon>
    <slot class="content"></slot>
  </button>
</template>

<script>
import Icon from "../icon";
export default {
  name: "buttons",
  components: {
    "g-icon": Icon,
  },
  props: {
    iconPosition: {
      type: String,
      default: "",
      validate(value) {
        return value == "left" || value == "right";
      },
    },
    name: {
      type: String,
      require: true,
      default: "setting",
      validate(value) {
        return typeof value === String;
      },
    },
  },
  methods: {
    handleClick() {
      // this.$emit('click')
    },
  },
};
</script>

<style lang="less" scoped>
.g-button {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    background: rgba(45, 183, 245, 0.8);
    cursor: pointer;
  }
  /*> .content {
            order: 1;
        }
        > .icon {
            order: 2;
        }*/
  &.i-right {
    > .content {
      order: 2;
    }
    > .icon {
      order: 1;
    }
  }
  &.i-left {
    > .content {
      order: 1;
    }
    > .icon {
      order: 0;
    }
  }
}
</style>
