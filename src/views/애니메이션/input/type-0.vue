<template>
  <div>
    <div class="centered">
      <div class="group">
        <input type="text" name="name" id="name" required />
        <label for="name">Name</label>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// $bg-color: #f44336;
// $foucs-color: white;
$bg-color: white;
$text-color: black;
$foucs-color: #f6e73f;

$width: 30rem; // Change Me
$height: 5rem;

$inpit-font-size: $height / 3;

* {
  box-sizing: border-box;
}

body {
  background: $bg-color;
}

.centered {
  width: $width;
  height: $height;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 1rem;
}

.group {
  width: 100%;
  height: $height;
  overflow: hidden;
  position: relative;
}

label {
  position: absolute;
  top: $inpit-font-size;
  color: rgba($text-color, 0.5);

  font: 400 $inpit-font-size Roboto;
  cursor: text;
  transition: 0.25s ease;
}

input {
  display: block;
  width: 100%;
  padding-top: $inpit-font-size;
  border: none;
  border-radius: 0; // For iOS
  // border-bottom: solid $inpit-font-size0 rgba(white, .5);
  color: $text-color;
  background: $bg-color;
  font-size: $inpit-font-size;
  transition: 0.3s ease;
  &:valid {
    // border-bottom-color: rgba(white, .5);
    ~ label {
      top: 0;
      font: 700 $inpit-font-size/1.5 Roboto;
      color: rgba(white, 0.5);
    }
  }
  &:focus {
    outline: none;
    // border-bottom-color: $foucs-color;
    ~ label {
      top: 0;
      font: 700 $inpit-font-size/1.5 Roboto;
      color: $foucs-color;
    }

    ~ .bar:before {
      transform: translateX(0);
    }
  }

  // Stop Chrome's hideous pale yellow background on auto-fill

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px $bg-color inset;
    -webkit-text-fill-color: white !important;
    // border-bottom-color: rgba(white, .5);
  }
}

.bar {
  // background: $foucs-color;
  background: rgba(white, 0.5);
  content: "";
  width: 100%;
  height: 2px;
  transition: 0.3s ease;

  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 150%;
    background: $foucs-color;
    transform: translateX(-1000%);
  }
}

::selection {
  background: rgba($foucs-color, 0.3);
}
</style>
