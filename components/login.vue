<template>
  <div>
    <a-modal
      title="登陆"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      :maskClosable="false"
    >
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'email',
            { rules: [{ required: true, message: '请输入你的邮箱地址!' }] },
          ]"
          placeholder="输入你的邮箱地址"
        >
          <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入你的密码!' }] },
          ]"
          type="password"
          placeholder="输入你的密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
    </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from 'ant-design-vue'
import { emailReg } from '../utils'
Vue.prototype.$form = Form

export default Vue.extend({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      confirmLoading: false,
      form: this.$form.createForm(this, { name: 'normal_login' })
    }
  },
  mounted() {
    
  },
  methods: {
    handleOk() {
      this.form.validateFields((err: any, values: any) => {
        if (!err && emailReg(values.email)) {
          
        } else {
          this.$message.error('邮箱格式不正确, 请重新输入')
        }
      })
      // this.$emit('loginModalEmit', false)
    },
    handleCancel() {
      this.$emit('loginModalEmit', false)
    },
    
  }
})
</script>

<style lang="less" scoped>
</style>