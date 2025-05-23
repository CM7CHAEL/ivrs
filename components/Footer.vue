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
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li v-for="link in usefulLinks" :key="link.text">
              <i class="bi bi-chevron-right"></i> <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Otros Servicios</h4>
          <ul>
            <li v-for="service in otherServices" :key="service.text">
              <i class="bi bi-chevron-right"></i> <a :href="service.url">{{ service.text }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-12 footer-newsletter">
          <h4>Nuestro boletín</h4>
          <p>{{ newsletterText }}</p>
          <form @submit.prevent="handleSubmit">
            <div class="newsletter-form">
              <input type="email" name="email" v-model="email" required placeholder="Tu correo electrónico">
              <input type="submit" value="Subscribe">
            </div>
            <div v-if="loading" class="loading">Loading</div>
            <div v-if="error" class="error-message">{{ error }}</div>
            <div v-if="success" class="sent-message">{{ successMessage }}</div>
          </form>
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
  name: 'Dewi',
  address: [
    'xxxxxxxxxxxxxt',
    'xxxx, NY 535022'
  ],
  phone: '+51 9592 29',
  email: 'example@empresa.com'
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
  { text: 'Web Design', url: '#' },
  { text: 'Web Development', url: '#' },
  { text: 'Product Management', url: '#' },
  { text: 'Marketing', url: '#' },
  { text: 'Graphic Design', url: '#' }
];
// Créditos
const credits = {
  designer: 'xxxx',
  designerUrl: '#',
  distributor: 'xxxx',
  distributorUrl: '#'
};
// Newsletter
const newsletterText = '¡Suscríbete a nuestra newsletter y recibe las últimas novedades sobre nuestros productos y servicios!';
const successMessage = 'Su solicitud de suscripción ha sido enviada. ¡Gracias!';
// Lógica del formulario
const email = ref('');
const loading = ref(false);
const error = ref('');
const success = ref('');
const handleSubmit = async () => {
  loading.value = true;
  error.value = '';
  success.value = '';
  try {
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));
    success.value = successMessage;
    email.value = '';
  } catch (err) {
    error.value = 'Ocurrió un error al enviar el formulario';
  } finally {
    loading.value = false;
  }
};
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
.footer-newsletter {
  position: relative;
}

.footer-newsletter p {
  margin-bottom: 20px;
}
.newsletter-form {
  display: flex;
}
.newsletter-form input[type="email"] {
  padding: 10px 15px;
  width: 70%;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.newsletter-form input[type="submit"] {
  padding: 10px 15px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background 0.3s;
}
.newsletter-form input[type="submit"]:hover {
  background: #d8091c;
}

.loading,
.error-message,
.sent-message {
  margin-top: 10px;
  font-size: 14px;
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