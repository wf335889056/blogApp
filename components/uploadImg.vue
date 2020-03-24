<template>
  <div class="clearfix">
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      :fileList="fileList"
      @change="handleChange"
      v-if="fileList.length == 0"
    >
      <div>
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <div class="avatar" v-else>
      <img :src="currImage" alt="avatar images">
      <div class="mask transition">
        <span @click="handlePreview"><a-icon type="eye" :style="iconStyle" /></span>
        <span @click="handleDelete"><a-icon type="delete" :style="iconStyle" /></span>
      </div>
    </div>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="avatar images" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fileBase64Image } from '../utils/index'

export default Vue.extend({
  data() {
    return {
      iconStyle: {
        fontSize: '16px',
        color: '#fff'
      },
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      currImage: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    handlePreview() {
      this.previewImage = this.currImage
      this.previewVisible = true
    },
    async handleChange(files: any) {
      let { file, fileList, event } = files
      // console.log(file)
      // console.log(fileList)
      let dataBase: any = await fileBase64Image(file.originFileObj)
      this.currImage = dataBase
      this.fileList = fileList;
    },
    handleDelete() {
      this.currImage = ''
      this.fileList.splice(0, this.fileList.length)
    },
  },
})
</script>

<style lang="less" scoped>
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .avatar {
    float: left;
    width: 104px;
    height: 104px;
    margin: 0 8px 8px 0;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    position: relative;
    &:hover {
      .mask {
        opacity: 1;
      }
    }
    .mask {
      display: inline-flex;
      opacity: 0;
      position: absolute;
      left: 8px;
      top: 8px;
      right: 8px;
      bottom: 8px;
      background-color: rgba(0, 0, 0, 0.4);
      justify-content: center;
      align-items: center;
      span {
        cursor: pointer;
        & + span {
          margin-left: 8px;
        }
      }
    }
  }
</style>