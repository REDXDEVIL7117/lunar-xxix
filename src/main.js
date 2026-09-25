import './style.css'
import { gsap } from 'gsap'

document.querySelector('#app').innerHTML = `
  <main class="lunar-page">

    <!-- ================= STAR FIELD ================= -->

    <div class="stars stars-1"></div>
    <div class="stars stars-2"></div>
    <div class="stars stars-3"></div>


    <!-- ================= MOON ================= -->

    <div class="moon">
      <div class="moon-glow"></div>
      <div class="moon-surface"></div>
    </div>


    <!-- ================= CLOUDS ================= -->

    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>


    <!-- ================= OPENING ================= -->

    <section class="hero" id="opening">

      <p class="eyebrow">XXIX</p>

      <h1>
        LUNAR<span>XXIX</span>
      </h1>

      <p class="subtitle">
        FOR JAY
      </p>

      <button
        class="enter-button"
        id="enterButton"
        type="button"
      >
        <span>ENTER</span>
        <span class="arrow">→</span>
      </button>

    </section>


    <!-- ================= DOMAIN I ================= -->

    <section class="domain-screen" id="domainScreen">

      <div class="domain-content">

        <p class="domain-label">
          LUNAR DOMAIN
        </p>

        <h2>JAY</h2>

        <p class="domain-number">
          XXIX
        </p>

        <div class="domain-line"></div>

        <div class="stats">

          <div class="stat">
            <span>RANK</span>
            <strong>LEGEND</strong>
          </div>

          <div class="stat">
            <span>ELEMENT</span>
            <strong>MOON</strong>
          </div>

          <div class="stat">
            <span>WEAPON</span>
            <strong>RACKET</strong>
          </div>

          <div class="stat">
            <span>DOMAIN</span>
            <strong>NIGHT</strong>
          </div>

        </div>

        <button
          class="continue-button"
          id="continueButton"
          type="button"
        >
          CONTINUE
          <span>→</span>
        </button>

      </div>

    </section>


    <!-- ================= DOMAIN II ================= -->

    <section class="trial-screen" id="trialScreen">

      <div class="trial-content">

        <p class="trial-label">
          DOMAIN II
        </p>

        <h2>
          THE MOONLIT<br>
          COURT
        </h2>

        <p class="trial-type">
          BADMINTON TRIAL
        </p>

        <div class="trial-line"></div>

        <div class="trial-stats">

          <div>
            <span>SKILL</span>
            <strong>SPEED</strong>
          </div>

          <div>
            <span>SKILL</span>
            <strong>PRECISION</strong>
          </div>

          <div>
            <span>SKILL</span>
            <strong>REFLEX</strong>
          </div>

        </div>


        <!-- BEGIN TRIAL BUTTON -->

        <button
          class="trial-button"
          id="trialButton"
          type="button"
        >
          <span>BEGIN TRIAL</span>
          <span class="trial-arrow">→</span>
        </button>

      </div>

    </section>


    <!-- ================= INSIGNIA ================= -->

    <div class="insignia">
      <span></span>
      <p>XXIX</p>
      <span></span>
    </div>

  </main>
`


// ==================================================
// ELEMENTS
// ==================================================

const enterButton = document.querySelector('#enterButton')
const continueButton = document.querySelector('#continueButton')
const trialButton = document.querySelector('#trialButton')

const opening = document.querySelector('#opening')
const domainScreen = document.querySelector('#domainScreen')
const trialScreen = document.querySelector('#trialScreen')


// ==================================================
// INITIAL STATE
// ==================================================

// Domain I starts hidden.
gsap.set(domainScreen, {
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none'
})

// Domain II starts hidden.
gsap.set(trialScreen, {
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none'
})


// ==================================================
// INTRO ANIMATION
// ==================================================

const intro = gsap.timeline({
  defaults: {
    ease: 'power3.out'
  }
})

intro
  .from('.moon', {
    scale: 0.7,
    opacity: 0,
    duration: 2
  })

  .from('.hero .eyebrow', {
    y: 20,
    opacity: 0,
    duration: 0.8
  }, '-=1')

  .from('.hero h1', {
    y: 30,
    opacity: 0,
    duration: 1
  }, '-=0.5')

  .from('.subtitle', {
    y: 15,
    opacity: 0,
    duration: 0.7
  }, '-=0.5')

  .from('.enter-button', {
    y: 15,
    opacity: 0,
    duration: 0.7
  }, '-=0.4')


// ==================================================
// MOON FLOAT
// ==================================================

gsap.to('.moon', {
  y: -12,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})


// ==================================================
// CLOUD MOVEMENT
// ==================================================

gsap.to('.cloud-1', {
  x: 120,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.cloud-2', {
  x: -100,
  duration: 22,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})

gsap.to('.cloud-3', {
  x: 80,
  duration: 25,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
})


// ==================================================
// MOUSE PARALLAX
// ==================================================

document.addEventListener('mousemove', (event) => {

  const x =
    (event.clientX / window.innerWidth - 0.5) * 2

  const y =
    (event.clientY / window.innerHeight - 0.5) * 2

  gsap.to('.moon', {
    x: x * 12,
    duration: 1.2,
    ease: 'power2.out'
  })

  gsap.to('.stars-1', {
    x: x * 8,
    y: y * 8,
    duration: 1.5
  })

  gsap.to('.stars-2', {
    x: x * 16,
    y: y * 16,
    duration: 1.5
  })

  gsap.to('.stars-3', {
    x: x * 25,
    y: y * 25,
    duration: 1.5
  })

})


// ==================================================
// ENTER → DOMAIN I
// ==================================================

enterButton.addEventListener('click', () => {

  const transition = gsap.timeline()

  transition

    // Hide opening
    .to(opening, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: 'power2.inOut'
    })

    // Show Domain I
    .set(domainScreen, {
      visibility: 'visible',
      pointerEvents: 'auto'
    })

    .to(domainScreen, {
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.2')

    // Domain I content
    .from('.domain-label', {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, '-=0.5')

    .from('.domain-content h2', {
      scale: 0.85,
      opacity: 0,
      duration: 0.8
    }, '-=0.4')

    .from('.domain-number', {
      opacity: 0,
      y: 15,
      duration: 0.5
    }, '-=0.4')

    .from('.domain-line', {
      scaleX: 0,
      duration: 0.6
    }, '-=0.3')

    .from('.stat', {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1
    }, '-=0.2')

    .from('.continue-button', {
      y: 15,
      opacity: 0,
      duration: 0.6
    }, '-=0.2')

})


// ==================================================
// CONTINUE → DOMAIN II
// ==================================================

continueButton.addEventListener('click', () => {

  const transition = gsap.timeline()

  transition

    // Hide Domain I
    .to(domainScreen, {
      opacity: 0,
      y: -40,
      duration: 0.7,
      ease: 'power2.inOut'
    })

    .set(domainScreen, {
      visibility: 'hidden',
      pointerEvents: 'none'
    })

    // Turn Domain II on
    .set(trialScreen, {
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      y: 0
    })

    // Fade Domain II in
    .to(trialScreen, {
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })

    // Domain II content
    .from('.trial-label', {
      y: 20,
      opacity: 0,
      duration: 0.5
    }, '-=0.5')

    .from('.trial-content h2', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.4')

    .from('.trial-type', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.4')

    .from('.trial-line', {
      scaleX: 0,
      duration: 0.5
    }, '-=0.3')

    .from('.trial-stats > div', {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1
    }, '-=0.2')

    // Begin Trial button
    .from('.trial-button', {
      y: 25,
      opacity: 0,
      scale: 0.9,
      duration: 0.7,
      ease: 'back.out(1.5)'
    }, '-=0.1')

})


// ==================================================
// BEGIN TRIAL
// ==================================================

trialButton.addEventListener('click', () => {

  console.log('BADMINTON TRIAL STARTED')

  gsap.to(trialButton, {
    scale: 1.08,
    duration: 0.15,
    yoyo: true,
    repeat: 1
  })

})