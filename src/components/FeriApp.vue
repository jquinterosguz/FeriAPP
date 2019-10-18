<template>
    <ion-grid>
        <form>
            <ion-col>
            <ion-item>
                <ion-label>Feria:</ion-label>
                <ion-input name="feria"></ion-input>
            </ion-item>
            </ion-col>
            <ion-col>
                <ion-button type="submit" color="primary" expand="block">Encontrar</ion-button>
            </ion-col>
            </form>
    </ion-grid>
</template>

<script>
export default {
    name:"EncontrarFeria"    
}
</script>
