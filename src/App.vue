<template>
    <div id="app">
        <g-button :iconPosition="iconPositionLeft" name="download" @click="handleClick">
            <div>左下载</div>
        </g-button>

        <g-button :iconPosition="iconPositionRight" name="right">
            <div>右下载</div>
        </g-button>

        <g-button name="setting">
            <div>设置</div>
        </g-button>

        <button-group>
            <g-button name="left">
                向左
            </g-button>
            <g-button>
                更多...
            </g-button>
            <g-button name="right" :iconPosition="iconPositionRight">
                向右
            </g-button>
        </button-group>
         <button @click="change">change</button>
    </div>
</template>

<script>
    import Button from './buttons'
    import ButtonGroup from './button-group'

    export default {
        name: 'App',
        data() {
          return {
              iconPositionLeft: 'left',
              iconPositionRight: 'right'
          }
        },
        components: {
            'g-button': Button,
            'button-group': ButtonGroup
        },
        methods: {
            handleClick() {
                console.log('click')
            },
            change() {
                this.$toast('err message', 'center')
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
