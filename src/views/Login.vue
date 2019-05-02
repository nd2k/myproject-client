<template>
  <div id="login">
    <div class="login-card">
      <div class="card-title">
        <h1>Please Sign In</h1>
      </div>

      <div class="content">
        <form>
          <div class="field">
            <div class="control has-icons-left">
              <input
                @blur="$v.user.email.$touch()"
                v-model="user.email"
                class="input"
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                required
                autofocus
              >
              <div v-if="$v.user.email.$error">
                <span v-if="!$v.user.email.required">
                  <b-alert show variant="danger" fade>Email address is mandatory</b-alert>
                </span>
                <span v-if="!$v.user.email.email">
                  <b-alert show variant="danger" fade>Your email address is not valid</b-alert>
                </span>
              </div>
              <span class="icon is-small is-left">
                <font-awesome-icon icon="envelope"/>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left">
              <input
                @blur="$v.user.password.$touch()"
                v-model="user.password"
                class="input"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                autofocus
              >
              <div v-if="$v.user.password.$error">
                <span v-if="!$v.user.password.required">
                  <b-alert show variant="danger" fade>This field is mandatory</b-alert>
                </span>
                <span v-if="!$v.user.password.minLength">
                  <b-alert show variant="danger" fade>This field requires at least 8 characters</b-alert>
                </span>
              </div>
              <span class="icon is-small is-left">
                <font-awesome-icon icon="unlock"/>
              </span>
            </div>
          </div>

          <div class="level options">
            <div class="checkbox level-left">
              <input type="checkbox" id="checkbox" class="regular-checkbox">
              <label for="checkbox"></label>
              <span>Remember me</span>
            </div>

            <a class="btn btn-link level-right" href="#">Forgot Password?</a>
          </div>

          <button :disabled="isUserInvalid" @click.prevent="login" class="btn btn-primary">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators"

export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLengt: minLength(8)
      }
    }
  },
  computed: {
    isUserInvalid() {
      return this.$v.$invalid
    }
  },
  methods: {
    login() {
      console.log(this.$v)
      console.log(this.user)
      this.$v.$touch()
      this.$store
        .dispatch("user/login", this.user)
        .then(() => {
          this.$router.push("/")
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: hsl(171, 100%, 41%);
$grey-darker: hsl(0, 0%, 21%);
$grey-dark: hsl(0, 0%, 29%);
$grey: hsl(0, 0%, 48%);
$grey-light: hsl(0, 0%, 71%);
$grey-lighter: hsl(0, 0%, 86%);

#login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: #f7f7f7;

  .login-card {
    background: #fff;
    width: 24rem;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.11);

    .card-title {
      background-color: $primary;
      padding: 1.5rem;

      h1 {
        color: #fff;
        text-align: center;
        font-size: 1.2rem;
      }
    }

    .content {
      padding: 2rem 2.5rem 4rem;
    }

    .icon {
      color: $primary;
    }

    #email,
    #password {
      display: block;
      width: 100%;
      font-size: 1rem;
      margin-bottom: 1.75rem;
      border: 1px solid $grey-lighter;
      transition: all 0.5s;

      &:hover {
        border-color: $grey;
      }

      &:active,
      &:focus {
        border-color: $primary;
      }
    }

    .checkbox {
      color: $grey-light;
      font-size: 0.8rem;

      span {
        margin-left: 0.5rem;
      }
    }

    a {
      font-size: 0.8rem;
    }

    .options {
      color: $grey-light;
      margin-bottom: 1.5rem;
    }

    button {
      cursor: pointer;
      font-size: 1.2rem;
      color: $primary;
      border-radius: 4rem;
      display: block;
      width: 100%;
      background: transparent;
      border: 2px solid $primary;
      padding: 0.9rem 0 1.1rem;
      transition: color 0.5s, border-color 0.5s;

      &:hover,
      &:focus {
        color: #fff;
        transition: background-color 1000ms;
        background-color: $primary;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
      }

      &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
        box-shadow: none;
        cursor: not-allowed;
      }

      &:active {
        transform: translateY(1px);
      }
    }
  }
}

label {
  cursor: pointer;
}

.regular-checkbox {
  display: none;
}

.regular-checkbox + label {
  background-color: #fafafa;
  border: 1px solid $grey-lighter;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 7px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
}

.regular-checkbox:checked + label {
  background-color: #e9ecee;
}

.regular-checkbox:checked + label:after {
  content: "\2714";
  font-size: 11px;
  position: absolute;
  top: 0;
  left: 3px;
  color: $grey-light;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.alert {
  padding: 0.3rem !important;
  font-size: 10px !important;
  margin-top: -0.8rem !important;
}
</style>
