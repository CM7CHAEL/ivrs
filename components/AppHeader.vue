<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">
      <NuxtLink to="/" class="logo d-flex align-items-center me-auto">
        <img width="180" height="100" src="/assets/logo.png" alt="">
      </NuxtLink>
      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Inicio</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#services">Soluciones</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      <a class="cta-btn" href="#contact">Contacto</a>
    </div>
  </header>
</template>