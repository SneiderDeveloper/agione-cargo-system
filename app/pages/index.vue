<script setup lang="ts">
import type { FormSubmitEvent, FormError } from '@nuxt/ui'
import moment from 'moment'

const state = reactive({
  email: '',
  password: ''
})

type Schema = typeof state

const validate = (state: Partial<Schema>): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  return errors
}

const handleSubmit = (event: FormSubmitEvent<Schema>) => {
  console.log('Form submitted with:', state)
  if (state.email.includes('admin')) navigateTo('/admin')
  if (state.email.includes('ware')) navigateTo('/warehouse')
}
</script>
<template>
  <div 
    class="
      flex 
      flex-col 
      justify-center 
      items-center 
      min-h-screen 
      p-4 
      bg-linear-to-br 
      from-slate-50 
      via-blue-50 
      to-indigo-100
    "
  >
    <div class="rounded-2xl p-8 shadow-2xl bg-white">
      <h1 class="font-semibold text-2xl text-center">
        Welcome to Agione Cargo App
      </h1>
      <p class="text-center text-slate-500 mt-2 mb-5">
        Sign in to access your cargo management dashboard
      </p>
    
      <UForm 
        @submit="handleSubmit" 
        :state="state" 
        :validate="validate" 
        class="flex flex-col gap-4"
      >
        <Input 
          v-model="state.email"
          placeholder="your.email@agi.com" 
          type="email"
          :ui="{ root: 'w-full' }"
          :form-field-props="{
            label: 'Email Address',
            name: 'email',
            required: true
          }"
        />
        <Input
          v-model="state.password"
          type="password"
          :ui="{ root: 'w-full' }"
          :form-field-props="{
            label: 'Password',
            name: 'password',
            required: true
          }"
        />
        <Button 
          type="submit" 
          size="lg"
          class="
            w-full 
            bg-linear-to-bl 
            from-blue-400 
            to-indigo-400
          "
        >
          Sign In
        </Button>
      </UForm>
    </div>
    <div class="text-center text-sm text-gray-400 mt-8">
      <p>&copy; {{ moment().year() }} AGI - Alliance Ground International</p>
      <p>Secure Cargo Processing Platform</p>
    </div>
  </div>
</template>