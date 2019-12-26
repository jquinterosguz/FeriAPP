<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>FeriApp</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> 
    <FeriApp/> 
    <GoogleMaps/> 
    </ion-content>
  </div>
</template>

<script>
import FeriApp from "../components/FeriApp";
import GoogleMaps from "../components/GoogleMaps";
export default {
  name: 'home',
  components: {FeriApp, GoogleMaps}
}
</script>
