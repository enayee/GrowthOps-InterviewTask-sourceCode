<template>
  <div class="register-root">
    <div class="register-container">
      <i class="register-title">Register Your Interest</i>
      <div class="form-container">
        <div class="form-item">
          <input type="text" id="name" name="name" placeholder="Name">
          <div class="select-box">
              <div class="current" tabindex="0">
                <div class="value"><input class="input" type="radio" id="0" value="1" name="Ben" checked="false" />
                    <p class="input-text">Student</p>
                </div>
                <div class="value"><input class="input" type="radio" id="1" value="2" name="Ben" checked="false" />
                    <p class="input-text">Employee</p>
                </div>
                <div class="value"><input class="input" type="radio" id="2" value="3" name="Ben" checked="false" />
                    <p class="input-text">Employer</p>
                </div>
                <div class="value"><input class="input" type="radio" id="3" value="4" name="Ben" checked="false" />
                    <p class="input-text">Boss</p>
                </div>
                <div class="value"><input class="input" type="radio" id="4" value="5" name="Ben" checked="false" />
                    <p class="input-text default">Oppucation</p>
                </div>
                <button class="slider-button">&#9660;</button>
              </div>
              <ul class="list">
                  <li><label class="option" for="0" aria-hidden="aria-hidden">Student</label></li>
                  <li><label class="option" for="1" aria-hidden="aria-hidden">Employee</label></li>
                  <li><label class="option" for="2" aria-hidden="aria-hidden">Employer</label></li>
                  <li><label class="option" for="3" aria-hidden="aria-hidden">Boss</label></li>
              </ul>
          </div>
          <input type="text" id="email" name="email" placeholder="Email Address">
          <input type="text" id="contact" name="contact" placeholder="Contact No">
          <textarea type="textarea" id="name" name="message" placeholder="Message ..."></textarea>
        </div>
        <button class="submit-button">Submit Message</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerForm'
}
</script>

<style lang="scss" scoped>
@import '@/theme/theme.scss';
.register-root {
  padding: 80px 0;
  @media (max-width: $below-ipad-size) {
    padding: 40px 0;
  }
}
.register-container {
  margin: auto;
  width: 80%;
  max-width: $content-max-width;
  @media (max-width: $below-ipad-size) {
    width: 90%;
  }
}
.register-title {
  font-size: 60px;
  font-weight: 600;
  line-height: 0.37;
  color: $main-theme-color;
  @media (max-width: $below-ipad-size) {
    font-size: 48px;
    line-height: 1;
    text-align: center;
  }
}
.form-container {
  padding: 35px;
  border: 1px solid $border-grey-color;
  border-radius: 4px;
  margin: 30px 0;
}
.form-item {
  display: flex;
  flex-wrap: wrap;
}
input, textarea {
  width: calc(50% - 20px);
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: 0;
  outline: 0;
  padding: 18px;
  border: 1px solid $border-grey-color;
  margin-bottom: 20px;
  border-radius: 4px;
  color: $main-text-color;
  &:nth-of-type(n+1) {
    margin-right: 20px;
  }
  &::placeholder {
    font-style: italic;
    color: #aaaaaa;
  }
  @media (max-width: $below-ipad-size) {
    width: 100%;
    margin: 10px auto;
    &:nth-of-type(n+1) {
      margin-right: 0px;
    }
  }
}
textarea {
  resize: vertical;
}
.select-box {
  position: relative;
  display: block;
  margin: 0 auto;
  font-size: 12px;
  width: calc(50% - 20px);
  margin: 0;
  @media (max-width: $below-ipad-size) {
    width: 100%;
  }
  
  .current {
    position: relative;
    cursor: pointer;
    outline: none;
    border: 1px solid $border-grey-color;
    border-radius: 4px;
    &:focus {
      & + .list {
        opacity: 1;
        border: 1px solid $border-grey-color;
        background-color: #ffffff;
        border-radius: 4px;
        animation-name: none;
        .option {
          cursor: pointer;
        }
      }
      .slider-button {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
  .slider-button {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 30px;
    transition: 0.2s ease;
    color: $text-light-grey-color;
    background-color: $background-black-color;
    width: 30px;
    height: 30px;
    margin: 2px;
    border-radius: 4px;
  }
  .value {
    display: flex;
  }
  .input {
    display: none;
    
    &:checked + .input-text {
      display: block;
    }
  }
  .input-text {
    display: none;
    width: 100%;
    margin: 0;
    padding: 15px;
    &.default {
      font-style: italic;
      color: #aaaaaa;
      font-size: 12px;
    }
  }
  
  .list {
    position: absolute;
    width: 100%;
    padding: 0;
    list-style: none;
    opacity: 0;
    animation-name: HideList;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    margin: 0;
    
  }
  
  .option {
    display: block;
    padding: 15px;
    
    &:hover,
    &:focus {
      color: #546c84;
      background-color: #fbfbfb;
      border-radius: 4px;
    }
  }
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
.submit-button {
  background-color: $main-theme-color;
  width: 330px;
  height: 40px;
  color: $text-light-grey-color;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
  }
  @media (max-width: $below-ipad-size) {
    width: 100%;
    margin: 10px auto;
  }
}
</style>