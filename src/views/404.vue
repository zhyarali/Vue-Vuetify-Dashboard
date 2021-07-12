<template lang="">
    <div class="main">

        <div class="d-flex justify-center align-center" id="page">
            <h1>404</h1>
            <div>
                <h2 id="desc" class="text">نەدۆزرایەوە </h2>
            </div>
        </div>
    </div>

</template>
<script>
    export default {

    }
</script>
<style>
 @font-face {
    font-family: "rabar";
    src: local("rabar"),
      url(../assets/fonts/Rabar_039.ttf) format("truetype");
  }
    #page{
        transform: translate(0%,310px) !important;
    }
    #page h1{
        border-left: 2px solid #EEEDF7;
        margin-left:10px ;
        padding-left: 10px;
        font-family: "rabar" !important;
        color: white !important;
    }
    .text{
        font-family:"rabar" !important ;
        color: white !important;
    }

    .main{
        background: #1e1e2f !important;
        height: 100vh  !important;

    }
</style>