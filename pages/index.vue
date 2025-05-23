<template>
  <div>
    <header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" class="logo d-flex align-items-center me-auto">
          <h1 class="sitename">Empresa</h1>
        </a>
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

    <main class="main">
      <section id="hero" class="hero section dark-background">
        <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in">
        <div class="container d-flex flex-column align-items-center">
          <h2 data-aos="fade-up" data-aos-delay="100">CONECTA. AUTOMATIZA. ESCALA.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Impulsamos tu negocio con soluciones de comunicación digital
            multicanal</p>
          <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="#about" class="btn-get-started">Comienza Ahora</a>
            <a href="#" class="glightbox btn-watch-video d-flex align-items-center"><i
                class="bi bi-play-circle"></i><span>Ver Video</span></a>
          </div>
        </div>

      </section><!-- /Hero Section -->

      <section id="about" class="about section">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3>Conectamos empresas con sus clientes a través de canales digitales inteligentes</h3>
              <img src="/assets/img/about.jpg" class="img-fluid rounded-4 mb-4" alt="">
              <p>Diseñamos soluciones de comunicación que combinan tecnología, velocidad y escalabilidad. Ayudamos a
                automatizar procesos, fidelizar clientes y optimizar cada punto de contacto.</p>
              <p>Nuestras plataformas se integran fácilmente con CRMs, ERPs y sistemas propios, permitiendo una gestión
                centralizada, reportes en tiempo real y mejoras continuas en la experiencia del usuario.</p>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <div class="content ps-0 ps-lg-5">
                <p class="fst-italic">
                  Más que una herramienta, somos tu partner estratégico en la transformación digital de tus
                  comunicaciones.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle-fill"></i> <span>Envío masivo de SMS, WhatsApp, mensajes de voz y
                      notificaciones push.</span></li>
                  <li><i class="bi bi-check-circle-fill"></i> <span>IVRs interactivos, bots conversacionales y flujos
                      automatizados.</span></li>
                  <li><i class="bi bi-check-circle-fill"></i> <span>Integraciones vía API con sistemas empresariales
                      para maximizar resultados.</span></li>
                </ul>
                <p>
                  Nuestro enfoque es modular, seguro y 100% escalable. Acompañamos a cada cliente desde la planificación
                  hasta el soporte post implementación.
                </p>

                <div class="position-relative mt-4">
                  <img src="/assets/img/about-2.jpg" class="img-fluid rounded-4" alt="">
                  <a href="#" class="glightbox pulsating-play-btn"></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section><!-- /About Section -->

      <!-- Stats Section -->
      <section id="stats" class="stats section light-background">

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="120" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div><!-- End Stats Item -->

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="340" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p>Campañas ejecutadas</p>
                </div>
              </div>
            </div><!-- End Stats Item -->

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-headset color-green flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="2600" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p>Horas de soporte</p>
                </div>
              </div>
            </div><!-- End Stats Item -->

            <div class="col-lg-3 col-md-6">
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i class="bi bi-people color-pink flex-shrink-0"></i>
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1"
                    class="purecounter"></span>
                  <p>Especialistas a tu servicio</p>
                </div>
              </div>
            </div><!-- End Stats Item -->

          </div>

        </div>

      </section><!-- /Stats Section -->

      <section id="services" class="services section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Servicios</h2>
          <p>Lo que hacemos para impulsar tu negocio</p>
        </div><!-- End Section Title -->
        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-5">
            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div class="service-item">
                <div class="img">
                  <img src="/assets/img/services-1.jpg" class="img-fluid" alt="Desarrollo Web">
                </div>
                <div class="details position-relative">
                  <div class="icon">
                    <i class="bi bi-code-slash"></i>
                  </div>
                  <a href="service-details.html" class="stretched-link">
                    <h3>Desarrollo de Software</h3>
                  </a>
                  <p>Soluciones a medida en web y móvil. APIs, integraciones y sistemas adaptados a tus procesos reales.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div class="service-item">
                <div class="img">
                  <img src="/assets/img/services-2.jpg" class="img-fluid" alt="Automatización">
                </div>
                <div class="details position-relative">
                  <div class="icon">
                    <i class="bi bi-robot"></i>
                  </div>
                  <a href="service-details.html" class="stretched-link">
                    <h3>Automatización de Procesos</h3>
                  </a>
                  <p>Digitalizamos tareas repetitivas con bots, flujos automáticos, control de sensores, y sistemas
                    inteligentes.</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div class="service-item">
                <div class="img">
                  <img src="/assets/img/services-3.jpg" class="img-fluid" alt="Publicidad y campañas">
                </div>
                <div class="details position-relative">
                  <div class="icon">
                    <i class="bi bi-megaphone"></i>
                  </div>
                  <a href="service-details.html" class="stretched-link">
                    <h3>Marketing y Envíos Masivos</h3>
                  </a>
                  <p>Campañas de email, WhatsApp y otros canales digitales. Segmentación, diseño y resultados medibles.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section><!-- /Services Section -->
      <!-- Clients Section -->
      <section id="clients" class="clients section light-background">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4">
            <div class="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-1.png" class="img-fluid" alt="">
            </div>
            <div class="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-2.png" class="img-fluid" alt="">
            </div>
            <div class="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-3.png" class="img-fluid" alt="">
            </div>
            <div class="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-4.png" class="img-fluid" alt="">
            </div>
            <div class="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-5.png" class="img-fluid" alt="">
            </div>
            <div class="col-xl-2 col-md-3 col-6 client-logo">
              <img src="/assets/img/clients/client-6.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>

      </section>
      <section id="features" class="features section">
        <div class="container">
          <ul class="nav nav-tabs row  d-flex" data-aos="fade-up" data-aos-delay="100">
            <li class="nav-item col-3">
              <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                <i class="bi bi-binoculars"></i>
                <h4 class="d-none d-lg-block">Modi sit est dela pireda nest</h4>
              </a>
            </li>
            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                <i class="bi bi-box-seam"></i>
                <h4 class="d-none d-lg-block">Unde praesenti mara setra le</h4>
              </a>
            </li>
            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                <i class="bi bi-brightness-high"></i>
                <h4 class="d-none d-lg-block">Pariatur explica nitro dela</h4>
              </a>
            </li>
            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4">
                <i class="bi bi-command"></i>
                <h4 class="d-none d-lg-block">Nostrum qui dile node</h4>
              </a>
            </li>
          </ul><!-- End Tab Nav -->

          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

            <div class="tab-pane fade active show" id="features-tab-1">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i>
                      <spab>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</spab>
                    </li>
                    <li><i class="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate
                        velit</span>.</li>
                    <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                        fugiat nulla pariatur.</span></li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/working-1.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->

            <div class="tab-pane fade" id="features-tab-2">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate
                        velit.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                        fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/working-2.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->

            <div class="tab-pane fade" id="features-tab-3">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate
                        velit.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.</span></li>
                  </ul>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/working-3.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->

            <div class="tab-pane fade" id="features-tab-4">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate
                        velit.</span></li>
                    <li><i class="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu
                        fugiat nulla pariatur.</span></li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="/assets/img/working-4.jpg" alt="" class="img-fluid">
                </div>
              </div>
            </div><!-- End Tab Content Item -->
          </div>
        </div>
      </section>

      <section id="services-2" class="services-2 section light-background">
        <div class="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>CHECK OUR SERVICES</p>
        </div>

        <div class="container">
          <div class="row gy-4">
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-briefcase icon flex-shrink-0"></i>
                <div>
                  <h4 class="title"><a href="#" class="stretched-link">Lorem Ipsum</a></h4>
                  <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                    sint occaecati cupiditate non provident</p>
                </div>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-card-checklist icon flex-shrink-0"></i>
                <div>
                  <h4 class="title"><a href="#" class="stretched-link">Dolor Sitema</a></h4>
                  <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat tarad limino ata</p>
                </div>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-bar-chart icon flex-shrink-0"></i>
                <div>
                  <h4 class="title"><a href="#" class="stretched-link">Sed ut perspiciatis</a></h4>
                  <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur</p>
                </div>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-binoculars icon flex-shrink-0"></i>
                <div>
                  <h4 class="title"><a href="#" class="stretched-link">Magni Dolores</a></h4>
                  <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum</p>
                </div>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-brightness-high icon flex-shrink-0"></i>
                <div>
                  <h4 class="title"><a href="#" class="stretched-link">Nemo Enim</a></h4>
                  <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque</p>
                </div>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-calendar4-week icon flex-shrink-0"></i>
                <div>
                  <h4 class="title"><a href="#" class="stretched-link">Eiusmod Tempor</a></h4>
                  <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                    cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="testimonials section dark-background">
        <img src="/assets/img/testimonials-bg.jpg" class="testimonials-bg" alt="">
      </section>
      <section id="contact" class="contact section">
        <div class="container section-title" data-aos="fade-up">
          <p>Contacto</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">
            <div class="col-lg-6 ">
              <div class="row gy-4">

                <div class="col-lg-12">
                  <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
                    data-aos-delay="200">
                    <i class="bi bi-geo-alt"></i>
                    <h3>Dirección</h3>
                    <p>xxxxxxxxxxx, xxxxxxxxx, NY 535022</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
                    data-aos-delay="300">
                    <i class="bi bi-telephone"></i>
                    <h3>Teléfono</h3>
                    <p>+51 999 999 99</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up"
                    data-aos-delay="400">
                    <i class="bi bi-envelope"></i>
                    <h3>Email</h3>
                    <p>soporte@empresa.com</p>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-lg-6">
              <form action="" method="post" data-aos="fade-up"
                data-aos-delay="500">
                <div class="row gy-4">

                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Tu Nombre" required="">
                  </div>

                  <div class="col-md-6 ">
                    <input type="email" class="form-control" name="email" placeholder="Tu Email" required="">
                  </div>
                  <div class="col-md-12">
                    <textarea class="form-control" name="message" rows="4" placeholder="Mensaje" required=""></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Tu mensaje ha sido enviado. ¡Gracias!</div>

                    <button type="submit">Enviar Mensaje</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        <a :href="`https://api.whatsapp.com/send?phone=+51921497120&text=Hola%20%F0%9F%98%80%2C%20deseo%20cotizar%20el%20servicio%20de%20un%20x`"
          class="float" target="_blank">
          <i class="my-float">
          <img width="32" height="32" src="https://img.icons8.com/ios_filled/512/FFFFFF/whatsapp--v2.png" alt="">
          </i>
          <span class="hover-text">¿Podemos ayudarlo?</span>
        </a>
    </main>

    <footer id="footer" class="footer dark-background">

      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="index.html" class="logo d-flex align-items-center">
              <span class="sitename">Dewi</span>
            </a>
            <div class="footer-contact pt-3">
              <p>xxxxxxxxxxxxxt</p>
              <p>xxxx, NY 535022</p>
              <p class="mt-3"><strong>Phone:</strong> <span>+51 9592 29</span></p>
              <p><strong>Email:</strong> <span>example@empresa.com</span></p>
            </div>
            <div class="social-links d-flex mt-4">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Inicio</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Nosotros</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Soluciones</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Contacto</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-3 footer-links">
            <h4>Otros Servicios</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-12 footer-newsletter">
            <h4>Nuestro boletín</h4>
            <p>¡Suscríbete a nuestra newsletter y recibe las últimas novedades sobre nuestros productos y servicios!</p>
            <form action="#" method="post" >
              <div class="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe">
              </div>
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Su solicitud de suscripción ha sido enviada. ¡Gracias!</div>
            </form>
          </div>

        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong class="px-1 sitename">Empresa</strong> <span>All Rights Reserved</span></p>
        <div class="credits">
          Designed by <a href="#">xxxx</a>
          Distributed by <a href=“#>xxxx</a>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>

.float {
  animation: breathe 2s infinite ease-in-out;
}

.highlight {
  font-weight: bold;
  background: linear-gradient(to right, #D91023 30%, #ffffff 30%, #ffffff 70%, #D91023 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 5px;
  box-decoration-break: clone;
}

.float {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 25px;
  text-align: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-float {
  font-size: 24px;
  margin-top: 0;
}

.float:hover {
  background-color: #0c943e;
  color: #25d366;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.float:hover .hover-text {
  visibility: visible;
  opacity: 1;
}

.float .hover-text {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease;
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateX(-10px) translateY(-50%);
  background-color: #34b7f1;
  color: #FFF;
  padding: 6px 10px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  z-index: 101;
}
</style>
