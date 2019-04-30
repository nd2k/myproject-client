<template>
  <div id="register">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <div class="register-card">
            <div class="card-title">
              <h1>Please Sign In</h1>
            </div>

            <div class="content">
              <form method="POST" action="#">
                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      v-model="newUser.email"
                      class="input"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      required
                      autofocus
                    >
                    <div v-if="$v.newUser.email.$error">
                      <span v-if="!$v.newUser.email.required">
                        <b-alert show variant="danger" fade>Email address is mandatory</b-alert>
                      </span>
                      <span v-if="!$v.newUser.email.email">
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
                      v-model="newUser.password"
                      class="input"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      autofocus
                    >
                    <div v-if="$v.newUser.password.$error">
                      <span v-if="!$v.newUser.password.required">
                        <b-alert show variant="danger" fade>This field is mandatory</b-alert>
                      </span>
                    </div>
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="unlock"/>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      v-model="newUser.confirmedPassword"
                      class="input"
                      id="confirmedPassowrd"
                      name="confirmedPassowrd"
                      type="password"
                      placeholder="Confirm your Password"
                      required
                      autofocus
                    >
                    <div v-if="$v.newUser.confirmedPassword.$error">
                      <span v-if="!$v.newUser.confirmedPassword.required">
                        <b-alert show variant="danger" fade>This field is mandatory</b-alert>
                      </span>
                    </div>
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="unlock"/>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <div class="control has-icons-left">
                    <input
                      v-model="newUser.avatar"
                      class="input"
                      id="avatar"
                      name="avatar"
                      type="avatar"
                      placeholder="Avatar"
                      required
                      autofocus
                    >
                    <span class="icon is-small is-left">
                      <font-awesome-icon icon="user"/>
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

                <button type="submit" class="btn btn-primary" @click.prevent="register">Sing In</button>
              </form>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators"

export default {
  data() {
    return {
      newUser: {
        email: null,
        password: null,
        confirmedPassword: null,
        avatar: null
      }
    }
  },
  validations: {
    newUser: {
      email: {
        required,
        email
      },
      password: {
        required
      },
      confirmedPassword: {
        required
      },
      avatar: {}
    }
  },
  methods: {
    register() {
      console.log(this.$v)
      this.$v.newUser.$touch()
      this.$store.dispatch("user/register", this.newUser)
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

#register {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background: #f7f7f7;

  .register-card {
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
    #password,
    #confirmedPassowrd,
    #avatar {
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
