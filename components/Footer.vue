<template>
  <footer id="footer" class="footer dark-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="/" class="logo d-flex align-items-center">
            <span class="sitename">{{ companyInfo.name }}</span>
          </a>
          <div class="footer-contact pt-3">
            <p v-for="(line, index) in companyInfo.address" :key="'address-'+index">{{ line }}</p>
            <p class="mt-3"><strong>Phone:</strong> <span>{{ companyInfo.phone }}</span></p>
            <p><strong>Email:</strong> <span>{{ companyInfo.email }}</span></p>
          </div>
          <div class="social-links d-flex mt-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" :title="social.name">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li v-for="link in usefulLinks" :key="link.text">
              <i class="bi bi-chevron-right"></i> <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-3 footer-links">
          <h4>Otros Servicios</h4>
          <ul>
            <li v-for="service in otherServices" :key="service.text">
              <i class="bi bi-chevron-right"></i> <a :href="service.url">{{ service.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">{{ companyInfo.name }}</strong> 
        <span>All Rights Reserved</span></p>
      <div class="credits">
        Designed by <a :href="credits.designerUrl">{{ credits.designer }}</a>
        Distributed by <a :href="credits.distributorUrl">{{ credits.distributor }}</a>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue';
// Datos de la compañía
const companyInfo = {
  name: 'Rute',
  address: [
    'Jr Francisco de zela 1872 cuarto piso'
  ],
  phone: '+51 9592 29',
  email: 'informes@rute.com.pe'
};
// Enlaces sociales
const socialLinks = [
  { name: 'Twitter', icon: 'bi bi-twitter-x', url: '#' },
  { name: 'Facebook', icon: 'bi bi-facebook', url: '#' },
  { name: 'Instagram', icon: 'bi bi-instagram', url: '#' },
  { name: 'LinkedIn', icon: 'bi bi-linkedin', url: '#' }
];
// Enlaces útiles
const usefulLinks = [
  { text: 'Inicio', url: '#' },
  { text: 'Nosotros', url: '#' },
  { text: 'Soluciones', url: '#' },
  { text: 'Contacto', url: '#' },
  { text: 'Privacy policy', url: '#' }
];
// Otros servicios
const otherServices = [
  { text: 'Envío masivo de SMS', url: '#' },
  { text: 'WhatsApp', url: '#' },
  { text: 'Mensajes de voz', url: '#' },
  { text: 'IVRs interactivos', url: '#' },
  { text: 'Bots conversacionales', url: '#' }
];
// Créditos
const credits = {
  designer: 'xxxx',
  designerUrl: '#',
  distributor: 'xxxx',
  distributorUrl: '#'
};
// Lógica del formulario
const email = ref('');
const error = ref('');
const success = ref('');
</script>
<style scoped>
.footer {
  padding: 60px 0 30px;
  color: #fff;
}
.footer-top {
  padding-bottom: 30px;
}
.footer-about .logo {
  font-size: 24px;
  font-weight: 700;
}
.footer-contact p {
  margin-bottom: 5px;
}
.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-right: 10px;
  color: #fff;
  transition: all 0.3s ease;
}
.social-links a:hover {
  background: var(--primary-color);
}
.footer-links h4 {
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 12px;
}
.footer-links h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: var(--primary-color);
}
.footer-links ul {
  list-style: none;
  padding: 0;
}
.footer-links ul li {
  padding: 8px 0;
  display: flex;
  align-items: center;
}
.footer-links ul li i {
  margin-right: 8px;
  color: var(--primary-color);
}
.footer-links ul a {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}
.footer-links ul a:hover {
  color: #fff;
  padding-left: 5px;
}

.error-message {
  color: #ff6b6b;
}

.sent-message {
  color: #51cf66;
}

.copyright {
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
}

.credits {
  margin-top: 10px;
  font-size: 13px;
}

.credits a {
  color: var(--primary-color);
  transition: opacity 0.3s;
}

.credits a:hover {
  opacity: 0.8;
}
</style>