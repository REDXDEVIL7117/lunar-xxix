import './style.css'
import gsap from 'gsap'


/* ==================================================
   MAIN ELEMENTS
   ================================================== */

const app = document.querySelector('#app')


/* ==================================================
   PAGE HTML
   ================================================== */

app.innerHTML = `
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

    <section class="hero" id="hero">

      <div class="eyebrow">
        XXIX
      </div>

      <h1>
        LUNAR
        <span>XXIX</span>
      </h1>

      <div class="subtitle">
        FOR JAY
      </div>

      <button
        class="enter-button"
        id="enterButton"
      >
        ENTER
        <span class="arrow">→</span>
      </button>

    </section>


    <!-- ================= DOMAIN I ================= -->

    <section
      class="domain-screen"
      id="domainScreen"
    >

      <div class="domain-content">

        <div class="domain-label">
          LUNAR DOMAIN
        </div>

        <h2>
          JAY
        </h2>

        <div class="domain-number">
          XXIX
        </div>

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
        >
          CONTINUE
          <span>→</span>
        </button>

      </div>

    </section>


    <!-- ================= DOMAIN II ================= -->

    <section
      class="trial-screen"
      id="trialScreen"
    >

      <div class="trial-content">

        <div class="trial-label">
          DOMAIN II
        </div>

        <h2>
          THE MOONLIT<br>
          COURT
        </h2>

        <div class="trial-type">
          BADMINTON TRIAL
        </div>

        <div class="trial-line"></div>

        <div class="trial-stats">

          <div>
            <span>SPEED</span>
          </div>

          <div>
            <span>PRECISION</span>
          </div>

          <div>
            <span>REFLEX</span>
          </div>

        </div>

        <button
          class="trial-button"
          id="trialButton"
        >
          BEGIN TRIAL
          <span class="trial-arrow">→</span>
        </button>

      </div>

    </section>


    <!-- ================= GAME ================= -->

    <section
      class="game-screen"
      id="gameScreen"
    >

      <div class="game-header">

        <div>
          <span class="game-label">
            MOONLIT COURT
          </span>

          <strong>
            BADMINTON TRIAL
          </strong>
        </div>

        <div class="game-score">

          <span>
            SCORE
          </span>

          <strong id="score">
            0
          </strong>

        </div>

        <div class="game-timer">

          <span>
            TIME
          </span>

          <strong id="timer">
            30
          </strong>

        </div>

      </div>


      <!-- ================= COURT ================= -->

      <div class="court" id="court">

        <div class="court-line court-top"></div>
        <div class="court-line court-bottom"></div>
        <div class="court-line court-left"></div>
        <div class="court-line court-right"></div>

        <div class="court-net"></div>


        <!-- ================= SHUTTLE ================= -->

        <div
          class="shuttle"
          id="shuttle"
          role="button"
          aria-label="Hit the shuttle"
        >

          <div class="shuttle-feathers"></div>

          <div class="shuttle-head"></div>

        </div>

      </div>


      <p class="game-instruction">
        HIT THE SHUTTLE
      </p>

    </section>


    <!-- ================= GAME OVER ================= -->

    <section
      class="result-screen"
      id="resultScreen"
    >

      <div class="result-content">

        <div class="result-label">
          TRIAL COMPLETE
        </div>

        <h2>
          MOONLIT
          <span>VERDICT</span>
        </h2>

        <div class="result-line"></div>

        <div class="final-score-label">
          FINAL SCORE
        </div>

        <div
          class="final-score"
          id="finalScore"
        >
          0
        </div>

        <div
          class="final-rank"
          id="finalRank"
        >
          NOVICE
        </div>

        <button
          class="restart-button"
          id="restartButton"
        >
          RUN AGAIN
          <span>↻</span>
        </button>

      </div>

    </section>


    <!-- ================= INSIGNIA ================= -->

    <div class="insignia">

      <span></span>

      <p>
        LUNARXXIX
      </p>

      <span></span>

    </div>

  </main>
`


/* ==================================================
   ELEMENT REFERENCES
   ================================================== */

const hero = document.querySelector('#hero')
const domainScreen = document.querySelector('#domainScreen')
const trialScreen = document.querySelector('#trialScreen')
const gameScreen = document.querySelector('#gameScreen')
const resultScreen = document.querySelector('#resultScreen')

const enterButton = document.querySelector('#enterButton')
const continueButton = document.querySelector('#continueButton')
const trialButton = document.querySelector('#trialButton')
const restartButton = document.querySelector('#restartButton')

const court = document.querySelector('#court')
const shuttle = document.querySelector('#shuttle')

const scoreElement = document.querySelector('#score')
const timerElement = document.querySelector('#timer')

const finalScoreElement = document.querySelector('#finalScore')
const finalRankElement = document.querySelector('#finalRank')


/* ==================================================
   INITIAL SCREEN STATES
   ================================================== */

gsap.set(domainScreen, {
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none'
})

gsap.set(trialScreen, {
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none'
})

gsap.set(gameScreen, {
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none'
})

gsap.set(resultScreen, {
  opacity: 0,
  visibility: 'hidden',
  pointerEvents: 'none'
})


/* ==================================================
   OPENING → DOMAIN I
   ================================================== */

enterButton.addEventListener('click', () => {

  const transition = gsap.timeline()

  transition
    .to(hero, {
      opacity: 0,
      y: -40,
      duration: 0.8,
      ease: 'power2.inOut'
    })

    .set(hero, {
      visibility: 'hidden',
      pointerEvents: 'none'
    })

    .set(domainScreen, {
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      y: 30
    })

    .to(domainScreen, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })

    .from('.domain-label', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.6')

    .from('.domain-content h2', {
      scale: 0.92,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.4')

    .from('.domain-number', {
      opacity: 0,
      duration: 0.4
    }, '-=0.3')

    .from('.domain-line', {
      scaleX: 0,
      duration: 0.5
    }, '-=0.2')

    .from('.stat', {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08
    }, '-=0.2')

    .from(continueButton, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.1')
})


/* ==================================================
   DOMAIN I → DOMAIN II
   ================================================== */

continueButton.addEventListener('click', () => {

  const transition = gsap.timeline()

  transition
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

    .set(trialScreen, {
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      y: 30
    })

    .to(trialScreen, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })

    .from('.trial-label', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.6')

    .from('.trial-content h2', {
      scale: 0.94,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.4')

    .from('.trial-type', {
      opacity: 0,
      duration: 0.4
    }, '-=0.3')

    .from('.trial-line', {
      scaleX: 0,
      duration: 0.5
    }, '-=0.2')

    .from('.trial-stats > div', {
      y: 12,
      opacity: 0,
      duration: 0.4,
      stagger: 0.08
    }, '-=0.2')

    .from(trialButton, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.1')
})


/* ==================================================
   GAME VARIABLES
   ================================================== */

let score = 0
let timeLeft = 30

let gameRunning = false

let timerInterval = null
let shuttleTween = null


/* ==================================================
   SHUTTLE POSITION
   ================================================== */

function moveShuttle() {

  if (!gameRunning) {
    return
  }

  const courtWidth = court.clientWidth
  const courtHeight = court.clientHeight

  const shuttleWidth = shuttle.offsetWidth
  const shuttleHeight = shuttle.offsetHeight

  /*
    Keep the shuttle safely inside
    the playable court.
  */

  const padding = 45

  const minX = padding
  const maxX = courtWidth - shuttleWidth - padding

  const minY = padding
  const maxY = courtHeight - shuttleHeight - padding

  const x =
    minX +
    Math.random() *
    Math.max(1, maxX - minX)

  const y =
    minY +
    Math.random() *
    Math.max(1, maxY - minY)


  /*
    Cancel the previous movement.
  */

  if (shuttleTween) {
    shuttleTween.kill()
  }


  /*
    Movement becomes faster
    as the score increases.
  */

  const duration =
    Math.max(
      0.22,
      0.65 - score * 0.012
    )


  shuttleTween = gsap.to(shuttle, {

    x,
    y,

    duration,

    ease: 'power2.inOut',

    onComplete: () => {

      if (gameRunning) {
        moveShuttle()
      }

    }

  })
}


/* ==================================================
   START GAME
   ================================================== */

function startGame() {

  score = 0
  timeLeft = 30

  gameRunning = true

  scoreElement.textContent = score
  timerElement.textContent = timeLeft


  /*
    Make sure the shuttle starts
    in a known position.
  */

  gsap.set(shuttle, {
    x: 0,
    y: 0
  })


  moveShuttle()


  /*
    Start countdown.
  */

  clearInterval(timerInterval)

  timerInterval = setInterval(() => {

    timeLeft--

    timerElement.textContent = timeLeft


    if (timeLeft <= 0) {

      endGame()

    }

  }, 1000)

}


/* ==================================================
   HIT SHUTTLE
   ================================================== */

function hitShuttle(event) {

  event.preventDefault()
  event.stopPropagation()


  if (!gameRunning) {
    return
  }


  /*
    Increase score.
  */

  score++

  scoreElement.textContent = score


  /*
    Small hit animation.
  */

  gsap.killTweensOf(shuttle)

  gsap.timeline()

    .to(shuttle, {
      scale: 1.45,
      duration: 0.08,
      ease: 'power2.out'
    })

    .to(shuttle, {
      scale: 1,
      duration: 0.12,
      ease: 'power2.in'
    })


  /*
    Immediately move somewhere new.
  */

  moveShuttle()

}


/* ==================================================
   SHUTTLE INPUT
   ================================================== */

shuttle.addEventListener(
  'pointerdown',
  hitShuttle
)


/* ==================================================
   BEGIN TRIAL → GAME
   ================================================== */

trialButton.addEventListener('click', () => {

  const transition = gsap.timeline()

  transition

    .to(trialScreen, {
      opacity: 0,
      y: -40,
      duration: 0.7,
      ease: 'power2.inOut'
    })

    .set(trialScreen, {
      visibility: 'hidden',
      pointerEvents: 'none'
    })

    .set(gameScreen, {
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      y: 30
    })

    .to(gameScreen, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out'
    })

    .from('.game-header', {
      y: -20,
      opacity: 0,
      duration: 0.6
    }, '-=0.5')

    .from('.court', {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')

    .from('.game-instruction', {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.3')

    .from(shuttle, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.2')

    .call(() => {
      startGame()
    })

})


/* ==================================================
   GET RANK
   ================================================== */

function getRank(finalScore) {

  if (finalScore >= 40) {
    return 'LEGEND'
  }

  if (finalScore >= 30) {
    return 'MASTER'
  }

  if (finalScore >= 20) {
    return 'ELITE'
  }

  if (finalScore >= 10) {
    return 'WARRIOR'
  }

  return 'NOVICE'
}


/* ==================================================
   END GAME
   ================================================== */

function endGame() {

  if (!gameRunning) {
    return
  }

  gameRunning = false

  clearInterval(timerInterval)

  if (shuttleTween) {
    shuttleTween.kill()
  }


  const rank = getRank(score)

  finalScoreElement.textContent = score
  finalRankElement.textContent = rank


  const transition = gsap.timeline()

  transition

    .to(gameScreen, {
      opacity: 0,
      scale: 0.97,
      duration: 0.8,
      ease: 'power2.inOut'
    })

    .set(gameScreen, {
      visibility: 'hidden',
      pointerEvents: 'none'
    })

    .set(resultScreen, {
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      scale: 1.03
    })

    .to(resultScreen, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    })

    .from('.result-label', {
      y: 15,
      opacity: 0,
      duration: 0.4
    }, '-=0.5')

    .from('.result-content h2', {
      scale: 0.9,
      opacity: 0,
      duration: 0.7
    }, '-=0.3')

    .from('.final-score-label', {
      opacity: 0,
      duration: 0.3
    }, '-=0.2')

    .from(finalScoreElement, {
      scale: 0.5,
      opacity: 0,
      duration: 0.7,
      ease: 'back.out(1.7)'
    }, '-=0.1')

    .from(finalRankElement, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.2')

    .from(restartButton, {
      y: 15,
      opacity: 0,
      duration: 0.5
    }, '-=0.2')

}


/* ==================================================
   RUN AGAIN
   ================================================== */

restartButton.addEventListener('click', () => {

  const transition = gsap.timeline()

  transition

    .to(resultScreen, {
      opacity: 0,
      scale: 0.97,
      duration: 0.6,
      ease: 'power2.inOut'
    })

    .set(resultScreen, {
      visibility: 'hidden',
      pointerEvents: 'none'
    })

    .set(gameScreen, {
      visibility: 'visible',
      pointerEvents: 'auto',
      opacity: 0,
      scale: 1.03
    })

    .to(gameScreen, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out'
    })

    .call(() => {
      startGame()
    })

})