<template>
  <div>
    <a-modal
      title="注册"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      :maskClosable="false"
      cancelText="取消"
      okText="注册"
    >
      <a-form :form="form">
        <a-form-item v-bind="formItemLayout" label="邮箱地址">
          <a-input
            v-decorator="[
              'email',
              { rules: [{ required: true, message: '请输入你的邮箱地址!' }] },
            ]"
            placeholder="输入你的邮箱地址"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="密码">
          <a-input
            v-decorator="[
              'password',
              { rules: [{ required: true, message: '请设置你的密码!' }] },
            ]"
            type="password"
            placeholder="输入你的密码"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="确认密码">
          <a-input
            v-decorator="[
              'confirm',
              { rules: [ { required: true, message: '请再次设置你的密码!' }] },
            ]"
            type="password"
            placeholder="再次输入你的密码"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="昵称">
          <a-input
            v-decorator="[
              'nickname',
              { rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }] },
            ]"
            placeholder="输入你的昵称姓名"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="头像">
          <UploadImg />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UploadImg from './uploadImg.vue'
import { Form } from 'ant-design-vue'
import { emailReg } from '../utils'
Vue.prototype.$form = Form

export default Vue.extend({
  components: { UploadImg },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      confirmLoading: false,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleOk() {
      this.form.validateFields((err: any, values: any) => {
        if (!err && emailReg(values.email)) {
          this.$emit('registerModalEmit', true)
        } else {
          this.$message.error('邮箱格式不正确, 请重新输入')
        }
      })
    },
    handleCancel() {
      this.$emit('registerModalEmit', false)
    },
  }
})
</script>

<style lang="less" scoped>
</style>