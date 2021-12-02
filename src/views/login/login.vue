<template>
  <div class="container">
    <a-form ref="formRef"
      :model="loginForm"
      :style="{width:'600px'}">
      <a-form-item field="name"
        label="Username"
        :rules="[{required:true,message:'name is required'},{minLength:5,message:'must be greater than 5 characters'}]"
        :validate-trigger="['change','input']">
        <a-input v-model="loginForm.name"
          placeholder="please enter your username..." />
        <template #help>
        </template>
      </a-form-item>
      <a-form-item field="post"
        label="Post">
        <a-input v-model="loginForm.post"
          placeholder="please enter your post..." />
      </a-form-item>
      <a-form-item field="isRead">
        <a-checkbox v-model="loginForm.isRead">
          I have read the manual
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button @click="handleClick">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const loginForm = reactive({
  name: '',
  post: '',
  isRead: false,
})

const router = useRouter()
const handleClick = () => {
  router.push('/dashboard')
}
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  justify-content: center;
  padding-top: 200px;
  box-sizing: border-box;
  background: #ccc;
}
</style>
