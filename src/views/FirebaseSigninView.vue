<template>
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  // Define reactive variables
  const email = ref('');
  const password = ref('');
  
  // Initialize Firebase Authentication and Router
  const auth = getAuth();
  const router = useRouter();
  
  const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((userCredential) => {
        console.log('Firebase Register Successful!', userCredential);
        router.push('/');
        console.log(auth.currentUser)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
</script>
  