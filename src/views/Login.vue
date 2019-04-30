<template>
  <div id="login">
    <div class="login-card">
      <div class="card-title">
        <h1>Please Sign In</h1>
      </div>

      <div class="content">
        <form method="POST" action="#">
          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                required
                autofocus
              >
              <span class="icon is-small is-left">
                <font-awesome-icon icon="envelope"/>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                autofocus
              >
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

          <button type="submit" class="btn btn-primary">Sing In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
