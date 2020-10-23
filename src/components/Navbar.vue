<template>
  <header class="header">
    <div class="nav-wrapper">
      <nav class="navbar">
        <ul class="nav nav-left">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services">Services</router-link>
          </li>
        </ul>
      </nav>
      <div class="nav-logo">
        <router-link to="/">
          <h1 class="logo">
            <span class="logo-text-left">Zanara</span>
            <span class="logo-text-right">Studio</span>
          </h1>
        </router-link>
      </div>
      <nav class="navbar">
        <ul class="nav nav-right">
          <li class="nav-item">
            <router-link to="/gallery">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/location">Location</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.nav-wrapper {
  display: grid;
  grid-template-columns: 6fr 4fr 6fr;
  align-items: center;
  height: 80px;
  // overflow: hidden;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

.navbar {
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .nav-left {
    justify-items: end;
  }
  .nav-right {
    justify-items: start;
  }
}

.nav-item a {
  // color: #000;
  color: $text-nav;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
}

.nav-logo {
  text-align: center;
  .logo {
    .logo-text-left {
      color: $text-logo-left;
    }
    .logo-text-right {
      color: $text-logo-right;
    }
  }
}
// // .header :nth-child(2) {
// //   order: -1;
// // }
// .mid-logo {
//   flex-grow: 1;
//   align-self: center;
//   color: $primary;
//   text-align: center;
//   // text-transform: uppercase;
//   // background-color: #f6f6f6;
//   font-family: Merriweather, serif;
//   font-weight: 400;
//   // font-style: italic;
//   line-height: 1.5em;
//   // padding-top: 12em;
//   // padding-bottom: 13em;
// }
// .left-nav,
// .right-nav {
//   display: block;
//   // inline-flex;
//   // justify-content: space-evenly;
//   align-self: center;
//   flex-grow: 2;
//   // background-color: aquamarine;
//   a {
//     text-transform: uppercase;
//     text-decoration: none;
//   }
// }

// @media only screen and (max-width: 720px) {
//   .mid-logo {
//     order: -1;
//   }
// }
</style>
