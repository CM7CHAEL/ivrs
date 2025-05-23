export default defineNuxtPlugin(() => {
  if (process.client) {
    const scripts = [
      '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '../assets/vendor/php-email-form/validate.js',
      '../assets/vendor/aos/aos.js',
      '../assets/vendor/glightbox/js/glightbox.min.js',
      '../assets/vendor/purecounter/purecounter_vanilla.js',
      '../assets/vendor/swiper/swiper-bundle.min.js',
      '../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
      '../assets/vendor/isotope-layout/isotope.pkgd.min.js',
      '../assets/js/main.js',
    ]

    scripts.forEach(src => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
    })
  }
})
