<template>
  <div>
    <AppHeader />
    <main class="main">
      <section id="hero" class="hero section dark-background">
        <img src="/assets/img/hero-bg.jpg" alt="">
        <div class="container d-flex flex-column align-items-center">
          <h2>CONECTA. AUTOMATIZA. ESCALA.</h2>
          <p>Impulsamos tu negocio con soluciones de comunicación digital
            multicanal</p>
          <div class="d-flex mt-4">
            <a href="#about" class="btn-get-started">Comienza Ahora</a>
              <!-- <a href="#" class="glightbox btn-watch-video d-flex align-items-center"><i
                  class="bi bi-play-circle"></i><span>Ver Video</span></a> -->
          </div>
        </div>
      </section>
      <section id="about" class="about section">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6">
              <h3>Conectamos empresas con sus clientes a través de canales digitales inteligentes</h3>
              <img src="/assets/img/about.jpg" class="img-fluid rounded-4 mb-4" alt="">
              <p>Diseñamos soluciones de comunicación que combinan tecnología, velocidad y escalabilidad. Ayudamos a
                automatizar procesos, fidelizar clientes y optimizar cada punto de contacto.</p>
              <p>Nuestras plataformas se integran fácilmente con CRMs, ERPs y sistemas propios, permitiendo una gestión
                centralizada, reportes en tiempo real y mejoras continuas en la experiencia del usuario.</p>
            </div>
            <div class="col-lg-6">
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
      </section>
      <!-- Seccion de Estadisticas -->
      <section id="stats" class="stats section light-background">
        <div class="container">
          <div class="row gy-4">
            <div
              v-for="(stat, index) in statsData"
              :key="index"
              class="col-lg-3 col-md-6"
            >
              <div class="stats-item d-flex align-items-center w-100 h-100">
                <i :class="stat.icon"></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    :data-purecounter-end="stat.value"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Seccion de Servicios -->
      <section id="services" class="services section">
        <div class="container section-title">
          <h2>Servicios</h2>
          <p>Lo que hacemos para impulsar tu negocio</p>
        </div>
        <div class="container">
          <div class="row gy-6">
            <div
              v-for="(service, index) in servicesData"
              :key="index"
              class="col-xl-6 col-md-6"
              :data-aos-delay="200 + (index * 100)"
            >
              <div class="service-item">
                <div class="img">
                  <img :src="service.image" class="img-fluid" :alt="service.title">
                </div>
                <div class="details position-relative">
                  <div class="icon">
                    <i :class="service.icon"></i>
                  </div>
                  <a href="" class="stretched-link">
                    <h3>{{ service.title }}</h3>
                  </a>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Seccion Cientes -->
      <section id="clients" class="clients section light-background">
        <div class="container">
          <div class="row gy-4">
            <div
              v-for="(client, index) in clientsData"
              :key="index"
              class="col-xl-2 col-md-3 col-6 client-logo"
            >
              <img :src="client.logo" class="img-fluid" :alt="client.name">
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="testimonials section dark-background">
        <img src="/assets/img/testimonials-bg.jpg" class="testimonials-bg" alt="">
      </section>
      <!-- Seccion de Contacto -->
      <section id="contact" class="contact section">
        <div class="container section-title">
          <p>Contacto</p>
        </div>
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div
                  v-for="(info, index) in contactInfo"
                  :key="index"
                  :class="index === 0 ? 'col-lg-12' : 'col-md-6'"
                >
                  <div
                    class="info-item d-flex flex-column justify-content-center align-items-center"
                  >
                    <i :class="info.icon"></i>
                    <h3>{{ info.title }}</h3>
                    <p>{{ info.content }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Formuario -->
            <div class="col-lg-6">
              <form @submit.prevent="submitForm">
              <div class="row gy-4">
                <div class="col-md-6">
                  <input type="text" v-model="form.name" class="form-control" placeholder="Tu Nombre" required />
                </div>
                <div class="col-md-6">
                  <input type="email" v-model="form.email" class="form-control" placeholder="Tu Email" required />
                </div>
                <div class="col-md-12">
                  <textarea v-model="form.message" class="form-control" rows="4" placeholder="Mensaje" required></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading" v-if="isSending">Enviando...</div>
                  <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
                  <div class="sent-message" v-if="successMessage">{{ successMessage }}</div>
                </div>

                <div class="col-md-12 text-center">
                  <button type="submit" :disabled="isSending">Enviar Mensaje</button>
                </div>
              </div>
            </form>

            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <a :href="whatsappLink" class="float" target="_blank">
      <i class="my-float">
        <img width="32" height="32" src="https://img.icons8.com/ios_filled/512/FFFFFF/whatsapp--v2.png" alt="">
      </i>
      <span class="hover-text">Hola, deseo más información de los servicios.</span>
    </a>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const whatsappLink = computed(() =>
  `https://api.whatsapp.com/send?phone=+51986371132&text=Hola,%20deseo%20más%20información%20de%20los%20servicios.`
)

const statsData = ref([
  {
    icon: "bi bi-emoji-smile color-blue flex-shrink-0",
    value: 120,
    label: "Clientes satisfechos"
  },
  {
    icon: "bi bi-journal-richtext color-orange flex-shrink-0",
    value: 340,
    label: "Campañas ejecutadas"
  },
  {
    icon: "bi bi-headset color-green flex-shrink-0",
    value: 2600,
    label: "Horas de soporte"
  },
  {
    icon: "bi bi-people color-pink flex-shrink-0",
    value: 12,
    label: "Especialistas a tu servicio"
  }
])

const servicesData = ref([
  {
    image: "/assets/img/services-2.jpg",
    icon: "bi bi-robot",
    title: "Automatización de Procesos",
    description: "Digitalizamos tareas repetitivas con bots, flujos automáticos, control de sensores, y sistemas inteligentes."
  },
  {
    image: "/assets/img/services-3.jpg",
    icon: "bi bi-megaphone",
    title: "Marketing y Envíos Masivos",
    description: "Campañas de email, WhatsApp y otros canales digitales. Segmentación, diseño y resultados medibles."
  }
])

const clientsData = ref([
  { logo: "/assets/img/clients/client-1.png", name: "Cliente 1" },
  { logo: "/assets/img/clients/client-2.png", name: "Cliente 2" },
  { logo: "/assets/img/clients/client-3.png", name: "Cliente 3" },
  { logo: "/assets/img/clients/client-4.png", name: "Cliente 4" },
  { logo: "/assets/img/clients/client-5.png", name: "Cliente 5" },
  { logo: "/assets/img/clients/client-6.png", name: "Cliente 6" }
])

const contactInfo = ref([
  {
    icon: "bi bi-geo-alt",
    title: "Dirección",
    content: "Jr Francisco de zela 1872 cuarto piso",
    delay: "200"
  },
  {
    icon: "bi bi-telephone",
    title: "Teléfono",
    content: "+51 986 371 132",
    delay: "300"
  },
  {
    icon: "bi bi-envelope",
    title: "Email",
    content: "informes@rute.com.pe",
    delay: "400"
  }
])

// Formulario de contacto
const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isSending.value = true
  successMessage.value = ''
  errorMessage.value = ''

  const payload = {
    user: "hotelvistaverde",
    pass: "36e5e490f14b031e",
    mensaje: `Nombre: ${form.value.name}, correo: ${form.value.email}, Asunto: ${form.value.message}`,
    destino: "informes@rute.com.pe",
    asunto: "Información de servicio"
  }

  try {
    const response = await axios.post("https://ecorreo.omnicron.pe", payload)
    if (response.status === 200) {
      successMessage.value = "Tu mensaje ha sido enviado. ¡Gracias!"
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    } else {
      errorMessage.value = "Hubo un error al enviar el mensaje."
    }
  } catch (err) {
    console.error(err)
    errorMessage.value = "No se pudo conectar con el servidor."
  } finally {
    isSending.value = false
  }
}
</script>
<style scoped>
.float {
  animation: breathe 2s infinite ease-in-out;
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
  white-space: nowrap;
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
  padding: 8px 12px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  z-index: 101;
}

</style>
